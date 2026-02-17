"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  IconPerson,
  IconAutomotive,
  IconChemical,
  IconFacilities,
  IconFleet,
  IconFoodBeverage,
  IconHeavyEquipment,
  IconManufacturing,
  IconMillsAgriculture,
  IconMining,
  IconOilGas,
  IconPaper,
} from "../icons";
import { MenuIconFigure, SolutionMenuArrow } from "./shared";

function MobileNavLink({
  href,
  label,
  icon,
  onClose,
  external,
}: {
  href: string;
  label: string;
  icon: React.ReactNode;
  onClose: () => void;
  external?: boolean;
}) {
  const className = "group flex w-full items-center gap-2 py-2";
  const content = (
    <>
      <MenuIconFigure>{icon}</MenuIconFigure>
      <p className="text-sm text-slate-500">
        {label}
      </p>
    </>
  );
  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={className} onClick={onClose}>
        {content}
      </a>
    );
  }
  return (
    <Link href={href as any} className={className} onClick={onClose}>
      {content}
    </Link>
  );
}

export function WhoWeServeDropdown({
  onClose,
  variant = "desktop",
}: {
  onClose: () => void;
  variant?: "desktop" | "mobile";
}) {
  const locale = useLocale();
  const t = useTranslations("header");

  const byRoleLinks = [
    { label: t("plantManager"), href: "/who-we-serve/plant-manager" },
    { label: t("reliabilityEngineer"), href: "/who-we-serve/reliability-engineer" },
    { label: t("maintenanceEngineer"), href: "/who-we-serve/maintenance-engineer" },
    ...(locale === "en"
      ? [{ label: t("manufacturingEngineer"), href: "/who-we-serve/manufacturing-engineer" }]
      : []),
  ];

  const bySectorLinks =
    locale === "pt"
      ? [
          { label: t("industryAutomotive"), href: "/industry/automotive", icon: <IconAutomotive /> },
          { label: t("industryChemical"), href: "/industry/chemical", icon: <IconChemical /> },
          { label: t("industryFoodBeverage"), href: "/industry/food-and-beverage", icon: <IconFoodBeverage /> },
          { label: t("industryMillsAgriculture"), href: "/industry/mills-and-agriculture", icon: <IconMillsAgriculture /> },
          { label: t("industryMining"), href: "/industry/mining-sector", icon: <IconMining /> },
          { label: t("industryPaper"), href: "/industry/paper-and-cellulose", icon: <IconPaper /> },
        ]
      : locale === "es"
        ? [
            { label: t("industryAutomotive"), href: "/industry/automotive", icon: <IconAutomotive /> },
            { label: t("industryMining"), href: "/industry/mining-sector", icon: <IconMining /> },
            { label: t("industryChemical"), href: "/industry/chemical", icon: <IconChemical /> },
            { label: t("industryMillsAgriculture"), href: "/industry/mills-and-agriculture", icon: <IconMillsAgriculture /> },
            { label: t("industryFoodBeverage"), href: "/industry/food-and-beverage", icon: <IconFoodBeverage /> },
            { label: t("industryManufacturing"), href: "/industry/manufacturing-maintenance-software", icon: <IconManufacturing /> },
            { label: t("industryOilGas"), href: "/industry/oil-gas-maintenance-software", icon: <IconOilGas /> },
          ]
        : [
            { label: t("industryAutomotive"), href: "/industry/automotive", icon: <IconAutomotive /> },
            { label: t("industryChemical"), href: "/industry/chemical", icon: <IconChemical /> },
            { label: t("industryFacilities"), href: "/industry/facilities-maintenance-software", icon: <IconFacilities /> },
            { label: t("industryFleet"), href: "/industry/fleet-maintenance-software", icon: <IconFleet /> },
            { label: t("industryFoodBeverage"), href: "/industry/food-and-beverage", icon: <IconFoodBeverage /> },
            { label: t("industryHeavyEquipment"), href: "/industry/heavy-equipment-maintenance-software", icon: <IconHeavyEquipment /> },
            { label: t("industryManufacturing"), href: "/industry/manufacturing-maintenance-software", icon: <IconManufacturing /> },
            { label: t("industryMillsAgriculture"), href: "/industry/mills-and-agriculture", icon: <IconMillsAgriculture /> },
            { label: t("industryMining"), href: "/industry/mining-sector", icon: <IconMining /> },
            { label: t("industryOilGas"), href: "/industry/oil-gas-maintenance-software", icon: <IconOilGas /> },
          ];

  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-4 py-4">
        <div className="flex flex-col gap-1">
          <p className="px-0 pb-2 text-xs uppercase tracking-wider text-slate-400">
            {t("byRole")}
          </p>
          {byRoleLinks.map((link) => (
            <MobileNavLink key={link.href} href={link.href} label={link.label} icon={<IconPerson />} onClose={onClose} />
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <p className="px-0 pb-2 text-xs uppercase tracking-wider text-slate-400">
            {t("bySector")}
          </p>
          {bySectorLinks.map((link) => (
            <MobileNavLink key={link.href} href={link.href} label={link.label} icon={link.icon} onClose={onClose} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full gap-4 lg:justify-between">
      <div className="flex w-full max-w-[25%] flex-col gap-6 border-l border-slate-300 pl-4">
        <p className="text-body-sm text-[14px] text-slate-500">{t("byRole")}</p>
        <div className="flex w-full flex-col gap-4">
          {byRoleLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className="group flex w-full items-center gap-2"
              onClick={onClose}
            >
              <MenuIconFigure>
                <IconPerson />
              </MenuIconFigure>
              <article className="flex flex-1 flex-col">
                <div className="flex items-center gap-2">
                  <p className="text-[14px] text-slate-500 transition-all duration-150 group-hover:text-blue-600 lg:font-semibold lg:text-slate-700">
                    {link.label}
                  </p>
                  <SolutionMenuArrow />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>

      <div className="flex w-full flex-col gap-6 border-l border-slate-300 pl-4">
        <p className="text-[14px] text-slate-500">{t("bySector")}</p>
        <div className="grid w-full grid-cols-3 gap-4">
          {bySectorLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href as any}
              className="group flex w-full items-center gap-2"
              onClick={onClose}
            >
              <MenuIconFigure>{link.icon}</MenuIconFigure>
              <article className="flex flex-1 flex-col">
                <div className="flex items-center gap-2">
                  <p className="text-[14px] text-slate-500 transition-all duration-150 group-hover:text-blue-600 lg:font-semibold lg:text-slate-700">
                    {link.label}
                  </p>
                  <SolutionMenuArrow />
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
