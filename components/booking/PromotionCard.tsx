import { Tag } from "lucide-react";
import { promotion } from "@/data/listing";

export function PromotionCard() {
  return (
    <div className="flex h-[88px] items-center rounded-card border border-line px-[24px]">
      <Tag size={26} aria-hidden className="shrink-0 text-accent" />
      <div className="ml-[16px]">
        <p className="text-[16px] leading-[22px] text-ink">{promotion.text}</p>
        <p className="text-[16px] leading-[22px] text-ink underline">
          {promotion.terms}
        </p>
      </div>
      <button
        type="button"
        className="ml-auto shrink-0 rounded-control bg-surface-control px-[14px] py-[9px] text-[15px] font-semibold text-ink transition-colors hover:bg-line-soft"
      >
        {promotion.claimLabel}
      </button>
    </div>
  );
}
