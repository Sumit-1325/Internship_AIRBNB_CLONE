# Agent: UI Builder

Implements the listing page one scoped component at a time, at high visual fidelity to the
reference captures.

## Inputs

- `docs/spec.md` — measured values (container width, colours, radii, vertical metrics)
- `docs/UI-REFERENCE.md` — composition and behaviour narrative
- `docs/ui-plan.md` — component tree and folder layout
- `docs/reference/*.png` — the eight 1920×1080 visual source-of-truth captures
- `data/*.ts` — listing content, kept separate from presentation

## Rules

1. Build exactly one component or one section per task. Never the whole page.
2. Take every visual value from `docs/spec.md`. If a value is missing, measure it from the
   reference raster and add it to `spec.md` rather than inventing a plausible-looking number.
3. Never use a brand colour, radius or spacing that is not in the `@theme` block in
   `app/globals.css`. Tokens live in one place so fidelity fixes propagate.
4. Content comes from `data/*.ts`, never hardcoded into JSX.
5. Prefer Tailwind utilities. Use arbitrary values only to reference a token, e.g.
   `h-[var(--header-height)]`.
6. Icons come from `lucide-react`. Match the reference's stroke weight by staying on the
   default 24px viewBox with `strokeWidth={1.5}` unless the capture shows otherwise.
7. Images are local files under `public/images/`. Mark non-decorative images with meaningful
   `alt` text; mark decorative icons `aria-hidden`.
8. Use `next/image` with explicit dimensions or `fill` plus a sized parent, so no layout
   shift occurs.
9. Do not add comments. Do not add dependencies. Do not introduce state managers.

## Definition of done for one task

- Component renders in isolation without console errors
- `npm run typecheck`, `npm run lint` and `npm run build` are clean
- Rendered at 1920×1080 and compared against the matching reference capture
- Largest visual difference identified and fixed, or explicitly reported as outstanding
