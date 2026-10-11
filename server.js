const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const DATA_DIR = path.join(ROOT, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const REPORTS_FILE = path.join(DATA_DIR, 'reports.json');

const defaultUsers = [
  { id: 'admin-1', username: 'admin', password: '123', role: 'admin', section: 'all' },
  { id: 'user-hot-1', username: 'hotsection_user', password: '123', role: 'user', section: 'hot section' },
  { id: 'user-butchery-1', username: 'butchery_user', password: '123', role: 'user', section: 'butchery' }
];

function ensureDataFiles() {
  fs.mkdirSync(DATA_DIR, { recursive: true });

  if (!fs.existsSync(USERS_FILE)) {
    fs.writeFileSync(USERS_FILE, JSON.stringify(defaultUsers, null, 2));
  }

  if (!fs.existsSync(REPORTS_FILE)) {
    fs.writeFileSync(REPORTS_FILE, JSON.stringify([], null, 2));
  }
}

function readJson(filePath, fallback) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    return raw ? JSON.parse(raw) : fallback;
  } catch (error) {
    return fallback;
  }
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
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
      if (raw.length > 1e6) {
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

function normalizeUser(input) {
  return {
    username: safeTrim(input.username).toLowerCase(),
    password: safeTrim(input.password),
    section: safeTrim(input.section),
    role: 'user'
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

function serveStaticFile(req, res, filePath) {
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

const server = http.createServer(async (req, res) => {
  ensureDataFiles();

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
    const users = readJson(USERS_FILE, defaultUsers);
    sendJson(res, 200, users);
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

      const users = readJson(USERS_FILE, defaultUsers);
      const found = users.find((user) => user.username.toLowerCase() === username && user.password === password);

      if (!found) {
        sendJson(res, 401, { success: false, message: 'Invalid credentials.' });
        return;
      }

      sendJson(res, 200, { success: true, user: { username: found.username, role: found.role, section: found.section } });
    } catch (error) {
      sendJson(res, 400, { success: false, message: error.message || 'Unable to login' });
    }
    return;
  }

  if (url.pathname === '/api/users' && req.method === 'POST') {
    try {
      const body = await parseBody(req);
      const candidate = normalizeUser(body);

      if (!candidate.username || !candidate.password || !candidate.section) {
        sendJson(res, 400, { success: false, message: 'Username, password, and section are required.' });
        return;
      }

      const users = readJson(USERS_FILE, defaultUsers);
      const exists = users.some((user) => user.username.toLowerCase() === candidate.username);

      if (exists) {
        sendJson(res, 409, { success: false, message: 'This username already exists.' });
        return;
      }

      const newUser = {
        id: `user-${Date.now()}`,
        username: candidate.username,
        password: candidate.password,
        role: 'user',
        section: candidate.section
      };

      users.push(newUser);
      writeJson(USERS_FILE, users);
      sendJson(res, 201, { success: true, user: { username: newUser.username, role: newUser.role, section: newUser.section } });
    } catch (error) {
      sendJson(res, 400, { success: false, message: error.message || 'Unable to create user.' });
    }
    return;
  }

  if (url.pathname === '/api/reports' && req.method === 'GET') {
    const reports = readJson(REPORTS_FILE, []);
    sendJson(res, 200, reports);
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

      const reports = readJson(REPORTS_FILE, []);
      const entry = {
        id: `report-${Date.now()}`,
        inspector,
        section,
        status,
        notes,
        temperature,
        image,
        timestamp: new Date().toISOString()
      };

      reports.unshift(entry);
      writeJson(REPORTS_FILE, reports);
      sendJson(res, 201, { success: true, report: entry });
    } catch (error) {
      sendJson(res, 400, { success: false, message: error.message || 'Unable to submit report.' });
    }
    return;
  }

  const requestedPath = url.pathname === '/' ? '/index.html' : url.pathname;
  const filePath = path.join(ROOT, requestedPath);

  if (!filePath.startsWith(ROOT)) {
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Forbidden');
    return;
  }

  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    serveStaticFile(req, res, filePath);
    return;
  }

  res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Not found');
});

server.listen(PORT, () => {
  console.log(`Avocado QA app running at http://localhost:${PORT}`);
});
