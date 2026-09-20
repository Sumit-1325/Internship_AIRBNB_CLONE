export type GalleryImage = {
  id: string;
  src: string;
  alt: string;
  caption: string;
};

export type Highlight = {
  id: string;
  icon: string;
  width: number;
  height: number;
  title: string;
  body: string;
};

export type SleepingRoom = {
  id: string;
  image: string;
  alt: string;
  title: string;
  detail: string;
};

export type Amenity = {
  id: string;
  icon:
    | "kitchen"
    | "wifi"
    | "desk"
    | "parking"
    | "pool"
    | "hotTub"
    | "pets"
    | "camera"
    | "coAlarm"
    | "smokeAlarm";
  label: string;
  unavailable?: boolean;
};

export type ThingsToKnowColumn = {
  id: string;
  icon: "calendar" | "house" | "shield";
  title: string;
  items: string[];
};

const photo = {
  leftPatio: {
    id: "left-patio",
    src: "/images/listing/gallery-01-left-patio.jpg",
    alt: "Lounge seating with wicker armchairs and a coffee table",
    caption: "Lounge area",
  },
  patioSeating: {
    id: "patio-seating",
    src: "/images/listing/gallery-02-patio-seating.jpg",
    alt: "Covered outdoor seating beside the pool",
    caption: "Outdoor seating",
  },
  jacuzzi: {
    id: "jacuzzi",
    src: "/images/listing/gallery-03-jacuzzi.jpg",
    alt: "Private jacuzzi with a seating deck",
    caption: "Jacuzzi",
  },
  bedroom: {
    id: "bedroom",
    src: "/images/listing/gallery-04-bedroom.jpg",
    alt: "Bedroom with a double bed and wooden floors",
    caption: "Bedroom",
  },
  exterior: {
    id: "exterior",
    src: "/images/listing/gallery-05-exterior.jpg",
    alt: "Exterior of the Amor de Goa apartment building",
    caption: "Building exterior",
  },
  livingRoom: {
    id: "living-room",
    src: "/images/listing/room-living-room.jpg",
    alt: "Living room with a sofa",
    caption: "Living room",
  },
  bedroomSuite: {
    id: "bedroom-suite",
    src: "/images/listing/room-bedroom.jpg",
    alt: "Bedroom with a double bed",
    caption: "Bedroom",
  },
} satisfies Record<string, GalleryImage>;

export const galleryImages: GalleryImage[] = [
  photo.leftPatio,
  photo.patioSeating,
  photo.jacuzzi,
  photo.bedroom,
  photo.exterior,
];

export type TourRoom = {
  id: string;
  name: string;
  amenities: string;
  photos: GalleryImage[];
};

export const tourRooms: TourRoom[] = [
  {
    id: "living-room",
    name: "Living room",
    amenities: "Sofa · Air conditioning · Ceiling fan · Smart TV",
    photos: [photo.livingRoom],
  },
  {
    id: "bedroom",
    name: "Bedroom",
    amenities: "Double bed · Wooden floors · Air conditioning",
    photos: [photo.bedroom, photo.bedroomSuite],
  },
  {
    id: "jacuzzi",
    name: "Jacuzzi",
    amenities: "Private jacuzzi · Seating deck",
    photos: [photo.jacuzzi],
  },
  {
    id: "outdoor",
    name: "Outdoor area",
    amenities: "Pool · Alfresco dining · Outdoor seating",
    photos: [photo.leftPatio, photo.patioSeating],
  },
  {
    id: "exterior",
    name: "Exterior",
    amenities: "Self check-in · Free parking on premises",
    photos: [photo.exterior],
  },
];

export const tourPhotos: GalleryImage[] = tourRooms.flatMap(
  (room) => room.photos,
);

export const listing = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  summary: "Entire serviced apartment in Candolim, India",
  capacity: "3 guests · 1 bedroom · 1 bed · 1 bathroom",
  rating: 4.95,
  reviewCount: 19,
};

export const guestFavourite = {
  label: "Guest favourite",
  blurb: "One of the most loved homes on Airbnb, according to guests",
  laurel: "/images/listing/guest-favourite-laurel.png",
};

export const host = {
  name: "Mirashya Homes",
  avatar: "/images/listing/host-avatar.jpg",
  avatarAlt: "Host avatar for Mirashya Homes",
  hosting: "2 years hosting",
};

export const highlights: Highlight[] = [
  {
    id: "outdoor",
    icon: "/images/listing/highlight-outdoor.png",
    width: 30,
    height: 27,
    title: "Outdoor entertainment",
    body: "The pool and alfresco dining are great for summer trips.",
  },
  {
    id: "cool",
    icon: "/images/listing/highlight-cool.png",
    width: 29,
    height: 28,
    title: "Designed for staying cool",
    body: "Beat the heat with the A/C and ceiling fan.",
  },
  {
    id: "checkin",
    icon: "/images/listing/highlight-checkin.png",
    width: 26,
    height: 28,
    title: "Self check-in",
    body: "You can check in with the building staff.",
  },
];

export const translationNotice =
  "Some info has been automatically translated. Show original";

export const description = [
  "🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind.",
  "Enjoy high-speed WiFi 📶, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🍸, it's the ideal base for your Goa getaway.",
];

export const booking = {
  price: "₹28,499",
  nights: 5,
  nightsLabel: "5 nights",
  checkIn: "10/18/2026",
  checkOut: "10/23/2026",
  guests: "2 guests",
  cancellation: "Free cancellation before 17 October",
  support: "You won't be charged yet",
  reserveLabel: "Reserve",
};

export const promotion = {
  text: "Get 10% off your next stay.",
  terms: "Terms apply",
  claimLabel: "Claim",
};

export type CalendarMonth = {
  id: string;
  label: string;
  days: number;
  firstWeekday: number;
  lastSelectable: number;
  checkIn?: number;
  checkOut?: number;
};

export const tripMonths: CalendarMonth[] = [
  {
    id: "2026-10",
    label: "October 2026",
    days: 31,
    firstWeekday: 4,
    lastSelectable: 23,
    checkIn: 18,
    checkOut: 23,
  },
  {
    id: "2026-11",
    label: "November 2026",
    days: 30,
    firstWeekday: 0,
    lastSelectable: 17,
  },
];

export const tripDates = {
  heading: "5 nights in Candolim",
  range: "18 Oct 2026 - 23 Oct 2026",
  clearLabel: "Clear dates",
  weekdays: ["S", "M", "T", "W", "T", "F", "S"],
  months: tripMonths,
};

export const meetYourHost = {
  heading: "Meet your host",
  name: host.name,
  role: "Host",
  logo: "/images/listing/host-avatar.jpg",
  logoAlt: `${host.name} host logo`,
  stats: [
    { id: "reviews", value: "1,463", label: "Reviews" },
    { id: "rating", value: "4.68★", label: "Rating" },
    { id: "hosting", value: "2", label: "Years hosting" },
  ],
  about: [
    { id: "born", icon: "bulb" as const, text: "Born in the 80s" },
    {
      id: "school",
      icon: "cap" as const,
      text: "Where I went to school: NICMAR GOA",
    },
  ],
  coHostsHeading: "Co-Hosts",
  coHosts: [
    { id: "sharath", name: "Sharath" },
    { id: "aman", name: "Aman Dev Pahwa" },
    { id: "maria", name: "Maria Karen Priyanka" },
    { id: "simran", name: "Simran" },
    { id: "pallavi", name: "Pallavi" },
    { id: "sanyukta", name: "Sanyukta" },
    { id: "shruti", name: "Shruti" },
    { id: "amisha", name: "Amisha" },
  ] as { id: string; name: string; image?: string }[],
  detailsHeading: "Host details",
  details: ["Response rate: 100%", "Responds within an hour"],
  messageLabel: "Message host",
  paymentNote:
    "To help protect your payment, always use Airbnb to send money and communicate with hosts.",
};

export const sleepingRooms: SleepingRoom[] = [
  {
    id: "bedroom",
    image: "/images/listing/room-bedroom.jpg",
    alt: "Bedroom with a double bed",
    title: "Bedroom",
    detail: "1 double bed",
  },
  {
    id: "living-room",
    image: "/images/listing/room-living-room.jpg",
    alt: "Living room with a sofa",
    title: "Living room",
    detail: "1 sofa",
  },
];

export const amenities: Amenity[] = [
  { id: "kitchen", icon: "kitchen", label: "Kitchen" },
  { id: "wifi", icon: "wifi", label: "Wifi" },
  { id: "desk", icon: "desk", label: "Dedicated workspace" },
  { id: "parking", icon: "parking", label: "Free parking on premises" },
  { id: "pool", icon: "pool", label: "Pool" },
  { id: "hot-tub", icon: "hotTub", label: "Hot tub" },
  { id: "pets", icon: "pets", label: "Pets allowed" },
  {
    id: "cameras",
    icon: "camera",
    label: "Exterior security cameras on property",
  },
  {
    id: "co-alarm",
    icon: "coAlarm",
    label: "Carbon monoxide alarm",
    unavailable: true,
  },
  { id: "smoke-alarm", icon: "smokeAlarm", label: "Smoke alarm", unavailable: true },
];

export const amenitiesTotal = 50;

export const location = {
  heading: "Where you'll be",
  place: "Candolim, Goa, India",
  note: "Exact location will be provided after booking.",
  neighbourhoodHeading: "Neighbourhood highlights",
  neighbourhoodBlurb:
    "Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.",
};

export const thingsToKnow: ThingsToKnowColumn[] = [
  {
    id: "cancellation",
    icon: "calendar",
    title: "Cancellation policy",
    items: [
      "Free cancellation before 17 October.",
      "Cancel before check-in on 18 October for a partial refund.",
      "Review this host's full policy for details.",
    ],
  },
  {
    id: "house-rules",
    icon: "house",
    title: "House rules",
    items: [
      "Check-in after 2:00 pm",
      "Checkout before 11:00 am",
      "3 guests maximum",
    ],
  },
  {
    id: "safety",
    icon: "shield",
    title: "Safety & property",
    items: [
      "Carbon monoxide alarm not reported",
      "Smoke alarm not reported",
      "Exterior security cameras on property",
    ],
  },
];

export const learnMoreLabel = "Learn more";

export const listingNav = [
  { id: "photos", label: "Photos", href: "#photos" },
  { id: "amenities", label: "Amenities", href: "#amenities" },
  { id: "reviews", label: "Reviews", href: "#reviews" },
  { id: "location", label: "Location", href: "#location" },
];
