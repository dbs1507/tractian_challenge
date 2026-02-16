"use client";

import { useTranslations } from "next-intl";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";

const FAQ_COUNT = 17;

export function FAQ() {
  const t = useTranslations("plantManager");

  const items: AccordionItem[] = Array.from({ length: FAQ_COUNT }, (_, i) => ({
    id: `faq-${i + 1}`,
    title: t(`faq${i + 1}Q`),
    content: t(`faq${i + 1}A`),
  }));

  return (
    <section className="w-full bg-slate-100 py-14 lg:py-[69px]">
      <div className="mx-auto max-w-2xl px-5 lg:max-w-[1190px] lg:px-8 xl:max-w-[1185px]">
        {/* Tag */}
        <p className="mb-4 text-center text-[16px] font-normal leading-[20px] text-blue-600">
          {t("faqTag")}
        </p>

        {/* Title */}
        <h2 className="mb-10 text-center font-heading font-bold text-slate-700 lg:mb-14 lg:text-[40px] lg:leading-[52px]">
          {t("faqTitle")}
        </h2>

        {/* Accordion */}
        <Accordion items={items} />
      </div>
    </section>
  );
}
