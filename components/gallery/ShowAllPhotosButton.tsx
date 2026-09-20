const PITCH = 6;
const SIZE = 3;

const SQUARES = [0, PITCH, PITCH * 2].flatMap((y) =>
  [0, PITCH, PITCH * 2].map((x) => ({ x, y })),
);

function ShowAllPhotosIcon() {
  return (
    <svg
      width={15}
      height={15}
      viewBox="0 0 15 15"
      aria-hidden
      className="shrink-0"
    >
      {SQUARES.map(({ x, y }) => (
        <rect
          key={`${x}-${y}`}
          x={x}
          y={y}
          width={SIZE}
          height={SIZE}
          fill="currentColor"
        />
      ))}
    </svg>
  );
}

export function ShowAllPhotosButton({ onOpen }: { onOpen: () => void }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="absolute right-[32px] bottom-[29px] flex h-[40px] items-center gap-[13px] rounded-full bg-surface pl-[22px] pr-[22px] text-[14px] font-medium text-ink shadow-button transition-colors hover:bg-surface-muted"
    >
      <ShowAllPhotosIcon />
      Show all photos
    </button>
  );
}
