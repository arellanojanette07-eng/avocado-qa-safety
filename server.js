const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const sqlite3 = require('sqlite3').verbose();

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');
const DB_PATH = path.join(DATA_DIR, 'app.db');

const db = new sqlite3.Database(DB_PATH, (error) => {
  if (error) {
    console.error('Failed to open SQLite database:', error.message);
    process.exit(1);
  }
});

function runQuery(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.run(sql, params, function (error) {
      if (error) return reject(error);
      resolve({ id: this.lastID, changes: this.changes });
    });
  });
}

function getQuery(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.get(sql, params, (error, row) => {
      if (error) return reject(error);
      resolve(row);
    });
  });
}

function allQuery(sql, params = []) {
  return new Promise((resolve, reject) => {
    db.all(sql, params, (error, rows) => {
      if (error) return reject(error);
      resolve(rows || []);
    });
  });
}

async function initializeDatabase() {
  fs.mkdirSync(DATA_DIR, { recursive: true });

  await runQuery(`
    CREATE TABLE IF NOT EXISTS users (
      id TEXT PRIMARY KEY,
      username TEXT NOT NULL UNIQUE,
      password_hash TEXT NOT NULL,
      role TEXT NOT NULL,
      section TEXT NOT NULL
    )
  `);

  await runQuery(`
    CREATE TABLE IF NOT EXISTS reports (
      id TEXT PRIMARY KEY,
      inspector TEXT NOT NULL,
      section TEXT NOT NULL,
      status TEXT NOT NULL,
      notes TEXT NOT NULL,
      temperature TEXT NOT NULL,
      image TEXT NOT NULL,
      timestamp TEXT NOT NULL
    )
  `);

  const userCountRow = await getQuery('SELECT COUNT(*) AS count FROM users');
  if (!userCountRow || Number(userCountRow.count) === 0) {
    const seedUsers = [
      { username: 'admin', password: '123', role: 'admin', section: 'all' },
      { username: 'hotsection_user', password: '123', role: 'user', section: 'hot section' },
      { username: 'butchery_user', password: '123', role: 'user', section: 'butchery' }
    ];

    for (const user of seedUsers) {
      const passwordHash = bcrypt.hashSync(user.password, 10);
      await runQuery(
        'INSERT INTO users (id, username, password_hash, role, section) VALUES (?, ?, ?, ?, ?)',
        [crypto.randomUUID(), user.username, passwordHash, user.role, user.section]
      );
    }
  }
}

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type'
  });
  res.end(JSON.stringify(payload));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';

    req.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 1_000_000) {
        reject(new Error('Payload too large'));
        req.destroy();
      }
    });

    req.on('end', () => {
      if (!raw) return resolve({});
      try {
        resolve(JSON.parse(raw));
      } catch (error) {
        reject(new Error('Invalid JSON payload'));
      }
    });

    req.on('error', reject);
  });
}

function safeTrim(value) {
  return typeof value === 'string' ? value.trim() : '';
}

function sanitizeUser(row) {
  if (!row) return null;
  return {
    id: row.id,
    username: row.username,
    role: row.role,
    section: row.section
  };
}

function sanitizeReport(row) {
  if (!row) return null;
  return {
    id: row.id,
    inspector: row.inspector,
    section: row.section,
    status: row.status,
    notes: row.notes,
    temperature: row.temperature,
    image: row.image,
    timestamp: row.timestamp
  };
}

function getMimeType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const mimeTypes = {
    '.html': 'text/html; charset=utf-8',
    '.css': 'text/css; charset=utf-8',
    '.js': 'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.txt': 'text/plain; charset=utf-8'
  };
  return mimeTypes[ext] || 'application/octet-stream';
}

function serveStaticFile(res, filePath) {
  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end('Not found');
      return;
    }

    res.writeHead(200, { 'Content-Type': getMimeType(filePath) });
    res.end(data);
  });
}

function isSafePath(candidatePath) {
  const normalized = path.normalize(candidatePath);
  return normalized.startsWith(path.normalize(ROOT));
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || 'localhost'}`);

  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
    res.end();
    return;
  }

  if (url.pathname === '/api/users' && req.method === 'GET') {
    try {
      const rows = await allQuery('SELECT id, username, role, section FROM users ORDER BY username ASC');
      sendJson(res, 200, rows.map(sanitizeUser));
    } catch (error) {
      sendJson(res, 500, { success: false, message: 'Unable to load users.' });
    }
    return;
  }

  if (url.pathname === '/api/login' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const username = safeTrim(body.username).toLowerCase();
      const password = safeTrim(body.password);

      if (!username || !password) {
        sendJson(res, 400, { success: false, message: 'Username and password are required.' });
        return;
      }

      const row = await getQuery('SELECT * FROM users WHERE username = ?', [username]);
      if (!row || !bcrypt.compareSync(password, row.password_hash)) {
        sendJson(res, 401, { success: false, message: 'Invalid credentials.' });
        return;
      }

      sendJson(res, 200, {
        success: true,
        user: sanitizeUser(row)
      });
    } catch (error) {
      sendJson(res, 400, { success: false, message: error.message || 'Unable to login.' });
    }
    return;
  }

  if (url.pathname === '/api/users' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const username = safeTrim(body.username).toLowerCase();
      const password = safeTrim(body.password);
      const section = safeTrim(body.section);

      if (!username || !password || !section) {
        sendJson(res, 400, { success: false, message: 'Username, password, and section are required.' });
        return;
      }

      const exists = await getQuery('SELECT id FROM users WHERE username = ?', [username]);
      if (exists) {
        sendJson(res, 409, { success: false, message: 'This username already exists.' });
        return;
      }

      const passwordHash = bcrypt.hashSync(password, 10);
      const userId = crypto.randomUUID();

      await runQuery(
        'INSERT INTO users (id, username, password_hash, role, section) VALUES (?, ?, ?, ?, ?)',
        [userId, username, passwordHash, 'user', section]
      );

      const created = await getQuery('SELECT id, username, role, section FROM users WHERE id = ?', [userId]);
      sendJson(res, 201, { success: true, user: sanitizeUser(created) });
    } catch (error) {
      sendJson(res, 400, { success: false, message: error.message || 'Unable to create user.' });
    }
    return;
  }

  if (url.pathname === '/api/reports' && req.method === 'GET') {
    try {
      const rows = await allQuery('SELECT * FROM reports ORDER BY timestamp DESC');
      sendJson(res, 200, rows.map(sanitizeReport));
    } catch (error) {
      sendJson(res, 500, { success: false, message: 'Unable to load reports.' });
    }
    return;
  }

  if (url.pathname === '/api/reports' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const inspector = safeTrim(body.inspector).toLowerCase();
      const section = safeTrim(body.section);
      const status = safeTrim(body.status);
      const notes = safeTrim(body.notes);
      const image = typeof body.image === 'string' ? body.image : '';
      const temperature = safeTrim(body.temperature) || 'N/A';

      if (!inspector || !section || !status || !notes || !image) {
        sendJson(res, 400, { success: false, message: 'Please complete all required report fields.' });
        return;
      }

      const reportId = crypto.randomUUID();
      const timestamp = new Date().toISOString();

      await runQuery(
        'INSERT INTO reports (id, inspector, section, status, notes, temperature, image, timestamp) VALUES (?, ?, ?, ?, ?, ?, ?, ?)',
        [reportId, inspector, section, status, notes, temperature, image, timestamp]
      );

      const created = await getQuery('SELECT * FROM reports WHERE id = ?', [reportId]);
      sendJson(res, 201, { success: true, report: sanitizeReport(created) });
    } catch (error) {
      sendJson(res, 400, { success: false, message: error.message || 'Unable to submit report.' });
    }
    return;
  }

  const requestedPath = url.pathname === '/' ? '/index.html' : url.pathname;
  const filePath = path.join(ROOT, requestedPath);

  if (!isSafePath(filePath)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    serveStaticFile(res, filePath);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
});

initializeDatabase()
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Avocado QA app running at http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Database initialization failed:', error);
    process.exit(1);
  });

process.on('SIGINT', () => {
  db.close();
  process.exit(0);
});

process.on('SIGTERM', () => {
  db.close();
  process.exit(0);
});
