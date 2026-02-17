"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { heroImages } from "@/lib/images";
import { useDemoModal } from "@/contexts/DemoModalContext";

const desktopHeroByLocale: Record<string, string> = {
  en: heroImages.desktopEN,
  pt: heroImages.desktopPT,
  es: heroImages.desktopES,
};

const mobileHeroByLocale: Record<string, string> = {
  en: heroImages.mobileEN,
  pt: heroImages.mobilePT,
  es: heroImages.mobileES,
};

export function HeroSection() {
  const locale = useLocale();
  const t = useTranslations("plantManager");
  const { openDemoModal } = useDemoModal();
  const desktopHero = desktopHeroByLocale[locale] ?? heroImages.desktopEN;
  const mobileHero = mobileHeroByLocale[locale] ?? heroImages.mobileEN;
  const xlPlClass = locale === "en" ? "xl:pl-[153.8px]" : locale === "es" ? "xl:pl-[150px]" : "xl:pl-[158px]";

  return (
    <section className="relative w-full 2xl:bg-right-top 3xl:min-h-[675px] 4xl:min-h-[695px]">
      {/* Background image - desktop only */}
      <div
        className="absolute inset-0 hidden bg-cover bg-right bg-no-repeat md:block"
        style={{ backgroundImage: `url(${desktopHero})` }}
      />
      {/* Mobile: stacked layout (blue block + image below). Desktop: overlay as before */}
      <div className="relative z-10 flex flex-col md:flex-row">
        {/* Dark overlay + content — mobile: centered; desktop: half width, left-aligned */}
        <div className={`flex w-full max-w-full flex-col justify-end bg-blue-950 px-4 pb-12 pt-14 md:max-w-[50%] md:flex-row md:items-center md:bg-blue-950/80 md:pb-12 md:pt-14 lg:px-18 lg:py-16 xl:py-20 ${xlPlClass} xl:pr-24 3xl:min-h-[675px] 4xl:min-h-[695px]`}>
          <div className="flex w-full flex-col items-center gap-8 md:items-start md:gap-8 md:w-fit">
            <article className="relative z-20 flex w-full flex-col items-center gap-4 md:items-start">
              <p className="text-center font-light text-white text-body-md md:text-left max-md:text-[14px]">
                {t("heroTagline")}
              </p>
              <h1 className="font-heading text-center text-[24px] font-bold leading-[32px] text-white md:text-left lg:text-[40px] lg:leading-[52px]">
                {t("heroTitle")}
              </h1>
              <p className="text-center font-light text-white text-body-md md:text-left max-md:text-[14px] max-md:leading-6">
                {t("heroDesc")}
              </p>
            </article>
            <button
              className="relative z-30 mx-auto flex max-w-fit items-center justify-center gap-2 rounded-xs bg-blue-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-blue-900 active:bg-blue-950 disabled:cursor-not-allowed disabled:bg-slate-300 md:mx-0"
              type="button"
              onClick={openDemoModal}
            >
              {t("heroButton")}
              <svg
                aria-hidden
                fill="none"
                height="16"
                viewBox="0 0 16 16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.3671 8.03333L9.90046 13.5L9.16712 12.7667L13.4338 8.5H0.633789V7.5H13.4338L9.16712 3.23333L9.90046 2.5L15.3671 8.03333Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Hero image - mobile only: 430×340 px render size */}
        <div className="relative h-[340px] w-full max-w-[430px] md:hidden">
          <Image
            src={mobileHero}
            alt={t("heroImageAlt")}
            width={430}
            height={340}
            className="h-full w-full object-cover object-top"
            priority
          />
        </div>
      </div>

      {/* Floating testimonial card (desktop only) */}
      <div className="absolute inset-0 mx-auto hidden w-full items-center justify-end lg:flex 2xl:right-8 2xl:mr-0">
        <div className="flex max-w-[240px] flex-col gap-4 rounded-l-xs bg-white px-4 lg:py-[23.5px] 2xl:max-w-[280px] 2xl:rounded-sm 2xl:px-5 3xl:max-w-[320px] 3xl:px-6 3xl:py-7 4xl:max-w-[335px]">
          <p className="text-slate-500 text-body-sm 2xl:text-body-md 4xl:text-body-lg text-[14px] font-normal leading-[1.58]">
            {locale === "es" ? t("heroTestimonialQuote") : <>&quot;{t("heroTestimonialQuote")}&quot;</>}
          </p>
          <article className="flex w-full flex-col">
            <p className="text-[13px] font-bold text-black">{t("heroTestimonialName")}</p>
            <p className="text-[13px] text-black">{t("heroTestimonialRole")}</p>
            <p className="text-[13px] font-bold text-black">{t("heroTestimonialCompany")}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
