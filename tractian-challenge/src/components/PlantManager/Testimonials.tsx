"use client";

import { useState } from "react";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

/* ─── Quote icon (blue quotation marks) ─── */
function QuoteIcon() {
  return (
    <svg
      fill="none"
      height="32"
      viewBox="0 0 32 32"
      width="32"
      xmlns="http://www.w3.org/2000/svg"
      className="h-8 w-8 text-blue-600"
    >
      <path
        d="M28.667 4C24.2487 4 20.667 7.58172 20.667 12H18.0003C18.0003 6.10896 22.776 1.33333 28.667 1.33333V4Z"
        fill="#2563EB"
      />
      <path d="M30 30.6667H18V12.0001H30V30.6667Z" fill="#2563EB" />
      <path
        d="M12.667 4C8.24871 4 4.66699 7.58172 4.66699 12H2.00033C2.00033 6.10896 6.77595 1.33333 12.667 1.33333V4Z"
        fill="#2563EB"
      />
      <path d="M14 30.6667H2V12.0001H14V30.6667Z" fill="#2563EB" />
    </svg>
  );
}

/* ─── G2 badge (Nicholas D. has it) ─── */
function G2Badge() {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect fill="#FF492C" height="24" rx="11.6" width="23.2" />
      <path
        d="M14.1371 15.0019C14.6538 15.904 15.1646 16.7959 15.6751 17.6868C13.4146 19.4281 9.89763 19.6386 7.29408 17.6332C4.29797 15.3237 3.80553 11.3829 5.40961 8.54623C7.25452 5.28339 10.707 4.56179 12.9298 5.09091C12.8697 5.22232 11.5384 8.00145 11.5384 8.00145C11.5384 8.00145 11.4331 8.00841 11.3736 8.00957C10.7166 8.03759 10.2272 8.19142 9.70269 8.46429C8.5342 9.07786 7.74408 10.2343 7.59312 11.5517C7.51553 12.2097 7.60599 12.8768 7.85585 13.4898C8.06712 14.0081 8.36596 14.4684 8.7666 14.857C9.38118 15.4538 10.1125 15.8233 10.9603 15.9456C11.7631 16.0615 12.5352 15.9467 13.2587 15.5809C13.53 15.4439 13.7609 15.2926 14.0307 15.085C14.0651 15.0626 14.0956 15.0342 14.1371 15.0019Z"
        fill="white"
      />
      <path
        d="M14.1422 7.09051C14.011 6.96065 13.8894 6.84083 13.7684 6.72025C13.6962 6.64836 13.6267 6.57357 13.5527 6.50342C13.5262 6.4781 13.4951 6.44351 13.4951 6.44351C13.4951 6.44351 13.5203 6.38979 13.531 6.36776C13.6726 6.08194 13.8944 5.87304 14.1575 5.70684C14.4485 5.52171 14.7875 5.4274 15.1316 5.4361C15.572 5.44479 15.9815 5.55514 16.327 5.85236C16.5821 6.0717 16.7129 6.34998 16.7359 6.68218C16.7743 7.2426 16.5439 7.67181 16.0862 7.97135C15.8173 8.14759 15.5273 8.28383 15.2365 8.4452C15.0761 8.53429 14.939 8.61255 14.7823 8.77372C14.6444 8.93547 14.6377 9.08795 14.6377 9.08795L16.7209 9.08524V10.0188H13.5053V9.92859C13.493 9.46981 13.5462 9.03809 13.755 8.62144C13.947 8.23919 14.2455 7.95937 14.6041 7.74389C14.8802 7.57789 15.171 7.43662 15.4478 7.2714C15.6185 7.16955 15.7391 7.02017 15.7382 6.80354C15.7382 6.61763 15.6037 6.4524 15.4117 6.4008C14.9588 6.2779 14.4979 6.47405 14.2582 6.89108C14.2232 6.95195 14.1875 7.01244 14.1422 7.09051Z"
        fill="white"
      />
      <path
        d="M18.1715 14.0096L16.4159 10.959H12.9417L11.1748 14.0411H14.6745L16.4015 17.0773L18.1715 14.0096Z"
        fill="white"
      />
    </svg>
  );
}

/* ─── Testimonial data ─── */
const TESTIMONIALS = [
  { quoteKey: "testimonial1Quote" as const, nameKey: "testimonial1Name" as const, roleKey: "testimonial1Role" as const, companyKey: "testimonial1Company" as const, imageKey: "testimonial1Image" as const },
  { quoteKey: "testimonial2Quote" as const, nameKey: "testimonial2Name" as const, roleKey: "testimonial2Role" as const, companyKey: "testimonial2Company" as const, imageKey: "testimonial2Image" as const },
  { quoteKey: "testimonial3Quote" as const, nameKey: "testimonial3Name" as const, roleKey: "testimonial3Role" as const, companyKey: "testimonial3Company" as const, imageKey: "testimonial3Image" as const },
  { quoteKey: "testimonial4Quote" as const, nameKey: "testimonial4Name" as const, roleKey: "testimonial4Role" as const, companyKey: "testimonial4Company" as const, imageKey: "testimonial4Image" as const },
] as const;

/* ─── Single testimonial card ─── */
function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: (typeof TESTIMONIALS)[number];
  index: number;
}) {
  const t = useTranslations("plantManager");
  const locale = useLocale();
  const { quoteKey, nameKey, roleKey, companyKey, imageKey } = testimonial;
  const showG2Badge =
    (locale === "en" && index === 1) || (locale === "es" && index === 0);

  return (
    <div className="flex h-auto w-full flex-col gap-4">
      {/* Quote icon + optional badge (en: 2ª pessoa, es: 1ª, pt: nenhum) */}
      <div className="flex w-full items-center gap-4">
        <QuoteIcon />
        {showG2Badge && <G2Badge />}
      </div>

      {/* Quote text */}
      <p className="h-full text-slate-500 text-quote italic text-[14px] leading-[1.6]">
        {t(quoteKey)}
      </p>

      {/* Person */}
      <div className="flex items-center gap-3 lg:justify-between">
        <figure className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full lg:h-14 lg:w-14">
          <Image
            src={t(imageKey)}
            alt={t(nameKey)}
            width={120}
            height={120}
            className="h-full w-full rounded-full object-cover"
            loading="lazy"
          />
        </figure>
        <article className="flex w-full flex-1 flex-col">
          <p className="text-sm font-bold text-slate-700">{t(nameKey)}</p>
          <p className="text-sm text-slate-500">{t(roleKey)}</p>
          <p className="text-sm font-bold text-slate-700">{t(companyKey)}</p>
        </article>
      </div>
    </div>
  );
}

/* ─── Mobile carousel bar indicator ─── */
function CarouselBar({
  active,
  onClick,
}: {
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label="Go to slide"
      className={`shrink-0 transition-colors ${
        active
          ? "h-[2.6px] w-14 rounded-sm bg-blue-600"
          : "h-1 w-6 rounded-sm bg-slate-200"
      }`}
    />
  );
}

/* ─── Main component ─── */
export function Testimonials() {
  const t = useTranslations("plantManager");
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="w-full bg-white py-12 sm:px-4 lg:py-16 xl:px-0">
      <div className="mx-auto flex w-full max-w-2xl flex-col items-center gap-8 md:gap-12 lg:max-w-6xl">
        {/* Title */}
        <h2 className="px-4 text-left font-heading text-[1.25rem] font-bold leading-[1.75rem] text-slate-700 sm:px-0 lg:text-center lg:text-[32px] lg:leading-[40px]">
          {t("testimonialsTitle")}
        </h2>

        {/* Desktop grid (sm+) */}
        <div className="hidden h-auto w-full items-stretch gap-8 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:justify-between lg:gap-12">
          {TESTIMONIALS.map((testimonial, idx) => (
            <TestimonialCard key={testimonial.nameKey} testimonial={testimonial} index={idx} />
          ))}
        </div>

        {/* Mobile carousel (<sm) */}
        <div className="flex w-full flex-col items-center gap-8 sm:hidden">
          <div className="w-full overflow-hidden px-4">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial, idx) => (
                <div
                  key={testimonial.nameKey}
                  className="w-full shrink-0 px-2"
                >
                  <TestimonialCard testimonial={testimonial} index={idx} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination bars */}
          <div className="flex items-center justify-center gap-1.5">
            {TESTIMONIALS.map((testimonial, idx) => (
              <CarouselBar
                key={testimonial.nameKey}
                active={idx === activeSlide}
                onClick={() => setActiveSlide(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
