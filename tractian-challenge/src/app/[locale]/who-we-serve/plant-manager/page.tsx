import { setRequestLocale } from "next-intl/server";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/PlantManager/HeroSection";
import { WhyChoose } from "@/components/PlantManager/WhyChoose";
import { ReportsSection } from "@/components/PlantManager/ReportsSection";
import { ThreePillars } from "@/components/PlantManager/ThreePillars";
import { Testimonials } from "@/components/PlantManager/Testimonials";
import { LogosCarousel } from "@/components/PlantManager/LogosCarousel";
import { ProcessSteps } from "@/components/PlantManager/ProcessSteps";
import { CTASection } from "@/components/PlantManager/CTASection";
import { FAQ } from "@/components/PlantManager/FAQ";

type Props = { params: Promise<{ locale: string }> };

export default async function PlantManagerPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhyChoose />
        <ReportsSection />
        <ThreePillars />
        <Testimonials />
        <LogosCarousel />
        <ProcessSteps />
        <CTASection />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
