"use client";

import { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useLocale, useTranslations } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
import { routing } from "@/i18n/routing";

function GlobeIcon({ className, id }: { className?: string; id: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="none"
      className={className}
      aria-hidden
    >
      <g clipPath={`url(#${id})`}>
        <path
          d="M10.0002 0.625C4.8335 0.625 0.666834 4.79167 0.666834 9.95833C0.666834 15.125 4.8335 19.2917 10.0002 19.2917C10.5835 19.2917 11.1668 19.2083 11.6668 19.125L11.4168 17.875C10.9168 17.9583 10.4168 18.0417 9.91683 18.0417C9.3335 18.0417 8.50017 17.0417 7.91683 14.7917C9.0835 14.5417 10.2502 14.4583 11.3335 14.625L11.5835 13.375C10.2502 13.125 8.91683 13.2083 7.66683 13.5417C7.5835 12.625 7.50017 11.625 7.41683 10.625H19.3335V9.95833C19.3335 4.79167 15.1668 0.625 10.0002 0.625ZM10.0002 5.375C9.3335 5.375 8.66683 5.29167 8.00017 5.125C8.50017 3.04167 9.3335 1.875 10.0002 1.875C10.6668 1.875 11.5002 3.04167 12.0002 5.125C11.3335 5.29167 10.6668 5.375 10.0002 5.375ZM12.2502 6.29167C12.4168 7.20833 12.5002 8.20833 12.5002 9.29167H7.41683C7.41683 8.20833 7.5835 7.20833 7.66683 6.29167C8.50017 6.54167 9.25017 6.625 10.0002 6.625C10.7502 6.625 11.5002 6.54167 12.2502 6.29167ZM6.8335 4.70833C6.16683 4.45833 5.50017 4.04167 4.91683 3.625C5.8335 2.95833 6.75017 2.45833 7.8335 2.125C7.41683 2.79167 7.0835 3.70833 6.8335 4.70833ZM12.1668 2.125C13.2502 2.45833 14.2502 2.95833 15.0835 3.625C14.5002 4.04167 13.9168 4.45833 13.2502 4.70833C12.9168 3.70833 12.5835 2.79167 12.1668 2.125ZM4.00017 4.45833C4.75017 5.125 5.5835 5.625 6.50017 5.95833C6.3335 7.04167 6.16683 8.20833 6.16683 9.375H1.91683C2.0835 7.45833 2.8335 5.79167 4.00017 4.45833ZM5.00017 16.375C5.5835 15.9583 6.16683 15.5417 6.8335 15.2917C7.0835 16.2917 7.41683 17.125 7.8335 17.7917C6.75017 17.4583 5.8335 17.0417 5.00017 16.375ZM6.5835 14.0417C5.66683 14.375 4.8335 14.875 4.0835 15.5417C2.8335 14.2083 2.0835 12.5417 1.91683 10.625H6.25017C6.25017 11.7083 6.3335 12.875 6.5835 14.0417ZM13.8335 9.29167C13.8335 8.125 13.6668 6.95833 13.5002 5.875C14.4168 5.54167 15.2502 5.04167 16.0002 4.375C17.1668 5.70833 18.0002 7.375 18.1668 9.29167H13.8335Z"
          fill="currentColor"
        />
        <path
          d="M10.0002 0.625C15.1668 0.625 19.3335 4.79167 19.3335 9.95833C19.3335 15.125 15.1668 19.2917 10.0002 19.2917C9.41683 19.2917 8.83268 19.2083 8.33268 19.125L8.58268 17.875C9.08268 17.9583 9.58268 18.0417 10.0827 18.0417C10.666 18.0417 11.4993 17.0417 12.0827 14.7917C10.916 14.5417 9.74935 14.4583 8.66602 14.625L8.41602 13.375C9.74935 13.125 11.0827 13.2083 12.3327 13.5417C12.416 12.625 12.4994 11.625 12.5827 10.625H0.666016L0.666834 9.95833C0.666834 4.79167 4.8335 0.625 10.0002 0.625ZM10.0002 5.375C10.6668 5.375 11.3335 5.29167 12.0002 5.125C11.5002 3.04167 10.6668 1.875 10.0002 1.875C9.3335 1.875 8.50017 3.04167 8.00017 5.125C8.66683 5.29167 9.3335 5.375 10.0002 5.375ZM7.74935 6.29167C7.58268 7.20833 7.49935 8.20833 7.49935 9.29167H12.5827C12.5827 8.20833 12.416 7.20833 12.3327 6.29167C11.4993 6.54167 10.7502 6.625 10.0002 6.625C9.25017 6.625 8.49935 6.54167 7.74935 6.29167ZM13.166 4.70833C13.8327 4.45833 14.5002 4.04167 15.0835 3.625C14.1668 2.95833 13.2502 2.45833 12.1668 2.125C12.5835 2.79167 12.916 3.70833 13.166 4.70833ZM7.8335 2.125C6.75017 2.45833 5.75017 2.95833 4.91683 3.625C5.50017 4.04167 6.08268 4.45833 6.74935 4.70833C7.08268 3.70833 7.41683 2.79167 7.8335 2.125ZM15.9993 4.45833C15.2493 5.125 14.416 5.625 13.4993 5.95833C13.666 7.04167 13.8327 8.20833 13.8327 9.375H18.0827C17.916 7.45833 17.166 5.79167 15.9993 4.45833ZM14.9993 16.375C14.416 15.9583 13.8327 15.5417 13.166 15.2917C12.916 16.2917 12.5827 17.125 12.166 17.7917C13.2493 17.4583 14.166 17.0417 14.9993 16.375ZM13.416 14.0417C14.3327 14.375 15.166 14.875 15.916 15.5417C17.166 14.2083 17.916 12.5417 18.0827 10.625H13.7493C13.7493 11.7083 13.666 12.875 13.416 14.0417ZM6.16602 9.29167C6.16602 8.125 6.33268 6.95833 6.49935 5.875C5.58268 5.54167 4.74935 5.04167 3.99935 4.375C2.83268 5.70833 1.99935 7.375 1.83268 9.29167H6.16602Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id={id}>
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

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

const localeLabels: Record<string, string> = {
  pt: "Português (Brasil)",
  en: "English (United States)",
  es: "Español (México)",
};

const localeFlags: Record<string, string> = {
  en: "🇺🇸",
  pt: "🇧🇷",
  es: "🇪🇸",
};

/** Ordem de exibição: português, inglês, espanhol */
const localeOrder: string[] = ["pt", "en", "es"];

type LanguageSwitcherProps = {
  variant?: "desktop" | "mobile";
};

export function LanguageSwitcher({ variant = "desktop" }: LanguageSwitcherProps) {
  const locale = useLocale();
  const tc = useTranslations("common");
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState<{ top: number; left: number } | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  function handleChange(newLocale: string) {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  }

  // Atualiza posição do dropdown ao abrir (para portal)
  useEffect(() => {
    if (!isOpen || !triggerRef.current) {
      setPosition(null);
      return;
    }
    const updatePosition = () => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        setPosition({ top: rect.bottom + 4, left: rect.left });
      }
    };
    updatePosition();
    window.addEventListener("scroll", updatePosition, true);
    window.addEventListener("resize", updatePosition);
    return () => {
      window.removeEventListener("scroll", updatePosition, true);
      window.removeEventListener("resize", updatePosition);
    };
  }, [isOpen]);

  // Close on outside click (inclui o dropdown portado)
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node;
      const inTrigger = ref.current?.contains(target);
      const inDropdown = dropdownRef.current?.contains(target);
      if (!inTrigger && !inDropdown) setIsOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (variant === "mobile") {
    return (
      <div ref={ref} className="flex flex-col">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-locale-list"
          id="mobile-locale-trigger"
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full items-center justify-between gap-2 rounded-sm px-0 py-2 text-left text-sm font-medium text-slate-500 transition-colors hover:text-blue-700"
        >
          <span className="flex items-center gap-3">
            <GlobeIcon id={`globe-${variant}`} className="h-5 w-5 shrink-0" />
            {localeLabels[locale]}
          </span>
          <span className="text-slate-500">
            <ChevronDownIcon
              className={`h-4 w-4 shrink-0 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </span>
        </button>
        <div
          id="mobile-locale-list"
          role="region"
          aria-labelledby="mobile-locale-trigger"
          className="overflow-hidden transition-all duration-200"
          style={{ maxHeight: isOpen ? "200px" : "0" }}
        >
          <div className="flex flex-col gap-0.5 pt-2">
            {localeOrder.filter((loc) => (routing.locales as readonly string[]).includes(loc)).map((loc) => (
              <button
                key={loc}
                type="button"
                onClick={() => handleChange(loc)}
                className={`flex w-full items-center gap-3 rounded-sm px-2 py-2.5 text-left text-sm text-slate-600 transition-colors hover:bg-slate-100 ${
                  locale === loc ? "bg-slate-100" : ""
                }`}
              >
                <span className="text-base leading-none" aria-hidden>
                  {localeFlags[loc]}
                </span>
                {localeLabels[loc]}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        ref={triggerRef}
        type="button"
        aria-label="Switch Language"
        aria-expanded={isOpen}
        className="group flex items-center gap-x-2 rounded-sm px-2 py-1 text-slate-500 transition-colors focus:outline-none hover:text-blue-600"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GlobeIcon id={`globe-${variant}`} className="h-5 w-5 shrink-0" />
        <ChevronDownIcon
          className={`pointer-events-none h-3 w-3 shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown em portal (z-[9999]) para ficar acima dos menus do header */}
      {isOpen &&
        position &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            ref={dropdownRef}
            role="menu"
            aria-label={tc("language")}
            className="fixed flex min-w-[200px] flex-col items-stretch rounded-xs border border-slate-300 bg-slate-50 p-2 text-slate-500 text-body-sm shadow-lg transition-all duration-200 ease-out lg:border-2 xl:text-body-md"
            style={{ top: position.top, left: position.left, zIndex: 9999 }}
          >
            {localeOrder.filter((loc) => (routing.locales as readonly string[]).includes(loc)).map((loc) => (
              <button
                key={loc}
                type="button"
                role="menuitem"
                onClick={() => handleChange(loc)}
                className={`flex w-full items-center gap-x-2 rounded-sm px-3 py-2 text-left text-body-md hover:bg-slate-100 lg:py-2 lg:text-body-sm ${
                  locale === loc ? "bg-slate-200 hover:bg-slate-200" : ""
                }`}
              >
                <p className="whitespace-nowrap text-[14px] leading-[22px]">{localeLabels[loc]}</p>
              </button>
            ))}
          </div>,
          document.body
        )}
    </div>
  );
}
