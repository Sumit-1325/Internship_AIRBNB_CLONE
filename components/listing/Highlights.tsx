import Image from "next/image";
import { highlights } from "@/data/listing";

function HighlightItem({
  icon,
  width,
  height,
  title,
  body,
}: {
  icon: string;
  width: number;
  height: number;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-[31px]">
      <Image
        src={icon}
        alt=""
        width={width}
        height={height}
        aria-hidden
        className="mt-[2px] shrink-0"
      />
      <div>
        <p className="text-[16px] leading-[22px] font-semibold text-ink">
          {title}
        </p>
        <p className="text-[14px] leading-[20px] text-ink-soft">{body}</p>
      </div>
    </div>
  );
}

export function Highlights() {
  return (
    <div className="mt-[41px] flex flex-col gap-[54px]">
      {highlights.map((highlight) => (
        <HighlightItem
          key={highlight.id}
          icon={highlight.icon}
          width={highlight.width}
          height={highlight.height}
          title={highlight.title}
          body={highlight.body}
        />
      ))}
    </div>
  );
}
