"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import {
  IconCaseStudies,
  IconEbooks,
  IconBlog,
  IconTemplates,
  IconCalculators,
  IconEvents,
  IconAcademy,
  IconHelpCenter,
  IconTroubleshooting,
  IconAiFailure,
} from "../icons";
import { MenuIconFigure, SolutionMenuArrow } from "./shared";

function ResourceLink({
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
  const className = "group flex w-full items-center gap-2";
  const content = (
    <>
      <MenuIconFigure>{icon}</MenuIconFigure>
      <article className="flex w-full flex-1 flex-col">
        <div className="flex items-center gap-2">
          <p className="text-[14px] text-slate-500 transition-all duration-150 group-hover:text-blue-600 lg:font-semibold lg:text-slate-700">
            {label}
          </p>
          <SolutionMenuArrow />
        </div>
      </article>
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClose}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className} onClick={onClose}>
      {content}
    </Link>
  );
}

function MobileResourceLink({
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
    <Link href={href} className={className} onClick={onClose}>
      {content}
    </Link>
  );
}

export function ResourcesDropdown({
  onClose,
  variant = "desktop",
}: {
  onClose: () => void;
  variant?: "desktop" | "mobile";
}) {
  const t = useTranslations("header");

  const resourcesCenterLinks = [
    { label: t("caseStudies"), href: "/case-studies", icon: <IconCaseStudies /> },
    { label: t("ebooks"), href: "/resources", icon: <IconEbooks /> },
    { label: t("blog"), href: "/blog", icon: <IconBlog /> },
    { label: t("templates"), href: "/resources", icon: <IconTemplates /> },
    { label: t("calculators"), href: "/resources/calculators/maintenance-calculators", icon: <IconCalculators /> },
    { label: t("eventsWebinars"), href: "/events/hub", icon: <IconEvents /> },
    { label: t("sops"), href: "/assets", icon: <IconTroubleshooting /> },
    { label: t("chatgptPlugins"), href: "/resources/ai-agents", icon: <IconAiFailure /> },
  ];

  const customerHubLinks = [
    { label: t("productUpdates"), href: "https://releases.tractian.com/", icon: <IconEvents />, external: true },
    { label: t("tractianAcademy"), href: "https://academy.tractian.com/en", icon: <IconAcademy />, external: true },
    { label: t("helpCenter"), href: "https://faq.tractian.com/en/", icon: <IconHelpCenter />, external: true },
  ];

  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-4 py-4">
        <div className="flex flex-col gap-1">
          <p className="px-0 pb-2 text-xs uppercase tracking-wider text-slate-400">
            {t("resourcesCenter")}
          </p>
          {resourcesCenterLinks.map((link) => (
            <MobileResourceLink key={link.href + link.label} href={link.href} label={link.label} icon={link.icon} onClose={onClose} />
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <p className="px-0 pb-2 text-xs uppercase tracking-wider text-slate-400">
            {t("customerHub")}
          </p>
          {customerHubLinks.map((link) => (
            <MobileResourceLink key={link.href + link.label} href={link.href} label={link.label} icon={link.icon} onClose={onClose} external={link.external} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="flex w-full gap-4 lg:justify-between">
      <div className="flex w-full flex-col gap-6 border-l border-slate-300 pl-4">
        <p className="text-[14px] text-slate-500">{t("resourcesCenter")}</p>
        <div className="grid w-full grid-cols-3 gap-4">
          {resourcesCenterLinks.map((link) => (
            <ResourceLink
              key={link.href + link.label}
              href={link.href}
              label={link.label}
              icon={link.icon}
              onClose={onClose}
            />
          ))}
        </div>
      </div>

      <div className="flex w-full max-w-[30%] flex-col gap-6 border-l border-slate-300 pl-4">
        <p className="text-[14px] text-slate-500">{t("customerHub")}</p>
        <div className="flex w-full flex-col gap-4">
          {customerHubLinks.map((link) => (
            <ResourceLink
              key={link.href + link.label}
              href={link.href}
              label={link.label}
              icon={link.icon}
              onClose={onClose}
              external={link.external}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
