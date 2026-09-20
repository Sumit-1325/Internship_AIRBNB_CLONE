import type { LucideIcon } from "lucide-react";
import {
  BadgeCheck,
  Broom,
  ChartColumn,
  KeyRound,
  MapPin,
  MessageCircle,
  Tag,
} from "lucide-react";
import type { RatingCategory as RatingCategoryType } from "@/data/reviews";

export const ratingCategoryIcons: Record<
  RatingCategoryType["icon"],
  LucideIcon
> = {
  overall: ChartColumn,
  cleanliness: Broom,
  accuracy: BadgeCheck,
  checkIn: KeyRound,
  communication: MessageCircle,
  location: MapPin,
  value: Tag,
};

type RatingCategoryProps = {
  category: RatingCategoryType;
};

export function RatingCategory({ category }: RatingCategoryProps) {
  const Icon = ratingCategoryIcons[category.icon];

  return (
    <div>
      <Icon size={24} strokeWidth={1.5} aria-hidden className="text-ink" />
      <p className="mt-[12px] text-[14px] leading-[18px] text-ink">
        {category.label}
      </p>
      <div className="mt-[8px] flex items-center gap-[8px]">
        <span className="text-[16px] leading-[20px] font-semibold text-ink">
          {category.value}
        </span>
        <span aria-hidden className="h-px flex-1 bg-ink" />
      </div>
    </div>
  );
}
