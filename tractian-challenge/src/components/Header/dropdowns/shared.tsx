"use client";

import { Link } from "@/i18n/routing";
import { SolutionMenuArrow } from "../icons";

export { SolutionMenuArrow };

export function MenuIconFigure({ children }: { children: React.ReactNode }) {
  return (
    <figure className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-neutral-200 bg-white lg:bg-transparent">
      {children}
    </figure>
  );
}

export function SimpleColumn({
  title,
  links,
  onClose,
}: {
  title: string;
  links: { label: string; href: string }[];
  onClose: () => void;
}) {
  return (
    <div className="flex min-w-[200px] flex-col gap-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
        {title}
      </p>
      <div className="flex flex-col gap-2">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href as any}
            className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
            onClick={onClose}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
