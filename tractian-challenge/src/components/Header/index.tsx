"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { icons } from "@/lib/images";
import { MobileMenu } from "./MobileMenu";
import { LanguageSwitcher } from "./LanguageSwitcher";

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

type DropdownId = "solutions" | "whoWeServe" | "resources" | "company" | "pricing" | null;

export function Header() {
  const t = useTranslations("header");
  const tc = useTranslations("common");
  const [openDropdown, setOpenDropdown] = useState<DropdownId>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  function handleMouseEnter(id: DropdownId) {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(id);
  }

  function handleMouseLeave() {
    timeoutRef.current = setTimeout(() => setOpenDropdown(null), 150);
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const navItems: { id: NonNullable<DropdownId>; label: string }[] = [
    { id: "solutions", label: t("solutions") },
    { id: "whoWeServe", label: t("whoWeServe") },
    { id: "resources", label: t("resources") },
    { id: "company", label: t("company") },
    { id: "pricing", label: t("pricing") },
  ];

  return (
    <nav className="sticky top-0 z-40 flex w-full flex-col items-center justify-center border-b border-slate-200 bg-slate-100 transition-colors">
      <div className="flex w-full max-w-screen-2xl items-center justify-between px-4 py-2 lg:px-8 lg:py-0">
        <div className="hidden h-full w-full items-center justify-between lg:flex">
          <section className="flex items-center gap-x-4">
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

            <div className="flex h-[72px] items-center">
              {navItems.map((item) => (
                <section
                  key={item.id}
                  className="relative flex h-full items-center pl-4 xl:pl-8"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="group flex cursor-pointer items-center gap-x-2">
                    <p className="select-none font-semibold text-slate-500 hover:text-blue-600 group-hover:text-blue-600 ">
                      {item.label}
                    </p>
                    <ChevronDownIcon
                      className={`pointer-events-none h-3 w-3 shrink-0 text-slate-500 transition-transform group-hover:text-blue-600 ${
                        openDropdown === item.id ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {openDropdown === item.id && (
                    <DropdownPanel
                      id={item.id}
                      onMouseEnter={() => handleMouseEnter(item.id)}
                      onMouseLeave={handleMouseLeave}
                    />
                  )}
                </section>
              ))}
            </div>
          </section>

          <section className="flex items-center gap-x-8 lg:gap-4 xl:gap-x-8">
            <LanguageSwitcher />
            <a
              href="https://app.tractian.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden font-semibold text-slate-500 transition-colors hover:text-blue-600 xl:block"
            >
              {tc("login")}
            </a>
            <button
              type="button"
              className="max-w-fit rounded-sm px-4 py-2 text-md font-medium text-blue-600 outline outline-1 outline-blue-600 transition hover:outline-2 active:outline-4"
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
              className="w-28"
              priority
            />
          </Link>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}

/* ── Dropdown Panels ── */

function DropdownPanel({
  id,
  onMouseEnter,
  onMouseLeave,
}: {
  id: NonNullable<DropdownId>;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const t = useTranslations("header");

  const content: Record<NonNullable<DropdownId>, React.ReactNode> = {
    solutions: (
      <div className="flex gap-8">
        <DropdownColumn title={t("conditionMonitoring")} links={[
          { label: "Vibration Sensor & Analysis", href: "#" },
          { label: "AI Failure Detection", href: "#" },
          { label: "Reliability & Root Cause Analysis", href: "#" },
        ]} />
        <DropdownColumn title={t("cmms")} links={[
          { label: "Work Order Management", href: "#" },
          { label: "Preventive Maintenance", href: "#" },
          { label: "Parts Inventory", href: "#" },
        ]} />
        <DropdownColumn title={t("oee")} links={[
          { label: "AI Production Tracking", href: "#" },
          { label: "Custom Dashboards", href: "#" },
          { label: "Utility Analytics", href: "#" },
        ]} />
      </div>
    ),
    whoWeServe: (
      <div className="flex gap-8">
        <DropdownColumn title={t("byRole")} links={[
          { label: t("plantManager"), href: "/who-we-serve/plant-manager" },
          { label: t("reliabilityEngineer"), href: "#" },
          { label: t("maintenanceEngineer"), href: "#" },
          { label: t("manufacturingEngineer"), href: "#" },
        ]} />
      </div>
    ),
    resources: (
      <div className="flex gap-8">
        <DropdownColumn title={t("resources")} links={[
          { label: t("caseStudies"), href: "#" },
          { label: t("ebooks"), href: "#" },
          { label: t("blog"), href: "#" },
        ]} />
      </div>
    ),
    company: (
      <div className="flex gap-8">
        <DropdownColumn title={t("company")} links={[
          { label: t("aboutUs"), href: "#" },
          { label: t("careers"), href: "#" },
          { label: t("newsroom"), href: "#" },
        ]} />
      </div>
    ),
    pricing: (
      <div className="flex flex-col gap-2">
        <DropdownLink label={t("conditionMonitoring")} href="#" />
        <DropdownLink label={t("cmms")} href="#" />
        <DropdownLink label={t("oee")} href="#" />
      </div>
    ),
  };

  return (
    <div
      className="absolute left-0 top-full z-50 min-w-[240px] rounded-lg border border-slate-200 bg-white p-6 shadow-lg"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {content[id]}
    </div>
  );
}

function DropdownColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex min-w-[180px] flex-col gap-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {title}
      </p>
      {links.map((link) => (
        <DropdownLink key={link.label} label={link.label} href={link.href} />
      ))}
    </div>
  );
}

function DropdownLink({ label, href }: { label: string; href: string }) {
  return (
    <Link
      href={href}
      className="text-sm text-slate-600 transition-colors hover:text-blue-600"
    >
      {label}
    </Link>
  );
}
