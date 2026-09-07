/* ============================================================
   ELEVRA 360° SALES DIAGNOSTIC™ — script.js
   ------------------------------------------------------------
   Application flow:
     hero → question by question → loading → result
   Depends on: translations.js, questions.js, scoring.js
   ============================================================ */

/* ---------- CTA configuration (edit these URLs) ---------- */
const ELEVRA_CONFIG = {
  consultationUrl: "",   // "Build my growth plan" / "Talk to a strategist"
  websiteUrl: "",        // "Explore website solutions"
  aiReceptionistUrl: "", // "Explore AI Receptionist"
  consultingUrl: ""      // "Talk to a strategist" (consulting card)
};

/* ---------- Storage keys ---------- */
const STORAGE = {
  lang: "elevra360_lang",
  answers: "elevra360_answers",
  index: "elevra360_index",
  view: "elevra360_view"
};

const DEFAULT_LANG = "en";
const SUPPORTED_LANGS = ["en", "pt", "es"];

/* ---------- State ---------- */
const state = {
  lang: DEFAULT_LANG,
  answers: {},
  index: 0,          // current question index
  view: "hero",      // hero | form | loading | result
  result: null
};

/* ---------- DOM ---------- */
const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

const els = {
  views: {
    hero: $("#view-hero"),
    form: $("#view-form"),
    loading: $("#view-loading"),
    result: $("#view-result")
  },
  benefits: $("#hero-benefits"),
  btnResume: $("#btn-resume"),
  progressQuestion: $("#progress-question"),
  progressPercent: $("#progress-percent"),
  progressBar: $("#progress-bar"),
  progressFill: $("#progress-fill"),
  form: $("#question-form"),
  sectionLabel: $("#section-label"),
  questionTitle: $("#question-title"),
  questionHelp: $("#question-help"),
  questionBody: $("#question-body"),
  fieldError: $("#field-error"),
  btnBack: $("#btn-back"),
  btnNext: $("#btn-next"),
  loadingText: $("#loading-text"),
  resultInner: $("#result-inner"),
  modal: $("#modal-confirm"),
  toast: $("#toast")
};

/* ============================================================
   i18n helpers
   ============================================================ */
function t(path, vars) {
  const parts = path.split(".");
  let node = TRANSLATIONS[state.lang];
  for (const p of parts) {
    if (node == null) break;
    node = node[p];
  }
  if (node == null) {
    /* Fallback to English so a missing key never breaks the UI */
    node = TRANSLATIONS[DEFAULT_LANG];
    for (const p of parts) { if (node == null) break; node = node[p]; }
  }
  let out = node == null ? path : node;
  if (typeof out === "string" && vars) {
    Object.keys(vars).forEach(k => { out = out.replace(new RegExp("\\{" + k + "\\}", "g"), vars[k]); });
  }
  return out;
}

function qText(id, field) {
  return t("questions." + id + "." + field);
}
function optionLabel(id, key) {
  const v = t("questions." + id + ".options." + key);
  return typeof v === "string" ? v : key;
}

/* Apply translations to every element marked with data-i18n */
function applyStaticTranslations() {
  $$("[data-i18n]").forEach(el => {
    const val = t(el.getAttribute("data-i18n"));
    if (typeof val === "string") el.textContent = val;
  });
  document.documentElement.lang = state.lang;
  document.title = t("ui.brand") + " " + t("ui.brandSub");

  /* Benefits list */
  els.benefits.innerHTML = "";
  t("ui.benefits").forEach(text => {
    const li = document.createElement("li");
    li.innerHTML = '<span class="check" aria-hidden="true">✓</span><span></span>';
    li.lastChild.textContent = text;
    els.benefits.appendChild(li);
  });

  $$(".lang-btn").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === state.lang)));
}

function setLanguage(lang) {
  if (!SUPPORTED_LANGS.includes(lang)) lang = DEFAULT_LANG;
  state.lang = lang;
  localStorage.setItem(STORAGE.lang, lang);
  applyStaticTranslations();
  /* Re-render whatever is on screen, without reloading */
  if (state.view === "form") renderQuestion();
  if (state.view === "result" && state.result) renderResult(state.result);
  if (state.view === "loading") els.loadingText.textContent = t("ui.loading")[0];
}

/* ============================================================
   Persistence
   ============================================================ */
function saveState() {
  localStorage.setItem(STORAGE.answers, JSON.stringify(state.answers));
  localStorage.setItem(STORAGE.index, String(state.index));
  localStorage.setItem(STORAGE.view, state.view);
}
function loadState() {
  const lang = localStorage.getItem(STORAGE.lang);
  state.lang = SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
  try {
    state.answers = JSON.parse(localStorage.getItem(STORAGE.answers) || "{}") || {};
  } catch (e) { state.answers = {}; }
  const idx = parseInt(localStorage.getItem(STORAGE.index), 10);
  state.index = Number.isFinite(idx) ? Math.min(Math.max(idx, 0), QUESTIONS.length - 1) : 0;
  const view = localStorage.getItem(STORAGE.view);
  state.view = ["form", "result"].includes(view) ? view : "hero";
}
function clearState() {
  state.answers = {};
  state.index = 0;
  state.result = null;
  localStorage.removeItem(STORAGE.answers);
  localStorage.removeItem(STORAGE.index);
  localStorage.removeItem(STORAGE.view);
}

/* ============================================================
   Views
   ============================================================ */
function showView(name) {
  state.view = name;
  Object.keys(els.views).forEach(k => {
    els.views[k].hidden = k !== name;
  });
  window.scrollTo({ top: 0, behavior: "auto" });
  localStorage.setItem(STORAGE.view, name);
}

function goHome() {
  showView("hero");
  els.btnResume.hidden = Object.keys(state.answers).length === 0;
}

function startDiagnostic(resume) {
  if (!resume) state.index = 0;
  showView("form");
  renderQuestion();
}

/* ============================================================
   Question rendering
   ============================================================ */
function renderQuestion() {
  const q = QUESTIONS[state.index];
  const total = QUESTIONS.length;
  const n = state.index + 1;
  const pct = Math.round((state.index / total) * 100);

  /* Progress */
  els.progressQuestion.textContent = t("ui.questionOf", { n, t: total });
  els.progressPercent.textContent = t("ui.percentComplete", { p: pct });
  els.progressFill.style.width = pct + "%";
  els.progressBar.setAttribute("aria-valuenow", String(pct));

  /* Texts */
  els.sectionLabel.textContent = t("sections." + q.section);
  els.questionTitle.textContent = qText(q.id, "text");
  const help = q.hasHelp ? qText(q.id, "help") : "";
  els.questionHelp.hidden = !help;
  els.questionHelp.textContent = help || "";
  hideError();

  /* Body */
  els.questionBody.innerHTML = "";
  if (q.type === "choice") {
    renderChoices(q);
  } else {
    renderInput(q);
  }

  /* Nav */
  els.btnBack.disabled = state.index === 0;
  els.btnNext.textContent = state.index === total - 1 ? t("ui.seeResults") : t("ui.continue");
  updateNextState();

  /* Restart the card animation */
  els.form.style.animation = "none";
  void els.form.offsetHeight;
  els.form.style.animation = "";

  saveState();
}

function renderInput(q) {
  const wrap = document.createElement("div");
  wrap.className = "field";

  const label = document.createElement("label");
  label.setAttribute("for", "input-" + q.id);
  label.textContent = qText(q.id, "text");
  if (!q.required) {
    const opt = document.createElement("span");
    opt.className = "optional";
    opt.textContent = " · " + t("ui.optional");
    label.appendChild(opt);
  }

  const input = document.createElement("input");
  input.className = "input";
  input.id = "input-" + q.id;
  input.name = q.id;
  input.type = q.type === "email" ? "email" : q.type === "tel" ? "tel" : "text";
  input.placeholder = qText(q.id, "placeholder");
  input.value = state.answers[q.id] || "";
  input.required = !!q.required;
  input.autocomplete = q.id === "companyName" ? "organization" : q.id === "contactName" ? "name" : q.id === "email" ? "email" : "tel";
  if (q.type === "email") input.inputMode = "email";
  if (q.type === "tel") input.inputMode = "tel";
  input.enterKeyHint = "next";

  input.addEventListener("input", () => {
    state.answers[q.id] = input.value.trim();
    input.classList.remove("is-invalid");
    hideError();
    updateNextState();
    saveState();
  });

  wrap.appendChild(label);
  wrap.appendChild(input);
  els.questionBody.appendChild(wrap);

  /* Focus the field on desktop; on touch devices avoid forcing the keyboard open */
  if (window.matchMedia("(hover: hover)").matches) {
    setTimeout(() => input.focus(), 60);
  }
}

function renderChoices(q) {
  const group = document.createElement("div");
  group.className = "choices";
  group.setAttribute("role", "radiogroup");
  group.setAttribute("aria-labelledby", "question-title");

  q.options.forEach(opt => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "choice";
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", String(state.answers[q.id] === opt.key));
    btn.dataset.key = opt.key;
    btn.innerHTML = '<span class="radio" aria-hidden="true"></span><span class="choice-text"></span>';
    btn.querySelector(".choice-text").textContent = optionLabel(q.id, opt.key);
    btn.addEventListener("click", () => selectChoice(q, opt.key));
    group.appendChild(btn);
  });

  /* Keyboard: arrow keys move between options */
  group.addEventListener("keydown", e => {
    const items = $$(".choice", group);
    const i = items.indexOf(document.activeElement);
    if (i === -1) return;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") { e.preventDefault(); items[(i + 1) % items.length].focus(); }
    if (e.key === "ArrowUp" || e.key === "ArrowLeft") { e.preventDefault(); items[(i - 1 + items.length) % items.length].focus(); }
  });

  els.questionBody.appendChild(group);
}

function selectChoice(q, key) {
  state.answers[q.id] = key;
  $$(".choice", els.questionBody).forEach(b => b.setAttribute("aria-checked", String(b.dataset.key === key)));
  hideError();
  updateNextState();
  saveState();
  /* No auto-advance: the user confirms with Continue */
}

/* ============================================================
   Validation
   ============================================================ */
function isEmailValid(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);
}

function validateCurrent() {
  const q = QUESTIONS[state.index];
  const val = state.answers[q.id];

  if (q.type === "choice") {
    if (!val) return t("ui.chooseOne");
    return null;
  }
  if (q.required && !val) return t("ui.required");
  if (q.type === "email" && val && !isEmailValid(val)) return t("ui.invalidEmail");
  return null;
}

function updateNextState() {
  /* Keep Continue enabled so the user always gets a clear message on click,
     but visually hint when nothing has been chosen yet. */
  els.btnNext.disabled = false;
}

function showError(msg) {
  els.fieldError.textContent = msg;
  els.fieldError.hidden = false;
  const input = $(".input", els.questionBody);
  if (input) { input.classList.add("is-invalid"); input.focus(); }
}
function hideError() {
  els.fieldError.hidden = true;
  els.fieldError.textContent = "";
}

/* ============================================================
   Navigation
   ============================================================ */
function next() {
  const err = validateCurrent();
  if (err) { showError(err); return; }
  if (state.index < QUESTIONS.length - 1) {
    state.index++;
    renderQuestion();
  } else {
    finish();
  }
}
function back() {
  if (state.index === 0) return;
  state.index--;
  renderQuestion();
}

/* ============================================================
   Loading sequence → result
   ============================================================ */
function finish() {
  showView("loading");
  const messages = t("ui.loading");
  const stepMs = 650; /* 4 messages ≈ 2.6 s */
  let i = 0;
  els.loadingText.textContent = messages[0];

  const timer = setInterval(() => {
    i++;
    if (i < messages.length) {
      els.loadingText.style.animation = "none";
      void els.loadingText.offsetHeight;
      els.loadingText.style.animation = "";
      els.loadingText.textContent = messages[i];
    } else {
      clearInterval(timer);
      state.result = runDiagnostic(state.answers, state.lang);
      submitDiagnostic(state.result);
      showView("result");
      renderResult(state.result);
    }
  }, stepMs);
}

/* ============================================================
   Integration hook — replace the body to send data anywhere
   (webhook, GoHighLevel, CRM, backend, email, API...)
   ============================================================ */
function submitDiagnostic(result) {
  /* Strip render-only internals before exporting */
  const payload = {};
  Object.keys(result).forEach(k => { if (!k.startsWith("_")) payload[k] = result[k]; });

  console.log("%cELEVRA 360° SALES DIAGNOSTIC™ — result", "font-weight:bold;color:#b3924f");
  console.log(payload);
  console.log("JSON:", JSON.stringify(payload));

  /* Example for later:
  fetch("https://your-webhook-url", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload)
  }).catch(err => console.warn("Diagnostic submission failed", err));
  */
  return payload;
}

/* ============================================================
   Result rendering
   ============================================================ */
function el(tag, cls, text) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (text !== undefined && text !== null) e.textContent = text;
  return e;
}

function formatMoney(n) {
  return "$" + Math.round(n).toLocaleString("en-US");
}

function renderResult(r) {
  const root = els.resultInner;
  root.innerHTML = "";
  const s = r._scores;
  const ui = k => t("ui." + k);

  /* ----- Head ----- */
  const head = el("div", "result-head");
  head.appendChild(el("p", "result-brand", t("ui.brand") + " " + t("ui.brandSub")));
  head.appendChild(el("p", "result-for", ui("resultFor")));
  head.appendChild(el("h1", "result-company", r.companyName || "—"));
  const dateStr = new Date(r.date).toLocaleDateString(state.lang === "en" ? "en-US" : state.lang === "pt" ? "pt-BR" : "es-ES", { year: "numeric", month: "long", day: "numeric" });
  head.appendChild(el("p", "result-date print-only", ui("printDate") + " " + dateStr));
  root.appendChild(head);

  /* ----- Score ring ----- */
  const hero = el("div", "score-hero");
  const ring = el("div", "score-ring");
  ring.setAttribute("role", "img");
  ring.setAttribute("aria-label", ui("scoreRingLabel") + " " + r.overallScore + " " + ui("outOf"));
  const R = 46, C = 2 * Math.PI * R;
  ring.innerHTML =
    '<svg viewBox="0 0 100 100" aria-hidden="true">' +
    '<circle class="track" cx="50" cy="50" r="' + R + '"/>' +
    '<circle class="arc" cx="50" cy="50" r="' + R + '" stroke-dasharray="' + C + '" stroke-dashoffset="' + C + '"/>' +
    '</svg>' +
    '<div class="value"><div class="score-number">' + r.overallScore + '</div><div class="score-outof">' + ui("outOf") + '</div></div>';
  hero.appendChild(ring);
  hero.appendChild(el("span", "score-status is-" + r.status, t("statuses." + r.status)));
  hero.appendChild(el("p", "score-overall-label", ui("overallLabel")));
  root.appendChild(hero);
  requestAnimationFrame(() => requestAnimationFrame(() => {
    $(".arc", ring).style.strokeDashoffset = String(C * (1 - r.overallScore / 100));
  }));

  /* ----- Category bars ----- */
  const scoresBlock = el("section", "block");
  scoresBlock.appendChild(el("h2", "block-title", ui("scoresTitle")));
  scoresBlock.appendChild(el("p", "block-intro", ui("scoresIntro")));
  const bars = el("div", "bars");
  CATEGORY_ORDER.forEach(c => {
    const st = getStatus(s[c]);
    const row = el("div", "bar-row");
    row.appendChild(el("span", "bar-name", t("categories." + c)));
    row.appendChild(el("span", "bar-score", String(s[c])));
    const track = el("div", "bar-track");
    const fill = el("div", "bar-fill is-" + st);
    track.appendChild(fill);
    row.appendChild(track);
    row.appendChild(el("span", "bar-status", t("statuses." + st)));
    bars.appendChild(row);
    requestAnimationFrame(() => requestAnimationFrame(() => { fill.style.width = s[c] + "%"; }));
  });
  scoresBlock.appendChild(bars);
  root.appendChild(scoresBlock);

  /* ----- Perceived vs diagnosed ----- */
  const p = r._perception;
  const cmpBlock = el("section", "block");
  cmpBlock.appendChild(el("h2", "block-title", ui("perceivedTitle")));
  const cmp = el("div", "compare");
  const c1 = el("div", "compare-card");
  c1.appendChild(el("p", "compare-label", ui("perceivedLabel")));
  c1.appendChild(el("p", "compare-value", p.unsure ? ui("perceivedNone") : optionLabel("q25", p.perceivedKey)));
  const c2 = el("div", "compare-card is-data");
  c2.appendChild(el("p", "compare-label", ui("dataLabel")));
  const noBottleneck = r.priorityRanking.length === 0;
  c2.appendChild(el("p", "compare-value", noBottleneck ? ui("noBottleneck") : t("bottlenecks." + p.diagnosedCategory + ".name")));
  cmp.appendChild(c1); cmp.appendChild(c2);
  cmpBlock.appendChild(cmp);
  const verdict = noBottleneck ? ui("alignStrong") : p.unsure ? ui("alignUnsure") : p.aligned ? ui("alignMatch") : ui("alignDiff");
  cmpBlock.appendChild(el("p", "compare-verdict", verdict));
  root.appendChild(cmpBlock);

  /* ----- Financial exposure ----- */
  const ex = r._exposure;
  const finBlock = el("section", "block");
  finBlock.appendChild(el("h2", "block-title", ui("financialTitle")));
  const exWrap = el("div", "exposure");
  const lvl = el("div", "exposure-level-wrap");
  lvl.appendChild(el("p", "compare-label", ui("exposureLabel")));
  lvl.appendChild(el("p", "exposure-level is-" + ex.level, t("exposure." + ex.level)));
  exWrap.appendChild(lvl);
  const body = el("div", "exposure-body");
  const txt = ex.unknownLost ? ui("exposureTextUnknown") : ex.level === "low" ? ui("exposureTextLow") : ui("exposureText");
  body.appendChild(el("p", null, txt));
  if (ex.range) {
    const rg = el("div", "exposure-range");
    rg.appendChild(el("p", "compare-label", ui("exposureRangeLabel")));
    const val = el("p", "exposure-range-value",
      ex.range.high !== null ? formatMoney(ex.range.low) + " – " + formatMoney(ex.range.high) : formatMoney(ex.range.low) + "+");
    val.appendChild(el("span", "exposure-range-unit", ui("exposureRangeUnit")));
    rg.appendChild(val);
    rg.appendChild(el("p", "exposure-note", ui("exposureNote")));
    body.appendChild(rg);
  }
  exWrap.appendChild(body);
  finBlock.appendChild(exWrap);
  root.appendChild(finBlock);

  /* ----- Priorities ----- */
  const recommended = r.recommendedSolutions;
  if (r.priorityRanking.length) {
    const prBlock = el("section", "block");
    prBlock.appendChild(el("h2", "block-title", ui("prioritiesTitle")));
    prBlock.appendChild(el("p", "block-intro", ui("prioritiesIntro")));
    const list = el("div", "priorities");
    r.priorityRanking.forEach(pr => {
      const b = "bottlenecks." + pr.category + ".";
      const card = el("article", "priority");
      card.appendChild(el("div", "priority-rank", "0" + pr.rank));
      const headRow = el("div", "priority-head");
      headRow.appendChild(el("h3", "priority-name", t(b + "name")));
      headRow.appendChild(el("span", "priority-status is-" + pr.status, t("statuses." + pr.status) + " · " + pr.score));
      card.appendChild(headRow);
      card.appendChild(el("p", "priority-meta", t("ui.priorityLabel", { n: pr.rank }) + " · " + t("categories." + pr.category)));
      const dl = el("dl", "priority-body");
      const add = (label, value, cls) => {
        const d = el("div");
        d.appendChild(el("dt", null, label));
        d.appendChild(el("dd", cls, value));
        dl.appendChild(d);
      };
      add(ui("issueLabel"), t(b + "explanation"));
      add(ui("impactLabel"), t(b + "impact"));
      let rec = t(b + "recommendation");
      add(ui("recommendationLabel"), rec);
      if (pr.solution) add(ui("planSolutionLabel"), t("solutions." + pr.solution + ".name"), "priority-solution");
      card.appendChild(dl);
      list.appendChild(card);
    });
    prBlock.appendChild(list);
    root.appendChild(prBlock);
  }

  /* ----- Action plan or strong foundation ----- */
  if (recommended.length) {
    const planBlock = el("section", "block");
    planBlock.appendChild(el("h2", "block-title", ui("planTitle")));
    planBlock.appendChild(el("p", "block-intro", ui("planIntro")));
    const plan = el("div", "plan");
    const urlFor = { ai: ELEVRA_CONFIG.aiReceptionistUrl, website: ELEVRA_CONFIG.websiteUrl, consulting: ELEVRA_CONFIG.consultingUrl };
    recommended.forEach((key, i) => {
      const sPath = "solutions." + key + ".";
      const item = el("article", "plan-item");
      item.appendChild(el("div", "plan-step", (i + 1 < 10 ? "0" : "") + (i + 1)));
      item.appendChild(el("h3", "plan-title", t(sPath + "planTitle")));
      const issue = el("p", "plan-issue");
      issue.appendChild(el("span", null, ui("planIssueLabel") + ": "));
      issue.appendChild(document.createTextNode(t(sPath + "issue")));
      item.appendChild(issue);
      const sol = el("div", "plan-solution");
      sol.appendChild(el("p", "plan-solution-name", t(sPath + "name")));
      sol.appendChild(el("p", "plan-solution-desc", t(sPath + "description")));
      item.appendChild(sol);
      const ctaWrap = el("div", "plan-cta");
      const cta = el("button", "btn btn-gold", t(sPath + "cta"));
      cta.type = "button";
      cta.addEventListener("click", () => openCta(urlFor[key], key));
      ctaWrap.appendChild(cta);
      item.appendChild(ctaWrap);
      plan.appendChild(item);
    });
    planBlock.appendChild(plan);
    root.appendChild(planBlock);
  } else {
    const strong = el("section", "block");
    const card = el("div", "strong-card");
    card.appendChild(el("h2", "block-title", ui("strongTitle")));
    card.appendChild(el("p", null, ui("strongText")));
    strong.appendChild(card);
    root.appendChild(strong);
  }

  /* ----- Final CTA ----- */
  const fin = el("section", "final-cta");
  fin.appendChild(el("h2", "final-cta-title", ui("mainCta")));
  fin.appendChild(el("p", "final-cta-text", ui("mainCtaText")));
  const actions = el("div", "final-cta-actions");
  const main = el("button", "btn btn-primary btn-lg", ui("mainCta"));
  main.type = "button";
  main.addEventListener("click", () => openCta(ELEVRA_CONFIG.consultationUrl, "consultation"));
  actions.appendChild(main);
  const pdf = el("button", "btn btn-ghost", ui("downloadPdf"));
  pdf.type = "button";
  pdf.addEventListener("click", downloadPdf);
  actions.appendChild(pdf);
  const again = el("button", "link-btn", ui("newDiagnostic"));
  again.type = "button";
  again.addEventListener("click", openStartOver);
  actions.appendChild(again);
  fin.appendChild(actions);
  root.appendChild(fin);
}

/* PDF: uses the browser's native print dialog (desktop, iOS and Android).
   The user chooses "Save as PDF" as the destination. */
function downloadPdf() {
  const prevTitle = document.title;
  document.title = "Elevra-360-Diagnostic-" + (state.result && state.result.companyName ? state.result.companyName.replace(/[^\w-]+/g, "-") : "result");
  window.print();
  setTimeout(() => { document.title = prevTitle; }, 1000);
}

/* CTA behaviour: open the configured URL, or show a friendly demo notice */
function openCta(url, key) {
  if (url && url.trim()) {
    window.open(url, "_blank", "noopener");
  } else {
    console.info("[Elevra CTA] No URL configured for:", key, "— set it in ELEVRA_CONFIG (script.js).");
    showToast(t("ui.demoNotice"));
  }
}

let toastTimer = null;
function showToast(msg) {
  els.toast.textContent = msg;
  els.toast.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { els.toast.hidden = true; }, 3200);
}

/* ============================================================
   Start over (with confirmation)
   ============================================================ */
let lastFocused = null;
function openStartOver() {
  lastFocused = document.activeElement;
  els.modal.hidden = false;
  $("[data-action='modal-cancel']", els.modal).focus();
}
function closeStartOver() {
  els.modal.hidden = true;
  if (lastFocused && lastFocused.focus) lastFocused.focus();
}
function confirmStartOver() {
  clearState();
  closeStartOver();
  goHome();
}

/* ============================================================
   Events
   ============================================================ */
document.addEventListener("click", e => {
  const target = e.target.closest("[data-action], [data-lang]");
  if (!target) return;

  if (target.dataset.lang) { setLanguage(target.dataset.lang); return; }

  switch (target.dataset.action) {
    case "home":          e.preventDefault(); goHome(); break;
    case "start":         startDiagnostic(false); break;
    case "resume":        startDiagnostic(true); break;
    case "next":          next(); break;
    case "back":          back(); break;
    case "startover":     openStartOver(); break;
    case "modal-cancel":  closeStartOver(); break;
    case "modal-confirm": confirmStartOver(); break;
  }
});

/* Enter inside a text field = Continue; Escape closes the modal */
els.form.addEventListener("submit", e => { e.preventDefault(); next(); });
document.addEventListener("keydown", e => {
  if (e.key === "Escape" && !els.modal.hidden) closeStartOver();
});
/* Click on the modal backdrop closes it */
els.modal.addEventListener("click", e => { if (e.target === els.modal) closeStartOver(); });

/* ============================================================
   Init — restore progress if the page was refreshed
   ============================================================ */
(function init() {
  loadState();
  applyStaticTranslations();

  if (state.view === "form" && Object.keys(state.answers).length) {
    showView("form");
    renderQuestion();
  } else if (state.view === "result" && Object.keys(state.answers).length) {
    state.result = runDiagnostic(state.answers, state.lang);
    showView("result");
    renderResult(state.result);
  } else {
    goHome();
  }
})();
