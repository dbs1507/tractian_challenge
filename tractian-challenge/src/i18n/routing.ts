import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["en", "pt", "es"],
  defaultLocale: "pt",
  localePrefix: "as-needed",
  pathnames: {
    "/who-we-serve/plant-manager": {
      en: "/who-we-serve/plant-manager",
      pt: "/solucoes-para-gerentes-industriais",
      es: "/who-we-serve/gerente-de-planta",
    },
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
