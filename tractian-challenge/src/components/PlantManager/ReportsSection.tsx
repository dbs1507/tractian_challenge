"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { useTranslations } from "next-intl";
import { reportsImages } from "@/lib/images";
import { ImageLightbox, ZoomableFigure } from "@/components/ui/ImageLightbox";

const TABS = [
  {
    id: "reportsForScalability",
    titleKey: "reportsForScalability" as const,
    imageKey: "reportsForScalability" as const,
    bulletCount: 4,
  },
  {
    id: "operationalOversight",
    titleKey: "operationalOversight" as const,
    imageKey: "operationalOversight" as const,
    bulletCount: 5,
  },
  {
    id: "multisiteVisibility",
    titleKey: "multisiteVisibility" as const,
    imageKey: "multisiteVisibility" as const,
    bulletCount: 4,
  },
  {
    id: "noLaborGaps",
    titleKey: "noLaborGaps" as const,
    imageKey: "noLaborGaps" as const,
    bulletCount: 4,
  },
] as const;

const AUTOPLAY_INTERVAL = 12000;

export function ReportsSection() {
  const t = useTranslations("plantManager");
  const [activeId, setActiveId] = useState<string>(TABS[0].id);
  const [displayId, setDisplayId] = useState<string>(TABS[0].id);
  const [fading, setFading] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [autoplay, setAutoplay] = useState(true);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const activeTab = TABS.find((tab) => tab.id === displayId) ?? TABS[0];

  // Fade transition: when activeId changes, fade out → swap content → fade in
  useEffect(() => {
    if (activeId === displayId) return;
    setFading(true);
    const timeout = setTimeout(() => {
      setDisplayId(activeId);
      setFading(false);
    }, 300);
    return () => clearTimeout(timeout);
  }, [activeId, displayId]);

  // Autoplay carousel: cycles through tabs every 5s, stops on user click
  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setActiveId((prev) => {
        const currentIdx = TABS.findIndex((tab) => tab.id === prev);
        const nextIdx = (currentIdx + 1) % TABS.length;
        return TABS[nextIdx].id;
      });
    }, AUTOPLAY_INTERVAL);
    return () => clearInterval(timer);
  }, [autoplay]);

  // User manually selects a tab → stop autoplay
  const handleTabClick = useCallback((tabId: string) => {
    setAutoplay(false);
    setActiveId(tabId);
  }, []);

  // Calculate sliding indicator position relative to the tab bar container
  const updateIndicator = useCallback(() => {
    const idx = TABS.findIndex((tab) => tab.id === activeId);
    const el = tabRefs.current[idx];
    const container = tabBarRef.current;
    if (el && container) {
      const containerRect = container.getBoundingClientRect();
      const tabRect = el.getBoundingClientRect();
      setIndicatorStyle({
        left: tabRect.left - containerRect.left,
        width: tabRect.width,
      });
    }
  }, [activeId]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator]);

  const bulletKeys = Array.from(
    { length: activeTab.bulletCount },
    (_, i) => `${activeTab.titleKey}Bullet${i + 1}` as const
  );

  return (
    <section
      className="relative w-full bg-white px-4 py-12 lg:px-16 lg:py-20"
      style={{ overflowAnchor: "none" }}
    >
      <div className="mx-auto flex max-w-xl flex-col items-center gap-8 text-slate-700 lg:max-w-6xl lg:gap-12">
        <article className="flex w-full flex-col items-start gap-4 lg:items-center">
          <h2 className="mt-4 w-full text-left font-heading text-[1.25rem] font-bold leading-[1.75rem] text-slate-700 lg:text-center lg:text-[32px] lg:leading-[40px]">
            {t("reportsTitle")}
          </h2>
        </article>

        <section className="w-full">
          <div className="mx-auto flex w-full flex-col gap-12">
            {/* Tab bar */}
            <div
              ref={tabBarRef}
              className="relative mx-auto mt-2 flex w-full flex-col bg-[#F4F4F9] py-1 sm:flex-row sm:bg-transparent sm:py-0 lg:mt-0"
            >
              {TABS.map((tab, idx) => {
                const isActive = activeId === tab.id;
                return (
                  <div
                    key={tab.id}
                    ref={(el) => {
                      tabRefs.current[idx] = el;
                    }}
                    className={`relative col-span-1 flex w-full items-center justify-center border-b px-1 pb-[3px] pt-1 sm:px-0 sm:py-0 ${
                      isActive
                        ? "rounded-md border-transparent bg-[#F4F4F9] sm:rounded-none sm:border-b-blue-600 sm:bg-transparent xl:border-b-slate-300"
                        : "border-transparent bg-[#F4F4F9] transition-all duration-100 sm:border-b-slate-300 sm:bg-transparent sm:bg-white sm:duration-300 lg:hover:bg-transparent"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => handleTabClick(tab.id)}
                      aria-label={t(tab.titleKey)}
                      aria-selected={isActive}
                      className={`w-full rounded-sm px-6 py-1.5 text-body-md transition-all duration-100 sm:w-auto sm:items-start sm:p-4 sm:duration-300 sm:text-tag md:text-body-sm lg:rounded-none lg:px-2 lg:text-body-md xl:px-4 2xl:px-6 ${
                        isActive
                          ? "bg-white font-semibold text-slate-700 shadow-sm sm:bg-transparent sm:font-bold sm:shadow-none"
                          : "text-slate-500 hover:text-slate-600"
                      }`}
                    >
                      {t(tab.titleKey)}
                    </button>
                  </div>
                );
              })}
              {/* Sliding underline for xl+ */}
              <hr
                className="pointer-events-none absolute bottom-0 hidden border border-blue-600 transition-all duration-500 xl:block"
                style={{
                  left: indicatorStyle.left,
                  width: indicatorStyle.width,
                }}
                aria-hidden="true"
              />
            </div>

            {/* Content */}
            <article className="flex w-full justify-between gap-8 lg:gap-12">
              <div className={`flex w-full flex-col items-center justify-between gap-8 transition-opacity duration-300 ease-in-out lg:min-h-[437px] lg:flex-row lg:gap-16 ${fading ? "opacity-0" : "opacity-100"}`}>
                <div className="flex w-full flex-col gap-8 lg:max-w-[382px] lg:gap-12">
                  <article className="flex flex-col items-center gap-4 lg:max-w-[382px] lg:items-start">
                    <h3 className="font-heading font-bold text-[1.25rem] leading-[1.5rem] text-slate-700 lg:text-[1.25rem] lg:leading-[1.75rem]">
                      {t(`${activeTab.titleKey}Title`)}
                    </h3>
                    {t(`${activeTab.titleKey}Desc`) ? (
                      <p className="text-body-md text-slate-500">
                        {t(`${activeTab.titleKey}Desc`)}
                      </p>
                    ) : null}
                    <ul className="ml-4 flex w-full list-disc flex-col gap-1">
                      {bulletKeys.map((key) => {
                        const text = t(key);
                        return text ? (
                          <li
                            key={key}
                            className="text-body-md text-slate-500"
                          >
                            {text}
                          </li>
                        ) : null;
                      })}
                    </ul>
                  </article>
                </div>
                <ZoomableFigure
                  src={reportsImages[activeTab.imageKey]}
                  alt={t(activeTab.titleKey)}
                  onZoom={() => setLightboxOpen(true)}
                />
              </div>
            </article>
          </div>
        </section>
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <ImageLightbox
          src={reportsImages[activeTab.imageKey]}
          alt={t(activeTab.titleKey)}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </section>
  );
}
