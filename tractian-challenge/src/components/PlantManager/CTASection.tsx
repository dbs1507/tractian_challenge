"use client";

import { useTranslations } from "next-intl";
import { ctaImages } from "@/lib/images";

export function CTASection() {
  const t = useTranslations("plantManager");

  return (
    <section
      className="w-full bg-cover bg-right bg-no-repeat 2xl:min-h-[475px] 3xl:min-h-[525px] 4xl:min-h-[560px]"
      style={{ backgroundImage: `url('${ctaImages.moreThanMachines}')` }}
    >
      {/* Dark overlay — full width on mobile, 50% on md+ */}
      <div className="relative z-10 flex w-full max-w-full justify-center bg-blue-950/95 px-4 py-12 md:max-w-[50%] md:justify-end md:bg-blue-950/80 lg:px-12 lg:py-16 xl:px-0 xl:py-20 xl:pl-16 2xl:min-h-[475px] 2xl:items-center 2xl:pl-16 3xl:min-h-[525px] 3xl:pl-12 4xl:min-h-[560px]">
        <div className="flex w-full max-w-full flex-col items-center gap-8 md:max-w-[318px] md:items-start lg:max-w-full xl:max-w-[576px]">
          {/* Heading */}
          <article className="relative z-20 flex w-full flex-col items-center gap-4 md:items-start">
            <h2 className="text-center font-heading text-[24px] font-bold leading-[32px] text-white md:text-left lg:text-[40px] lg:leading-[52px]">
              {t("ctaTitle")}
              <br />
              {t("ctaSubtitle")}
            </h2>
          </article>

          {/* Button */}
          <button
            type="button"
            className="relative z-30 mx-auto max-w-fit rounded-sm bg-blue-600 px-4 py-2 text-center text-[14px] font-medium leading-[22px] text-white transition duration-150 ease-in-out hover:bg-blue-900 active:bg-blue-950 md:mx-0 lg:text-[16px] lg:leading-[24px]"
          >
            {t("ctaButton")}
          </button>
        </div>
      </div>
    </section>
  );
}
