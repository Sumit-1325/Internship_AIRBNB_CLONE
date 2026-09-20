type DateSelectorProps = {
  label: string;
  value: string;
  className?: string;
};

export function DateSelector({ label, value, className }: DateSelectorProps) {
  return (
    <button
      type="button"
      className={`px-[14px] py-[11px] text-left transition-colors hover:bg-surface-muted ${className ?? ""}`}
    >
      <p className="text-[10px] font-semibold tracking-[0.04em] text-ink uppercase">
        {label}
      </p>
      <p className="mt-[2px] text-[15px] text-ink">{value}</p>
    </button>
  );
}
