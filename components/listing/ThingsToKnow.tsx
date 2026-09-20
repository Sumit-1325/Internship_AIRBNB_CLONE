import type { LucideIcon } from "lucide-react";
import { CalendarDays, House, ShieldCheck } from "lucide-react";
import { learnMoreLabel, thingsToKnow } from "@/data/listing";

const columnIcons: Record<string, LucideIcon> = {
  calendar: CalendarDays,
  house: House,
  shield: ShieldCheck,
};

export function ThingsToKnow() {
  return (
    <section className="mt-[64px] border-t border-line-soft pt-[48px]">
      <h2 className="text-[22px] leading-[26px] font-semibold text-ink">
        Things to know
      </h2>

      <div className="mt-[32px] grid grid-cols-3 gap-[24px]">
        {thingsToKnow.map((column) => {
          const Icon = columnIcons[column.icon];

          return (
            <div key={column.id}>
              <Icon size={24} strokeWidth={1.5} aria-hidden className="text-ink" />
              <h3 className="mt-[16px] text-[16px] leading-[22px] font-semibold text-ink">
                {column.title}
              </h3>
              <ul className="mt-[12px] space-y-[8px]">
                {column.items.map((item) => (
                  <li
                    key={item}
                    className="text-[14px] leading-[20px] text-ink"
                  >
                    {item}
                  </li>
                ))}
              </ul>
              <button
                type="button"
                className="mt-[16px] text-[14px] text-ink underline transition-opacity hover:opacity-70"
              >
                {learnMoreLabel}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}
