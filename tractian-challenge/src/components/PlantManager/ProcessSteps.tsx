"use client";

import { useLocale, useTranslations } from "next-intl";

const STEPS = [
  { num: 1, titleKey: "step1Title" as const, descKey: "step1Desc" as const },
  { num: 2, titleKey: "step2Title" as const, descKey: "step2Desc" as const },
  { num: 3, titleKey: "step3Title" as const, descKey: "step3Desc" as const },
  { num: 4, titleKey: "step4Title" as const, descKey: "step4Desc" as const },
] as const;

export function ProcessSteps() {
  const locale = useLocale();
  const t = useTranslations("plantManager");

  return (
    <section className="bg-slate-100 px-4 py-6 lg:py-16">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-start gap-8 lg:max-w-6xl lg:items-center lg:gap-12">
        {
          locale === 'pt'? (<p className="text-left uppercase text-blue-600 text-body-md lg:text-center">PASSO A PASSO</p>
          ): (<div/>)
        }         
        {/* Title */}
        <h2 className="text-left font-heading text-[1.25rem] font-bold leading-[2rem] text-slate-700 lg:mb-4 lg:text-center lg:text-[32px] lg:leading-[40px]">
          {locale === "es" ? (  
            <>
              <span className="block">{t("processStepsTitle1")}</span>
              <span className="block">{t("processStepsTitle2")}</span>
            </>
          ) : (
            t("processStepsTitle")
          )}
        </h2>

        {/* Steps */}
        <div className="flex w-full flex-col gap-8 lg:flex-row lg:justify-between lg:gap-12 xl:gap-16">
          {STEPS.map(({ num, titleKey, descKey }) => (
            <div key={num} className="flex h-full w-full flex-col gap-4">
              {/* Step number badge */}
              <span className="flex h-7 w-7 items-center justify-center rounded-[2px] bg-blue-600 text-[20px] leading-[24px] text-white lg:h-8 lg:w-8 font-medium">
                {num}
              </span>

              {/* Content */}
              <article className="flex w-full flex-col gap-1 lg:gap-4">
                <h3 className="font-heading text-[20px] font-bold leading-[24px] text-slate-700 lg:leading-[28px]">
                  {t(titleKey)}
                </h3>
                <p className="text-[14px] leading-[22px] text-slate-500 lg:text-[16px] font-normal lg:leading-[24px]">
                  {t(descKey)}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
