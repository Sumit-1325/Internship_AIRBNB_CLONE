import { ratingDistribution } from "@/data/reviews";

export function RatingBreakdown() {
  return (
    <div>
      <p className="text-[14px] leading-[18px] text-ink">Overall rating</p>
      <div className="mt-[12px] space-y-[6px]">
        {ratingDistribution.map((row) => (
          <div key={row.stars} className="flex items-center gap-[8px]">
            <span aria-hidden className="w-[8px] text-[12px] text-ink">
              {row.stars}
            </span>
            <span aria-hidden className="h-[4px] flex-1 rounded-full bg-line">
              <span
                aria-hidden
                className="block h-full rounded-full bg-ink"
                style={{ width: `${row.percent}%` }}
              />
            </span>
            <span className="sr-only">
              {row.stars} stars: {row.percent}% of reviews
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
