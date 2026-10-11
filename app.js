const SECTION_KEY_MAP = {
  'hot section': 'wing_hot',
  warehouse: 'wing_warehouse',
  'garde manger': 'wing_garde',
  fleet: 'wing_fleet',
  housekeeping: 'wing_housekeeping',
  'packing and preparation': 'wing_packing_prep',
  packing: 'wing_packing',
  'repair and maintenance': 'wing_repair',
  'bakery and sweets': 'wing_bakery',
  'quality and food safty': 'wing_qa',
  butchery: 'wing_butchery'
};

const translations = {
  en: {
    app_title: '🥑 Avocado QA & Food Safety',
    sign_out: 'Sign Out',
    sys_gateway: 'System Gateway',
    login_sub: 'Please enter your credentials issued by the Quality Assurance Administrator.',
    lbl_username: 'Username',
    lbl_password: 'Password',
    btn_authenticate: 'Authenticate',
    qa_insp_sheet: 'QA Inspection Sheet',
    lbl_inspector: 'Inspector Name',
    lbl_temp: 'Critical Control Temperature (°C) - If Applicable',
    lbl_status: 'Sanitation & Safety Status',
    opt_select: 'Select Current Assessment',
    opt_compliant: 'Fully Compliant (No issues detected)',
    opt_minor: 'Minor Variance (Corrected on-site)',
    opt_critical: 'Critical Non-Compliance (Action required)',
    lbl_notes: 'Observation Logs / Corrective Actions',
    lbl_photo: 'Evidence Image (Camera / Library Capture)',
    btn_submit_report: 'Log Audit to Central Database',
    btn_rev_reports: 'Review Reports',
    btn_manage_keys: 'Manage Access Keys',
    master_audit_logs: 'Master Audit Logs',
    lbl_filter: 'Filter Reports by Operations Wing',
    wing_all: 'All Categories Combined',
    wing_hot: 'Hot Section',
    wing_warehouse: 'Warehouse',
    wing_garde: 'Garde Manger',
    wing_fleet: 'Fleet Logistics',
    wing_housekeeping: 'Housekeeping',
    wing_packing_prep: 'Packing & Preparation',
    wing_packing: 'Packing',
    wing_repair: 'Repair & Maintenance',
    wing_bakery: 'Bakery & Sweets',
    wing_qa: 'Quality & Food Safety',
    wing_butchery: 'Butchery',
    gen_user_keys: 'Generate User Keys',
    lbl_assign_username: 'Assign Username',
    lbl_assign_password: 'Assign Protected Password',
    lbl_auth_wing: 'Authorized Wing Assignment Only',
    opt_assign_sector: 'Assign targeted sector',
    btn_save_access: 'Save & Register User Access',
    active_creds: 'Active Access Credentials',
    section_label: 'Wing',
    alert_success: 'Inspection record submitted successfully to quality ledger.',
    no_reports: 'No safety logs matching this track category found.',
    msg_user_exists: 'This username already exists!',
    invalid_credentials: 'Invalid credentials.',
    required_fields: 'Please complete all required fields.',
    invalid_temp: 'Temperature must be a number or N/A.',
    note_length: 'Notes must be at least 5 characters long.',
    save_success: 'User access was saved successfully.',
    no_personnel: 'No personnel registered.'
  },
  ne: {
    app_title: '🥑 एभोकाडो क्यूए र खाद्य सुरक्षा',
    sign_out: 'साइन आउट',
    sys_gateway: 'प्रणाली गेटवे',
    login_sub: 'कृपया गुणस्तर आश्वासन प्रशासकद्वारा जारी गरिएको आफ्नो प्रमाणहरू भर्नुहोस्।',
    lbl_username: 'प्रयोगकर्ता नाम',
    lbl_password: 'पासवर्ड',
    btn_authenticate: 'प्रमाणित गर्नुहोस्',
    qa_insp_sheet: 'गुणस्तर निरीक्षण फारम',
    lbl_inspector: 'निरीक्षकको नाम',
    lbl_temp: 'क्रिटिकल कन्ट्रोल तापक्रम (°C) - यदि लागू भएमा',
    lbl_status: 'सफाइ र सुरक्षा अवस्था',
    opt_select: 'हालको मूल्याङ्कन चयन गर्नुहोस्',
    opt_compliant: 'पूर्ण रूपमा अनुपालन (कुनै समस्या फेला परेन)',
    opt_minor: 'सानो भिन्नता (साइटमा सुधार गरिएको)',
    opt_critical: 'गम्भीर गैर-अनुपालन (कारवाही आवश्यक)',
    lbl_notes: 'निरीक्षण लग / सुधारात्मक कार्य',
    lbl_photo: 'प्रमाण छवि (क्यामेरा / लाइब्रेरी)',
    btn_submit_report: 'केन्द्रीय डाटाबेसमा अडिट लग गर्नुहोस्',
    btn_rev_reports: 'रिपोर्टहरू हेर्नुहोस्',
    btn_manage_keys: 'प्रवेश कुञ्जीहरू व्यवस्थापन गर्नुहोस्',
    master_audit_logs: 'मास्टर अडिट लगहरू',
    lbl_filter: 'सञ्चालन शाखा अनुसार रिपोर्ट फिल्टर गर्नुहोस्',
    wing_all: 'सबै श्रेणीहरू मिलाएर',
    wing_hot: 'हाट सेक्सन',
    wing_warehouse: 'गोदाम',
    wing_garde: 'गार्ड म्यानजर',
    wing_fleet: 'फ्लीट',
    wing_housekeeping: 'हाउसकिपिङ',
    wing_packing_prep: 'प्याकिङ र तयारी',
    wing_packing: 'प्याकिङ',
    wing_repair: 'मर्मत र सम्भार',
    wing_bakery: 'बेकरी र मिठाई',
    wing_qa: 'गुणस्तर र खाद्य सुरक्षा',
    wing_butchery: 'बुट्चेरी',
    gen_user_keys: 'प्रयोगकर्ता कुञ्जीहरू बनाउनुहोस्',
    lbl_assign_username: 'प्रयोगकर्ता नाम तोक्नुहोस्',
    lbl_assign_password: 'पासवर्ड तोक्नुहोस्',
    lbl_auth_wing: 'केवल अधिकृत शाखा नियुक्ति',
    opt_assign_sector: 'लक्षित शाखा चयन गर्नुहोस्',
    btn_save_access: 'प्रवेश सुरक्षित गर्नुहोस्',
    active_creds: 'सक्रिय पहुँच प्रमाणहरू',
    section_label: 'शाखा',
    alert_success: 'निरीक्षण रेकर्ड सफलतापूर्वक प्रविष्ट भयो।',
    no_reports: 'यस श्रेणीमा कुनै सुरक्षा लग छैन।',
    msg_user_exists: 'यो प्रयोगकर्ता नाम पहिले नै छ!',
    invalid_credentials: 'अमान्य प्रमाणहरू।',
    required_fields: 'कृपया सबै आवश्यक फील्ड भर्नुहोस्।',
    invalid_temp: 'तापक्रम संख्या वा N/A हुनुपर्छ।',
    note_length: 'टिप्पणी कम्तिमा 5 अक्षरको हुनुपर्छ।',
    save_success: 'प्रयोगकर्ता पहुँच सफलतापूर्वक सुरक्षित भयो।',
    no_personnel: 'कुनै कर्मचारी दर्ता गरिएको छैन।'
  },
  bn: {
    app_title: '🥑 অ্যাভোকাডো কিউএ ও খাদ্য সুরক্ষা',
    sign_out: 'লগ আউট',
    sys_gateway: 'সিস্টেম গেটওয়ে',
    login_sub: 'দয়া করে কোয়ালিটি অ্যাসুরেন্স প্রশাসকের জারি করা শংসাপত্র লিখুন।',
    lbl_username: 'ইউজারনেম',
    lbl_password: 'পাসওয়ার্ড',
    btn_authenticate: 'প্রমাণীকরণ',
    qa_insp_sheet: 'কিউএ পরিদর্শন শীট',
    lbl_inspector: 'পরিদর্শকের নাম',
    lbl_temp: 'ক্রিটিক্যাল কন্ট্রোল তাপমাত্রা (°C) – প্রযোজ্য হলে',
    lbl_status: 'পরিচ্ছন্নতা ও নিরাপত্তা অবস্থা',
    opt_select: 'বর্তমান মূল্যায়ন নির্বাচন করুন',
    opt_compliant: 'সম্পূর্ণ সম্মতি (কোনো সমস্যা পাওয়া যায়নি)',
    opt_minor: 'কিছু সমস্যা (সাইটে সংশোধন করা হয়েছে)',
    opt_critical: 'গুরুতর অ-সম্মতি (কার্যকরী পদক্ষেপ আবশ্যক)',
    lbl_notes: 'পর্যবেক্ষণ নিবন্ধ / সংশোধনমূলক পদক্ষেপ',
    lbl_photo: 'প্রমাণ ছবি (ক্যামেরা / লাইব্রেরি)',
    btn_submit_report: 'সেন্ট্রাল ডাটাবেসে লগ করুন',
    btn_rev_reports: 'রিপোর্ট দেখুন',
    btn_manage_keys: 'এক্সেস কী পরিচালনা করুন',
    master_audit_logs: 'মাস্টার অডিট লগ',
    lbl_filter: 'অপারেশন উইং অনুযায়ী রিপোর্ট ফিল্টার করুন',
    wing_all: 'সব ক্যাটাগরি একসাথে',
    wing_hot: 'হট সেকশন',
    wing_warehouse: 'গুদাম',
    wing_garde: 'গার্ড ম্যানজার',
    wing_fleet: 'ফ্লিট লজিস্টিকস',
    wing_housekeeping: 'হাউসকিপিং',
    wing_packing_prep: 'প্যাকিং ও প্রস্তুতি',
    wing_packing: 'প্যাকিং',
    wing_repair: 'মেরামত ও রক্ষণাবেক্ষণ',
    wing_bakery: 'বেকারি ও মিষ্টি',
    wing_qa: 'গুণমান ও খাদ্য নিরাপত্তা',
    wing_butchery: 'বাটচারি',
    gen_user_keys: 'ইউজার কী তৈরি করুন',
    lbl_assign_username: 'ইউজারনেম বরাদ্দ করুন',
    lbl_assign_password: 'সুরক্ষিত পাসওয়ার্ড সেট করুন',
    lbl_auth_wing: 'শুধুমাত্র অনুমোদিত উইং',
    opt_assign_sector: 'সংশ্লিষ্ট বিভাগ নির্বাচন করুন',
    btn_save_access: 'এক্সেস সংরক্ষণ করুন',
    active_creds: 'সক্রিয় এক্সেস শংসাপত্র',
    section_label: 'বিভাগ',
    alert_success: 'পরিদর্শন রেকর্ড সফলভাবে ডাটাবেসে সংরক্ষিত হয়েছে।',
    no_reports: 'এই বিভাগে কোনো নিরাপত্তা লগ নেই।',
    msg_user_exists: 'এই ইউজারনেমটি আগে থেকেই আছে!',
    invalid_credentials: 'অবৈধ ক্রেডেনশিয়াল।',
    required_fields: 'দয়া করে সব প্রয়োজনীয় ক্ষেত্র পূরণ করুন।',
    invalid_temp: 'তাপমাত্রা অবশ্যই সংখ্যা বা N/A হতে হবে।',
    note_length: 'নোট কমপক্ষে 5 অক্ষরের হতে হবে।',
    save_success: 'ব্যবহারকারীর এক্সেস সফলভাবে সংরক্ষিত হয়েছে।',
    no_personnel: 'কোনো কর্মী নিবন্ধিত নেই।'
  },
  ar: {
    app_title: '🥑 أفوكادو لتوكيد الجودة وسلامة الغذاء',
    sign_out: 'تسجيل الخروج',
    sys_gateway: 'بوابة النظام',
    login_sub: 'يرجى إدخال بيانات الاعتماد الصادرة عن مسؤول توكيد الجودة.',
    lbl_username: 'اسم المستخدم',
    lbl_password: 'كلمة المرور',
    btn_authenticate: 'تسجيل الدخول',
    qa_insp_sheet: 'استمارة فحص الجودة',
    lbl_inspector: 'اسم المفتش',
    lbl_temp: 'درجة الحرارة الحرجة (°C) - إن وجدت',
    lbl_status: 'حالة النظافة والسلامة',
    opt_select: 'حدد التقييم الحالي',
    opt_compliant: 'مطابق تمامًا (لم يتم رصد أي مشاكل)',
    opt_minor: 'انحراف طفيف (تم تصحيحه في الموقع)',
    opt_critical: 'عدم تطابق حرج (يتطلب إجراء)',
    lbl_notes: 'سجل الملاحظات / الإجراءات التصحيحية',
    lbl_photo: 'صورة الدليل (التقاط كاميرا / مكتبة)',
    btn_submit_report: 'تسجيل التقرير في قاعدة البيانات',
    btn_rev_reports: 'مراجعة التقارير',
    btn_manage_keys: 'إدارة مفاتيح الوصول',
    master_audit_logs: 'سجلات التدقيق الرئيسية',
    lbl_filter: 'تصفية التقارير حسب الفرع',
    wing_all: 'كل الفروع مجتمعة',
    wing_hot: 'القسم الساخن',
    wing_warehouse: 'المستودع',
    wing_garde: 'المطبخ البارد',
    wing_fleet: 'الأسطول',
    wing_housekeeping: 'التنظيف',
    wing_packing_prep: 'التعبئة والتجهيز',
    wing_packing: 'التغليف',
    wing_repair: 'الصيانة',
    wing_bakery: 'المخبوزات والحلويات',
    wing_qa: 'الجودة وسلامة الغذاء',
    wing_butchery: 'الملحمة',
    gen_user_keys: 'إنشاء مفاتيح المستخدم',
    lbl_assign_username: 'تعيين اسم المستخدم',
    lbl_assign_password: 'تعيين كلمة مرور محمية',
    lbl_auth_wing: 'تعيين القسم المصرح به فقط',
    opt_assign_sector: 'اختر القسم المستهدف',
    btn_save_access: 'حفظ تسجيل الوصول',
    active_creds: 'بيانات الاعتماد النشطة',
    section_label: 'الفرع',
    alert_success: 'تم إرسال سجل التفتيش بنجاح إلى سجل الجودة.',
    no_reports: 'لم يتم العثور على سجلات سلامة لهذا القسم.',
    msg_user_exists: 'اسم المستخدم هذا موجود بالفعل!',
    invalid_credentials: 'بيانات اعتماد غير صالحة.',
    required_fields: 'يرجى إكمال جميع الحقول المطلوبة.',
    invalid_temp: 'يجب أن تكون درجة الحرارة رقمًا أو N/A.',
    note_length: 'يجب أن تتكون الملاحظات من 5 أحرف على الأقل.',
    save_success: 'تم حفظ صلاحية المستخدم بنجاح.',
    no_personnel: 'لا يوجد موظفون مسجلون.'
  },
  hi: {
    app_title: '🥑 एवोकैडो क्यूए और खाद्य सुरक्षा',
    sign_out: 'साइन आउट',
    sys_gateway: 'सिस्टम गेटवे',
    login_sub: 'कृपया गुणवत्ता आश्वासन प्रशासक द्वारा जारी क्रेडेंशियल दर्ज करें।',
    lbl_username: 'यूज़रनेम',
    lbl_password: 'पासवर्ड',
    btn_authenticate: 'प्रमाणित करें',
    qa_insp_sheet: 'क्यूए निरीक्षण शीट',
    lbl_inspector: 'निरीक्षक का नाम',
    lbl_temp: 'क्रिटिकल कंट्रोल तापमान (°C) - यदि लागू हो',
    lbl_status: 'स्वच्छता और सुरक्षा स्थिति',
    opt_select: 'वर्तमान मूल्यांकन चुनें',
    opt_compliant: 'पूर्ण अनुपालन (कोई समस्या नहीं)',
    opt_minor: 'मामूली विसंगति (साइट पर ठीक किया गया)',
    opt_critical: 'गंभीर गैर-अनुपालन (कार्यवाही आवश्यक)',
    lbl_notes: 'निरीक्षण लॉग / सुधारात्मक कार्रवाई',
    lbl_photo: 'प्रमाण छवि (कैमरा / लाइब्रेरी)',
    btn_submit_report: 'केंद्रीय डेटाबेस में रिकॉर्ड करें',
    btn_rev_reports: 'रिपोर्ट देखें',
    btn_manage_keys: 'एक्सेस कुंजी प्रबंधित करें',
    master_audit_logs: 'मास्टर ऑडिट लॉग',
    lbl_filter: 'ऑपरेशन विंग के आधार पर रिपोर्ट फ़िल्टर करें',
    wing_all: 'सभी श्रेणियाँ एक साथ',
    wing_hot: 'हॉट सेक्शन',
    wing_warehouse: 'गोदाम',
    wing_garde: 'गार्ड मैनजर',
    wing_fleet: 'फ्लीट',
    wing_housekeeping: 'हाउसकीपिंग',
    wing_packing_prep: 'पैकिंग और तैयारी',
    wing_packing: 'पैकिंग',
    wing_repair: 'मरम्मत और रखरखाव',
    wing_bakery: 'बेकरी और मिठाइयाँ',
    wing_qa: 'गुणवत्ता और खाद्य सुरक्षा',
    wing_butchery: 'बट्चेरी',
    gen_user_keys: 'प्रयोक्ता कुंजी बनाएं',
    lbl_assign_username: 'यूज़रनेम असाइन करें',
    lbl_assign_password: 'सुरक्षित पासवर्ड असाइन करें',
    lbl_auth_wing: 'केवल अधिकृत विंग असाइनमेंट',
    opt_assign_sector: 'लक्षित सेक्टर चुनें',
    btn_save_access: 'प्रवेश पंजीकृत करें',
    active_creds: 'सक्रिय एक्सेस क्रेडेंशियल',
    section_label: 'विंग',
    alert_success: 'निरीक्षण रिकॉर्ड सफलतापूर्वक रिकॉर्ड किया गया।',
    no_reports: 'इस श्रेणी में कोई सुरक्षा लॉग नहीं मिला।',
    msg_user_exists: 'यह यूज़रनेम पहले से मौजूद है!',
    invalid_credentials: 'अमान्य क्रेडेंशियल।',
    required_fields: 'कृपया सभी आवश्यक फील्ड भरें।',
    invalid_temp: 'तापमान संख्या या N/A होना चाहिए।',
    note_length: 'नोट कम से कम 5 अक्षरों का होना चाहिए।',
    save_success: 'उपयोगकर्ता एक्सेस सफलतापूर्वक सहेजा गया।',
    no_personnel: 'कोई कर्मचारी पंजीकृत नहीं है।'
  },
  ur: {
    app_title: '🥑 ایوکاڈو کیو اے اور فوڈ سیفٹی',
    sign_out: 'سائن آؤٹ',
    sys_gateway: 'سسٹم گیٹ وے',
    login_sub: 'براہ کرم کوالٹی اشورنس ایڈمنسٹریٹر کے جاری کردہ کریدنشیل داخل کریں۔',
    lbl_username: 'صارف کا نام',
    lbl_password: 'پاس ورڈ',
    btn_authenticate: 'لاگ ان کریں',
    qa_insp_sheet: 'کیو اے معائنہ فارم',
    lbl_inspector: 'انسپکٹر کا نام',
    lbl_temp: 'کنٹرول درجہ حرارت (°C) — اگر لاگو ہو',
    lbl_status: 'صاف ستھائی اور حفاظت کی صورتحال',
    opt_select: 'موجودہ تشخیص منتخب کریں',
    opt_compliant: 'مکمل تعمیل (کوئی مسئلہ نہیں)',
    opt_minor: 'معمولی فرق (موقع پر درست کر دیا گیا)',
    opt_critical: 'شدید عدم تعمیل (فوری کارروائی درکار)',
    lbl_notes: 'مشاہدات لاگ / اصلاحی اقدامات',
    lbl_photo: 'ثبوت کی تصویر (کیمرہ / گیلری)',
    btn_submit_report: 'مرکزی ڈیٹا بیس میں محفوظ کریں',
    btn_rev_reports: 'رپورٹس دیکھیں',
    btn_manage_keys: 'ایکسیس کیز کا نظم',
    master_audit_logs: 'ماسٹر آڈٹ لاگز',
    lbl_filter: 'دفتہ کے لحاظ سے رپورٹ فلٹر کریں',
    wing_all: 'تمام شعبے ایک ساتھ',
    wing_hot: 'ہاٹ سیکشن',
    wing_warehouse: 'گودام',
    wing_garde: 'گارڈ مینجر',
    wing_fleet: 'فلائیٹ',
    wing_housekeeping: 'ہاؤس کیپنگ',
    wing_packing_prep: 'پیکنگ اور تیاری',
    wing_packing: 'پیکنگ',
    wing_repair: 'مرمت اور دیکھ بھال',
    wing_bakery: 'بیکری اور میٹھا',
    wing_qa: 'کوالٹی اور فوڈ سیفٹی',
    wing_butchery: 'بٹچیری',
    gen_user_keys: 'یوزر کیز بنائیں',
    lbl_assign_username: 'صارف نام تفویض کریں',
    lbl_assign_password: 'محفوظ پاس ورڈ تفویض کریں',
    lbl_auth_wing: 'صرف مجاز شعبہ تفویض',
    opt_assign_sector: 'متعلقہ شعبہ منتخب کریں',
    btn_save_access: 'ایکسیس محفوظ کریں',
    active_creds: 'فعال ایکسیس کریدنشیلز',
    section_label: 'شعبہ',
    alert_success: 'معائنہ رپورٹ کامیابی کے ساتھ جمع کر دی گئی۔',
    no_reports: 'اس شعبے کے لیے کوئی سیکیوریٹی لاگ نہیں ملا۔',
    msg_user_exists: 'یہ صارف نام پہلے سے موجود ہے!',
    invalid_credentials: 'غلط کریدنشیلز۔',
    required_fields: 'براہ کرم تمام ضروری خانے پُر کریں۔',
    invalid_temp: 'درجہ حرارت عدد یا N/A ہونا چاہیے۔',
    note_length: 'نوٹ کم از کم 5 حروف کا ہونا چاہیے۔',
    save_success: 'صارف کی رسائی کامیابی کے ساتھ محفوظ ہو گئی۔',
    no_personnel: 'کوئی صارف درج نہیں ہے۔'
  }
};

const placeholderMap = {
  en: { username: 'e.g., john_qa', temp: 'e.g., 4.2 or N/A', notes: 'Detail logs...', uName: 'e.g., butchery_team', uPass: 'Secure password' },
  ne: { username: 'उदा. john_qa', temp: 'उदा. 4.2', notes: 'विवरण...', uName: 'उदा. butchery_team', uPass: 'सुरक्षित पासवर्ड' },
  bn: { username: 'যেমন, john_qa', temp: 'যেমন, 4.2', notes: 'বিস্তারিত...', uName: 'যেমন, butchery_team', uPass: 'নিরাপদ পাসওয়ার্ড' },
  ar: { username: 'مثال: john_qa', temp: 'مثال: 4.2 أو N/A', notes: 'تفاصيل...', uName: 'مثال: butchery_team', uPass: 'كلمة مرور آمنة' },
  hi: { username: 'जैसे, john_qa', temp: 'जैसे, 4.2 या N/A', notes: 'विवरण...', uName: 'जैसे, butchery_team', uPass: 'सुरक्षित पासवर्ड' },
  ur: { username: 'مثال: john_qa', temp: 'مثال: 4.2 یا N/A', notes: 'تفصیل...', uName: 'مثال: butchery_team', uPass: 'محفوظ پاس ورڈ' }
};

const appState = {
  currentLang: 'en',
  currentUser: null,
  users: [],
  reports: []
};

function escapeHtml(value = '') {
  return String(value).replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  }[char]));
}

function showStatus(elementId, message, type = 'info') {
  const element = document.getElementById(elementId);
  if (!element) return;
  element.textContent = message;
  element.className = `status-message show ${type}`;

  clearTimeout(element._timer);
  element._timer = setTimeout(() => {
    element.className = 'status-message';
    element.textContent = '';
  }, 3500);
}

function showView(viewName) {
  ['view-login', 'view-user', 'view-admin'].forEach((id) => {
    const node = document.getElementById(id);
    if (node) node.classList.toggle('hidden', id !== viewName);
  });
}

function getTranslatedSection(section, lang = appState.currentLang) {
  const key = SECTION_KEY_MAP[section] || null;
  if (!key) return section;
  return translations[lang]?.[key] || section;
}

function updatePlaceholders(lang) {
  const ph = placeholderMap[lang] || placeholderMap.en;
  const loginUsername = document.getElementById('login-username');
  const formTemp = document.getElementById('form-temperature');
  const formNotes = document.getElementById('form-notes');
  const newUsername = document.getElementById('new-username');
  const newPassword = document.getElementById('new-password');

  if (loginUsername) loginUsername.placeholder = ph.username;
  if (formTemp) formTemp.placeholder = ph.temp;
  if (formNotes) formNotes.placeholder = ph.notes;
  if (newUsername) newUsername.placeholder = ph.uName;
  if (newPassword) newPassword.placeholder = ph.uPass;
}

function changeLanguage(lang) {
  appState.currentLang = lang;
  document.body.className = (lang === 'ar' || lang === 'ur') ? 'rtl' : 'ltr';

  document.querySelectorAll('[data-key]').forEach((element) => {
    const key = element.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  updatePlaceholders(lang);
  const langSelect = document.getElementById('lang-select');
  if (langSelect) langSelect.value = lang;

  if (appState.currentUser && appState.currentUser.role !== 'admin') {
    const label = getTranslatedSection(appState.currentUser.section, lang);
    const sectionText = `${translations[lang]?.section_label || 'Wing'}: ${label.toUpperCase()}`;
    document.getElementById('user-section-badge').textContent = sectionText;
    document.getElementById('user-form-title').textContent = `${label.toUpperCase()} ${translations[lang]?.qa_insp_sheet || 'QA Inspection Sheet'}`;
  }
}

function validateTemperature(value) {
  if (!value || value.toLowerCase() === 'n/a') return true;
  return !Number.isNaN(Number(value));
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    headers: { 'Content-Type': 'application/json' },
    ...options
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || 'Request failed');
  }
  return data;
}

async function loadInitialData() {
  try {
    const users = await fetchJson('/api/users');
    const reports = await fetchJson('/api/reports');
    appState.users = users;
    appState.reports = reports;
    renderUsersList();
    renderReports();
  } catch (error) {
    console.error('Unable to load app data:', error);
  }
}

async function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById('login-username').value.trim();
  const password = document.getElementById('login-password').value;

  if (!username || !password) {
    showStatus('login-status', translations[appState.currentLang].required_fields, 'error');
    return;
  }

  try {
    const result = await fetchJson('/api/login', {
      method: 'POST',
      body: JSON.stringify({ username, password })
    });

    appState.currentUser = result.user;
    document.getElementById('header-logout').classList.remove('hidden');

    if (result.user.role === 'admin') {
      showView('view-admin');
      toggleAdminSubView('admin-reports');
    } else {
      showView('view-user');
      const formInspector = document.getElementById('form-inspector');
      if (formInspector) formInspector.value = result.user.username;
      const label = getTranslatedSection(result.user.section, appState.currentLang);
      document.getElementById('user-section-badge').textContent = `${translations[appState.currentLang].section_label}: ${label.toUpperCase()}`;
      document.getElementById('user-form-title').textContent = `${label.toUpperCase()} ${translations[appState.currentLang].qa_insp_sheet}`;
    }

    document.getElementById('login-form').reset();
  } catch (error) {
    showStatus('login-status', error.message || translations[appState.currentLang].invalid_credentials, 'error');
  }
}

function logout() {
  appState.currentUser = null;
  showView('view-login');
  document.getElementById('header-logout').classList.add('hidden');
  document.getElementById('login-form').reset();
}

function toggleAdminSubView(target) {
  const reportsSection = document.getElementById('subview-reports');
  const usersSection = document.getElementById('subview-users');

  if (target === 'admin-reports') {
    reportsSection.classList.remove('hidden');
    usersSection.classList.add('hidden');
    renderReports();
  } else {
    reportsSection.classList.add('hidden');
    usersSection.classList.remove('hidden');
    renderUsersList();
  }
}

async function handleUserCreation(event) {
  event.preventDefault();
  const username = document.getElementById('new-username').value.trim();
  const password = document.getElementById('new-password').value.trim();
  const section = document.getElementById('new-section').value;

  if (!username || !password || !section) {
    showStatus('admin-status', translations[appState.currentLang].required_fields, 'error');
    return;
  }

  try {
    const result = await fetchJson('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password, section })
    });

    appState.users.push(result.user);
    document.getElementById('user-creation-form').reset();
    renderUsersList();
    showStatus('admin-status', translations[appState.currentLang].save_success, 'success');
  } catch (error) {
    showStatus('admin-status', error.message || translations[appState.currentLang].msg_user_exists, 'error');
  }
}

function renderUsersList() {
  const container = document.getElementById('users-list-container');
  const regularUsers = appState.users.filter((user) => user.role !== 'admin');

  if (!regularUsers.length) {
    container.innerHTML = `<div class="empty-state">${translations[appState.currentLang].no_personnel}</div>`;
    return;
  }

  container.innerHTML = regularUsers.map((user) => `
    <div class="user-item">
      <span>User: <strong>${escapeHtml(user.username)}</strong></span>
      <span class="section-badge">${escapeHtml(getTranslatedSection(user.section, appState.currentLang))}</span>
    </div>
  `).join('');
}

async function handleFormSubmit(event) {
  event.preventDefault();
  const temperature = document.getElementById('form-temperature').value.trim();
  const status = document.getElementById('form-checklist').value;
  const notes = document.getElementById('form-notes').value.trim();
  const file = document.getElementById('form-photo').files[0];

  if (!status || !notes || !file) {
    showStatus('user-status', translations[appState.currentLang].required_fields, 'error');
    return;
  }

  if (!validateTemperature(temperature)) {
    showStatus('user-status', translations[appState.currentLang].invalid_temp, 'error');
    return;
  }

  if (notes.length < 5) {
    showStatus('user-status', translations[appState.currentLang].note_length, 'error');
    return;
  }

  try {
    const image = await resizeImage(file);
    const result = await fetchJson('/api/reports', {
      method: 'POST',
      body: JSON.stringify({
        inspector: appState.currentUser.username,
        section: appState.currentUser.section,
        status,
        notes,
        temperature: temperature || 'N/A',
        image
      })
    });

    appState.reports.unshift(result.report);
    document.getElementById('monitoring-form').reset();
    document.getElementById('form-inspector').value = appState.currentUser.username;
    renderReports();
    showStatus('user-status', translations[appState.currentLang].alert_success, 'success');
  } catch (error) {
    showStatus('user-status', error.message || 'Unable to submit the report.', 'error');
  }
}

function resizeImage(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxSize = 1200;
        let width = img.width;
        let height = img.height;

        if (width > height && width > maxSize) {
          height = Math.round((height * maxSize) / width);
          width = maxSize;
        } else if (height > maxSize) {
          width = Math.round((width * maxSize) / height);
          height = maxSize;
        }

        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext('2d');
        context.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.8));
      };
      img.onerror = reject;
      img.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function renderReports() {
  const feed = document.getElementById('reports-feed');
  const filterValue = document.getElementById('filter-section').value;
  const filtered = filterValue === 'ALL'
    ? appState.reports
    : appState.reports.filter((report) => report.section === filterValue);

  if (!filtered.length) {
    feed.innerHTML = `<div class="empty-state">${translations[appState.currentLang].no_reports}</div>`;
    return;
  }

  feed.innerHTML = filtered.map((report) => {
    const formattedDate = new Date(report.timestamp).toLocaleString();
    const sectionText = getTranslatedSection(report.section, appState.currentLang);
    return `
      <div class="report-card">
        <div class="meta">
          <span><strong>${escapeHtml(translations[appState.currentLang].section_label || 'Wing')}:</strong> ${escapeHtml(sectionText)}</span>
          <span>${escapeHtml(formattedDate)}</span>
        </div>
        <p><strong>Inspector:</strong> ${escapeHtml(report.inspector)}</p>
        <p><strong>Temperature:</strong> ${escapeHtml(report.temperature)}</p>
        <p><strong>Status:</strong> ${escapeHtml(report.status)}</p>
        <p><strong>Notes:</strong> ${escapeHtml(report.notes)}</p>
        <img src="${report.image}" alt="Evidence image for ${escapeHtml(report.section)}" />
      </div>
    `;
  }).join('');
}

function bindEvents() {
  document.getElementById('lang-select').addEventListener('change', (event) => {
    changeLanguage(event.target.value);
  });

  document.getElementById('login-form').addEventListener('submit', handleLogin);
  document.getElementById('user-creation-form').addEventListener('submit', handleUserCreation);
  document.getElementById('monitoring-form').addEventListener('submit', handleFormSubmit);
  document.getElementById('header-logout').addEventListener('click', logout);
}

async function initialize() {
  bindEvents();
  await loadInitialData();
  changeLanguage('en');
  showView('view-login');
}

initialize();
