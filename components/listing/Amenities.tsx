import { amenities, amenitiesTotal } from "@/data/listing";
import { AmenityRow } from "./AmenityRow";

export function Amenities() {
  return (
    <section id="amenities" className="mt-[48px] scroll-mt-[83px]">
      <h2 className="text-[22px] leading-[26px] font-semibold text-ink">
        What this place offers
      </h2>

      <div className="mt-[24px] grid grid-cols-2 gap-x-[24px] gap-y-[16px]">
        {amenities.map((amenity) => (
          <AmenityRow key={amenity.id} amenity={amenity} />
        ))}
      </div>

      <button
        type="button"
        className="mt-[32px] rounded-control border border-ink px-[23px] py-[13px] text-[16px] font-semibold text-ink transition-colors hover:bg-surface-muted"
      >
        Show all {amenitiesTotal} amenities
      </button>
    </section>
  );
}
