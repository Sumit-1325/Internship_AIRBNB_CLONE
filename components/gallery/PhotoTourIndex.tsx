import Image from "next/image";
import type { TourRoom } from "@/data/listing";

type PhotoTourIndexProps = {
  rooms: TourRoom[];
};

export function PhotoTourIndex({ rooms }: PhotoTourIndexProps) {
  return (
    <nav aria-label="Rooms in this photo tour">
      <ul className="grid grid-cols-4 gap-[8px] sm:grid-cols-6 lg:grid-cols-8">
        {rooms.map((room) => (
          <li key={room.id}>
            <a href={`#tour-${room.id}`} className="group block">
              <span className="relative block aspect-[16/15] overflow-hidden rounded-control bg-surface-muted">
                <Image
                  src={room.photos[0].src}
                  alt=""
                  fill
                  sizes="90px"
                  className="object-cover transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                />
              </span>
              <span className="mt-[8px] block text-[12px] leading-[16px] text-ink-soft">
                {room.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
