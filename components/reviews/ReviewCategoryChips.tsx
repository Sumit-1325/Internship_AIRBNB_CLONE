import { reviewChips } from "@/data/reviews";

export function ReviewCategoryChips() {
  return (
    <div className="mt-[32px] flex gap-[12px] overflow-x-auto pb-[4px]">
      {reviewChips.map((chip) => (
        <button
          key={chip.label}
          type="button"
          className="flex shrink-0 items-center gap-[6px] rounded-full border border-line px-[16px] py-[10px] text-[14px] text-ink"
        >
          {chip.label}
          <span className="sr-only">: {chip.count} mentions</span>
          <span aria-hidden className="text-ink-soft">
            {chip.count}
          </span>
        </button>
      ))}
    </div>
  );
}
