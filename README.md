# ELEVRA 360° Sales Diagnostic™

Static web app — HTML5, CSS3, vanilla JavaScript. No build step, no backend.
Open `index.html` directly or deploy the folder to GitHub Pages / any static host.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page shell: header + language switch, hero, question view, loading view, result view, confirm dialog |
| `styles.css` | Design system (white / graphite / gold), responsive rules, iOS & Android safe-area handling |
| `translations.js` | **All texts** in EN / PT / ES (`TRANSLATIONS`) — UI, questions, options, statuses, bottlenecks, solutions |
| `questions.js` | **Question structure** (`QUESTIONS`) — ids, sections, types, option keys and internal scores |
| `scoring.js` | **Score engine** — `CATEGORY_WEIGHTS`, status bands, recommendation rules, priorities, financial exposure, perceived vs diagnosed |
| `script.js` | App logic — `ELEVRA_CONFIG` (CTA URLs), navigation, validation, localStorage, loading, result rendering, `submitDiagnostic()` |

## Where to edit

- **CTA URLs** → `script.js` → `ELEVRA_CONFIG`
- **Category weights** → `scoring.js` → `CATEGORY_WEIGHTS`
- **Option scores** → `questions.js` → `score` on each option
- **Recommendation triggers** → `scoring.js` → `detectSolutions()`
- **Texts / translations** → `translations.js`
- **Integration (webhook, GoHighLevel, CRM)** → `script.js` → `submitDiagnostic(result)`

## Result payload

`submitDiagnostic()` logs a JSON object to the console containing date, language,
company & contact data, all answers, category scores, overall score, status,
perceived vs diagnosed problem, recommended solutions, priority ranking and
potential revenue exposure.
