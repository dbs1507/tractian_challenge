"use client";

import { useLocale, useTranslations } from "next-intl";
import { Accordion, type AccordionItem } from "@/components/ui/Accordion";

const FAQ_COUNT = 18;

const FAQ1_LINK_PATH: Record<"en" | "es" | "pt", string> = {
  en: "/en/solutions/condition-monitoring/smart-trac",
  es: "/es/soluciones/monitoreo-condicion/smart-trac",
  pt: "/pt/solucoes/monitoramento-de-condicao/smart-trac",
};

export function FAQ() {
  const locale = useLocale();
  const t = useTranslations("plantManager");
  const faq1Href =
    (FAQ1_LINK_PATH as Record<string, string>)[locale] ?? FAQ1_LINK_PATH.en;

  const items: AccordionItem[] = Array.from({ length: FAQ_COUNT }, (_, i) => {
    const num = i + 1;
    const title = t(`faq${num}Q`);
    const content =
      num === 1
        ? t.rich("faq1A", {
            link: (chunks) => (
              <a
                href={faq1Href}
                className="underline underline-offset-2 text-slate-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                {chunks}
              </a>
            ),
          })
        : t(`faq${num}A`);
    return { id: `faq-${num}`, title, content };
  });

  return (
    <section className="w-full bg-slate-100 py-14 lg:py-[69px]">
      <div className="mx-auto max-w-2xl px-5 lg:max-w-[1190px] lg:px-8 xl:max-w-[1185px]">
        <p className="mb-4 text-center text-[16px] font-normal leading-[20px] text-blue-600 max-md:text-[14px]">
          {t("faqTag")}
        </p>

        <h2 className="mb-10 text-center font-heading font-bold max-md:font-semibold text-slate-700 lg:mb-14 lg:text-[40px] lg:leading-[52px] max-md:text-[20px]">
          {t("faqTitle")}
        </h2>

        <Accordion items={items} />
      </div>
    </section>
  );
}
