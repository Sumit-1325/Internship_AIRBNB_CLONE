import Image from "next/image";
import { guestFavourite } from "@/data/listing";
import { reviewsSummary } from "@/data/reviews";

function Laurel({ mirrored }: { mirrored?: boolean }) {
  return (
    <Image
      src={guestFavourite.laurel}
      alt=""
      width={36}
      height={88}
      aria-hidden
      className={`shrink-0 ${mirrored ? "-scale-x-100" : ""}`}
    />
  );
}

export function RatingSummary() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center gap-[16px]">
        <Laurel />
        <span className="text-[64px] leading-[1] font-semibold text-ink">
          {reviewsSummary.overall}
        </span>
        <Laurel mirrored />
      </div>

      <p className="mt-[16px] text-[22px] leading-[26px] font-semibold text-ink">
        {reviewsSummary.favouriteLabel}
      </p>

      <p className="mt-[8px] max-w-[420px] text-[16px] leading-[22px] text-ink">
        {reviewsSummary.blurb}
      </p>

      <button
        type="button"
        className="mt-[12px] text-[16px] text-ink underline transition-opacity hover:opacity-70"
      >
        {reviewsSummary.howItWorks}
      </button>
    </div>
  );
}
