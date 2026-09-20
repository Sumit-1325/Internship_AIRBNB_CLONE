"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { showLessLabel, showMoreLabel, type Review } from "@/data/reviews";

type ReviewCardProps = {
  review: Review;
};

export function ReviewCard({ review }: ReviewCardProps) {
  const [expanded, setExpanded] = useState(false);
  const clamped = Boolean(review.truncated) && !expanded;

  return (
    <div>
      <div className="flex items-center gap-[12px]">
        <span
          aria-hidden
          className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full bg-surface-control text-[16px] font-semibold text-ink"
        >
          {review.name.charAt(0)}
        </span>
        <div>
          <p className="text-[16px] leading-[20px] font-semibold text-ink">
            {review.name}
          </p>
          <p className="text-[14px] leading-[18px] text-ink-soft">
            {review.membership}
          </p>
        </div>
      </div>

      <div className="mt-[12px] flex items-center gap-[8px]">
        <span className="flex gap-[2px]">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} size={12} aria-hidden className="fill-ink text-ink" />
          ))}
        </span>
        <span className="text-[14px] text-ink-soft">· {review.date}</span>
      </div>

      <p
        className={`mt-[12px] text-[16px] leading-[24px] text-ink ${
          clamped ? "line-clamp-3" : ""
        }`}
      >
        {review.body}
      </p>

      {review.truncated ? (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          aria-expanded={expanded}
          className="mt-[8px] text-[16px] leading-[22px] font-semibold text-ink underline transition-opacity hover:opacity-70"
        >
          {expanded ? showLessLabel : showMoreLabel}
        </button>
      ) : null}
    </div>
  );
}
