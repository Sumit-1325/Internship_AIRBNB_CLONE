# PlayPower Labs Airbnb Clone — UI Reference Guide

## 1. Purpose

This document is the visual implementation guide for the PlayPower Labs Airbnb clone.

**Single source of truth for UI:**  
`https://airbnb-clone-umber-two.vercel.app/`

The attached reference screenshots are the concrete visual evidence for the desktop UI. The implementation should reproduce the reference rather than create a generic Airbnb-inspired design.

### Required views

1. Listing page
2. Listing page while scrolling, including the sticky navigation/booking bar
3. Photo Tour
4. Lightbox

### Fidelity target

Match the reference as closely as practical in:

- overall composition
- content width
- typography
- spacing
- image crop/aspect ratio
- borders and radius
- button shapes
- icons
- sticky behavior
- hover/active behavior
- scrolling behavior
- transitions
- lightbox interaction
- keyboard accessibility

Do not redesign the UI.

---

# 2. Reference Screenshots

All supplied screenshots are 1920×1080 captures.

Suggested project location:

```text
docs/
  reference/
    listing-top.png
    listing-middle.png
    listing-amenities.png
    listing-reviews.png
    listing-location.png
    listing-things-to-know.png
```

The screenshots include browser chrome at the top. When implementing/comparing the webpage, compare the **webpage viewport**, not the Chrome tabs/address bar.

---

# 3. Global Visual Structure

## Desktop viewport

The supplied captures show a wide desktop layout.

Approximate observed webpage content boundaries:

- page content starts around x ≈ 250
- main content width ≈ 1400 px
- generous white space on both sides
- listing content is centered
- primary body uses a two-column arrangement where the left content is wider than the right booking column

Treat these values as starting measurements. Use DevTools on the live reference to obtain final computed values.

---

# 4. Header

At the top of the listing page:

```text
Airbnb logo        Search pill                         Become a host   Globe   Menu
```

### Left

- Airbnb wordmark/logo
- positioned toward the left side of the centered page container

### Center search control

Rounded pill containing:

```text
[ location/icon ] Anywhere | Anytime | Add guests | Search
```

Characteristics visible in the reference:

- white background
- thin light-gray border
- soft shadow
- large pill radius
- vertical separators between search fields
- circular pink/red search button
- compact but prominent desktop control

### Right

```text
Become a host
Globe icon button
Menu icon button
```

The globe and menu controls are circular light-gray buttons.

### Header

- white background
- thin bottom divider
- approximately 100 px webpage height in the top screenshot
- contents vertically centered

---

# 5. Listing Header

Immediately below the header:

```text
Romantic Jacuzzi 1BHK Candolim | Mirashya UG10

                                      Share   Save
```

The title is large, dark, and bold.

Share and Save are aligned to the right of the title row.

---

# 6. Main Photo Grid

This is one of the highest-priority visual areas.

The reference shows a 5-image composition:

```text
┌───────────────────────────────┬──────────────┬──────────────┐
│                               │              │              │
│                               │   image 2    │   image 3    │
│          image 1              │              │              │
│                               ├──────────────┼──────────────┤
│                               │   image 4    │   image 5    │
│                               │              │              │
└───────────────────────────────┴──────────────┴──────────────┘
```

### Image 1

- large left image
- approximately half of the gallery width
- tall rectangular area
- rounded corners on outer left/top/bottom edges

### Images 2–5

Four smaller images in a 2×2 grid.

### Important

The image crops are part of the design.

Do not simply use `object-fit: contain`.

Use an appropriate cover crop so the composition visually matches the reference.

### Show all photos

A white rounded button overlays the lower-right photo:

```text
[ grid icon ] Show all photos
```

It must be positioned over the image, not below it.

---

# 7. Listing Summary

Immediately below the gallery:

```text
Entire serviced apartment in Candolim, India

3 guests · 1 bedroom · 1 bed · 1 bathroom
```

The summary is left aligned.

The right side contains the promotion/booking area.

---

# 8. Sticky Navigation

After scrolling down, a sticky horizontal bar appears at the top of the webpage.

Visible reference:

```text
Photos    Amenities    Reviews    Location

                         ₹28,499 for 5 nights
                         ★ 4.95 · 19 reviews
                                      Reserve
```

### Important behavior

This is not simply another static section.

It remains visible while scrolling.

The active section is indicated by an underline.

Example:

```text
Photos
──────
```

or:

```text
Reviews
────────
```

depending on the current section.

The navigation links should scroll to their corresponding sections.

---

# 9. Guest Favourite Strip

Reference structure:

```text
┌───────────────────────────────────────────────────────────────┐
│  decorative icon   Guest favourite   One of the most loved... │
│                                      4.95     19 Reviews      │
└───────────────────────────────────────────────────────────────┘
```

Details:

- bordered rounded rectangular container
- three conceptual areas:
  - guest favourite label
  - explanatory text
  - rating/review count
- rating uses 4.95
- review count is 19

---

# 10. Host Section

```text
[host avatar]  Hosted by Mirashya Homes
               2 years hosting
```

Use a horizontal row.

A divider appears below the host section.

---

# 11. Highlights

Three vertically stacked highlights are visible:

### Outdoor entertainment

"The pool and alfresco dining are great for summer trips."

### Designed for staying cool

"Beat the heat with the A/C and ceiling fan."

### Self check-in

"You can check in with the building staff."

Each item has:

- simple line icon
- title
- supporting text

---

# 12. Translation Banner

Rounded light-gray banner:

```text
Some info has been automatically translated. Show original
```

The "Show original" action is underlined.

---

# 13. Description

Reference description begins with:

```text
🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨
Stay in this cozy 1BHK in the heart of Candolim...
```

The implementation should preserve the visible reference content supplied by the project data.

At the bottom:

```text
Show more >
```

---

# 14. Promotion Card

Right-side card:

```text
[ tag icon ] Get 10% off your next stay.
             Terms apply                     Claim
```

Characteristics:

- white background
- rounded border
- compact horizontal layout
- Claim button on right

---

# 15. Booking Card

The booking card is a major visual anchor.

```text
₹28,499 for 5 nights

┌─────────────────────────────────────┐
│ CHECK-IN       │ CHECKOUT           │
│ 10/18/2026     │ 10/23/2026         │
├─────────────────────────────────────┤
│ GUESTS                              │
│ 2 guests                         ˅  │
└─────────────────────────────────────┘

Free cancellation before 17 October

┌─────────────────────────────────────┐
│              Reserve                │
└─────────────────────────────────────┘

You won't be charged yet
```

### Visual requirements

- white card
- rounded corners
- subtle shadow
- internal border around date/guest selector
- large pink/red Reserve button
- centered secondary text
- card remains sticky while scrolling on desktop

---

# 16. Where You'll Sleep

Two large room cards:

```text
[ Bedroom image ]     [ Living room image ]

Bedroom               Living room
1 double bed          1 sofa
```

Images have rounded corners.

Two-column layout.

---

# 17. What This Place Offers

Heading:

```text
What this place offers
```

Two-column amenity list.

Visible examples:

Left:

- Kitchen
- Dedicated workspace
- Pool
- Pets allowed
- Carbon monoxide alarm (struck through)

Right:

- Wifi
- Free parking on premises
- Hot tub
- Exterior security cameras on property
- Smoke alarm (struck through)

Each row:

```text
[icon] Amenity name
```

Disabled/unreported amenities are visually struck through.

Button:

```text
Show all 50 amenities
```

Outlined rounded button.

---

# 18. Reviews

The Reviews section has a large guest-favourite rating presentation.

At the top:

```text
[decorative laurels]

4.95

Guest favourite

This home is a guest favourite based on ratings, reviews and reliability

How reviews work
```

Then rating breakdown:

```text
Overall rating     Cleanliness   Accuracy   Check-in   Communication   Location   Value
5 ───────────      5.0           5.0        5.0        5.0             4.8        4.8
4 ──
3
2
1
```

Each category includes an icon.

Below is a horizontally scrollable category chip row, examples:

```text
Comfort 6
Accuracy 5
Hot tub 5
Condition 4
Hospitality 8
Cleanliness 4
Amenities 2
...
```

Review cards appear in a two-column grid.

Each review contains:

- avatar
- reviewer name
- Airbnb membership duration
- star rating
- date
- review text
- optional Show more

Button:

```text
Show all 19 reviews
```

---

# 19. Location

Heading:

```text
Where you'll be
```

Then:

```text
Candolim, Goa, India
```

Large map-like visual:

- rounded rectangular map container
- blue water area on left
- pale green land area
- grid lines
- translucent circular areas
- centered black home marker
- search button top-left
- + and − controls top-right

Below:

```text
Exact location will be provided after booking.
```

Then:

```text
Neighbourhood highlights
```

---

# 20. Things to Know

Three-column layout:

### Cancellation policy

- Free cancellation before 17 October.
- Cancel before check-in on 18 October for a partial refund.
- Review this host’s full policy for details.
- Learn more

### House rules

- Check-in after 2:00 pm
- Checkout before 11:00 am
- 3 guests maximum
- Learn more

### Safety & property

- Carbon monoxide alarm not reported
- Smoke alarm not reported
- Exterior security cameras on property
- Learn more

Each column has an icon above its heading.

---

# 21. More Stays Nearby

Heading:

```text
More stays nearby
```

Horizontal carousel of listing cards.

Each card contains:

- large rounded image
- listing title
- price
- star rating

Right side has:

```text
1 / 2
< >
```

navigation controls.

The reference shows five cards visible in the desktop viewport.

---

# 22. Visual Rules

## General

- white page background
- dark near-black text
- light gray dividers
- Airbnb-style pink/red primary action
- restrained use of shadows
- rounded controls and cards
- generous whitespace
- strong hierarchy
- no unnecessary gradients

## Typography

Do not guess the final font values.

Use DevTools on the reference to capture:

- font family
- font size
- font weight
- line height
- letter spacing

Then put those values into `spec.md`.

---

# 23. Implementation Priority

If time becomes limited:

1. Header
2. Listing title row
3. Main photo grid
4. Sticky navigation
5. Booking card
6. Main listing sections
7. Photo Tour
8. Lightbox
9. Reviews
10. Location
11. Things to know
12. Nearby listings
13. Minor footer/details

Never sacrifice the main visual composition to polish low-value details.

---

# 24. Non-Negotiable Rule

The AI must not invent a different UI.

Use this workflow:

```text
REFERENCE SCREENSHOT
        ↓
INSPECT
        ↓
IMPLEMENT
        ↓
SCREENSHOT
        ↓
COMPARE
        ↓
FIX LARGEST DIFFERENCE
        ↓
REPEAT
```

If a value is not established by the screenshots or DevTools inspection, mark it as **TO VERIFY** rather than silently inventing it.
