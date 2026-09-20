"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { ShareIcon } from "@/components/ui/ShareIcon";
import { useSavedListing } from "@/lib/useSavedListing";
import { listing } from "@/data/listing";

export function ListingHeader() {
  const { saved, toggleSaved } = useSavedListing();
  const [shared, setShared] = useState(false);

  async function share() {
    if (!navigator.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setShared(true);
      window.setTimeout(() => setShared(false), 2000);
    } catch {
      setShared(false);
    }
  }

  return (
    <div className="mt-[37px] flex items-center justify-between gap-6">
      <h1 className="text-[33px] leading-[36px] font-semibold text-ink">
        {listing.title}
      </h1>

      <div className="relative top-[5px] flex shrink-0 items-center gap-[4px]">
        <button
          type="button"
          onClick={share}
          className="flex h-[39px] items-center gap-[13px] rounded-control px-3 text-[18px] text-ink hover:bg-surface-control"
        >
          <ShareIcon />
          <span className="underline underline-offset-2">
            {shared ? "Link copied" : "Share"}
          </span>
        </button>
        <button
          type="button"
          onClick={toggleSaved}
          aria-pressed={saved}
          className="flex h-[39px] items-center gap-[11px] rounded-control px-3 text-[18px] text-ink hover:bg-surface-control"
        >
          <Heart
            size={22}
            aria-hidden
            className={`shrink-0 transition-colors ${
              saved ? "fill-brand text-brand" : ""
            }`}
          />
          <span className="underline underline-offset-2">
            {saved ? "Saved" : "Save"}
          </span>
        </button>
      </div>
    </div>
  );
}
