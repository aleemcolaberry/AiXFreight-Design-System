# AI UX metrics

Model performance tells us how the copilot performs. These six tell us how operators experience it. Every AI surface (recommendation card, ETA revision, quote explanation, auto-reroute toast) ships instrumented for all six; product reviews read them together, never accuracy alone.

Adapted from *The AI Product Designer Playbook, Part 9 — AI UX Metrics* (Simran Agarwal) to the AiXFreight control tower. Numbers in the specimen cards are illustrative targets, not results.

## The six measures

| # | Metric | Question | How we instrument it | Component / rule |
|---|---|---|---|---|
| 01 | **Learnability** | How fast does a new operator apply the first AI route without help? | `ai_first_apply` — time from first session to first applied recommendation; first-attempt success on New quote. Target < 3 min new, < 1.5 min returning. | Card title is the action (verb + object). Eyebrow always "AI recommendation". No onboarding tour — if one is needed, the card is unclear. |
| 02 | **Trust** | Do users believe the copilot is reliable *for this kind of decision*? | Repeat acceptance rate per decision type (reroute / ETA / consolidation); "Why this" open rate; quarterly 5-point trust survey per type. | Measure reroutes and ETA revisions separately — trust is contextual. Undo on every applied action; never auto-apply above the user's threshold (Settings → AI automation). |
| 03 | **User confidence** | Is the user willing to act on *this* output? | Review → Apply dwell time; abandon rate inside the Dialog; post-task "willing to act" 1–5, asked before and after opening AiDisclosure. | Confidence must rise because evidence appeared, not because the card looks certain. No bolder styling for higher model confidence — the number changes, the card does not. |
| 04 | **Transparency** | Can users find where the recommendation came from and what it did not consider? | `ai_why_opened`; task test "find the source of this ETA" (target ≥ 85%); "name one thing the AI did not consider" (target ≥ 60%). | `AiDisclosure` under every AI output: rationale, timestamped sources, limits. Collapsed by default. Not every technical detail — only what the operator needs to decide. |
| 05 | **Response satisfaction** | Did the output address the real goal? | `AiFeedback` thumbs and reason chip per recommendation id; weekly 5-point post-response rating sample. | A cheaper lane that misses the delivery window is a correct, unsatisfying answer. Default reasons: Wrong cost · Wrong ETA · Not relevant · Too much to review. |
| 06 | **Cognitive load** | How much effort to evaluate and act? | Steps to decision (target ≤ 3: card → Dialog → Toast); numbers shown on the card (max 3); NASA-TLX on the New quote flow before/after AI. | Card shows exactly cost · impact · confidence. Everything else lives behind "Why this". The AI removes review work; it never adds information to the default view. |

## Two distinctions the UI must respect

- **Trust ≠ confidence.** Trust is about the system ("is the copilot reliable for reroutes?"); confidence is about one answer ("do I have enough evidence to switch lane 2 now?"). An operator can trust the copilot and still hesitate. Fix low confidence with evidence (`AiDisclosure`), never with visual certainty.
- **Accuracy ≠ good UX.** A route can be cheapest, grounded and technically optimal and still create six numbers to compare, low confidence and a missed goal. The experience decides whether the operator acts.

## Signal → what to investigate

Investigation prompts, not diagnoses.

- **Low learnability** — Is the card title an action? Is "AI recommendation" the eyebrow on every AI surface? Are there more than three numbers?
- **Low trust** — Is the copilot reliable enough for this decision type? Is Undo present and discoverable? Was anything auto-applied above the threshold?
- **Low confidence** — Do users have enough evidence? Is AiDisclosure present, and does the rationale name the goal it protects?
- **Low transparency** — Are sources timestamped? Are limits stated in operator language? Is the disclosure findable on mobile (390px)?
- **Low satisfaction** — Does the recommendation address the shipper's real goal (window, cost, CO₂)? Read the reason chips before the rating.
- **High cognitive load** — Too much information, or too much work? Count numbers on the card and steps to Apply.

## Rules (added to the system)

1. Every AI output composes: action title → cost · impact · confidence → `AiDisclosure` → one primary action → Toast with Undo → `AiFeedback`. Specimen: `pattern-ai-anatomy.html`.
2. Confidence is a number in mono, never a color, bar or badge — visual certainty inflates user confidence without evidence.
3. Rationale copy: what the AI knows + what it did, ≤ 2 sentences, names the goal ("keeps the Friday delivery window"). No model internals.
4. Limits are mandatory when the AI cannot see something material (customs dwell, rate validity, weather). An empty limits list is a review flag.
5. Log `ai_first_apply`, `ai_why_opened`, `ai_feedback`, `ai_feedback_reason`, `ai_apply`, `ai_undo`, `ai_dismiss` with the recommendation id and decision type.
6. Don't design the AI to look intelligent. Design it so the operator understands what it knows, what it did, and what to do next.

## The human side

Understand → Trust → Decide → Act → Reflect. Card (understand) · Why this (trust) · Dialog (decide) · Apply + Undo (act) · AiFeedback (reflect). Good AI UX supports the whole journey; model performance is not human experience.
