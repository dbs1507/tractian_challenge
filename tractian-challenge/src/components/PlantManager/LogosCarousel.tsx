"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { companyLogos } from "@/lib/images";

/* ─── Specific max-widths from the original site per logo ─── */
const LOGO_MAX_WIDTHS: Record<string, number> = {
  "Georgia Aquarium": 70,
  "Air Liquide": 120,
  "Scotts Miracle Gro": 140,
  Ingredion: 75,
  "Kraft Heinz": 118,
  Whirlpool: 96,
  CSX: 74,
  Verizon: 90,
  Kubota: 85,
  Cummins: 50,
  Mauser: 105,
  Greif: 72,
};

export function LogosCarousel() {
  const t = useTranslations("plantManager");

  return (
    <section className="w-full px-0 pt-4 lg:px-4 lg:pb-16">
      <div className="mx-auto flex w-full max-w-full flex-col items-center gap-8 lg:gap-12">
        {/* Subtitle */}
        <h2 className="mx-auto max-w-2xl px-4 text-center text-slate-500 text-body-md lg:px-0 font-normal">
          {t("logosSubtitle")}
        </h2>

        {/* ── Mobile: infinite scroll carousel (<lg) ── */}
        <div className="relative w-full overflow-hidden lg:hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-[75px] bg-gradient-to-r from-white to-transparent sm:w-[200px]" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-[75px] bg-gradient-to-l from-white to-transparent sm:w-[200px]" />

          <div className="flex h-20 animate-scroll items-center gap-8">
            {/* Render logos 3x for seamless loop */}
            {[...companyLogos, ...companyLogos, ...companyLogos].map(
              (logo, i) => (
                <figure
                  key={`${logo.name}-${i}`}
                  className="flex shrink-0 items-center justify-center"
                  style={{
                    maxWidth: LOGO_MAX_WIDTHS[logo.name] ?? 100,
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
                    width={logo.width}
                    height={logo.height}
                    className="pointer-events-none h-auto w-full select-none object-contain scale-[0.7]"
                    loading="lazy"
                  />
                </figure>
              ),
            )}
          </div>
        </div>

        {/* ── Desktop: static grid (lg+) ── */}
        <div className="mx-auto hidden w-full max-w-6xl flex-wrap justify-center gap-12 lg:grid lg:grid-cols-6 lg:items-center lg:justify-center">
          {companyLogos.map((logo) => (
            <div
              key={logo.name}
              className="flex w-full items-center justify-center"
            >
              <div
                className="inline-flex"
                style={{
                  maxWidth: LOGO_MAX_WIDTHS[logo.name] ?? 100,
                }}
              >
                <Image
                  src={logo.src}
                  alt={`${logo.name} logo`}
                  width={logo.width}
                  height={logo.height}
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
