import Image from "next/image";
import { Star } from "lucide-react";
import { guestFavourite, listing } from "@/data/listing";

function Laurel({ mirrored }: { mirrored?: boolean }) {
  return (
    <Image
      src={guestFavourite.laurel}
      alt=""
      width={18}
      height={44}
      aria-hidden
      className={`shrink-0 ${mirrored ? "-scale-x-100" : ""}`}
    />
  );
}

export function GuestFavourite() {
  const [firstWord, ...restWords] = guestFavourite.label.split(" ");

  return (
    <div className="mt-[55px] flex h-[100px] items-center rounded-card border border-line pr-[37px] pl-[37px]">
      <Laurel />
      <p className="mx-[12px] shrink-0 text-[16px] leading-[20px] font-semibold text-ink">
        {firstWord}
        <br />
        {restWords.join(" ")}
      </p>
      <Laurel mirrored />

      <p className="ml-[30px] max-w-[400px] text-[16px] leading-[22px] text-ink">
        {guestFavourite.blurb}
      </p>

      <div className="ml-auto flex shrink-0 items-center gap-[12px]">
        <div className="text-center">
          <p className="text-[18px] leading-[20px] font-semibold text-ink">
            {listing.rating}
          </p>
          <div className="mt-[2px] flex justify-center gap-[1px]">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} size={10} aria-hidden className="fill-ink text-ink" />
            ))}
          </div>
        </div>
        <span className="h-[34px] w-px bg-line" aria-hidden />
        <p className="text-[14px] text-ink">{listing.reviewCount} Reviews</p>
      </div>
    </div>
  );
}
