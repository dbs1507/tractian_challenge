"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { whyChooseImages } from "@/lib/images";

const TABS = [
  {
    id: "proveRoi",
    titleKey: "whyChooseProveRoi" as const,
    descKey: "whyChooseProveRoiDesc" as const,
    imageKey: "proveRoi" as const,
  },
  {
    id: "downtime",
    titleKey: "whyChooseDowntime" as const,
    descKey: "whyChooseDowntimeDesc" as const,
    imageKey: "getAheadOfDowntime" as const,
  },
  {
    id: "leaner",
    titleKey: "whyChooseLeaner" as const,
    descKey: "whyChooseLeanerDesc" as const,
    imageKey: "runALeanerMoreEffectiveTeam" as const,
  },
  {
    id: "audits",
    titleKey: "whyChooseAudits" as const,
    descKey: "whyChooseAuditsDesc" as const,
    imageKey: "keepAuditsSimpleComplianceCovered" as const,
  },
] as const;

function CheckIcon({ active }: { active: boolean }) {
  return (
    <svg
      fill="none"
      height="14"
      viewBox="0 0 25 25"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.02344 11.5L10.0234 19.5M2.02344 11.5L10.0234 19.5"
        stroke="#fff"
        strokeWidth="1.8"
      />
      <path
        d="M9.02344 19.5L23.0234 5.5"
        stroke="#fff"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function WhyChoose() {
  const t = useTranslations("plantManager");
  const [activeId, setActiveId] = useState<string>(TABS[0].id);

  // Busca a tab ativa - fallback pro primeiro se não encontrar
  const activeTab = TABS.find((tab) => tab.id === activeId) ?? TABS[0];

  return (
    <section
      className="w-full bg-slate-100 px-4 py-12 lg:py-16"
      style={{ overflowAnchor: "none" }}
    >
      <div className="mx-auto flex w-full max-w-2xl flex-col gap-8 lg:max-w-6xl lg:gap-16">
        {/* Header */}
        <article className="flex w-full flex-col gap-4">
          <p className="font-medium uppercase tracking-wide text-blue-600">
            {t("whyChooseTagline")}
          </p>
          <h2 className="font-heading text-[24px] font-bold leading-[32px] text-slate-700 lg:text-[40px] lg:leading-[52px]">
            {t("whyChooseTitle")}
          </h2>
        </article>

        {/* Tabs + Image */}
        <div className="flex w-full flex-col gap-8 lg:min-h-[360px] lg:flex-row lg:items-start lg:justify-between">
          {/* Accordion tabs */}
          <div className="flex w-full flex-col gap-4 border-l-2 border-slate-300 lg:w-1/2 lg:gap-5 lg:self-start">
            {TABS.map((tab) => {
              const isActive = activeId === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  className={`group -ml-[2px] flex w-full flex-col items-start border-l-2 bg-transparent px-4 text-left transition-colors ${
                    isActive ? "border-blue-500" : "border-transparent"
                  }`}
                  onClick={() => setActiveId(tab.id)}
                  aria-label={t(tab.titleKey)}
                  aria-expanded={isActive}
                >
                  <div className="mb-2 flex w-full items-center gap-3 lg:justify-between">
                    <figure
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-sm transition-colors ${
                        isActive ? "bg-blue-600" : "bg-slate-400"
                      }`}
                    >
                      <CheckIcon active={isActive} />
                    </figure>
                    <h3
                      className={`font-heading flex-1 text-xl font-medium leading-snug transition-colors lg:text-xl lg:font-semibold lg:leading-7 ${
                        isActive ? "text-slate-700" : "text-slate-400"
                      } group-hover:brightness-110`}
                    >
                      {t(tab.titleKey)}
                    </h3>
                  </div>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <p className="text-sm leading-relaxed text-slate-500 lg:text-base lg:leading-6">
                        {t(tab.descKey)}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Imagem dinâmica - uma única renderização */}
          <figure className="relative h-[280px] w-full overflow-hidden rounded-lg lg:h-[320px] lg:w-1/2">
            <Image
              key={activeTab.id} // Force re-render pra transição suave
              src={whyChooseImages[activeTab.imageKey]}
              alt={t(activeTab.titleKey)}
              fill
              className="object-contain transition-opacity duration-300 md:object-cover lg:object-contain"
              sizes="(min-width: 1024px) 50vw, 100vw"
              priority={false}
            />
          </figure>
        </div>
      </div>
    </section>
  );
}