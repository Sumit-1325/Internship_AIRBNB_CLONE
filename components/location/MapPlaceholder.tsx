import { House, Minus, Plus, Search } from "lucide-react";

const GRID_STYLE = {
  backgroundImage:
    "linear-gradient(#dcdcdc 1px, transparent 1px), linear-gradient(90deg, #dcdcdc 1px, transparent 1px)",
  backgroundSize: "80px 80px",
};

const COAST_STYLE = {
  clipPath: "polygon(0 0, 40% 0, 20% 100%, 0 100%)",
};

const control =
  "flex h-[40px] w-[40px] items-center justify-center bg-surface text-ink shadow-button";

export function MapPlaceholder() {
  return (
    <div className="relative mt-[24px] aspect-[1400/596] w-full overflow-hidden rounded-card border border-line bg-[#e9f0e4]">
      <div
        aria-hidden
        className="absolute inset-0 bg-[#acd3e6]"
        style={COAST_STYLE}
      />
      <div aria-hidden className="absolute inset-0 opacity-50" style={GRID_STYLE} />
      <div
        aria-hidden
        className="absolute top-[46%] left-[24%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8fbf7a]/20"
      />
      <div
        aria-hidden
        className="absolute top-[58%] left-[66%] h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8fbf7a]/20"
      />

      <div className="absolute top-[52%] left-[38%] flex h-[44px] w-[44px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink text-surface shadow-card">
        <House size={20} aria-hidden />
      </div>

      <button
        type="button"
        aria-label="Search the map"
        className={`absolute top-[24px] left-[24px] rounded-full ${control}`}
      >
        <Search size={18} aria-hidden />
      </button>

      <div className="absolute top-[24px] right-[24px] flex flex-col gap-[8px]">
        <button
          type="button"
          aria-label="Zoom in"
          className={`rounded-control ${control}`}
        >
          <Plus size={18} aria-hidden />
        </button>
        <button
          type="button"
          aria-label="Zoom out"
          className={`rounded-control ${control}`}
        >
          <Minus size={18} aria-hidden />
        </button>
      </div>
    </div>
  );
}
