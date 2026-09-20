import { ChevronDown } from "lucide-react";

type GuestSelectorProps = {
  label: string;
  value: string;
};

export function GuestSelector({ label, value }: GuestSelectorProps) {
  return (
    <button
      type="button"
      className="flex w-full items-center px-[14px] py-[11px] text-left transition-colors hover:bg-surface-muted"
    >
      <div>
        <p className="text-[10px] font-semibold tracking-[0.04em] text-ink uppercase">
          {label}
        </p>
        <p className="mt-[2px] text-[15px] text-ink">{value}</p>
      </div>
      <ChevronDown size={18} aria-hidden className="ml-auto text-ink" />
    </button>
  );
}
