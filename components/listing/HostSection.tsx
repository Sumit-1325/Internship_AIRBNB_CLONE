import Image from "next/image";
import { host } from "@/data/listing";

export function HostSection() {
  return (
    <div className="mt-[33px] border-b border-line-soft pb-[33px]">
      <div className="flex items-center gap-[21px]">
        <Image
          src={host.avatar}
          alt={host.avatarAlt}
          width={57}
          height={57}
          className="shrink-0 rounded-full"
        />
        <div>
          <p className="text-[16px] leading-[22px] font-semibold text-ink">
            Hosted by {host.name}
          </p>
          <p className="text-[14px] leading-[20px] text-ink-soft">
            {host.hosting}
          </p>
        </div>
      </div>
    </div>
  );
}
