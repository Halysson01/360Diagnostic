/* ============================================================
   ELEVRA 360° SALES DIAGNOSTIC™ — scoring.js
   ------------------------------------------------------------
   Everything that turns answers into a diagnostic:
     1. CATEGORY_WEIGHTS   → weight of each category in the overall score
     2. computeScores()    → 5 category scores + overall (0–100)
     3. getStatus()        → Strong / Healthy / Needs Attention / High Risk / Critical
     4. detectSolutions()  → which Elevra solutions are relevant (never forced)
     5. rankPriorities()   → bottlenecks ordered by criticality
     6. financialExposure()→ LOW / MODERATE / HIGH / SIGNIFICANT + indicative range
     7. perceivedVsDiagnosed()
   ============================================================ */

/* ---------- 1. Weights (edit freely) ---------- */
const CATEGORY_WEIGHTS = {
  digital:    0.20,   // Digital Presence
  lead:       0.20,   // Lead Generation
  response:   0.20,   // Customer Response
  conversion: 0.25,   // Sales Conversion
  growth:     0.15    // Growth Intelligence
};

const CATEGORY_ORDER = ["digital", "lead", "response", "conversion", "growth"];

/* Thresholds that trigger a recommendation when a category score falls below them */
const CATEGORY_TRIGGER_THRESHOLD = {
  digital: 60,     // → Elevra Website
  response: 60,    // → Elevra AI Receptionist™
  lead: 60,        // → Elevra Growth & Sales Consulting
  conversion: 60,  // → Elevra Growth & Sales Consulting
  growth: 60       // → Elevra Growth & Sales Consulting
};

/* Categories considered a "priority" (bottleneck) when below this score */
const PRIORITY_THRESHOLD = 70;
const MAX_PRIORITIES = 3;

/* ---------- Helpers ---------- */
function findQuestion(id) {
  return QUESTIONS.find(q => q.id === id);
}

function optionOf(id, key) {
  const q = findQuestion(id);
  if (!q || !q.options) return null;
  return q.options.find(o => o.key === key) || null;
}

/* ---------- 2. Category + overall scores ---------- */
function computeScores(answers) {
  const buckets = {};
  CATEGORY_ORDER.forEach(c => (buckets[c] = { total: 0, count: 0 }));

  QUESTIONS.forEach(q => {
    if (!q.category || q.type !== "choice") return;
    const opt = optionOf(q.id, answers[q.id]);
    if (!opt || opt.score === null || opt.score === undefined) return; // unscored / unanswered
    buckets[q.category].total += opt.score;
    buckets[q.category].count += 1;
  });

  const scores = {};
  CATEGORY_ORDER.forEach(c => {
    const b = buckets[c];
    scores[c] = b.count ? Math.round(b.total / b.count) : 0;
  });

  let overall = 0;
  let weightSum = 0;
  CATEGORY_ORDER.forEach(c => {
    overall += scores[c] * CATEGORY_WEIGHTS[c];
    weightSum += CATEGORY_WEIGHTS[c];
  });
  scores.overall = Math.round(overall / weightSum);
  return scores;
}

/* ---------- 3. Status bands ---------- */
function getStatus(score) {
  if (score >= 85) return "strong";
  if (score >= 70) return "healthy";
  if (score >= 55) return "attention";
  if (score >= 40) return "risk";
  return "critical";
}

/* ---------- 4. Solution detection ---------- */
/* Each rule collects "signals" (symptoms). A solution is recommended
   when it has enough evidence — never just because the overall score is low. */
function detectSolutions(answers, scores) {
  const a = answers;
  const has = (id, keys) => keys.includes(a[id]);

  /* Elevra Website */
  const websiteSignals = [];
  if (has("q7", ["none"]))                 websiteSignals.push("no_website");
  if (has("q7", ["outdated"]))             websiteSignals.push("outdated");
  if (has("q7", ["few", "unknown"]))       websiteSignals.push("few_leads");
  if (has("q8", ["notreally", "no"]))      websiteSignals.push("unclear_offer");
  if (has("q9", ["noaction", "form"]))     websiteSignals.push("no_cta");
  if (has("q10", ["no", "noleads"]))       websiteSignals.push("not_measured");
  const websiteByScore = scores.digital < CATEGORY_TRIGGER_THRESHOLD.digital;
  const website = websiteSignals.length >= 1 || websiteByScore;

  /* Elevra AI Receptionist™ */
  const aiSignals = [];
  if (has("q14", ["30m_2h", "o2h", "depends"]))   aiSignals.push("slow_response");
  if (has("q15", ["voicemail"]))                   aiSignals.push("voicemail");
  if (has("q15", ["later", "lost", "unknown"]))    aiSignals.push("missed_calls");
  if (has("q16", ["limited", "message", "no"]))    aiSignals.push("business_hours_only");
  if (has("q17", ["someone", "callback", "no"]))   aiSignals.push("no_booking_on_call");
  const highVolume = has("q18", ["151_300", "301_500", "500p"]);
  const midVolume  = has("q18", ["50_150"]);
  const aiByScore  = scores.response < CATEGORY_TRIGGER_THRESHOLD.response;
  /* Volume never lowers the score; it raises commercial relevance */
  const ai = aiSignals.length >= 2 || (aiSignals.length >= 1 && (highVolume || midVolume)) || aiByScore;

  /* Elevra Growth & Sales Consulting */
  const consultingSignals = [];
  if (has("q11", ["referrals", "unsure"]))                consultingSignals.push("referral_dependency");
  if (has("q13", ["affect", "no", "entire"]))             consultingSignals.push("no_predictable_acquisition");
  if (has("q12", ["sometimes", "no", "nogoals"]))         consultingSignals.push("not_enough_opportunities");
  if (has("q19", ["no", "notrack"]))                      consultingSignals.push("no_conversion_metrics");
  if (has("q20", ["sometimes", "nothing", "unknown"]))    consultingSignals.push("weak_followup");
  if (has("q21", ["depends", "notreally", "no"]))         consultingSignals.push("no_sales_process");
  if (has("q22", ["some", "no"]))                         consultingSignals.push("no_loss_data");
  if (has("q23", ["leads", "no", "notrack"]))             consultingSignals.push("no_revenue_attribution");
  if (has("q24", ["somewhat", "unpredict", "nopipeline"]))consultingSignals.push("low_predictability");
  const consultingByScore =
    scores.lead < CATEGORY_TRIGGER_THRESHOLD.lead ||
    scores.conversion < CATEGORY_TRIGGER_THRESHOLD.conversion ||
    scores.growth < CATEGORY_TRIGGER_THRESHOLD.growth;
  const consulting = consultingSignals.length >= 3 || consultingByScore;

  return {
    website:    { recommended: website,    signals: websiteSignals },
    ai:         { recommended: ai,         signals: aiSignals, highVolume, midVolume },
    consulting: { recommended: consulting, signals: consultingSignals }
  };
}

/* Maps each category to the solution that addresses it */
const CATEGORY_SOLUTION = {
  digital: "website",
  response: "ai",
  lead: "consulting",
  conversion: "consulting",
  growth: "consulting"
};

/* ---------- 5. Priorities ---------- */
function rankPriorities(scores, solutions) {
  return CATEGORY_ORDER
    .map(c => ({ category: c, score: scores[c], status: getStatus(scores[c]) }))
    .filter(p => p.score < PRIORITY_THRESHOLD)
    .sort((x, y) => x.score - y.score)
    .slice(0, MAX_PRIORITIES)
    .map((p, i) => {
      const sol = CATEGORY_SOLUTION[p.category];
      return {
        rank: i + 1,
        category: p.category,
        score: p.score,
        status: p.status,
        /* Only attach a solution if the detector actually recommended it */
        solution: solutions[sol] && solutions[sol].recommended ? sol : null
      };
    });
}

/* Lowest category = diagnosed primary bottleneck */
function diagnosedBottleneck(scores) {
  return CATEGORY_ORDER.reduce((min, c) => (scores[c] < scores[min] ? c : min), CATEGORY_ORDER[0]);
}

/* ---------- 6. Financial exposure ---------- */
function financialExposure(answers) {
  const value = optionOf("q26", answers.q26);
  const lost  = optionOf("q27", answers.q27);
  if (!value || !lost) return { level: "low", range: null, unknownLost: true };

  const valueIdx = findQuestion("q26").options.findIndex(o => o.key === value.key); // 0–5
  const lostIdx  = findQuestion("q27").options.findIndex(o => o.key === lost.key);  // 0–5

  let level;
  if (lost.key === "none") {
    level = "low";
  } else if (lost.key === "unknown") {
    /* No estimate given — moderate if customers are valuable, otherwise low */
    level = valueIdx >= 2 ? "moderate" : "low";
  } else {
    const weight = valueIdx + lostIdx * 1.2;
    if (weight <= 2)        level = "low";
    else if (weight <= 4)   level = "moderate";
    else if (weight <= 6)   level = "high";
    else                    level = "significant";
  }

  /* Indicative monthly range — clearly labelled as an estimate, never a guarantee */
  let range = null;
  if (lost.key !== "none" && lost.key !== "unknown") {
    const low  = value.low * lost.low;
    const high = value.high !== null && lost.high !== null ? value.high * lost.high : null;
    range = { low, high };
  }

  return { level, range, unknownLost: lost.key === "unknown" };
}

/* ---------- 7. Perceived vs diagnosed ---------- */
/* Maps the answer to Q25 to the category it belongs to */
const PERCEIVED_TO_CATEGORY = {
  leads: "lead",
  website: "digital",
  calls: "response",
  appointments: "response",
  conversion: "conversion",
  followup: "conversion",
  salesteam: "conversion",
  marketing: "lead",
  visibility: "growth",
  unsure: null
};

function perceivedVsDiagnosed(answers, scores) {
  const perceivedKey = answers.q25 || null;
  const perceivedCategory = perceivedKey ? PERCEIVED_TO_CATEGORY[perceivedKey] : null;
  const diagnosed = diagnosedBottleneck(scores);
  return {
    perceivedKey,
    perceivedCategory,
    diagnosedCategory: diagnosed,
    aligned: perceivedCategory !== null && perceivedCategory === diagnosed,
    unsure: perceivedKey === "unsure" || !perceivedKey
  };
}

/* ---------- Master function ---------- */
function runDiagnostic(answers, lang) {
  const scores     = computeScores(answers);
  const status     = getStatus(scores.overall);
  const solutions  = detectSolutions(answers, scores);
  const priorities = rankPriorities(scores, solutions);
  const exposure   = financialExposure(answers);
  const perception = perceivedVsDiagnosed(answers, scores);

  /* Recommended solutions, ordered by the priority they address first */
  const recommended = [];
  priorities.forEach(pr => { if (pr.solution && !recommended.includes(pr.solution)) recommended.push(pr.solution); });
  ["ai", "website", "consulting"].forEach(k => { if (solutions[k].recommended && !recommended.includes(k)) recommended.push(k); });

  return {
    date: new Date().toISOString(),
    language: lang,
    companyName: answers.companyName || "",
    contactName: answers.contactName || "",
    email: answers.email || "",
    phone: answers.phone || "",
    industry: answers.industry || "",
    monthlyRevenue: answers.revenue || "",
    answers: { ...answers },
    scores: {
      digitalPresence: scores.digital,
      leadGeneration: scores.lead,
      customerResponse: scores.response,
      salesConversion: scores.conversion,
      growthIntelligence: scores.growth
    },
    overallScore: scores.overall,
    status,
    perceivedProblem: perception.perceivedKey,
    diagnosedProblem: perception.diagnosedCategory,
    perceptionAligned: perception.aligned,
    recommendedSolutions: recommended,
    solutionSignals: {
      website: solutions.website.signals,
      ai: solutions.ai.signals,
      consulting: solutions.consulting.signals
    },
    priorityRanking: priorities,
    potentialRevenueExposure: exposure.level,
    exposureRange: exposure.range,
    /* raw internals kept for rendering */
    _scores: scores,
    _solutions: solutions,
    _exposure: exposure,
    _perception: perception
  };
}
