type ReserveButtonProps = {
  label: string;
  className?: string;
};

export function ReserveButton({ label, className }: ReserveButtonProps) {
  return (
    <button
      type="button"
      className={`rounded-control bg-linear-to-r from-brand-start via-brand-mid to-brand-end font-semibold text-surface transition-shadow hover:shadow-button ${
        className ?? "h-[60px] w-full text-[17px]"
      }`}
    >
      {label}
    </button>
  );
}
