import type { LucideIcon } from "lucide-react";
import {
  AlarmSmoke,
  Bath,
  Car,
  CircleAlert,
  CookingPot,
  Cctv,
  Laptop,
  PawPrint,
  WavesLadder,
  Wifi,
} from "lucide-react";
import type { Amenity } from "@/data/listing";

const amenityIcons: Record<Amenity["icon"], LucideIcon> = {
  kitchen: CookingPot,
  wifi: Wifi,
  desk: Laptop,
  parking: Car,
  pool: WavesLadder,
  hotTub: Bath,
  pets: PawPrint,
  camera: Cctv,
  coAlarm: CircleAlert,
  smokeAlarm: AlarmSmoke,
};

export function AmenityRow({ amenity }: { amenity: Amenity }) {
  const Icon = amenityIcons[amenity.icon];

  return (
    <div className="flex items-center gap-[16px]">
      <Icon
        size={24}
        strokeWidth={1.5}
        aria-hidden
        className="shrink-0 text-ink"
      />
      <span
        className={
          amenity.unavailable
            ? "text-[16px] leading-[22px] text-ink-soft line-through"
            : "text-[16px] leading-[22px] text-ink"
        }
      >
        {amenity.label}
      </span>
    </div>
  );
}
