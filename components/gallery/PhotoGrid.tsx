import { galleryImages } from "@/data/listing";
import { PhotoTile } from "./PhotoTile";
import { ShowAllPhotosButton } from "./ShowAllPhotosButton";

type PhotoGridProps = {
  onOpen: () => void;
};

export function PhotoGrid({ onOpen }: PhotoGridProps) {
  const [hero, ...rest] = galleryImages;
  const total = galleryImages.length;

  return (
    <section
      id="photos"
      aria-label="Listing photos"
      className="relative mt-[30px] aspect-[1400/617] w-full scroll-mt-[83px] overflow-hidden rounded-image"
    >
      <div className="grid h-full grid-cols-[50%_1fr] gap-[10px]">
        <PhotoTile image={hero} index={0} total={total} onOpen={onOpen} />

        <div className="grid grid-cols-2 grid-rows-2 gap-[10px]">
          {rest.map((image, offset) => (
            <PhotoTile
              key={image.id}
              image={image}
              index={offset + 1}
              total={total}
              onOpen={onOpen}
            />
          ))}
        </div>
      </div>

      <ShowAllPhotosButton onOpen={onOpen} />
    </section>
  );
}
