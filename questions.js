/* ============================================================
   ELEVRA 360° SALES DIAGNOSTIC™ — questions.js
   ------------------------------------------------------------
   Structure of the diagnostic. Texts live in translations.js
   (TRANSLATIONS[lang].questions[id]). This file only defines:
     - id / section / type
     - category (which score the question feeds)
     - options: key + internal score (0–100). score:null = not scored
   Scoring weights and rules live in scoring.js.
   ============================================================ */

const QUESTIONS = [
  /* ---------- Company information (not scored) ---------- */
  { id: "companyName", section: "company", type: "text",  required: true },
  { id: "contactName", section: "company", type: "text",  required: true },
  { id: "email",       section: "company", type: "email", required: true },
  { id: "phone",       section: "company", type: "tel",   required: false },
  {
    id: "industry", section: "company", type: "choice", required: true,
    options: [
      { key: "home" }, { key: "health" }, { key: "beauty" }, { key: "realestate" },
      { key: "auto" }, { key: "professional" }, { key: "retail" }, { key: "hospitality" }, { key: "other" }
    ]
  },
  {
    id: "revenue", section: "company", type: "choice", required: true,
    options: [
      { key: "u10" }, { key: "10_25" }, { key: "25_50" }, { key: "50_100" }, { key: "100_250" }, { key: "250p" }
    ]
  },

  /* ---------- Digital Presence ---------- */
  {
    id: "q7", section: "digital", category: "digital", type: "choice",
    options: [
      { key: "leads",    score: 100 },
      { key: "few",      score: 50 },
      { key: "outdated", score: 25 },
      { key: "unknown",  score: 40 },
      { key: "none",     score: 0 }
    ]
  },
  {
    id: "q8", section: "digital", category: "digital", type: "choice",
    options: [
      { key: "absolutely", score: 100 },
      { key: "mostly",     score: 75 },
      { key: "notreally",  score: 40 },
      { key: "no",         score: 15 },
      { key: "unknown",    score: 40 },
      { key: "none",       score: 0 }
    ]
  },
  {
    id: "q9", section: "digital", category: "digital", type: "choice", hasHelp: true,
    options: [
      { key: "easy",    score: 100 },
      { key: "better",  score: 70 },
      { key: "form",    score: 45 },
      { key: "noaction",score: 15 },
      { key: "none",    score: 0 }
    ]
  },
  {
    id: "q10", section: "digital", category: "digital", type: "choice",
    options: [
      { key: "track",    score: 100 },
      { key: "estimate", score: 70 },
      { key: "no",       score: 35 },
      { key: "noleads",  score: 15 },
      { key: "none",     score: 0 }
    ]
  },

  /* ---------- Lead Generation ---------- */
  {
    id: "q11", section: "lead", category: "lead", type: "choice",
    options: [
      { key: "referrals",   score: 45 },
      { key: "google",      score: 70 },
      { key: "social",      score: 60 },
      { key: "paid",        score: 65 },
      { key: "outbound",    score: 60 },
      { key: "partners",    score: 55 },
      { key: "multiple",    score: 100 },
      { key: "unsure",      score: 20 }
    ]
  },
  {
    id: "q12", section: "lead", category: "lead", type: "choice",
    options: [
      { key: "consistently", score: 100 },
      { key: "most",         score: 75 },
      { key: "sometimes",    score: 45 },
      { key: "no",           score: 15 },
      { key: "nogoals",      score: 25 }
    ]
  },
  {
    id: "q13", section: "lead", category: "lead", type: "choice",
    options: [
      { key: "yes",      score: 100 },
      { key: "probably", score: 75 },
      { key: "affect",   score: 40 },
      { key: "no",       score: 15 },
      { key: "entire",   score: 5 }
    ]
  },

  /* ---------- Customer Response ---------- */
  {
    id: "q14", section: "response", category: "response", type: "choice",
    options: [
      { key: "immediately", score: 100 },
      { key: "u5",          score: 90 },
      { key: "5_30",        score: 70 },
      { key: "30m_2h",      score: 40 },
      { key: "o2h",         score: 15 },
      { key: "depends",     score: 35 }
    ]
  },
  {
    id: "q15", section: "response", category: "response", type: "choice",
    options: [
      { key: "another",   score: 100 },
      { key: "quick",     score: 80 },
      { key: "voicemail", score: 35 },
      { key: "later",     score: 45 },
      { key: "lost",      score: 5 },
      { key: "unknown",   score: 25 }
    ]
  },
  {
    id: "q16", section: "response", category: "response", type: "choice",
    options: [
      { key: "always",  score: 100 },
      { key: "limited", score: 65 },
      { key: "message", score: 35 },
      { key: "no",      score: 15 }
    ]
  },
  {
    id: "q17", section: "response", category: "response", type: "choice",
    options: [
      { key: "always",   score: 100 },
      { key: "usually",  score: 75 },
      { key: "someone",  score: 45 },
      { key: "callback", score: 30 },
      { key: "no",       score: 15 },
      { key: "noappts",  score: null }   /* excluded from the score */
    ]
  },
  {
    /* Call volume: NOT scored. Used only to weigh AI Receptionist relevance. */
    id: "q18", section: "response", category: null, type: "choice",
    options: [
      { key: "u50" }, { key: "50_150" }, { key: "151_300" }, { key: "301_500" }, { key: "500p" }, { key: "unknown" }
    ]
  },

  /* ---------- Sales Conversion ---------- */
  {
    id: "q19", section: "conversion", category: "conversion", type: "choice",
    options: [
      { key: "track",    score: 100 },
      { key: "rough",    score: 65 },
      { key: "no",       score: 25 },
      { key: "notrack",  score: 15 }
    ]
  },
  {
    id: "q20", section: "conversion", category: "conversion", type: "choice",
    options: [
      { key: "structured", score: 100 },
      { key: "manual",     score: 70 },
      { key: "sometimes",  score: 40 },
      { key: "nothing",    score: 10 },
      { key: "unknown",    score: 20 }
    ]
  },
  {
    id: "q21", section: "conversion", category: "conversion", type: "choice",
    options: [
      { key: "documented", score: 100 },
      { key: "informal",   score: 60 },
      { key: "depends",    score: 35 },
      { key: "notreally",  score: 20 },
      { key: "no",         score: 5 }
    ]
  },
  {
    id: "q22", section: "conversion", category: "conversion", type: "choice",
    options: [
      { key: "yes",  score: 100 },
      { key: "most", score: 75 },
      { key: "some", score: 40 },
      { key: "no",   score: 10 }
    ]
  },

  /* ---------- Growth Intelligence ---------- */
  {
    id: "q23", section: "growth", category: "growth", type: "choice",
    options: [
      { key: "clearly", score: 100 },
      { key: "some",    score: 70 },
      { key: "leads",   score: 50 },
      { key: "no",      score: 20 },
      { key: "notrack", score: 5 }
    ]
  },
  {
    id: "q24", section: "growth", category: "growth", type: "choice",
    options: [
      { key: "very",       score: 100 },
      { key: "fairly",     score: 75 },
      { key: "somewhat",   score: 45 },
      { key: "unpredict",  score: 20 },
      { key: "nopipeline", score: 10 }
    ]
  },
  {
    /* Perceived problem: NOT scored. Compared with the diagnosed bottleneck. */
    id: "q25", section: "growth", category: null, type: "choice",
    options: [
      { key: "leads" }, { key: "website" }, { key: "calls" }, { key: "appointments" },
      { key: "conversion" }, { key: "followup" }, { key: "salesteam" }, { key: "marketing" },
      { key: "visibility" }, { key: "unsure" }
    ]
  },

  /* ---------- Financial Impact (not scored) ---------- */
  {
    id: "q26", section: "financial", category: null, type: "choice",
    options: [
      { key: "u500",      low: 100,   high: 500 },
      { key: "500_1k",    low: 500,   high: 1000 },
      { key: "1k_2500",   low: 1001,  high: 2500 },
      { key: "2500_5k",   low: 2501,  high: 5000 },
      { key: "5k_10k",    low: 5001,  high: 10000 },
      { key: "10kp",      low: 10000, high: null }
    ]
  },
  {
    id: "q27", section: "financial", category: null, type: "choice",
    options: [
      { key: "none",    low: 0,  high: 0 },
      { key: "1_5",     low: 1,  high: 5 },
      { key: "6_10",    low: 6,  high: 10 },
      { key: "11_25",   low: 11, high: 25 },
      { key: "26p",     low: 26, high: null },
      { key: "unknown", low: null, high: null }
    ]
  }
];

/* Section order — used for the section label above each question */
const SECTION_ORDER = ["company", "digital", "lead", "response", "conversion", "growth", "financial"];
