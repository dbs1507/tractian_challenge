"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { IconConditionMonitoring, IconCmms } from "../icons";
import { MenuIconFigure, SolutionMenuArrow } from "./shared";

export function PricingDropdown({
  onClose,
  variant = "desktop",
}: {
  onClose: () => void;
  variant?: "desktop" | "mobile";
}) {
  const t = useTranslations("header");

  const links = [
    {
      label: t("conditionMonitoring"),
      href: "/smart-trac/sensor-pricing",
      icon: <IconConditionMonitoring />,
    },
    {
      label: t("cmmsSoftware"),
      href: "/solutions/cmms/pricing",
      icon: <IconCmms />,
    },
  ];

  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-1 py-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href as any}
            className="group flex w-full items-center gap-2 py-2"
            onClick={onClose}
          >
            <MenuIconFigure>{link.icon}</MenuIconFigure>
            <p className="text-sm text-slate-500">
              {link.label}
            </p>
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div className="flex w-full gap-4 lg:justify-between">
      {links.map((link) => (
        <div
          key={link.href}
          className="flex w-full border-l border-slate-300 pl-4"
        >
          <Link
            href={link.href as any}
            className="group flex w-full items-center gap-2"
            onClick={onClose}
          >
            <MenuIconFigure>{link.icon}</MenuIconFigure>
            <article className="flex w-full flex-1 flex-col">
              <div className="flex items-center gap-2">
                <p className="text-[14px] text-slate-500 transition-all duration-150 group-hover:text-blue-600 lg:font-semibold lg:text-slate-700">
                  {link.label}
                </p>
                <SolutionMenuArrow />
              </div>
            </article>
          </Link>
        </div>
      ))}
    </div>
  );
}
