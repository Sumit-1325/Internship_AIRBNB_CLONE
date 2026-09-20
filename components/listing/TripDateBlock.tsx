import { tripDates } from "@/data/listing";
import type { CalendarMonth } from "@/data/listing";

const cell =
  "mx-auto flex h-[40px] w-[40px] items-center justify-center rounded-full text-[14px]";

function dayClassName(month: CalendarMonth, day: number) {
  if (day === month.checkIn || day === month.checkOut) {
    return `${cell} bg-ink font-semibold text-surface`;
  }

  if (
    month.checkIn !== undefined &&
    month.checkOut !== undefined &&
    day > month.checkIn &&
    day < month.checkOut
  ) {
    return `${cell} rounded-none bg-surface-muted text-ink`;
  }

  if (day > month.lastSelectable) {
    return `${cell} text-ink-soft`;
  }

  return `${cell} text-ink`;
}

function Month({ month }: { month: CalendarMonth }) {
  const days = Array.from({ length: month.days }, (_, index) => index + 1);

  return (
    <div>
      <p className="text-center text-[16px] leading-[22px] font-semibold text-ink">
        {month.label}
      </p>

      <div className="mt-[16px] grid grid-cols-7 gap-y-[6px]">
        {tripDates.weekdays.map((weekday, index) => (
          <span
            key={`${month.id}-weekday-${index}`}
            className="flex h-[28px] items-center justify-center text-[12px] text-ink-soft"
          >
            {weekday}
          </span>
        ))}

        {Array.from({ length: month.firstWeekday }, (_, index) => (
          <span key={`${month.id}-pad-${index}`} />
        ))}

        {days.map((day) => (
          <span key={`${month.id}-day-${day}`} className={dayClassName(month, day)}>
            {day}
          </span>
        ))}
      </div>
    </div>
  );
}

export function TripDateBlock() {
  return (
    <section className="mt-[48px]">
      <h2 className="text-[22px] leading-[26px] font-semibold text-ink">
        {tripDates.heading}
      </h2>
      <p className="mt-[8px] text-[16px] leading-[22px] text-ink">
        {tripDates.range}
      </p>

      <div
        aria-hidden
        className="mt-[24px] grid grid-cols-1 gap-[48px] sm:grid-cols-2"
      >
        {tripDates.months.map((month) => (
          <Month key={month.id} month={month} />
        ))}
      </div>

      <p
        aria-hidden
        className="mt-[16px] text-right text-[14px] leading-[20px] text-ink underline"
      >
        {tripDates.clearLabel}
      </p>
    </section>
  );
}
