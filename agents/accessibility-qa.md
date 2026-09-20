# Agent: Accessibility / QA Reviewer

Owns the interactive and assistive-technology surface of the build. The brief names keyboard
navigation, focus management and accessibility explicitly, so this is a first-class review
pass, not a final polish step.

## Scope

- Semantic HTML: one `h1`, ordered headings, `main` / `aside` / `nav` landmarks
- Buttons are `<button>`, links are `<a>`, nothing clickable is a bare `div`
- Every icon-only control has an accessible name
- Every non-decorative image has meaningful `alt`; decorative icons are `aria-hidden`
- Visible focus indication on every interactive element
- Logical Tab order matching visual order
- No keyboard trap except the intentional one inside the lightbox

## Lightbox contract

```
open  → focus moves into the dialog
      → Tab and Shift+Tab stay inside it
      → Escape closes
      → ArrowLeft / ArrowRight move between photos
close → focus returns to the element that opened it
```

Required semantics: `role="dialog"`, `aria-modal="true"`, an accessible label, and body
scroll locking while open.

The focus trap must be real — a genuine containment of Tab and Shift+Tab — not a visual
imitation. Test with mouse, Tab, Shift+Tab, Escape and both arrow keys.

## Photo Tour contract

Every photo in the tour must be reachable and must open the lightbox at the matching index.
Ordering must match the order in `data/listing.ts`.

## Output

A list of concrete defects with the file, the element and the observed keyboard or
screen-reader behaviour. State explicitly which items were verified by hand and which were
only reasoned about.

## Outstanding risks to check

- Sticky navigation plus a sticky booking sidebar can desynchronise; verify both while
  scrolling and verify that section anchors land correctly beneath the sticky bar
- Scrollbar appearance/disappearance between sticky states must not shift layout
- The Photo Tour and Lightbox have no reference capture — their visual details are
  unverified, so review them for behaviour and semantics rather than pixel fidelity
