# PlayPower Labs — Airbnb Clone: Phase-Based Execution Plan (v2)

**Reference (single source of truth):** https://airbnb-clone-umber-two.vercel.app
**Timebox:** 7 days
**Format:** phases, not fixed days — a phase ends when its exit criteria are met, not when the clock says so. A rough day mapping is given per phase so you can still track pace.

---

## Before Phase 1: the one thing no AI can do for you

Neither Claude nor ChatGPT can open that reference URL programmatically — it blocks automated access. That means **any plan (including this one) is only as good as the manual recon you do yourself** in a real browser. Phase 1 below is not optional scaffolding, it's the actual foundation of "pixel-perfect." Budget real time for it.

**Update:** the Listing Page structure has now been captured from real screenshots and written up section-by-section in `ui-plan.md` (companion file). Treat `ui-plan.md` as the concrete starting spec for Phase 1 and Phase 3 — it replaces guesswork with an actual section inventory (nav bar, photo grid, sticky booking card, highlights, amenities, reviews, location, things-to-know, nearby carousel) and a component list to build. What it does **not** cover — because it wasn't in the screenshots — is the Photo Tour and Lightbox views, so those still need a dedicated manual pass before Phase 5/6.

---

## Phase 0 — Guardrails & Scope Freeze (~2 hrs, Day 1 AM)

Lock these in before writing any code, so you're not re-deciding mid-week:

**MUST HAVE** (this is what's graded — protect these first if time runs short)
- Listing page: header, title/info, photo grid, host info, description, amenities, booking card, location section
- "Show all photos" → Photo Tour
- Photo Tour → Lightbox
- Lightbox: prev/next buttons, keyboard ← / →, Escape to close
- Correct hover states, typography, layout, color, spacing
- Focus management (focus moves in on open, trapped, restored on close)
- Deployed, working app (Vercel)
- Architecture diagram
- AI prompt log + agent/skill config files (explicitly requested in the brief)

**SHOULD HAVE**
- Exact transition timing/easing, sticky elements if present, save/share button behavior, screen-reader refinement

**NICE TO HAVE**
- Footer minutiae, sub-pixel animation differences

**OUT OF SCOPE** — don't build real auth, payments, booking backend, search backend, or a database. The architecture diagram *describes* these; the app doesn't implement them. Mobile isn't required.

**Repo & tooling**
- Private Git repo (never public — explicit instruction).
- Start `/docs/prompts.md` and `/docs/spec.md` now — log as you go, not retroactively; "sequence of prompts" may be asked about directly.
- Stack: Next.js (TypeScript) + Tailwind + Framer Motion (only where motion is actually needed) + mock/local data + localStorage for any persisted UI state (e.g. save-heart toggle) + Vercel deploy.
- Folder structure up front so an AI agent doesn't dump everything into one file:
```
app/
components/
  listing/
  gallery/
  lightbox/
  ui/
data/
lib/
agents/
docs/
```

**Your AI workflow — keep it to 3 real roles, not a pile of theoretical agents:**
1. **UI Builder** — implements components, Tailwind styling, layout, interaction wiring.
2. **Visual Reviewer** — takes your screenshot + the reference screenshot, flags spacing/type/color/dimension diffs.
3. **Accessibility/QA Reviewer** — keyboard nav, focus management, ARIA, lightbox behavior.

Save each as an actual prompt/config file under `/agents/` — this is graded directly, not just useful for you.

---

## Phase 1 — Manual Reference Recon (~half day, Day 1)

This is where the actual fidelity gets decided. Do it yourself in the browser (DevTools), not through an AI's guess.

**Start from `ui-plan.md`** — it already has the Listing Page's full section inventory (18 sections, nav bar through "More stays nearby") and a reusable-component list pulled from real screenshots. Your job in this phase is to turn that structural spec into a *pixel* spec: for each section in `ui-plan.md`, extract and add into `/docs/spec.md`:
- **Typography:** font family, sizes, weights, line-heights per text role (title, price, section headers, body)
- **Color:** exact hex values (sample with the DevTools color picker) for text, backgrounds, borders, icons
- **Spacing:** padding/margin rhythm between and within sections (use the box-model inspector)
- **Surface details:** border-radius, shadow values, icon set/style
- **Behavior:** every hover/active state, whether the promo card and booking card are actually sticky/fixed, tab-bar scroll-to behavior

Then separately — since the Photo Tour and Lightbox aren't in the screenshots yet — do a dedicated pass on those two views specifically:
- Click "Show all photos," screenshot the resulting layout, captions, and scroll behavior
- Click into a photo, screenshot the lightbox, and test prev/next, keyboard ←/→, Escape, and whether focus is visibly trapped

**Don't try to catalog every pixel** — identify the handful of rules (spacing scale, type scale, color palette) that, once correct, make 80% of the page look right automatically.

**Exit criteria:** `/docs/spec.md` has concrete pixel/color/type values layered on top of `ui-plan.md`'s structure, plus a filled-in Photo Tour/Lightbox section, and you have baseline screenshots saved for all three views at one consistent desktop width (e.g. 1440px).

---

## Phase 2 — Foundation (~half day, Day 1 PM)

- Scaffold Next.js + TS + Tailwind, wire your color/type/spacing tokens from `spec.md` into the Tailwind theme (not hardcoded per-component) so fidelity fixes propagate.
- Build the empty page shell with correct overall structure.
- Confirm: app runs locally, first major section renders, Git history has started, `/docs/spec.md` and `/docs/prompts.md` exist.

**Exit criteria:** blank-but-structurally-correct shell, deployable.

---

## Phase 3 — Listing Page: Structure First (~1–1.5 days, Day 2)

Build in this order, and don't polish before the structure is right:
**correct structure → correct dimensions → correct content → then polish.**

Follow `ui-plan.md`'s section order exactly (it's numbered 1–18): nav bar → title row → photo grid → subtitle/promo → sticky sub-header (tabs + price/Reserve) → guest-favourite strip → host row → highlights (3×) → translation banner → description → sticky booking card → "Where you'll sleep" → "What this place offers" → trip/date block → Reviews → Location → "Things to know" → "More stays nearby." Build the components from `ui-plan.md`'s component inventory (`TabBar`, `HighlightItem`, `AmenityRow`, `ReviewCard`, etc.) as isolated, reusable pieces rather than one-off markup per section — several sections reuse the same shapes (e.g. review cards and nearby-listing cards both follow an image+title+meta pattern).

**Checkpoint:** screenshot at the exact reference viewport width, compare header height, page width, margins, image dimensions, grid gaps, typography, and vertical rhythm. Fix the *largest* differences first, not the easiest ones.

---

## Phase 4 — Listing Page: Fidelity & Interaction Pass (~1 day, Day 3)

Implement hover states, save/share buttons, image hover behavior, sticky elements (if the reference has them), scroll behavior, visible focus states.

Use this loop repeatedly — it's the single most important habit in this whole plan:

```
Largest visual difference → Fix → Screenshot → Compare → Next largest difference
```

Run your Visual Reviewer agent here.

---

## Phase 5 — Photo Tour (~1 day, Day 4)

Build the full-screen gallery reached from "Show all photos" or any hero image. Match layout, per-photo captions, scroll behavior, and the entry/exit transition. Wire every gallery image into the lightbox.

**Exit criteria:** every photo has a working path into the lightbox; entry/exit transition timing roughly matches the reference.

---

## Phase 6 — Lightbox + Accessibility (~1 day, Day 5)

Highest-risk area — this is explicitly named in the brief ("keyboard navigation, focus management, and accessibility"), so don't half-do it.

Implement: open, close, prev, next, keyboard ←/→, Escape, click-outside-to-close (if present), focus moves into the lightbox on open, focus is trapped inside while open, focus returns to the trigger element on close, correct image/caption state, transition animation.

**Test manually** with: mouse, Tab, Shift+Tab, Escape, Arrow keys, and a screen reader if you have one available. Then run your Accessibility/QA agent.

---

## Phase 7 — Full-Clone QA (continuous, converges Day 6 AM)

Don't save this for the end — you've been doing mini-versions of it since Phase 3. This phase is the full sweep across all three views together:
- **Visual:** typography, spacing, dimensions, colors, borders, shadows, icons, image crops
- **Behavioral:** clicks, hover, scroll, navigation, close, keyboard
- **Accessibility:** focus order, focus trap, labels, semantic HTML
- **Technical:** console errors, broken images, hydration errors, direct-URL access, refresh behavior

---

## Phase 8 — Architecture Diagram (~half day, Day 6 PM)

Diagram a *production-scale* version of this (real Airbnb-class marketplace), covering frontend, backend, storage, search, and deployment. Aim for something that shows **data flow and reasoning**, not a logo soup:

```
                    Users
                      │
                      ▼
                 CDN / Edge
                      │
                      ▼
              Next.js Frontend
                      │
                      ▼
                 API Gateway
                      │
        ┌─────────────┼─────────────┐
        ▼             ▼             ▼
    Listings       Users        Bookings
    Service        Service       Service
        │             │             │
        └─────────────┼─────────────┘
                      ▼
                 PostgreSQL
                      │
               ┌──────┴──────┐
               ▼             ▼
             Redis       Read Replicas

Images → Object Storage → Image CDN
Search → OpenSearch ← Event Stream (CDC from Postgres)
```
Add payments, messaging, monitoring, CI/CD, and multi-region strategy only where they genuinely add to the explanation — don't pad it. Export as PNG/PDF.

---

## Phase 9 — Packaging & Submission (Day 7 — buffer, not first QA)

Day 7 should not be the first time you do a serious comparison pass — Phase 7 already happened. Use it to close out:

- [ ] Listing page / Photo Tour / Lightbox all work
- [ ] Keyboard nav, Escape, focus trap, focus restoration all verified
- [ ] Hover states and animations match
- [ ] No console errors
- [ ] Screenshots compared one final time against baseline
- [ ] Deployed version tested (not just local)
- [ ] Architecture diagram finalized and exported
- [ ] `/docs/prompts.md` cleaned up and readable
- [ ] `/agents/` configs included and readable
- [ ] Repo is private; nothing lifted directly from the reference's shipped source
- [ ] Final ZIP: code + architecture diagram + prompt log

---

## The one rule to run on every phase

```
REFERENCE → INSPECT → IMPLEMENT → RUN → SCREENSHOT → COMPARE → FIX → TEST
```

Don't let a phase "finish" without closing this loop — that's how you avoid discovering on Day 6 that the whole layout is 30px off from the reference.

## AI prompting style that actually helps here

Small, scoped tasks beat one big ask:

```
Task: Build only the header, based on /docs/spec.md.
Task: Compare header screenshot against reference.png.
Task: Fix the spacing/typography differences found.
```

vs. "build the Airbnb clone" — the scoped version gives smaller mistakes, cleaner Git history, and a prompt log that's actually useful evidence of your workflow.
