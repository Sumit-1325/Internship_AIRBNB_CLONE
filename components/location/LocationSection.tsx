import { location } from "@/data/listing";
import { MapPlaceholder } from "./MapPlaceholder";

export function LocationSection() {
  return (
    <section
      id="location"
      className="mt-[64px] scroll-mt-[83px] border-t border-line-soft pt-[48px]"
    >
      <h2 className="text-[22px] leading-[26px] font-semibold text-ink">
        {location.heading}
      </h2>
      <p className="mt-[8px] text-[16px] leading-[22px] text-ink">
        {location.place}
      </p>

      <MapPlaceholder />

      <p className="mt-[16px] text-[14px] leading-[20px] text-ink-soft">
        {location.note}
      </p>

      <h3 className="mt-[32px] text-[16px] leading-[22px] font-semibold text-ink">
        {location.neighbourhoodHeading}
      </h3>
      <p className="mt-[8px] text-[16px] leading-[24px] text-ink">
        {location.neighbourhoodBlurb}
      </p>
    </section>
  );
}
