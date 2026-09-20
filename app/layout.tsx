import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Romantic Jacuzzi 1BHK Candolim | Mirashya UG10",
  description:
    "Entire serviced apartment in Candolim, India. 3 guests, 1 bedroom, 1 bed, 1 bathroom.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${nunitoSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-[8px] focus:left-[8px] focus:z-50 focus:rounded-control focus:bg-surface focus:px-[16px] focus:py-[10px] focus:text-[14px] focus:font-semibold focus:text-ink focus:shadow-button"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
