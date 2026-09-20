export function TranslationBanner() {
  return (
    <div className="mt-[43px] rounded-control bg-surface-muted px-[25px] py-[19px]">
      <p className="text-[14px] text-ink">
        Some info has been automatically translated.{" "}
        <button
          type="button"
          className="underline transition-opacity hover:opacity-70"
        >
          Show original
        </button>
      </p>
    </div>
  );
}
