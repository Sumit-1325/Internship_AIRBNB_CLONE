import { booking } from "@/data/listing";
import { DateSelector } from "./DateSelector";
import { GuestSelector } from "./GuestSelector";
import { ReserveButton } from "./ReserveButton";

export function BookingCard() {
  return (
    <div className="mt-[31px] rounded-card border border-line bg-surface p-[31px] shadow-card">
      <p className="text-[22px] leading-[26px] text-ink">
        <span className="font-semibold">{booking.price}</span> for{" "}
        {booking.nightsLabel}
      </p>

      <div className="mt-[24px] overflow-hidden rounded-control border border-line">
        <div className="flex">
          <DateSelector
            label="CHECK-IN"
            value={booking.checkIn}
            className="flex-1 border-r border-line"
          />
          <DateSelector label="CHECKOUT" value={booking.checkOut} className="flex-1" />
        </div>
        <div className="border-t border-line">
          <GuestSelector label="GUESTS" value={booking.guests} />
        </div>
      </div>

      <p className="mt-[14px] text-center text-[14px] text-ink-soft">
        {booking.cancellation}
      </p>

      <div className="mt-[22px]">
        <ReserveButton label={booking.reserveLabel} />
      </div>

      <p className="mt-[14px] text-center text-[14px] text-ink-soft">
        {booking.support}
      </p>
    </div>
  );
}
