# PlayPower Labs — Airbnb Clone

A pixel-faithful recreation of the supplied Airbnb listing-page reference, built with Next.js,
TypeScript and Tailwind CSS v4.

Reference (single source of truth): `https://airbnb-clone-umber-two.vercel.app/`

> The live reference sits behind a Vercel Security Checkpoint (BotID) that rejects automated
> browsers, so it cannot be inspected with DevTools. Every visual value in this project was therefore
> **measured from reference captures with pixel-level raster analysis** rather than read from the DOM.
> See [`docs/prompts.md`](docs/prompts.md) for the full account, including the measurements and the
> corrections they forced.

---

## Quick start

**Requires Node.js 20.9 or newer** — that is Next.js 16's minimum. Built and verified on Node 24.

```bash
npm install     # install dependencies
npm run dev     # start the dev server
```

Open **<http://localhost:3000>**. Stop the server with `Ctrl+C`.

### Production build

```bash
npm run build   # compile the production build
npm run start   # serve it on http://localhost:3000
```

### Checks

Run all three before calling any change done — `build` also runs the TypeScript compiler:

```bash
npm run typecheck   # tsc --noEmit
npm run lint        # eslint
npm run build       # production build
```

All three are clean on the current tree. There are no unit tests; the gates are these three plus a
browser pass (see [Verifying a change](#verifying-a-change)).

### npm scripts

| Script | Runs | What it does |
| --- | --- | --- |
| `npm run dev` | `next dev` | Dev server with Turbopack on port 3000 |
| `npm run build` | `next build` | Production build (includes a type check) |
| `npm run start` | `next start` | Serve the production build |
| `npm run lint` | `eslint` | Lint the whole project |
| `npm run typecheck` | `tsc --noEmit` | Type-check only, no output files |

---

## Troubleshooting

### `npm install` doesn't install Tailwind / TypeScript / ESLint

On some Windows setups `NODE_ENV=production` is set **globally**, and npm then silently skips
`devDependencies`. Install with one of these:

```bash
NODE_ENV=development npm install    # bash
npm install --include=dev           # any shell
```

You'll know it bit you when `npm run build` complains it cannot resolve Tailwind.

### `Another next dev server is already running.`

Next.js 16 permits **one dev server per project directory**, and the error names the PID and the
directory it found. Either use that server, or stop it and start again:

```bash
taskkill /PID <pid> /F      # Windows
kill -9 <pid>               # macOS / Linux
npx kill-port 3000          # cross-platform helper
```

This limit is per **directory**, not per port — a second server started from the same directory with
`-p 3001` fails too. (That matters here: `npm run dev` will refuse to start if an older server for
this folder is still alive.)

### Odd errors after changing config or switching branches

Clear the build cache:

```bash
rm -rf .next                # Windows: rmdir /s /q .next
npm run build
```

---

## Verifying a change

`npm run build` passing is not the definition of done for this project. The working loop is:

1. `npm run typecheck && npm run lint && npm run build` — all clean.
2. Render the page and inspect it in a real browser at **1920×1080** (the captures' viewport).
3. `axe-core` must report **0 violations** — the page currently reports 0 violations, 40 passes.
4. Check the console is free of errors and that all images load (`0` broken, all with `alt`).
5. For anything claimed against the reference, **measure the raster** rather than eyeballing it; see
   the measurement technique described in [`docs/prompts.md`](docs/prompts.md).

---

## What is built

| Area | Status |
| --- | --- |
| Listing page — every section of the reference | Built |
| Header + search pill | Built; typography matched by ink-density measurement |
| Photo grid — hover scale with scrim and caption overlay | Built |
| Sticky section nav — slides in from the top once you scroll past the gallery | Built |
| Trip calendar — two months, stay range highlighted, "Clear dates" | Built |
| Reviews — full-width, centred rating summary and breakdown | Built |
| Location — stylised map, measured coastline | Built |
| Meet your host — host card, co-hosts, host details | Built; awaits host/co-host images (see below) |
| Photo Tour — full-screen gallery | Built (reference-unverified) |
| Lightbox — prev/next, `←`/`→`, `Escape`, real focus trap and restoration | Built (reference-unverified) |

**Page layout.** The upper half is a two-column grid (main content + sticky reservation sidebar).
Below it, **Reviews, Location, Meet your host, Things to know and Nearby listings span the full
1400px container** — measured, not stylistic: the reference's map is 1400×596 and its 3-column
co-host grid only fits at that width. One consequence is that the reservation sidebar ends above the
Reviews section, since a single grid item cannot sit in column two on both sides of a full-width row.

Interaction and state: an `IntersectionObserver`-driven active tab, hover states throughout, a
persisted Save toggle (`localStorage`), Share-to-clipboard, expanding description and reviews, and a
scroll-tracked nearby carousel.

### Deliberately not built

No real auth, payments, booking backend, search backend or database. Mobile is not a target. The
architecture diagram *describes* those systems; this app does not implement them.

---

## Stack

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS v4 · `lucide-react` ·
Nunito Sans via `next/font` · local static images and mock data.

No state manager, no component library, no backend, no test runner.

> **Tailwind v4 has no `tailwind.config.js`.** The theme — colours, radii, shadows, layout widths —
> lives in the `@theme` block at the top of [`app/globals.css`](app/globals.css). Change tokens there,
> not in a config file.

---

## Project structure

```text
app/                    layout, page shell, and the theme tokens in globals.css
components/
  header/               Header, SearchBar
  gallery/              PhotoGrid, PhotoTile, ShowAllPhotosButton, PhotoGallery, PhotoTour,
                        PhotoTourIndex, PhotoTourRoom
  lightbox/             Lightbox
  listing/              ListingPage plus its sections (Description, TripDateBlock,
                        MeetYourHost, ListingSummary, Amenities, …)
  booking/              BookingCard, PromotionCard, ReserveButton, date/guest selectors
  reviews/              ReviewsSection, RatingSummary, RatingBreakdown, ReviewCard, chips
  location/             LocationSection, MapPlaceholder
  nearby/               NearbyListings, NearbyListingCard
  navigation/           StickyListingNav
  ui/                   Shared bits (e.g. ShareIcon)
data/                   listing.ts, reviews.ts, nearbyListings.ts — ALL content lives here
lib/                    useSavedListing and small helpers
docs/                   plan, spec, UI reference, prompt log, architecture diagram, captures
agents/                 UI Builder · Visual Reviewer · Accessibility/QA reviewer configs
public/images/          listing/ (gallery, rooms, nearby, icons) and ui/ (logo, illustration)
```

**Content is kept out of JSX.** Every section reads from `data/*.ts`, so text, prices, image paths and
labels are edited in one place. If you are looking for a string on the page, it is almost certainly in
`data/`.

### Adding the host and co-host images

`Meet your host` currently renders lettered circles for the eight co-hosts and reuses
`host-avatar.jpg` for the host logo, so nothing is broken while the real artwork is missing. To
supply it:

1. Drop the files into `public/images/host/`, e.g. `host-logo.png` and `co-host-sharath.jpg`.
2. Point `meetYourHost.logo` at the logo in [`data/listing.ts`](data/listing.ts).
3. Add an `image` field to each entry in `meetYourHost.coHosts` — any entry with an `image` renders a
   photo, any entry without one keeps its lettered circle, so you can migrate them one at a time.

---

## Documentation

| File | Contents |
| --- | --- |
| [`docs/playpower-airbnb-clone-plan-v2.md`](docs/playpower-airbnb-clone-plan-v2.md) | The phase-based execution plan |
| [`docs/ui-plan.md`](docs/ui-plan.md) | Component tree, folder layout, implementation order |
| [`docs/UI-REFERENCE.md`](docs/UI-REFERENCE.md) | Section-by-section visual narrative |
| [`docs/spec.md`](docs/spec.md) | Measured values (§35 is the authoritative measurement pass) |
| [`docs/prompts.md`](docs/prompts.md) | Running prompt log, phase by phase, including corrections and honest limits |
| [`docs/architecture.svg`](docs/architecture.svg) · [`architecture.png`](docs/architecture.png) | Production-scale architecture diagram |
| [`docs/architecture.md`](docs/architecture.md) | The reasoning behind that architecture |
| [`docs/reference/`](docs/reference/) | The nine supplied reference captures + their README |

---

## Accessibility

Treated as a requirement, not polish. `axe-core` reports **0 violations**, with:

- a skip-to-content link as the first tab stop;
- semantic landmarks, real labels, and `alt=""` where a control's `aria-label` or adjacent text
  already announces the image (no duplicate announcements);
- `prefers-reduced-motion` handling that collapses animation and transition durations;
- `sr-only` equivalents for data conveyed visually only (e.g. the star-rating distribution);
- a genuine focus contract in both overlays — focus moves in, is trapped, and is restored to the
  trigger on close; the hidden listing nav is `inert`, so it cannot be tabbed into while off-screen.

---

## Known limitations

Stated plainly rather than smoothed over:

- **The screenshot comparison is incomplete.** The automated image reading used for visual checks
  proved unreliable on this project — it returned a stale layout three times after a change, and
  described a nav bar for five different images. Claims in `docs/prompts.md` therefore rest on
  **DOM geometry and pixel measurement** of the reference rasters. Where a value could not be verified
  it is flagged as such in the log rather than guessed.
- **Photo Tour and Lightbox are reference-unverified.** Their behaviour and accessibility are
  specified and tested; their visual details are consistent with the captures, not matched to them.
- **Some reference-derived details come from a screenshot read, not pixel measurement** — the
  calendar's greyed-out ranges, and the co-host grid's exact column count. These are called out
  individually in `docs/prompts.md`.
- **The nearby carousel reads "1 / 1"** where the reference reads "1 / 2". The five stays in the mock
  data fill the 1400px track exactly, so there is no second page; inventing a sixth listing and its
  image to manufacture one was rejected as fabricated content.
- **One `axe` incomplete node remains** (not a violation): the Reserve gradient, whose contrast axe
  cannot compute. It was assessed by hand as passing — the gradient's start colour clears 4.5:1 by
  0.009 — and deliberately left alone because it is sampled from the reference.
- **Not tested with a screen reader.** Verified with the accessibility tree, `axe-core` and
  hand-driven keyboard input; no NVDA/VoiceOver pass was possible on this machine.
- **Not deployed.** Deployment is the account owner's call and needs Vercel credentials.
- **No reference source was copied.** All styling derives from measurements of the supplied captures
  and the public visual language.
