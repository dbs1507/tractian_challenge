import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4 text-center text-sm text-zinc-600">
        {t("copyright", { year: new Date().getFullYear() })}
      </div>
    </footer>
  );
}
