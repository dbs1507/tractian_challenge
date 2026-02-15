"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { icons } from "@/lib/images";
import { LanguageSwitcher } from "./LanguageSwitcher";

type AccordionId = string | null;

const navSections = [
  {
    id: "solutions",
    labelKey: "solutions" as const,
    links: [
      { labelKey: "conditionMonitoring" as const, href: "#" },
      { labelKey: "cmms" as const, href: "#" },
      { labelKey: "oee" as const, href: "#" },
    ],
  },
  {
    id: "whoWeServe",
    labelKey: "whoWeServe" as const,
    links: [
      { labelKey: "plantManager" as const, href: "/who-we-serve/plant-manager" },
      { labelKey: "reliabilityEngineer" as const, href: "#" },
      { labelKey: "maintenanceEngineer" as const, href: "#" },
      { labelKey: "manufacturingEngineer" as const, href: "#" },
    ],
  },
  {
    id: "resources",
    labelKey: "resources" as const,
    links: [
      { labelKey: "caseStudies" as const, href: "#" },
      { labelKey: "ebooks" as const, href: "#" },
      { labelKey: "blog" as const, href: "#" },
    ],
  },
  {
    id: "company",
    labelKey: "company" as const,
    links: [
      { labelKey: "aboutUs" as const, href: "#" },
      { labelKey: "careers" as const, href: "#" },
      { labelKey: "newsroom" as const, href: "#" },
    ],
  },
  {
    id: "pricing",
    labelKey: "pricing" as const,
    links: [
      { labelKey: "conditionMonitoring" as const, href: "#" },
      { labelKey: "cmms" as const, href: "#" },
      { labelKey: "oee" as const, href: "#" },
    ],
  },
];

export function MobileMenu() {
  const t = useTranslations("header");
  const tc = useTranslations("common");
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<AccordionId>(null);

  function toggleAccordion(id: string) {
    setOpenAccordion((prev) => (prev === id ? null : id));
  }

  return (
    <>
      {/* Hamburger button */}
      <figure className="flex items-center justify-center">
        <button
          className="flex h-10 w-10 items-center justify-center"
          type="button"
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <svg
              className="h-6 w-6 text-blue-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          ) : (
            <Image
              src={icons.hamburgerMenu}
              alt="Menu"
              width={24}
              height={24}
              className="h-6 w-6"
            />
          )}
        </button>
      </figure>

      {/* Slide-in panel */}
      <div
        className="absolute left-0 top-[56px] z-[9999] bg-white transition-all duration-150"
        style={{
          height: isOpen ? "calc(100dvh - 56px)" : "0px",
          width: isOpen ? "100%" : "0px",
          overflowY: "auto",
          overflowX: "hidden",
          WebkitOverflowScrolling: "touch",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <div className="flex min-h-full flex-col justify-between">
          {/* Nav sections */}
          <div className="flex flex-col">
            {navSections.map((section) => (
              <div key={section.id} className="w-full">
                <button
                  aria-label={`Open ${section.id}`}
                  className="flex w-full items-center justify-between px-4 py-3 hover:brightness-125"
                  onClick={() => toggleAccordion(section.id)}
                >
                  <p className="text-sm text-slate-500">{t(section.labelKey)}</p>
                  <Image
                    src={icons.chevronDown}
                    alt=""
                    width={16}
                    height={16}
                    className={`h-4 w-4 transition-transform ${
                      openAccordion === section.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Accordion content */}
                <div
                  className="overflow-hidden transition-all duration-200"
                  style={{
                    maxHeight: openAccordion === section.id ? "400px" : "0px",
                  }}
                >
                  <div className="flex flex-col gap-1 bg-slate-50 px-6 py-2">
                    {section.links.map((link) => (
                      <Link
                        key={link.labelKey}
                        href={link.href}
                        className="py-2 text-sm text-slate-600 transition-colors hover:text-blue-600"
                        onClick={() => setIsOpen(false)}
                      >
                        {t(link.labelKey)}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}

            {/* Language switcher */}
            <div className="border-t border-slate-200 px-4 py-4">
              <LanguageSwitcher variant="mobile" />
            </div>
          </div>

          {/* Bottom buttons */}
          <div className="flex items-center justify-between gap-4 px-4 py-6">
            <a
              href="https://app.tractian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full min-w-full rounded-sm px-4 py-2 text-center text-sm font-medium text-blue-600 outline outline-1 outline-blue-600 transition hover:outline-2 active:outline-4"
            >
              {tc("login")}
            </a>
            <button
              type="button"
              className="w-full max-w-full rounded-sm bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-900 active:bg-blue-950"
            >
              {tc("getDemo")}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
