import { listing } from "@/data/listing";

export function ListingSummary() {
  return (
    <div className="mt-[53px]">
      <p className="text-[22px] leading-[30px] font-semibold text-ink">
        {listing.summary}
      </p>
      <p className="text-[16px] leading-[26px] text-ink">{listing.capacity}</p>
    </div>
  );
}
