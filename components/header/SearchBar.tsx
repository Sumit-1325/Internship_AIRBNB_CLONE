import Image from "next/image";
import { Search } from "lucide-react";

const fields = [
  { label: "Anywhere", placeholder: false },
  { label: "Anytime", placeholder: false },
  { label: "Add guests", placeholder: true },
];

export function SearchBar() {
  return (
    <form
      role="search"
      className="hidden h-[60px] w-[503px] shrink-0 items-center rounded-full border border-line bg-surface pr-[11px] pl-[34px] shadow-search lg:flex"
    >
      <Image
        src="/images/ui/search-pill-illustration.png"
        alt=""
        width={38}
        height={33}
        className="shrink-0"
        aria-hidden
      />

      {fields.map((field, index) => (
        <div key={field.label} className="flex items-center">
          {index > 0 ? (
            <span className="h-6 w-px shrink-0 bg-line" aria-hidden />
          ) : null}
          <button
            type="button"
            className={`rounded-full px-[21px] text-[18px] whitespace-nowrap transition-colors hover:bg-surface-control ${
              field.placeholder
                ? "font-semibold text-ink-soft"
                : "font-bold text-ink"
            }`}
          >
            {field.label}
          </button>
        </div>
      ))}

      <button
        type="button"
        aria-label="Search"
        className="ml-auto flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-surface transition-opacity hover:opacity-95"
      >
        <Search size={18} strokeWidth={2} aria-hidden />
      </button>
    </form>
  );
}
