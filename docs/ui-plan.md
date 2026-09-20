# PlayPower Labs Airbnb Clone — UI Plan

## 1. Objective

Recreate the desktop UI shown in the supplied reference screenshots for:

- Listing page
- Photo Tour
- Lightbox

Reference:

`https://airbnb-clone-umber-two.vercel.app/`

The reference site is the **single source of truth**.

This plan defines the component architecture and implementation order. `spec.md` defines measurable visual values. `UI-REFERENCE.md` describes the visual composition and behavior visible in the supplied screenshots.

---

# 2. Page Architecture

```text
App
│
├── Header
│
└── ListingPage
    │
    ├── ListingHeader
    │   ├── Title
    │   ├── ShareButton
    │   └── SaveButton
    │
    ├── PhotoGrid
    │   └── ShowAllPhotosButton
    │
    ├── ListingSummary
    │
    ├── StickyListingNav
    │   ├── PhotosTab
    │   ├── AmenitiesTab
    │   ├── ReviewsTab
    │   ├── LocationTab
    │   └── StickyPriceReserve
    │
    ├── MainContent
    │   ├── GuestFavourite
    │   ├── HostSection
    │   ├── Highlights
    │   ├── TranslationBanner
    │   ├── Description
    │   ├── SleepingArrangements
    │   ├── Amenities
    │   ├── TripDateBlock
    │   ├── Reviews
    │   ├── Location
    │   ├── ThingsToKnow
    │   └── NearbyListings
    │
    └── DesktopSidebar
        ├── PromotionCard
        ├── BookingCard
        └── ReportListing
```

---

# 3. Recommended Folder Structure

```text
app/
  page.tsx

components/
  header/
    Header.tsx
    SearchBar.tsx

  listing/
    ListingPage.tsx
    ListingHeader.tsx
    ListingSummary.tsx
    GuestFavourite.tsx
    HostSection.tsx
    Highlights.tsx
    HighlightItem.tsx
    TranslationBanner.tsx
    Description.tsx
    SleepingArrangements.tsx
    Amenities.tsx
    AmenityRow.tsx
    TripDateBlock.tsx
    ThingsToKnow.tsx

  gallery/
    PhotoGrid.tsx
    PhotoTour.tsx
    PhotoTile.tsx
    ShowAllPhotosButton.tsx

  lightbox/
    Lightbox.tsx
    LightboxControls.tsx

  reviews/
    ReviewsSection.tsx
    RatingSummary.tsx
    RatingCategory.tsx
    ReviewCategoryChips.tsx
    ReviewCard.tsx

  location/
    LocationSection.tsx
    MapPlaceholder.tsx

  nearby/
    NearbyListings.tsx
    NearbyListingCard.tsx

  booking/
    PromotionCard.tsx
    BookingCard.tsx
    DateSelector.tsx
    GuestSelector.tsx
    ReserveButton.tsx

  navigation/
    StickyListingNav.tsx

  ui/
    Button.tsx
    IconButton.tsx
    Divider.tsx

data/
  listing.ts
  reviews.ts
  nearbyListings.ts

lib/
  constants.ts
  utils.ts

docs/
  spec.md
  UI-REFERENCE.md
  prompts.md
  reference/

agents/
  ui-builder.md
  visual-reviewer.md
  accessibility-qa.md
```

---

# 4. Component Rules

## Rule 1 — Keep components small

Do not create a 1000-line `page.tsx`.

## Rule 2 — Data and UI are separate

Example:

```text
data/listing.ts
       ↓
ListingPage
       ↓
Listing components
```

## Rule 3 — Reuse repeated patterns

Use reusable components for:

- amenities
- highlights
- reviews
- nearby listings
- icon buttons
- buttons

## Rule 4 — Visual tokens are centralized

Colors, spacing, typography, radii and shadows belong in the theme/CSS variables.

Do not scatter arbitrary values across components.

---

# 5. Implementation Order

## Phase A — Shell

Build:

1. Header
2. page container
3. listing content container
4. basic two-column layout

Exit criteria:

- page runs
- content is centered
- overall width resembles reference

---

## Phase B — Hero / Gallery

Build:

1. Listing title
2. Share
3. Save
4. 5-image gallery
5. Show all photos button

This is the first major visual checkpoint.

Exit criteria:

- gallery proportions match
- image crops match
- title/share/save alignment matches

---

## Phase C — Sticky Navigation

Build:

```text
Photos
Amenities
Reviews
Location
```

plus:

```text
Price
Rating
Reserve
```

Requirements:

- sticky on desktop
- active section underline
- section scrolling
- correct height
- correct divider

---

## Phase D — Main Listing Content

Implement in this order:

1. Listing summary
2. Guest favourite
3. Host
4. Highlights
5. Translation banner
6. Description
7. Sleeping arrangements
8. Amenities
9. Trip/date block

Each section gets its own component.

---

## Phase E — Booking Sidebar

Implement:

1. Promotion card
2. Booking card
3. Date fields
4. Guest field
5. Cancellation message
6. Reserve button
7. Report listing

The booking card should remain sticky while the main page scrolls, as shown in the reference.

---

## Phase F — Reviews

Implement:

1. Large 4.95 rating presentation
2. Guest favourite heading
3. Rating breakdown
4. Category chips
5. Review grid
6. Show all reviews button

Do not approximate the layout with a generic review component.

Match the two-column arrangement visible in the reference.

---

## Phase G — Location

Implement:

1. Where you'll be
2. Location text
3. Map visual
4. Exact-location note
5. Neighbourhood highlights

The map can be a visual/mock map for this assignment unless the brief explicitly requires a real map provider.

---

## Phase H — Things to Know

Implement the three-column section:

```text
Cancellation policy
House rules
Safety & property
```

---

## Phase I — Nearby Listings

Implement:

- horizontal listing cards
- image
- title
- price
- rating
- carousel arrows
- page indicator

---

# 6. Photo Tour

Clicking:

```text
Show all photos
```

opens the Photo Tour.

Expected flow:

```text
Listing Page
     │
     └── Show all photos
             ↓
         Photo Tour
             │
             ├── scroll
             ├── photo click
             ↓
          Lightbox
```

Photo Tour requirements:

- full-screen/gallery presentation matching reference
- all listing images
- captions if visible in reference
- correct image ordering
- close/back behavior
- photo click opens corresponding lightbox image

---

# 7. Lightbox

Lightbox state:

```text
isOpen
activePhotoIndex
```

Controls:

- previous
- next
- close
- Escape
- ArrowLeft
- ArrowRight

Accessibility:

```text
open
  ↓
focus moves into dialog
  ↓
Tab remains inside dialog
  ↓
close
  ↓
focus returns to trigger
```

Do not implement a fake focus trap.

Use a proper dialog/focus-management approach.

---

# 8. Navigation State

The page has four primary navigation targets:

```text
Photos
Amenities
Reviews
Location
```

Recommended IDs:

```text
#photos
#amenities
#reviews
#location
```

The active navigation item should correspond to the currently visible section.

Use an `IntersectionObserver` or equivalent approach rather than hardcoding the active tab based only on click.

---

# 9. Responsive Scope

The screenshots establish the required **desktop** target.

Primary validation viewport:

```text
1920 × 1080 screenshot
```

But remember that browser chrome occupies part of the screenshot.

The webpage itself should not assume that 1920 px is always available.

At minimum, ensure the desktop layout behaves sensibly around:

```text
1440px
1280px
1024px
```

Mobile is out of scope unless the assignment explicitly requires it.

---

# 10. Image Strategy

Use local/static image assets.

Create a single source of truth:

```text
data/listing.ts
```

Example:

```ts
export const listingImages = [
  {
    id: "living-main",
    src: "...",
    alt: "...",
    caption: "..."
  },
  ...
]
```

The same data must power:

- hero gallery
- Photo Tour
- Lightbox
- sleeping section
- nearby cards where applicable

This prevents inconsistent image ordering.

---

# 11. Interaction Requirements

## Header

- search controls visually respond to hover
- icon buttons have accessible labels

## Save

- toggles visual saved state
- can use localStorage if persistence is desired

## Share

- implement the visible interaction required by the reference
- do not build a real sharing backend

## Photo Grid

- hover feedback
- click opens relevant gallery/lightbox flow

## Sticky Nav

- section scrolling
- active section

## Booking

- guest/date controls should respond visually
- Reserve can be a demo interaction unless real booking is explicitly required

## Reviews

- category chips should behave consistently with reference
- Show more can expand text if required

## Nearby Carousel

- previous/next controls
- correct disabled state at boundaries if applicable

---

# 12. AI Implementation Workflow

Never ask the coding agent:

```text
Build the entire Airbnb clone.
```

Instead:

```text
Task 1:
Build Header from UI-REFERENCE.md and spec.md.

Task 2:
Run the application and inspect the rendered header.

Task 3:
Compare screenshot with reference.

Task 4:
Fix only the visual differences in the header.

Task 5:
Build PhotoGrid.

Task 6:
Compare PhotoGrid.

...
```

Every completed task should be recorded in:

```text
docs/prompts.md
```

---

# 13. Visual QA Order

When a screenshot differs from the reference, fix in this order:

1. page/container width
2. major section positions
3. image dimensions/crops
4. typography
5. vertical/horizontal spacing
6. borders/radius
7. colors
8. icons
9. shadows
10. animations

Do not spend 20 minutes fixing a tiny icon while the page container is the wrong width.

---

# 14. Definition of Done

The UI is considered complete only when:

- Listing page visually matches reference
- gallery composition matches
- sticky navigation matches
- booking card matches
- scrolling behavior matches
- Photo Tour works
- Lightbox works
- keyboard controls work
- focus management works
- reviews match layout
- location section matches
- nearby carousel works
- no obvious console errors
- deployed version has been checked
- screenshot comparison has been completed at the target viewport
