import Image from "next/image";
import { sleepingRooms } from "@/data/listing";

export function SleepingArrangements() {
  return (
    <section className="mt-[48px]">
      <h2 className="text-[22px] leading-[26px] font-semibold text-ink">
        Where you&apos;ll sleep
      </h2>

      <div className="mt-[24px] grid grid-cols-2 gap-[20px]">
        {sleepingRooms.map((room) => (
          <div key={room.id}>
            <div className="relative aspect-[397/265] w-full overflow-hidden rounded-image">
              <Image
                src={room.image}
                alt=""
                fill
                sizes="397px"
                className="object-cover"
              />
            </div>
            <p className="mt-[16px] text-[16px] leading-[22px] font-semibold text-ink">
              {room.title}
            </p>
            <p className="text-[14px] leading-[20px] text-ink-soft">
              {room.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
