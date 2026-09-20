"use client";

import { useEffect, useRef } from "react";
import type { KeyboardEvent, MouseEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { tourPhotos } from "@/data/listing";

type LightboxProps = {
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function Lightbox({ index, onClose, onIndexChange }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const open = index !== null;
  const total = tourPhotos.length;
  const image = index === null ? null : tourPhotos[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (open && !dialog.open) {
      dialog.showModal();
    } else if (!open && dialog.open) {
      dialog.close();
    }
  }, [open]);

  function goTo(next: number) {
    onIndexChange((next + total) % total);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDialogElement>) {
    if (index === null) return;

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      goTo(index - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      goTo(index + 1);
    }
  }

  function handleBackdropClick(event: MouseEvent<HTMLDivElement>) {
    const target = event.target as HTMLElement;

    if (!target.closest("figure") && !target.closest("button")) {
      onClose();
    }
  }

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      aria-label="Photo viewer"
      className="overlay-dialog m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 text-surface backdrop:bg-black/90"
    >
      {image && index !== null ? (
        <div
          className="flex h-full w-full flex-col"
          onClick={handleBackdropClick}
        >
          <div className="flex justify-end px-[24px] py-[16px]">
            <button
              type="button"
              onClick={onClose}
              aria-label="Close photo"
              className="focus-light flex h-[40px] w-[40px] items-center justify-center rounded-full bg-white/10 text-surface transition-colors hover:bg-white/20"
            >
              <X size={18} aria-hidden />
            </button>
          </div>

          <div className="flex min-h-0 flex-1 items-center gap-[16px] px-[24px] pb-[32px]">
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Previous photo"
              className="focus-light flex h-[44px] w-[44px] shrink-0 self-center items-center justify-center rounded-full bg-white/10 text-surface transition-colors hover:bg-white/20"
            >
              <ChevronLeft size={20} aria-hidden />
            </button>

            <figure className="flex min-h-0 flex-1 flex-col items-center">
              <div className="relative h-[70vh] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="1200px"
                  className="object-contain"
                />
              </div>
              <figcaption
                aria-live="polite"
                aria-atomic="true"
                className="mt-[16px] shrink-0 text-[14px] leading-[20px] text-surface"
              >
                {image.caption} · {index + 1} / {total}
              </figcaption>
            </figure>

            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Next photo"
              className="focus-light flex h-[44px] w-[44px] shrink-0 self-center items-center justify-center rounded-full bg-white/10 text-surface transition-colors hover:bg-white/20"
            >
              <ChevronRight size={20} aria-hidden />
            </button>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
