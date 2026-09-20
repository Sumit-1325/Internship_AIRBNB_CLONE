"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, Heart } from "lucide-react";
import { ShareIcon } from "@/components/ui/ShareIcon";
import { useSavedListing } from "@/lib/useSavedListing";
import { tourPhotos, tourRooms } from "@/data/listing";
import { PhotoTourIndex } from "./PhotoTourIndex";
import { PhotoTourRoom } from "./PhotoTourRoom";

type PhotoTourProps = {
  open: boolean;
  onClose: () => void;
  onOpenPhoto: (index: number) => void;
};

export function PhotoTour({ open, onClose, onOpenPhoto }: PhotoTourProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { saved, toggleSaved } = useSavedListing();
  const [shared, setShared] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    const previousOverflow = document.body.style.overflow;
    const previousPadding = document.body.style.paddingRight;

    document.body.style.overflow = "hidden";

    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPadding;
    };
  }, [open]);

  async function share() {
    if (!navigator.clipboard) {
      return;
    }

    try {
      await navigator.clipboard.writeText(window.location.href);
      setShared(true);
      window.setTimeout(() => setShared(false), 2000);
    } catch {
      setShared(false);
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      aria-label="Photo tour"
      className="overlay-dialog m-0 h-full max-h-none w-full max-w-none overflow-y-auto bg-surface p-0 text-ink"
    >
      <div className="sticky top-0 z-10 flex h-[72px] items-center justify-between border-b border-line-soft bg-surface px-[24px]">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close photo tour"
          className="flex h-[40px] w-[40px] items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-control"
        >
          <ChevronLeft size={20} aria-hidden />
        </button>

        <p className="text-[16px] leading-[22px] font-semibold text-ink">
          Photo tour
        </p>

        <div className="flex items-center gap-[4px]">
          <button
            type="button"
            onClick={share}
            aria-label={shared ? "Link copied" : "Share listing"}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-control"
          >
            <ShareIcon />
          </button>
          <button
            type="button"
            onClick={toggleSaved}
            aria-pressed={saved}
            aria-label={saved ? "Saved" : "Save listing"}
            className="flex h-[40px] w-[40px] items-center justify-center rounded-full text-ink transition-colors hover:bg-surface-control"
          >
            <Heart
              size={20}
              aria-hidden
              className={saved ? "fill-brand text-brand" : ""}
            />
          </button>
        </div>
      </div>

      <div className="mx-auto w-full max-w-tour px-6 pt-[25px] pb-[64px] lg:px-0">
        <PhotoTourIndex rooms={tourRooms} />

        <div className="mt-[44px] flex flex-col gap-[64px]">
          {tourRooms.map((room) => (
            <PhotoTourRoom
              key={room.id}
              room={room}
              start={tourPhotos.indexOf(room.photos[0])}
              total={tourPhotos.length}
              onOpenPhoto={onOpenPhoto}
            />
          ))}
        </div>
      </div>
    </dialog>
  );
}
