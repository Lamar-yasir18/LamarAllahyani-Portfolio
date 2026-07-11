const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("show"), index * 70);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* =========================
   Arabic / English language
========================= */

const translations = {
  /* Navigation */
  "About": "نبذة",
  "Experience": "الخبرات",
  "Skills": "المهارات",
  "Projects": "المشاريع",
  "Certificates": "الشهادات",
  "Contact": "التواصل",

  /* Hero */
  "Lamar Yasir Allahyani": "لمار ياسر اللحياني",
  "Data Scientist • Data Analyst • Business Analyst":
    "عالمة بيانات • محللة بيانات • محللة أعمال",

  "See My Projects": "استعراض مشاريعي",
  "View Projects": "استعراض المشاريع",
  "Download CV": "تحميل السيرة الذاتية",

  "Portfolio Focus": "مجالات التركيز",
  "Data Impact": "أثر البيانات",
  "Data Analytics": "تحليل البيانات",
  "Business Analysis": "تحليل الأعمال",
  "Data Science": "علم البيانات",
  "Python": "بايثون",
  "SQL & Databases": "SQL وقواعد البيانات",
  "Power BI / Tableau": "Power BI وTableau",
  "Machine Learning": "تعلم الآلة",
  "Dashboards": "لوحات المعلومات",
  "Arabic NLP": "معالجة اللغة العربية",
  "Predictive Modeling": "النمذجة التنبؤية",

  /* Highlights */
  "GPA": "المعدل",
  "Academic Excellence": "تميز أكاديمي",
  "IELTS": "آيلتس",
  "English Proficiency": "إجادة اللغة الإنجليزية",
  "Training Hours": "الساعات التدريبية",
  "Professional Training": "تدريب مهني",

  /* About */
  "Data science with curiosity, clarity, and impact.":
    "علم البيانات بشغف ووضوح وأثر.",

  "Hello, I’m Lamar Yasir Allahyani":
    "مرحبًا، أنا لمار ياسر اللحياني",

  "I am a Data Science graduate from Umm Al-Qura University. I’m passionate about the full data lifecycle: collection, preprocessing, modeling, visualization, and communicating insights.":
    "خريجة علم بيانات من جامعة أم القرى في مكة المكرمة وجدة. أهتم بدورة حياة البيانات كاملة، بدءًا من جمعها ومعالجتها، مرورًا بالنمذجة والتصور، وصولًا إلى عرض النتائج والرؤى بوضوح.",

  "My interests include data analytics, business intelligence, machine learning, Power BI, SQL, and building data solutions that help teams make real decisions.":
    "تشمل اهتماماتي تحليل البيانات وذكاء الأعمال وتعلم الآلة و Power BI و SQL، وبناء حلول بيانات تساعد الفرق على اتخاذ قرارات أكثر فاعلية.",

  /* Education */
  "Bachelor of Data Science":
    "بكالوريوس علم البيانات",

  "Bachelor's Degree in Data Science":
    "بكالوريوس علم البيانات",

  "Umm Al-Qura University":
    "جامعة أم القرى",

  "Perfect GPA":
    "معدل كامل",

  "First Class Honors":
    "مرتبة الشرف الأولى",

  "Graduated with Distinction":
    "تخرج بتميز",

  /* Experience */
  "Professional data experience":
    "خبرة عملية في مجال البيانات",

  "Data Analyst":
    "محللة بيانات",

  "Business Analyst":
    "محللة أعمال",

  "Business Intelligence Analyst":
    "محللة ذكاء أعمال",

  "Zimam Company · Seasonal":
    "شركة زمام · عمل موسمي",

  "King Abdullah Medical City · COOP":
    "مدينة الملك عبدالله الطبية · تدريب تعاوني",

  "Built and improved dashboards using Power BI and Excel.":
    "بنيت وطورت لوحات معلومات باستخدام Power BI وExcel.",

  "Converted 3+ static daily reports into dynamic Power BI dashboards.":
    "حوّلت أكثر من 3 تقارير يومية ثابتة إلى لوحات معلومات تفاعلية باستخدام Power BI.",

  "Automated report distribution across 25 companies.":
    "أتمتُّ توزيع التقارير على 25 شركة.",

  "Reduced report sharing time by 80% through reporting automation.":
    "خفضت وقت مشاركة التقارير بنسبة 80% من خلال أتمتة التقارير.",

  "Developed interactive dashboards to visualize KPIs.":
    "طورت لوحات معلومات تفاعلية لعرض مؤشرات الأداء الرئيسية.",

  "Prepared and cleaned datasets to improve accuracy and consistency.":
    "جهزت ونظفت مجموعات البيانات لتحسين الدقة والاتساق.",

  "Translated data into clear insights using charts, filters, and visual elements.":
    "حوّلت البيانات إلى رؤى واضحة باستخدام الرسوم البيانية والمرشحات والعناصر البصرية.",

  /* Skills */
  "My technical toolkit":
    "أدواتي ومهاراتي التقنية",

  "Business Intelligence":
    "ذكاء الأعمال",

  "Programming & Databases":
    "البرمجة وقواعد البيانات",

  "Professional Skills":
    "المهارات المهنية",

  "Analytical Thinking":
    "التفكير التحليلي",

  "Problem Solving":
    "حل المشكلات",

  "Data Storytelling":
    "سرد البيانات",

  "Presentation Skills":
    "مهارات العرض",

  "Team Collaboration":
    "العمل التعاوني",

  "Stakeholder Communication":
    "التواصل مع أصحاب المصلحة",

  /* Projects */
  "Featured Data Science Projects":
    "مشاريع مختارة في علم البيانات",

  "View on GitHub →":
    "عرض المشروع على GitHub ←",

  "View Dashboard →":
    "عرض لوحة المعلومات ←",

  "StanceLens | Arabic Stance Detection":
    "StanceLens | اكتشاف المواقف في النصوص العربية",

  "Graduation project that classifies public stance toward women’s sports in Saudi Arabia using 1,348 annotated comments from X and YouTube. The project benchmarks AraBERT, ALLaM 7B, LLaMA 3.1 8B, and LoRA-ALLaM across supervised and few-shot settings.":
    "مشروع تخرج يصنف المواقف العامة تجاه رياضة المرأة في المملكة باستخدام 1,348 تعليقًا مصنفًا من X ويوتيوب، مع مقارنة أداء عدة نماذج لغوية عربية وتوليدية.",

  "Mohtat | Road Risk Prediction for Hajj and Umrah":
    "مُحتاط | التنبؤ بمخاطر الطرق للحج والعمرة",

  "Predictive analytics project designed to identify high-risk road areas during Hajj and Umrah seasons using synthetic data, Random Forest, Deep Learning, and interactive geospatial visualization with Folium.":
    "مشروع تحليلات تنبؤية لتحديد مناطق الطرق مرتفعة الخطورة خلال مواسم الحج والعمرة باستخدام البيانات الاصطناعية والغابة العشوائية والتعلم العميق والخرائط التفاعلية.",

  "US Bikeshare Data Analysis":
    "تحليل بيانات مشاركة الدراجات في الولايات المتحدة",

  "Python data analysis project exploring bikeshare data from Chicago, New York City, and Washington. Users can filter by city, month, and weekday, then view travel time, station, trip duration, and user statistics.":
    "مشروع لتحليل بيانات مشاركة الدراجات في شيكاغو ونيويورك وواشنطن باستخدام Python، مع إمكانية التصفية حسب المدينة والشهر واليوم وعرض إحصاءات الرحلات والمحطات والمستخدمين.",

  "SpaceX Falcon 9 First Stage Landing Prediction":
    "التنبؤ بهبوط المرحلة الأولى لصاروخ SpaceX Falcon 9",

  "IBM Data Science Capstone project predicting whether the Falcon 9 first stage will land successfully. It includes API data collection, web scraping, SQL analysis, EDA, dashboards, maps, and ML prediction.":
    "مشروع ختامي من IBM للتنبؤ بنجاح هبوط المرحلة الأولى من Falcon 9، ويشمل جمع البيانات عبر API وكشط الويب وتحليل SQL والتحليل الاستكشافي ولوحات المعلومات والخرائط وتعلم الآلة.",

  "Chocolate Sales Dashboard":
    "لوحة معلومات مبيعات الشوكولاتة",

  "Interactive Power BI dashboard analyzing global chocolate sales through KPI tracking, revenue trends, geographic insights, country-based filtering, and product performance analysis.":
    "لوحة معلومات تفاعلية باستخدام Power BI لتحليل مبيعات الشوكولاتة عالميًا من خلال مؤشرات الأداء واتجاهات الإيرادات والتحليل الجغرافي والتصفية حسب الدول وأداء المنتجات.",

  "Global Data Science Salaries Dashboard":
    "لوحة رواتب وظائف علم البيانات عالميًا",

  "Interactive Tableau dashboard exploring global data science salaries across countries, experience levels, employment types, company sizes, and job roles through dynamic visualizations and business intelligence reporting.":
    "لوحة معلومات تفاعلية باستخدام Tableau لاستكشاف رواتب وظائف علم البيانات حول العالم حسب الدول ومستويات الخبرة وأنواع التوظيف وأحجام الشركات والمسميات الوظيفية.",

  "SQL Business Insights Analysis":
    "تحليل رؤى الأعمال باستخدام SQL",

  "SQL data exploration project analyzing a movie rental database to answer business questions about rental trends, movie categories, store performance, customer behavior, and monthly revenue patterns.":
    "مشروع استكشاف بيانات باستخدام SQL لتحليل قاعدة بيانات لتأجير الأفلام والإجابة عن أسئلة أعمال متعلقة باتجاهات الإيجار وفئات الأفلام وأداء الفروع وسلوك العملاء والإيرادات الشهرية.",

  "Fashion MNIST Image Classification":
    "تصنيف صور Fashion MNIST",

  "Computer vision project for classifying Fashion MNIST images into clothing categories using TensorFlow. The script includes data loading, preprocessing, model training, and evaluation workflow.":
    "مشروع رؤية حاسوبية لتصنيف صور Fashion MNIST إلى فئات الملابس باستخدام TensorFlow، ويشمل تحميل البيانات ومعالجتها وتدريب النموذج وتقييمه.",

  "Diabetes Prediction using Machine Learning":
    "التنبؤ بمرض السكري باستخدام تعلم الآلة",

  "Supervised machine learning project using healthcare data to predict diabetes outcomes through classification models and evaluation metrics.":
    "مشروع تعلم آلة خاضع للإشراف يستخدم بيانات صحية للتنبؤ بنتائج مرض السكري من خلال نماذج التصنيف ومقاييس التقييم.",

  "Twitter Sentiment Analysis":
    "تحليل المشاعر في Twitter",

  "NLP project focused on text preprocessing, feature engineering, TF-IDF vectorization, sentiment classification, and model evaluation.":
    "مشروع معالجة لغة طبيعية يركز على معالجة النصوص وهندسة الخصائص وتمثيل TF-IDF وتصنيف المشاعر وتقييم النماذج.",

  /* Certificates */
  "Professional certificates":
    "الشهادات المهنية",

  "Certifications & professional learning":
    "الشهادات والتعلم المهني",

  /* Contact */
  "Let's Connect":
    "لنتواصل",

  "Ready to collaborate on data projects.":
    "مستعدة للتعاون في مشاريع البيانات.",

  "Open to data analyst, business intelligence, and entry-level data science opportunities.":
    "متاحة لفرص تحليل البيانات وذكاء الأعمال ووظائف علم البيانات للمستوى المبتدئ.",

  "Phone":
    "رقم الجوال",

  "Email":
    "البريد الإلكتروني",

  /* Footer */
  "Data Science Portfolio":
    "ملف أعمال علم البيانات"
};

const langToggle = document.getElementById("langToggle");
const enLabel = langToggle?.querySelector(".lang-en");
const arLabel = langToggle?.querySelector(".lang-ar");

const translatedTextNodes = [];

function normalizeText(text) {
  return text.replace(/\s+/g, " ").trim();
}

function collectTranslatableText() {
  const walker = document.createTreeWalker(
    document.body,
    NodeFilter.SHOW_TEXT
  );

  let node;

  while ((node = walker.nextNode())) {
    const parent = node.parentElement;

    if (
      !parent ||
      parent.closest("#langToggle") ||
      ["SCRIPT", "STYLE"].includes(parent.tagName)
    ) {
      continue;
    }

    const normalized = normalizeText(node.nodeValue);

    if (normalized && translations[normalized]) {
      translatedTextNodes.push({
        node,
        original: node.nodeValue,
        arabic: translations[normalized]
      });
    }
  }
}

function applyLanguage(language) {
  const isArabic = language === "ar";

  document.documentElement.lang = isArabic ? "ar" : "en";
  document.documentElement.dir = isArabic ? "rtl" : "ltr";

  translatedTextNodes.forEach((item) => {
    if (isArabic) {
      const leadingSpace = item.original.match(/^\s*/)?.[0] || "";
      const trailingSpace = item.original.match(/\s*$/)?.[0] || "";

      item.node.nodeValue =
        leadingSpace + item.arabic + trailingSpace;
    } else {
      item.node.nodeValue = item.original;
    }
  });

  enLabel?.classList.toggle("active", !isArabic);
  arLabel?.classList.toggle("active", isArabic);

  localStorage.setItem("portfolioLanguage", language);
}

document.addEventListener("DOMContentLoaded", () => {
  collectTranslatableText();

  const savedLanguage =
    localStorage.getItem("portfolioLanguage") || "en";

  applyLanguage(savedLanguage);

  langToggle?.addEventListener("click", () => {
    const currentLanguage =
      document.documentElement.lang === "ar" ? "ar" : "en";

    applyLanguage(currentLanguage === "en" ? "ar" : "en");
  });
});
