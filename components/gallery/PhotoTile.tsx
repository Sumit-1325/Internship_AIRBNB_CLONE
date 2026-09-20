import Image from "next/image";
import type { GalleryImage } from "@/data/listing";

type PhotoTileProps = {
  image: GalleryImage;
  index: number;
  total: number;
  onOpen: () => void;
  className?: string;
};

export function PhotoTile({
  image,
  index,
  total,
  onOpen,
  className,
}: PhotoTileProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open photo ${index + 1} of ${total}: ${image.caption}`}
      className={`focus-inset group relative block h-full w-full overflow-hidden bg-surface-muted ${className ?? ""}`}
    >
      <Image
        src={image.src}
        alt=""
        fill
        sizes="(min-width: 1280px) 700px, 50vw"
        className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-[1.04]"
        loading={index === 0 ? "eager" : undefined}
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-ink/25 opacity-0 transition-opacity duration-[250ms] ease-in-out group-hover:opacity-100"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 flex items-baseline gap-[8px] bg-linear-to-t from-ink/85 to-transparent px-[16px] pt-[32px] pb-[13px] text-[13px] leading-[18px] font-medium text-surface opacity-0 transition-opacity duration-[250ms] ease-in-out group-hover:opacity-100"
      >
        <span>{image.caption}</span>
        <span className="ml-auto shrink-0 tabular-nums">
          {index + 1} / {total}
        </span>
      </span>
    </button>
  );
}
