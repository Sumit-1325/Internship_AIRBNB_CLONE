import Image from "next/image";
import { BadgeCheck, GraduationCap, Lightbulb, ShieldCheck } from "lucide-react";
import { meetYourHost } from "@/data/listing";

const aboutIcon = {
  bulb: Lightbulb,
  cap: GraduationCap,
};

function CoHostAvatar({ name, image }: { name: string; image?: string }) {
  if (image) {
    return (
      <Image
        src={image}
        alt=""
        width={32}
        height={32}
        className="shrink-0 rounded-full object-cover"
      />
    );
  }

  return (
    <span
      aria-hidden
      className="flex h-[32px] w-[32px] shrink-0 items-center justify-center rounded-full bg-surface-control text-[13px] font-semibold text-ink"
    >
      {name.slice(0, 1)}
    </span>
  );
}

export function MeetYourHost() {
  return (
    <section
      id="host"
      className="mt-[64px] border-t border-line-soft pt-[48px]"
    >
      <h2 className="text-[22px] leading-[26px] font-semibold text-ink">
        {meetYourHost.heading}
      </h2>

      <div className="mt-[24px] grid grid-cols-1 gap-x-[56px] gap-y-[32px] lg:grid-cols-2 lg:items-start">
        <div>
          <div className="flex items-center gap-[24px] rounded-card bg-surface p-[24px] shadow-card">
            <div className="shrink-0">
              <span className="relative block w-fit">
                <Image
                  src={meetYourHost.logo}
                  alt={meetYourHost.logoAlt}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <BadgeCheck
                  size={24}
                  aria-hidden
                  className="absolute -right-[2px] -bottom-[2px] rounded-full bg-surface fill-brand text-surface"
                />
              </span>

              <p className="mt-[12px] text-[22px] leading-[26px] font-semibold text-ink">
                {meetYourHost.name}
              </p>
              <p className="mt-[2px] text-[14px] leading-[20px] text-ink-soft">
                {meetYourHost.role}
              </p>
            </div>

            <dl className="flex min-w-0 flex-1 flex-col divide-y divide-line-soft">
              {meetYourHost.stats.map((stat) => (
                <div
                  key={stat.id}
                  className="flex flex-col-reverse gap-[2px] py-[10px] first:pt-0 last:pb-0"
                >
                  <dt className="text-[13px] leading-[18px] text-ink-soft">
                    {stat.label}
                  </dt>
                  <dd className="text-[22px] leading-[26px] font-semibold text-ink">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ul className="mt-[20px] flex flex-col gap-[12px]">
            {meetYourHost.about.map((item) => {
              const Icon = aboutIcon[item.icon];

              return (
                <li
                  key={item.id}
                  className="flex items-center gap-[10px] text-[15px] leading-[21px] text-ink"
                >
                  <Icon size={20} aria-hidden className="shrink-0 text-ink" />
                  {item.text}
                </li>
              );
            })}
          </ul>
        </div>

        <div>
          <h3 className="text-[18px] leading-[24px] font-semibold text-ink">
            {meetYourHost.coHostsHeading}
          </h3>

          <ul className="mt-[16px] grid grid-cols-2 gap-x-[24px] gap-y-[12px] sm:grid-cols-3">
            {meetYourHost.coHosts.map((coHost) => (
              <li
                key={coHost.id}
                className="flex items-center gap-[10px] text-[15px] leading-[21px] text-ink"
              >
                <CoHostAvatar name={coHost.name} image={coHost.image} />
                <span className="min-w-0">{coHost.name}</span>
              </li>
            ))}
          </ul>

          <h3 className="mt-[28px] text-[18px] leading-[24px] font-semibold text-ink">
            {meetYourHost.detailsHeading}
          </h3>

          <ul className="mt-[12px] flex flex-col gap-[8px]">
            {meetYourHost.details.map((detail) => (
              <li key={detail} className="text-[15px] leading-[21px] text-ink">
                {detail}
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="mt-[20px] rounded-control border border-ink px-[23px] py-[13px] text-[16px] font-semibold text-ink transition-colors hover:bg-surface-muted"
          >
            {meetYourHost.messageLabel}
          </button>

          <p className="mt-[20px] flex items-start gap-[10px] text-[12px] leading-[17px] text-ink-soft">
            <ShieldCheck size={20} aria-hidden className="shrink-0 text-ink-soft" />
            {meetYourHost.paymentNote}
          </p>
        </div>
      </div>
    </section>
  );
}
