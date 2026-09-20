"use client";

import { useState } from "react";
import { PhotoGrid } from "./PhotoGrid";
import { PhotoTour } from "./PhotoTour";
import { Lightbox } from "@/components/lightbox/Lightbox";

export function PhotoGallery() {
  const [tourOpen, setTourOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <PhotoGrid onOpen={() => setTourOpen(true)} />

      <PhotoTour
        open={tourOpen}
        onClose={() => setTourOpen(false)}
        onOpenPhoto={setLightboxIndex}
      />

      <Lightbox
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
      />
    </>
  );
}
