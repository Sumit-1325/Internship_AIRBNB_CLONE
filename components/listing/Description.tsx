"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";
import { description } from "@/data/listing";

export function Description() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-[24px]">
      <div className={expanded ? "" : "line-clamp-4"}>
        {description.map((paragraph) => (
          <p
            key={paragraph.slice(0, 24)}
            className="mt-[14px] text-[16px] leading-[24px] text-ink first:mt-0"
          >
            {paragraph}
          </p>
        ))}
      </div>
      <button
        type="button"
        onClick={() => setExpanded((prev) => !prev)}
        aria-expanded={expanded}
        className="mt-[10px] inline-flex items-center gap-[6px] text-[16px] font-semibold text-ink underline transition-opacity hover:opacity-70"
      >
        {expanded ? "Show less" : "Show more"}
        <ChevronRight
          size={18}
          aria-hidden
          className={`transition-transform ${expanded ? "-rotate-90" : ""}`}
        />
      </button>
    </div>
  );
}
