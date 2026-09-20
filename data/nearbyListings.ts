export type NearbyStay = {
  id: string;
  title: string;
  price: string;
  rating: number;
  image: string;
  alt: string;
};

export const nearbyStays: NearbyStay[] = [
  {
    id: "nearby-1",
    title: "Beautiful Studio with a view to die for",
    price: "₹23,600",
    rating: 4.91,
    image: "/images/listing/nearby-01.jpg",
    alt: "Studio apartment with a four-poster bed and balcony view",
  },
  {
    id: "nearby-2",
    title: "NAQAB - 1bhk with private pool",
    price: "₹42,218",
    rating: 4.95,
    image: "/images/listing/nearby-02.jpg",
    alt: "One bedroom apartment with a private pool",
  },
  {
    id: "nearby-3",
    title: "Greentique Luxury Flat with plunge pool, Calangute",
    price: "₹44,506",
    rating: 4.94,
    image: "/images/listing/nearby-03.jpg",
    alt: "Luxury flat with a plunge pool in Calangute",
  },
  {
    id: "nearby-4",
    title: "The Tropical Studio | 5 mins to Beach",
    price: "₹22,824",
    rating: 4.96,
    image: "/images/listing/nearby-04.jpg",
    alt: "Tropical studio five minutes from the beach",
  },
  {
    id: "nearby-5",
    title: "Luxury Casa Bella 1BHK with plunge pool, Calangute",
    price: "₹39,942",
    rating: 4.95,
    image: "/images/listing/nearby-05.jpg",
    alt: "One bedroom luxury home with a plunge pool in Calangute",
  },
];

export const nearbyHeading = "More stays nearby";
