# PlayPower Labs Airbnb Clone — UI Specification

## 1. Source of Truth

Primary reference:

`https://airbnb-clone-umber-two.vercel.app/`

Visual evidence:

- supplied 1920×1080 reference screenshots
- manual DevTools inspection of the live reference

### Important

The screenshot measurements below are **observed/approximate starting values**, not claims of exact CSS computed values.

Before final pixel matching, use DevTools on the reference and replace `TO VERIFY` values with measured values.

Do not invent missing values.

### Measured values are now in section 35

DevTools inspection of the live reference is **not possible**: the site sits behind a Vercel
Security Checkpoint (BotID) that rejects automated browsers, and the origin serves only the
challenge shell. See `prompts.md` for the full list of attempts.

Instead the eight supplied 1920×1080 captures were measured directly at pixel level.
**Section 35 records every measured value** and supersedes the `TO VERIFY` placeholders
throughout this document. Section 36 covers the Photo Tour and Lightbox, which have no
capture at all and are explicitly reference-unverified.

Where this document and section 35 disagree, **section 35 wins** — it is measured, the rest
was estimated from scaled-down screenshots.

---

# 2. Target Viewport

Primary screenshot:

```text
1920 × 1080
```

The screenshot includes browser UI.

For implementation comparison:

- ignore browser tabs/address bar
- compare only webpage viewport
- capture your implementation at the same browser viewport dimensions

Recommended primary browser viewport:

```text
TO VERIFY with DevTools/browser viewport
```

---

# 3. Page Container

Observed from supplied screenshots:

```text
left content edge ≈ x 215–252 depending on screenshot/browser viewport state
right content edge ≈ x 1418–1660 depending on screenshot/browser viewport state
```

Because screenshots include browser chrome and may have different scrollbars/viewport states, do not hardcode these screenshot coordinates.

Use:

```text
max-width: TO VERIFY
margin-inline: auto
```

Expected visual result:

- centered content
- large equal outer whitespace
- main listing content approximately 70–75% of the full desktop viewport width

---

# 4. Header Specification

## Background

```text
background: #ffffff
```

## Bottom border

Light gray.

```text
color: TO VERIFY
```

## Height

Top screenshot visually indicates approximately:

```text
100px
```

Final computed value:

```text
TO VERIFY
```

## Layout

```text
Logo | centered search | right actions
```

Use flex alignment.

---

# 5. Color Tokens

Observed semantic palette:

```css
--background: #ffffff;
--text-primary: TO_VERIFY;
--text-secondary: TO_VERIFY;
--border: TO_VERIFY;
--surface-muted: TO_VERIFY;
--primary: TO_VERIFY; /* Airbnb pink/red */
--button-text: #ffffff;
```

Do not copy approximate colors from this document as final values.

Use DevTools color picker on the reference.

---

# 6. Typography Tokens

The screenshots show:

- modern sans-serif
- dark near-black primary text
- lighter gray secondary text
- bold section headings
- underlined action links

Required measurements:

```text
font family: TO VERIFY
body font size: TO VERIFY
body line-height: TO VERIFY

page title:
  size: TO VERIFY
  weight: TO VERIFY
  line-height: TO VERIFY

section heading:
  size: TO VERIFY
  weight: TO VERIFY
  line-height: TO VERIFY

secondary text:
  size: TO VERIFY
  color: TO VERIFY
```

Centralize these values.

---

# 7. Radius Tokens

Observed rounded visual language:

```text
small controls: TO VERIFY
buttons: TO VERIFY
cards: TO VERIFY
image corners: TO VERIFY
search pill: very large/pill
```

Suggested token names:

```css
--radius-sm
--radius-md
--radius-lg
--radius-xl
--radius-pill
```

Populate with reference values after DevTools inspection.

---

# 8. Shadow Tokens

The booking card and search bar visibly use subtle shadows.

```css
--shadow-card: TO VERIFY;
--shadow-search: TO VERIFY;
```

Do not use heavy drop shadows.

---

# 9. Header Search Bar

Structure:

```text
┌─────────────────────────────────────────────────┐
│ icon │ Anywhere │ Anytime │ Add guests │  🔍    │
└─────────────────────────────────────────────────┘
```

Characteristics:

- pill shape
- white
- thin border
- subtle shadow
- separators
- circular primary search button

All measurements:

```text
width: TO VERIFY
height: TO VERIFY
field padding: TO VERIFY
separator height: TO VERIFY
search button diameter: TO VERIFY
```

---

# 10. Listing Title Row

Structure:

```text
TITLE                              Share   Save
```

Title and action buttons share the same horizontal row.

Measurements:

```text
title size: TO VERIFY
title weight: TO VERIFY
row bottom margin: TO VERIFY
action gap: TO VERIFY
```

---

# 11. Photo Grid

Five images.

Structure:

```text
┌───────────────────────┬──────────┬──────────┐
│                       │ image 2  │ image 3  │
│       image 1         ├──────────┼──────────┤
│                       │ image 4  │ image 5  │
└───────────────────────┴──────────┴──────────┘
```

### Requirements

- image 1 is dominant
- right side is a 2×2 grid
- consistent gaps
- outer corners rounded
- no visible internal rounded corners where tiles touch, matching reference
- `object-fit: cover`
- preserve visually correct focal points

Measurements:

```text
gallery width: TO VERIFY
gallery height: TO VERIFY
column ratio: TO VERIFY
row ratio: TO VERIFY
gap: TO VERIFY
radius: TO VERIFY
```

---

# 12. Show All Photos Button

Position:

```text
absolute
bottom: TO VERIFY
right: TO VERIFY
```

Appearance:

- white
- dark text
- rounded
- subtle border/shadow
- grid icon
- compact

---

# 13. Sticky Listing Navigation

Observed after scrolling:

```text
Photos | Amenities | Reviews | Location

                         price/rating    Reserve
```

Properties:

```text
position: sticky
top: 0
z-index: high
background: white
border-bottom: 1px solid ...
```

Height:

```text
TO VERIFY
```

Active tab:

```text
bottom border/underline
```

The sticky bar must not overlap content incorrectly.

---

# 14. Main Content + Sidebar

Desktop structure:

```text
┌──────────────────────────────┬────────────────────┐
│ main listing content         │ booking sidebar    │
│                              │                    │
│ ~800px-ish observed          │ ~400px-ish         │
└──────────────────────────────┴────────────────────┘
```

Exact widths/gap:

```text
main: TO VERIFY
sidebar: TO VERIFY
gap: TO VERIFY
```

The sidebar contains:

1. promotion card
2. booking card
3. report listing

---

# 15. Guest Favourite

Rounded bordered card.

Required visual relationships:

```text
icon | Guest favourite | explanation | 4.95 | 19 Reviews
```

Use flex/grid.

Avoid allowing text to wrap differently from the reference at the target viewport.

---

# 16. Host Section

Horizontal row:

```text
avatar + host text
```

Divider below.

Measurements:

```text
avatar: TO VERIFY
row height: TO VERIFY
divider color: TO VERIFY
```

---

# 17. Highlights

Three rows.

Each:

```text
icon
title
description
```

Spacing:

```text
row gap: TO VERIFY
icon width: TO VERIFY
title/body gap: TO VERIFY
```

---

# 18. Translation Banner

Muted rounded container.

```text
Some info has been automatically translated. Show original
```

"Show original":

- underlined
- clickable

---

# 19. Description

Body text uses comfortable line-height.

`Show more` is underlined/linked.

Avoid changing visible text merely for convenience; use the reference/project data.

---

# 20. Promotion Card

Desktop sidebar card.

Structure:

```text
icon | text                  | Claim
```

Characteristics:

- white
- rounded
- light border
- compact height
- Claim button in light-gray surface

---

# 21. Booking Card

White card with:

- rounded corners
- subtle shadow
- price header
- date fields
- guest field
- cancellation information
- pink Reserve button
- "You won't be charged yet"

Observed example:

```text
₹28,499 for 5 nights
10/18/2026 → 10/23/2026
2 guests
```

These are reference values and should be treated as UI content unless the assignment data specifies otherwise.

Measurements:

```text
card width: TO VERIFY
padding: TO VERIFY
button height: TO VERIFY
button radius: TO VERIFY
date field height: TO VERIFY
```

---

# 22. Sleeping Arrangements

Two-column cards.

Image:

```text
width: TO VERIFY
height: TO VERIFY
radius: TO VERIFY
```

Text:

```text
Bedroom
1 double bed

Living room
1 sofa
```

---

# 23. Amenities

Two-column grid.

Each item:

```text
icon + label
```

Disabled/unreported items:

```text
text-decoration: line-through
muted color
```

Button:

```text
Show all 50 amenities
```

outlined.

---

# 24. Reviews

## Hero rating

Large centered:

```text
4.95
```

with decorative laurel imagery/icons.

Below:

```text
Guest favourite
```

Then explanatory text and `How reviews work`.

## Rating breakdown

Seven conceptual columns:

```text
Overall rating
Cleanliness
Accuracy
Check-in
Communication
Location
Value
```

Observed values:

```text
Overall: 4.95
Cleanliness: 5.0
Accuracy: 5.0
Check-in: 5.0
Communication: 5.0
Location: 4.8
Value: 4.8
```

## Review chips

Horizontal row.

Must not wrap at the target desktop width if the reference doesn't wrap.

Overflow behavior:

```text
TO VERIFY
```

## Review grid

Two columns.

Each review:

```text
avatar
name
membership duration
rating/date
text
Show more when required
```

---

# 25. Location

Heading:

```text
Where you'll be
```

Text:

```text
Candolim, Goa, India
```

Map visual:

- rounded corners
- large rectangular area
- water/land regions
- grid
- circular areas
- central property marker
- search control
- zoom controls

This can be a CSS/mock map if no real map is required.

Exact colors/measurements:

```text
TO VERIFY
```

---

# 26. Things to Know

Three equal columns.

Columns:

```text
Cancellation policy
House rules
Safety & property
```

Each:

- icon
- heading
- body
- Learn more

---

# 27. Nearby Listings

Five cards visible in the supplied desktop screenshot.

Card:

```text
image
title
price
rating
```

Image has rounded corners.

Navigation:

```text
1 / 2
< >
```

Exact carousel mechanics should follow the live reference.

---

# 28. Photo Tour Specification

Required:

- full gallery
- correct image order
- correct spacing
- captions where applicable
- scroll
- close/back
- click image → lightbox

Before implementation, manually inspect the reference and fill:

```text
Photo Tour layout: TO VERIFY
Photo Tour transition: TO VERIFY
Caption typography: TO VERIFY
Close control: TO VERIFY
```

---

# 29. Lightbox Specification

Required controls:

```text
Close
Previous
Next
```

Keyboard:

```text
Escape
ArrowLeft
ArrowRight
```

Accessibility:

```text
role="dialog"
aria-modal="true"
accessible label
focus on open
focus trap
restore focus on close
```

Animation:

```text
duration: TO VERIFY
easing: TO VERIFY
transition type: TO VERIFY
```

---

# 30. Responsive Desktop Behavior

The assignment target is desktop.

Test at:

```text
1920
1440
1280
1024
```

At narrower desktop widths:

- content should remain usable
- booking sidebar should not overlap
- gallery should remain intact
- sticky navigation should not overflow incorrectly

Mobile is not part of the primary target unless explicitly required.

---

# 31. Accessibility Requirements

Minimum:

- semantic headings
- buttons are actual buttons
- links are actual links
- all meaningful icons have labels
- visible keyboard focus
- logical Tab order
- keyboard gallery navigation
- lightbox focus trap
- focus restoration
- dialog semantics
- sufficient contrast

---

# 32. QA Checklist

## Visual

```text
[ ] page width
[ ] header height
[ ] title position
[ ] gallery proportions
[ ] image crop
[ ] grid gap
[ ] sticky nav
[ ] sidebar position
[ ] booking card size
[ ] typography
[ ] spacing
[ ] colors
[ ] borders
[ ] radius
[ ] shadows
[ ] icons
```

## Behavioral

```text
[ ] Share
[ ] Save
[ ] Show all photos
[ ] Photo Tour
[ ] Photo click
[ ] Lightbox
[ ] Previous
[ ] Next
[ ] Escape
[ ] Arrow keys
[ ] sticky nav
[ ] section scrolling
[ ] booking controls
[ ] nearby carousel
```

## Technical

```text
[ ] no console errors
[ ] no broken images
[ ] no hydration errors
[ ] no layout shift caused by missing image dimensions
[ ] direct URL works
[ ] refresh works
[ ] deployed version works
```

---

# 33. Screenshot Comparison Rule

Always compare:

```text
reference.png
     vs
implementation.png
```

at the same viewport.

Fix differences in this order:

```text
container
→ major layout
→ images
→ typography
→ spacing
→ colors
→ borders/radius
→ icons
→ animation
```

Never rely on memory of the reference.

---

# 34. Values Still Requiring DevTools Verification

Before calling the UI pixel-perfect, populate every `TO VERIFY` field.

Minimum measurements to capture:

- actual webpage viewport
- max content width
- header height
- sticky nav height
- gallery dimensions
- gallery gap
- sidebar width
- main content width
- column gap
- font family
- title size/weight/line-height
- body size/line-height
- section heading size/weight
- border colors
- background colors
- primary button color
- border radius
- card shadow
- button height
- image corner radius
- animation durations/easing

This prevents the coding agent from guessing.

---

# 35. Measured Values — from reference raster analysis

Method: PowerShell + `System.Drawing` `LockBits`, with row and column run-length scans
against the **original 1920×1080 PNGs**. These are measured, not estimated, and they
supersede the `TO VERIFY` placeholders above.

## 35.1 Capture frame

- Browser chrome occupies y 0–108 → **109px of chrome**
- Captured page viewport: 1920 × 971
- Right-hand scrollbar at x 1901–1919 → **19px**, so the layout width is **1901px**, not 1920
- Page background `#FFFFFF`

## 35.2 Container

```text
content column  x 251 … 1650   = 1400px
centred         (1901 - 1400) / 2 = 250.5   ✓ matches measured 251 left / 270 right
```

**1400px is the content width**, i.e. 73.6% of the 1901px layout width — consistent with the
"70–75%" figure recorded earlier in this document. The earlier "x≈215–252 / x≈1418–1660"
figures were wrong.

## 35.3 Header

```text
height          110px   (y 109 … 218)
bottom border   #EBEBEB at y 219
logo            #FF385C, x 100 … 228   (129 × 40, top offset 35px)
```

Controls are vertically centred inside the 110px header. All values below are offsets from
the **left edge of the search pill**, which is itself centred on the layout:

```text
pill            x 699 … 1201   w 503   h 60   y 134 … 193   full radius
leading icon    offset  +35     38 × 33
"Anywhere"      offset  +93     w 85
divider 1       offset  +197
"Anytime"       offset  +218    w 71
divider 2       offset  +309
"Add guests"    offset  +330    w 93
search button   offset  +452    40 × 40, right inset 11px, #FF385C
```

Field text is ~18px (ascender-to-descender ink measured at 19px including anti-aliasing;
18px is the size at which the label widths match the reference). Pill shadow is not
measurable from a flat raster — inferred.

Right-hand group, measured **from the right edge** of the layout (which is what actually
aligns; absolute x shifts with the scrollbar):

```text
"Become a host"   ~17px, ends 238px from the right edge
gap to globe      28px
globe button      50 × 50 circle, #F2F2F2, icon 20 × 20, stroke 2px
gap to menu       10px
menu button       50 × 50 circle, #F2F2F2
right padding     101px (so the menu's right edge sits 101px from the layout edge)
```

The hamburger is **18 × 12 with 2px strokes at a 5px pitch**. This ratio cannot be produced
by lucide's `Menu` (its line proportions are 16:12, which maxes out at an aspect of 1.33,
while the reference is 1.5), so it is drawn as an inline SVG.

Header horizontal padding is 100px at the measured width. **This is measured at a single
viewport only** — because the reference is unreachable (BotID), it has not been confirmed
whether it is a fixed padding or percentage-based.

## 35.4 Listing title row

```text
y 264 … 297
text colour  #222222
title spans  x 252 … 1002
Share/Save   x ≈1495 … 1663
```

## 35.5 Photo gallery — highest priority

```text
gallery        x 251 … 1650   y 326 … 942      = 1400 × 617
left image     700px           x 251 … 950
gutter         10px            #FFFFFF  (white, NOT a dark background)
right block    690px           x 961 … 1650
  two columns  340px each, 10px gutter
row heights    303px / 304px, 10px gutter
corner radius  ~12px, inner corners square
```

Radius verified by arc profile: the corner curve spans **11 rows with a 10px horizontal
inset**, identical at top-left and bottom-left.

## 35.6 Sticky listing navigation (from `02-listing-middle.png`)

```text
height        83px   (y 109 … 191)
border        y 192
tabs start    x 262
Reserve       x 1535 … 1650  (115px wide)
```

## 35.7 Main / sidebar columns

Measured from the room grid in `03` and the booking card in `02`:

```text
main column   815px   (room grid x 251 … 1065)
column gap    106px
sidebar       479px   (booking card x 1178 … 1658)
------------------------------
815 + 106 + 479 = 1400   ✓
```

## 35.8 Sleeping arrangements (from `03`)

```text
bedroom image   x 251 …  647  (397px)
living room     x 668 … 1065  (398px)
image height    265px
gutter          20px
```

## 35.9 Nearby stays (from `08`)

```text
5 cards, 260px wide, 25px gaps, spanning x 251 … 1650
card image     260 × 226
```

## 35.10 Host

```text
avatar  ≈57px at x 251 … 307, y 415 … 472
```

## 35.11 Colour tokens — sampled

| Token | Value | Notes |
| --- | --- | --- |
| text primary | `#222222` | |
| text secondary | `#717171` | |
| border | `#DDDDDD` | |
| header border | `#EBEBEB` | |
| muted surface | `#F7F7F7` | |
| control fill | `#F2F2F2` | globe / menu circles |
| brand | `#FF385C` | logo, search button |
| accent green | `#164734` | avatar / promo tag |

The Reserve button is a **gradient, not a flat fill**. Sampled left to right:
`#E61E4D → #E31C5F → #D70466`. This document previously had no value for it.

## 35.12 Still unverified after measurement

- **Typography**: font family, sizes, weights and line-heights cannot be read from a raster.
  Nunito Sans is used as the closest free substitute for Airbnb Cereal. **All type sizes are
  inferred, not measured.**
- **All hover, active and focus states**, plus every transition duration and easing curve
- **Radii other than the gallery** (buttons, cards, controls) — currently Airbnb-standard
  8px / 12px, unverified
- The bottom-right region of `04-amenities-lower.png`, obscured by a Windows Snipping Tool
  toast in the capture

---

# 36. Photo Tour & Lightbox

## 36.1 Photo Tour — measured from `09-photo-tour.jpg`

The tour was reference-unverified until `docs/reference/09-photo-tour.jpg` was supplied. It is
now measured with the same `System.Drawing` row/column scan used for section 35, in the
capture's own 1200×675 frame:

```text
capture          1200 × 675; browser chrome y 0 … 135; page layout width 1190
content column   x 213 … 975   = 762px, centred
room index       8 columns, 88px wide, 8px gaps, pitch 96.4
index thumb      ~88 × 82 (measured 82–83 tall); corner radius not resolvable from a raster
index label      left-aligned to each thumbnail's left edge, 12px, ~8px below the image
index → section  44px, label box to first room heading
room section     2 columns of 358px with a 46px gap  (358 + 46 + 358 = 762)
room heading     24px, semibold, #222222
amenity line     13px, regular, grey (small anti-aliased text; rendered as --color-ink-soft)
room photo       358 × 239, aspect 1.50, 10px between stacked photos
```

Two caveats. **No header is visible in this capture** — the page begins 25px below the browser
chrome and the first content is the room index — so the header the build renders is not
derived from it. And the capture shows **nine** rooms (Living room 1 … Additional photos)
while the build ships the five rooms this listing has images for, so its index is one partial
row of eight columns.

## 36.2 Lightbox — REFERENCE-UNVERIFIED

There is still **no capture of the lightbox**, and the live reference is unreachable (Vercel
BotID). It is built consistently with the visual language the captures establish, and none of
the following should be read as "matches the reference":

- Lightbox chrome, background treatment, and control placement and size
- Caption typography, and whether captions exist at all
- Transition duration, easing and type
- Whether clicking outside closes the lightbox

Behaviour and accessibility for both views **are** fully specified and independently
verifiable:

```text
role="dialog"   aria-modal="true"   accessible label
open   → focus moves into the dialog
       → Tab / Shift+Tab remain inside (real trap, not simulated)
       → Escape closes
       → ArrowLeft / ArrowRight navigate
close  → focus returns to the triggering element
```

