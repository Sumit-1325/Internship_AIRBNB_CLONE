"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { booking, listing, listingNav } from "@/data/listing";
import { ReserveButton } from "@/components/booking/ReserveButton";

export function StickyListingNav() {
  const [activeId, setActiveId] = useState(listingNav[0].id);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const gallery = document.getElementById("photos");

    if (!gallery) {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      setShown(!entry.isIntersecting);
    });

    observer.observe(gallery);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sections = listingNav
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          );

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-83px 0px -55% 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      inert={!shown}
      className={`fixed inset-x-0 top-0 z-40 border-b border-line-soft bg-surface transition-transform duration-500 ease-in-out ${
        shown ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav
        aria-label="Listing sections"
        className="mx-auto flex h-[83px] w-full max-w-listing items-center justify-between px-6 lg:w-[min(73.6%,1400px)] lg:max-w-none lg:px-0"
      >
        <ul className="flex items-center gap-[24px]">
          {listingNav.map((item) => {
            const active = item.id === activeId;

            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  aria-current={active ? "location" : undefined}
                  className={`relative flex h-[83px] items-center text-[14px] transition-colors ${
                    active
                      ? "font-semibold text-ink"
                      : "text-ink-soft hover:text-ink"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden
                    className={`absolute bottom-0 left-0 h-[3px] w-full bg-black transition-opacity ${
                      active ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-[24px] lg:flex">
          <div>
            <p className="text-[14px] font-semibold text-ink">
              {booking.price} for {booking.nightsLabel}
            </p>
            <p className="flex items-center gap-[4px] text-[12px] text-ink-soft">
              <Star size={12} aria-hidden className="fill-ink text-ink" />
              {listing.rating} · {listing.reviewCount} reviews
            </p>
          </div>
          <ReserveButton
            label={booking.reserveLabel}
            className="h-[40px] w-[115px] text-[14px]"
          />
        </div>
      </nav>
    </div>
  );
}
