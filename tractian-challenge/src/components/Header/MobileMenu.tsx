"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { icons } from "@/lib/images";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { DropdownContent, type DropdownId } from "./dropdowns";

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 13"
      fill="none"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5657 1.56569L11.0001 12.1314L0.43457 1.56569L1.56595 0.434329L11.0001 9.86863L20.4344 0.434326L21.5657 1.56569Z"
        fill="currentColor"
      />
    </svg>
  );
}

type AccordionId = DropdownId;

const navSections: { id: NonNullable<DropdownId>; labelKey: "solutions" | "whoWeServe" | "resources" | "company" | "pricing" }[] = [
  { id: "solutions", labelKey: "solutions" },
  { id: "whoWeServe", labelKey: "whoWeServe" },
  { id: "resources", labelKey: "resources" },
  { id: "company", labelKey: "company" },
  { id: "pricing", labelKey: "pricing" },
];

export function MobileMenu({ onOpenDemo }: { onOpenDemo?: () => void } = {}) {
  const t = useTranslations("header");
  const tc = useTranslations("common");
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<AccordionId>(null);

  function toggleAccordion(id: NonNullable<DropdownId>) {
    setOpenAccordion((prev) => (prev === id ? null : id));
  }

  return (
    <>
      <figure className="flex items-center justify-center">
        <button
          className="flex h-10 w-10 items-center justify-center"
          type="button"
          aria-label={isOpen ? tc("closeMenu") : tc("openMenu")}
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

      <div
        className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-[1px] transition-opacity duration-300 ease-out"
        style={{
          pointerEvents: isOpen ? "auto" : "none",
          opacity: isOpen ? 1 : 0,
        }}
        aria-hidden
        onClick={() => setIsOpen(false)}
      />

      <div
        className="fixed inset-y-0 right-0 z-[9999] w-full max-w-full bg-white shadow-xl transition-[transform] duration-300 ease-out"
        style={{
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          overflowY: "auto",
          overflowX: "hidden",
          WebkitOverflowScrolling: "touch",
          paddingBottom: "env(safe-area-inset-bottom)",
        }}
      >
        <div className="flex flex-col">
          <header className="flex shrink-0 items-center justify-between px-4 py-2 bg-slate-100">
            <Link href="/who-we-serve/plant-manager" aria-label="Tractian Home" onClick={() => setIsOpen(false)}>
              <Image
                src={icons.tractianLogo}
                alt="Tractian"
                width={128}
                height={18}
                className="h-[18px] w-32"
                priority
              />
            </Link>
            <button
              type="button"
              aria-label={tc("closeMenu")}
              className="flex h-10 w-10 items-center justify-center text-slate-600"
              onClick={() => setIsOpen(false)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            </button>
          </header>

          <div className="flex flex-col mt-[17px]">
            {navSections.map((section) => (
              <div key={section.id} className="w-full">
                <button
                  aria-label={t(section.labelKey)}
              aria-expanded={openAccordion === section.id}
                  className="flex w-full items-center justify-between px-4 py-[13.2px] hover:brightness-125"
                  onClick={() => toggleAccordion(section.id)}
                >
                  <p className="text-sm text-slate-500">{t(section.labelKey)}</p>
                  <ChevronDownIcon
                    className={`h-4 w-4 shrink-0 text-slate-500 transition-transform ${
                      openAccordion === section.id ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className="overflow-hidden transition-all duration-200"
                  style={{
                    maxHeight: openAccordion === section.id ? "3000px" : "0px",
                  }}
                >
                  <div className="bg-slate-100 px-4">
                    <DropdownContent
                      id={section.id}
                      onClose={() => setIsOpen(false)}
                      variant="mobile"
                    />
                  </div>
                </div>
              </div>
            ))}

            <div className="px-4 py-4">
              <LanguageSwitcher variant="mobile" />
            </div>

            <div className="flex items-center gap-4 px-3 pt-5 pb-6">
              <a
                href="https://app.tractian.com"
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 flex-1 rounded-xs px-4 py-2 text-center text-sm font-medium text-blue-600 outline outline-1 outline-blue-600 transition hover:outline-2 active:outline-4"
              >
                {tc("login")}
              </a>
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenDemo?.();
                }}
                className="min-w-0 flex-1 rounded-xs bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-900 active:bg-blue-950"
              >
                {tc("getDemo")}
              </button>
            </div>
        </div>
      </div>
      </div>
    </>
  );
}
