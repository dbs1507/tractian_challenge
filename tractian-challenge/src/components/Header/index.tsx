"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { icons } from "@/lib/images";
import { MobileMenu } from "./MobileMenu";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { DropdownContent, type DropdownId } from "./dropdowns";
import { useDemoModal } from "@/contexts/DemoModalContext";

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 22 13"
      fill="none"
      className={className}
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

export function Header() {
  const t = useTranslations("header");
  const tc = useTranslations("common");
  const [openDropdown, setOpenDropdown] = useState<DropdownId>(null);
  const [isDropdownFadedIn, setIsDropdownFadedIn] = useState(false);
  const { openDemoModal } = useDemoModal();
  const navRef = useRef<HTMLElement>(null);

  // Fade-in only on open (no transition on close)
  useEffect(() => {
    if (openDropdown) {
      setIsDropdownFadedIn(false);
      const raf = requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsDropdownFadedIn(true));
      });
      return () => cancelAnimationFrame(raf);
    } else {
      setIsDropdownFadedIn(false);
    }
  }, [openDropdown]);

  const toggleDropdown = useCallback((id: NonNullable<DropdownId>) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  }, []);

  const closeDropdown = useCallback(() => setOpenDropdown(null), []);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setOpenDropdown(null);
    }
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  const navItems: { id: NonNullable<DropdownId>; label: string }[] = [
    { id: "solutions", label: t("solutions") },
    { id: "whoWeServe", label: t("whoWeServe") },
    { id: "resources", label: t("resources") },
    { id: "company", label: t("company") },
    { id: "pricing", label: t("pricing") },
  ];

  return (
    <nav
      ref={navRef}
      className="z-40 flex w-full flex-col items-center justify-center border-b border-slate-200 bg-slate-100 transition-colors lg:sticky lg:top-0"
    >
      <div className="flex w-full max-w-screen-2xl items-center justify-between px-4 py-2 lg:px-8 lg:py-0">
        <div className="hidden h-full w-full items-center justify-between lg:flex">
          <section className="flex items-center gap-x-4">
            <figure className="fill-blue-600">
              <Link href="/" aria-label="Tractian Logo">
                <Image
                  src={icons.tractianLogo}
                  alt="Tractian"
                  width={128}
                  height={18}
                  className="w-32"
                  priority
                />
              </Link>
            </figure>

            <div className="flex h-[72px] items-center">
              {navItems.map((item) => {
                const isActive = openDropdown === item.id;
                return (
                  <section
                    key={item.id}
                    className="flex h-full items-center pl-4 xl:pl-8"
                  >
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.id)}
                      className="group flex cursor-pointer items-center gap-x-2"
                    >
                      <p
                        className={`select-none font-medium transition-colors ${
                          isActive
                            ? "text-blue-600"
                            : "text-slate-500 group-hover:text-blue-600"
                        }`}
                      >
                        {item.label}
                      </p>
                      <ChevronDownIcon
                        className={`pointer-events-none h-3 w-3 shrink-0 transition-transform ${
                          isActive
                            ? "rotate-180 text-blue-600"
                            : "text-slate-500 group-hover:text-blue-600"
                        }`}
                      />
                    </button>
                  </section>
                );
              })}
            </div>
          </section>

          <section className="flex items-center gap-x-8 lg:gap-4 xl:gap-x-8">
            <LanguageSwitcher />
            <a
              href="https://app.tractian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden font-medium text-slate-500 text-body-md transition-colors hover:text-blue-600 xl:block"
            >
              Login
            </a>
            <button
              type="button"
              onClick={openDemoModal}
              className="max-w-fit rounded-sm px-4 py-2 text-body-md font-normal text-blue-600 outline outline-1 outline-blue-600 transition hover:outline-2 active:outline-4"
            >
              {tc("getDemo")}
            </button>
          </section>
        </div>

        <div className="flex w-full items-center justify-between lg:hidden">
          <Link href="/" aria-label="Tractian Home">
            <Image
              src={icons.tractianLogo}
              alt="Tractian"
              width={128}
              height={18}
              className="w-32"
              priority
            />
          </Link>
          <MobileMenu onOpenDemo={openDemoModal} />
        </div>
      </div>

      {openDropdown &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className={`fixed inset-0 z-30 hidden bg-black/60 backdrop-blur-[1px] transition-opacity duration-300 ease-in-out lg:block ${
              isDropdownFadedIn ? "opacity-100" : "opacity-0"
            }`}
            onClick={closeDropdown}
            onKeyDown={(e) => e.key === "Escape" && closeDropdown()}
            aria-hidden="true"
          />,
          document.body
        )}
      {openDropdown && (
        <div
          className={`absolute inset-x-0 top-full z-50 hidden transition-opacity duration-300 ease-in-out lg:block ${
            isDropdownFadedIn ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`relative z-30 mx-auto w-full px-8 pb-12 pt-8 bg-slate-50 shadow-lg ${
              openDropdown === "resources" || openDropdown === "company" || openDropdown === "pricing" ? "max-w-[970px]" : "max-w-7xl"
            }`}
          >
            <DropdownContent id={openDropdown} onClose={closeDropdown} />
          </div>
        </div>
      )}
    </nav>
  );
}
