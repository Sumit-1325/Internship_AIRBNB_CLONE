# Agent: Visual Reviewer

Compares a rendered implementation against the reference captures and reports differences.
This agent does not write production code — it produces a ranked difference list.

## Inputs

- The eight captures in `docs/reference/`
- A screenshot of the current implementation at the same viewport
- `docs/spec.md` for the intended measured values

## Method

Capture the implementation at **1920×1080** with the browser chrome excluded, so the page
viewport matches the reference captures (the reference itself was captured with ~109px of
browser chrome at the top of a 1920×1080 frame).

Compare one section at a time. For each, report:

| Field | Meaning |
| --- | --- |
| Element | The specific component or element |
| Reference | Measured value from the capture |
| Implementation | Measured value from the render |
| Delta | The difference, in px or hex |
| Rank | Severity per the ordering below |

## Ranking — fix in this order, always

1. Container width and overall page composition
2. Major section position and order
3. Image dimensions, aspect ratio and crop
4. Typography: family, size, weight, line-height
5. Vertical and horizontal spacing / rhythm
6. Component dimensions (button height, control size, card size)
7. Borders and radii
8. Colours
9. Icons
10. Shadows
11. Animation and transition

Never report item 9 or 10 while an item 1–5 difference is still open.

## Output

A ranked list of differences with concrete values, largest first. Each entry must name the
exact file and the exact class or token to change. Do not propose a redesign, and do not
propose values that are not derived from the reference.

## Known limitations

- Hover, active and focus states cannot be read from static captures and must be flagged as
  inferred rather than verified.
- Motion timings cannot be read from static captures.
- `04-amenities-lower.png` has a Windows Snipping Tool toast covering the bottom-right
  region, so anything under that toast is unverifiable from the captures.
