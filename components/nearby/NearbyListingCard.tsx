import Image from "next/image";
import { Star } from "lucide-react";
import type { NearbyStay } from "@/data/nearbyListings";

type NearbyListingCardProps = {
  stay: NearbyStay;
};

export function NearbyListingCard({ stay }: NearbyListingCardProps) {
  return (
    <div>
      <div className="relative aspect-[260/226] w-full overflow-hidden rounded-image bg-surface-muted">
        <Image
          src={stay.image}
          alt={stay.alt}
          fill
          sizes="260px"
          className="object-cover"
        />
      </div>
      <p className="mt-[12px] line-clamp-2 text-[16px] leading-[22px] font-semibold text-ink">
        {stay.title}
      </p>
      <p className="mt-[4px] text-[14px] leading-[20px] text-ink">
        {stay.price}
      </p>
      <p className="flex items-center gap-[4px] text-[14px] leading-[20px] text-ink">
        <Star size={12} aria-hidden className="fill-ink text-ink" />
        {stay.rating}
      </p>
    </div>
  );
}
