"use client";

import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { nearbyHeading, nearbyStays } from "@/data/nearbyListings";
import { NearbyListingCard } from "./NearbyListingCard";

export function NearbyListings() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);

  function syncPage() {
    const track = trackRef.current;
    if (!track) return;

    setPageCount(Math.max(1, Math.ceil(track.scrollWidth / track.clientWidth)));
    setPage(Math.round(track.scrollLeft / track.clientWidth) + 1);
  }

  function handleScroll(direction: number) {
    const track = trackRef.current;
    if (!track) return;

    track.scrollBy({ left: direction * track.clientWidth, behavior: "smooth" });
  }

  const atStart = page <= 1;
  const atEnd = page >= pageCount;

  return (
    <section className="mt-[64px] border-t border-line-soft pt-[48px]">
      <div className="flex items-center justify-between">
        <h2 className="text-[22px] leading-[26px] font-semibold text-ink">
          {nearbyHeading}
        </h2>

        <div className="flex items-center gap-[12px]">
          <span className="text-[14px] text-ink-soft">
            {page} / {pageCount}
          </span>
          <button
            type="button"
            onClick={() => handleScroll(-1)}
            disabled={atStart}
            aria-label="Previous stays"
            className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface-muted disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft size={16} aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => handleScroll(1)}
            disabled={atEnd}
            aria-label="Next stays"
            className="flex h-[32px] w-[32px] items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface-muted disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight size={16} aria-hidden />
          </button>
        </div>
      </div>

      <div
        ref={trackRef}
        onScroll={syncPage}
        className="mt-[24px] flex gap-[25px] overflow-x-auto"
      >
        {nearbyStays.map((stay) => (
          <div key={stay.id} className="w-[260px] shrink-0">
            <NearbyListingCard stay={stay} />
          </div>
        ))}
      </div>
    </section>
  );
}
