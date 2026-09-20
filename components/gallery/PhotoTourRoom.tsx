import Image from "next/image";
import type { TourRoom } from "@/data/listing";

type PhotoTourRoomProps = {
  room: TourRoom;
  start: number;
  total: number;
  onOpenPhoto: (index: number) => void;
};

export function PhotoTourRoom({
  room,
  start,
  total,
  onOpenPhoto,
}: PhotoTourRoomProps) {
  return (
    <section
      id={`tour-${room.id}`}
      aria-label={room.name}
      className="grid scroll-mt-[72px] grid-cols-1 gap-x-[46px] gap-y-[16px] lg:grid-cols-2 lg:items-start"
    >
      <div>
        <h2 className="text-[24px] leading-[28px] font-semibold text-ink">
          {room.name}
        </h2>
        <p className="mt-[8px] text-[13px] leading-[18px] text-ink-soft">
          {room.amenities}
        </p>
      </div>

      <div className="flex flex-col gap-[10px]">
        {room.photos.map((image, offset) => (
          <button
            key={image.id}
            type="button"
            onClick={() => onOpenPhoto(start + offset)}
            aria-label={`Open photo ${start + offset + 1} of ${total}: ${image.caption}`}
            className="group relative block aspect-[3/2] w-full overflow-hidden rounded-image bg-surface-muted"
          >
            <Image
              src={image.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 380px, 100vw"
              className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>
    </section>
  );
}
