import Image from "next/image";
import Link from "next/link";
import { Globe } from "lucide-react";
import { SearchBar } from "./SearchBar";

function MenuIcon() {
  return (
    <svg width={18} height={12} viewBox="0 0 18 12" fill="none" aria-hidden>
      <path
        d="M0 1H18M0 6H18M0 11H18"
        stroke="currentColor"
        strokeWidth={2}
      />
    </svg>
  );
}

export function Header() {
  return (
    <header className="border-b border-line-soft bg-surface">
      <div className="grid h-[110px] grid-cols-[1fr_auto_1fr] items-center px-6 xl:px-[100px]">
        <Link href="/" aria-label="Airbnb" className="justify-self-start">
          <Image
            src="/images/ui/airbnb-logo.png"
            alt=""
            width={129}
            height={40}
            loading="eager"
          />
        </Link>

        <SearchBar />

        <div className="flex items-center justify-self-end">
          <button
            type="button"
            className="mr-4 rounded-full px-3 py-2 text-[18px] font-bold text-ink hover:bg-surface-control"
          >
            Become a host
          </button>
          <button
            type="button"
            aria-label="Choose a language and currency"
            className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-surface-control text-ink transition-colors hover:bg-line-soft"
          >
            <Globe size={22} aria-hidden />
          </button>
          <button
            type="button"
            aria-label="Main menu"
            className="ml-[10px] flex h-[50px] w-[50px] items-center justify-center rounded-full bg-surface-control text-ink transition-colors hover:bg-line-soft"
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
