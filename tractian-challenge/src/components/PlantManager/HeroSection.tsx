import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("plantManager");

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold">{t("heroTitle")}</h1>
        <p className="mt-4 text-lg text-zinc-600">{t("heroSubtitle")}</p>
      </div>
    </section>
  );
}
