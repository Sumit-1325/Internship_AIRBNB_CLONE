import { Flag } from "lucide-react";

export function ReportListing() {
  return (
    <button
      type="button"
      className="mt-[26px] ml-auto flex items-center gap-[10px] text-[14px] text-ink-soft underline transition-opacity hover:opacity-70"
    >
      <Flag size={16} aria-hidden />
      Report this listing
    </button>
  );
}
