import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { MobileMenu } from "./MobileMenu";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const t = useTranslations("header");

  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="text-lg font-bold">TRACTIAN</div>
        <nav className="hidden items-center gap-6 md:flex">
          <Link href="/" className="text-sm hover:text-blue-600">
            {t("home")}
          </Link>
          <Link
            href="/who-we-serve/plant-manager"
            className="text-sm hover:text-blue-600"
          >
            {t("plantManager")}
          </Link>
        </nav>
        <LanguageSwitcher />
        <MobileMenu />
      </div>
    </header>
  );
}
