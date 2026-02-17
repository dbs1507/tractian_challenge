"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { companyNavbarImages } from "@/lib/images";
import { IconContact, IconReferrals, IconTrustCenter } from "../icons";
import { MenuIconFigure, SolutionMenuArrow } from "./shared";

function CompanyCardLink({
  href,
  label,
  imageSrc,
  imageAlt,
  onClose,
  external,
}: {
  href: string;
  label: string;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
  external?: boolean;
}) {
  const className =
    "group ml-4 flex flex-row items-center gap-4 lg:ml-0 lg:w-[186px] lg:flex-col lg:items-start lg:gap-3";
  const content = (
    <>
      <figure className="h-[90px] w-[160px] shrink-0 rounded-sm overflow-hidden lg:h-[110px] lg:w-[186px]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={186}
          height={110}
          className="h-[90px] w-[160px] rounded-sm object-cover transition-all duration-200 group-hover:brightness-95 lg:h-[110px] lg:w-[186px]"
          sizes="(max-width: 1023px) 160px, 186px"
        />
      </figure>
      <article className="flex w-full flex-1 flex-col">
        <p className="text-body-md font-medium text-slate-500 lg:text-slate-700">
          {label}
        </p>
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
    <Link href={href as  any} className={className} onClick={onClose}>
      {content}
    </Link>
  );
}

function CompanyTextLink({
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
    <Link href={href as any} className={className} onClick={onClose}>
      {content}
    </Link>
  );
}

function MobileCompanyLink({
  href,
  label,
  icon,
  onClose,
  external,
}: {
  href: string;
  label: string;
  icon?: React.ReactNode;
  onClose: () => void;
  external?: boolean;
}) {
  const className = "group flex w-full items-center gap-2 py-2";
  const content = (
    <>
      {icon && <MenuIconFigure>{icon}</MenuIconFigure>}
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

export function CompanyDropdown({
  onClose,
  variant = "desktop",
}: {
  onClose: () => void;
  variant?: "desktop" | "mobile";
}) {
  const t = useTranslations("header");

  const aboutCards = [
    {
      label: t("aboutUs"),
      href: "/about",
      imageSrc: companyNavbarImages.about,
      imageAlt: t("aboutUs"),
    },
    {
      label: t("careers"),
      href: "https://careers.tractian.com/",
      imageSrc: companyNavbarImages.careers,
      imageAlt: t("careers"),
      external: true,
    },
    {
      label: t("newsroom"),
      href: "/press",
      imageSrc: companyNavbarImages.newsroom,
      imageAlt: t("newsroom"),
    },
  ];

  const othersLinks = [
    { label: t("contactUs"), href: "/contact", icon: <IconContact /> },
    { label: t("referrals"), href: "/referrals", icon: <IconReferrals /> },
    {
      label: t("trustCenter"),
      href: "https://trust.tractian.com/",
      icon: <IconTrustCenter />,
      external: true,
    },
  ];

  if (variant === "mobile") {
    return (
      <div className="flex flex-col gap-4 py-4">
        <div className="flex flex-col gap-1">
          <p className="px-0 pb-2 text-xs uppercase tracking-wider text-slate-400">
            {t("aboutTractian")}
          </p>
          {aboutCards.map((card) => (
            <MobileCompanyLink
              key={card.href + card.label}
              href={card.href}
              label={card.label}
              onClose={onClose}
              external={"external" in card && card.external}
            />
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <p className="px-0 pb-2 text-xs uppercase tracking-wider text-slate-400">
            {t("others")}
          </p>
          {othersLinks.map((link) => (
            <MobileCompanyLink
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
    );
  }

  return (
    <div className="flex w-full gap-4 lg:justify-between">
      <div className="flex w-full flex-col gap-6 border-l border-slate-300 pl-4">
        <p className="text-body-sm text-slate-500 lg:text-body-md">
          {t("aboutTractian")}
        </p>
        <div className="flex w-full flex-col gap-4 lg:flex-row">
          {aboutCards.map((card) => (
            <CompanyCardLink
              key={card.href + card.label}
              href={card.href}
              label={card.label}
              imageSrc={card.imageSrc}
              imageAlt={card.imageAlt}
              onClose={onClose}
              external={"external" in card && card.external}
            />
          ))}
        </div>
      </div>

      <div className="flex w-[40%] flex-col gap-6 border-l border-slate-300 pl-4">
        <p className="text-body-sm text-slate-500 lg:text-body-md">
          {t("others")}
        </p>
        <div className="flex w-full flex-col gap-4">
          {othersLinks.map((link) => (
            <CompanyTextLink
              key={link.href + link.label}
              href={link.href}
              label={link.label}
              icon={link.icon}
              onClose={onClose}
              external={"external" in link && link.external}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
