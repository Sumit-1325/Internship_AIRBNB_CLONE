# UI Reference Screenshots

These screenshots are the visual source of truth for the Airbnb listing page implementation.

Reference website:
https://airbnb-clone-umber-two.vercel.app/

## Screenshot Mapping

### 01-listing-top.png
Top of the listing page:
- Airbnb header
- Search bar
- Listing title
- Share / Save
- Main 5-image gallery
- Show all photos button

### 02-listing-middle.png
Listing information:
- Entire serviced apartment information
- Guest Favourite
- Rating and reviews
- Host information
- Highlights
- Translation notice
- Description
- Promotion card
- Reservation card

### 03-amenities.png
Middle section:
- Where you'll sleep
- Bedroom
- Living room
- What this place offers
- Amenities

### 04-amenities-lower.png
Continuation of amenities:
- Remaining amenities
- Show all 50 amenities
- 5 nights in Candolim section
- Reservation sidebar

### 05-reviews-top.png
Reviews section:
- 4.95 rating
- Guest Favourite
- Rating breakdown
- Category ratings

### 06-reviews.png
Reviews continuation:
- Review category filters
- Guest reviews
- Show all 19 reviews

### 07-location.png
Location section:
- Where you'll be
- Candolim, Goa, India
- Map
- Exact location notice
- Neighbourhood highlights

### 08-things-to-know-nearby.png
Bottom sections:
- Things to know
- Cancellation policy
- House rules
- Safety & property
- More stays nearby
- Nearby listing cards

### 09-photo-tour.jpg
The Photo tour, reached from "Show all photos" (`?modal=PHOTO_TOUR_SCROLLABLE`).
Supplied later than the eight captures above, and the only evidence for the tour:
- a sticky header with back / title / share / save
- a room index of eight 88px thumbnails, 8px apart, with left-aligned room names
- per-room sections: room name and an amenity line on the left, photos stacked on the right

This capture is a 1200×675 downscale that includes browser chrome, so its page layout width
is **1190px**, not 1901px. Measured geometry is recorded in `../spec.md` section 36.

## Screenshots referenced but not stored in this folder

Further captures of the reference were supplied **in conversation** during the post-Phase 10 work and
were not committed here. They are the only evidence for several recent changes:

- the site header (airbnb / Anywhere / Anytime / Add guests / Become a host) — header weights
- the trip date block with its two-month calendar — the calendar's greyed-out ranges
- the reviews section — the rating block's centring
- the location section — the map's coastline
- the "Meet your host" section — the host card layout and the co-host grid
- the photo grid — the hover overlay

**This is a reproducibility gap, and it is recorded rather than glossed over.** Values derived from
these images cannot be re-measured from the repository. Where a value *was* measured from a capture
that lives in this folder, `../prompts.md` says so explicitly; where it came from a screenshot read
instead, it is flagged as unverified. Re-saving those captures here as `10-*.png` onward would close
the gap.

## Important

The screenshots should be treated as the primary visual reference.

Match:
- Layout
- Spacing
- Typography
- Image sizing and cropping
- Borders
- Border radius
- Buttons
- Icons
- Sticky navigation
- Reservation card
- Responsive behavior
- Interactions

Do not create a different Airbnb-style design.

Use the screenshots together with:
- ../UI-REFERENCE.md
- ../ui-plan.md
- ../spec.md