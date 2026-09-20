export type RatingCategory = {
  id: string;
  label: string;
  value: string;
  icon:
    | "overall"
    | "cleanliness"
    | "accuracy"
    | "checkIn"
    | "communication"
    | "location"
    | "value";
};

export type ReviewChip = {
  label: string;
  count: number;
};

export type Review = {
  id: string;
  name: string;
  membership: string;
  date: string;
  rating: number;
  body: string;
  truncated?: boolean;
  avatar?: string;
};

export const reviewsSummary = {
  overall: 4.95,
  count: 19,
  favouriteLabel: "Guest favourite",
  blurb:
    "This home is a guest favourite based on ratings, reviews and reliability",
  howItWorks: "How reviews work",
};

export const ratingDistribution = [
  { stars: 5, percent: 95 },
  { stars: 4, percent: 5 },
  { stars: 3, percent: 0 },
  { stars: 2, percent: 0 },
  { stars: 1, percent: 0 },
];

export const ratingCategories: RatingCategory[] = [
  { id: "overall", label: "Overall rating", value: "5.0", icon: "overall" },
  { id: "cleanliness", label: "Cleanliness", value: "5.0", icon: "cleanliness" },
  { id: "accuracy", label: "Accuracy", value: "5.0", icon: "accuracy" },
  { id: "check-in", label: "Check-in", value: "5.0", icon: "checkIn" },
  {
    id: "communication",
    label: "Communication",
    value: "5.0",
    icon: "communication",
  },
  { id: "location", label: "Location", value: "4.8", icon: "location" },
  { id: "value", label: "Value", value: "4.8", icon: "value" },
];

export const reviewChips: ReviewChip[] = [
  { label: "Comfort", count: 6 },
  { label: "Accuracy", count: 5 },
  { label: "Hot tub", count: 5 },
  { label: "Condition", count: 4 },
  { label: "Hospitality", count: 8 },
  { label: "Cleanliness", count: 4 },
  { label: "Amenities", count: 2 },
];

export const reviews: Review[] = [
  {
    id: "review-1",
    name: "Rahul",
    membership: "2 months on Airbnb",
    date: "1 week ago",
    rating: 5,
    body: "Very helpful and responsive team. Safe and peaceful stay. loved everything about the property.",
  },
  {
    id: "review-2",
    name: "Ananya",
    membership: "3 years on Airbnb",
    date: "2 weeks ago",
    rating: 5,
    body: "We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay. We would definitely recommend this place and would love to stay here again.",
    truncated: true,
  },
  {
    id: "review-3",
    name: "Samiksha",
    membership: "8 months on Airbnb",
    date: "May 2026",
    rating: 5,
    body: "the host nitish was really great help",
  },
  {
    id: "review-4",
    name: "Vedant",
    membership: "4 years on Airbnb",
    date: "May 2026",
    rating: 5,
    body: "We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived. The cleanliness standards were truly impressive, with every corner of the house looking fresh and pristine....",
    truncated: true,
  },
  {
    id: "review-5",
    name: "Vaibhav S",
    membership: "3 years on Airbnb",
    date: "May 2026",
    rating: 5,
    body: "Great great experience living out there, can't expect more, will always look for it in the future and will recommend my friends too.",
  },
  {
    id: "review-6",
    name: "Mohd",
    membership: "5 years on Airbnb",
    date: "May 2026",
    rating: 5,
    body: "Great place. Exactly as described in the listing.",
  },
];

export const showAllReviewsLabel = "Show all 19 reviews";
export const showMoreLabel = "Show more";
export const showLessLabel = "Show less";
