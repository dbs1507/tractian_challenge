import { heroImages } from "@/lib/images";

export function HeroSection() {
  return (
    <section className="relative w-full 2xl:bg-right-top 3xl:min-h-[675px] 4xl:min-h-[695px]">
      {/* Background image - desktop only */}
      <div
        className="absolute inset-0 hidden bg-cover bg-right bg-no-repeat md:block"
        style={{ backgroundImage: `url(${heroImages.desktop})` }}
      />
      {/* Dark overlay + content */}
      <div className="relative z-10 flex w-full max-w-full justify-end bg-blue-950/80 px-4 pb-12 pt-14 md:max-w-[50%] md:items-center md:bg-opacity-80 lg:px-12 lg:py-16 xl:py-20 xl:pl-16 xl:pr-24 3xl:min-h-[675px] 4xl:min-h-[695px]">
        <div className="flex w-full flex-col items-center gap-8 md:w-fit md:items-start">
          <article className="relative z-20 flex w-full flex-col items-center gap-4 md:items-start">
            <p className="text-center font-medium text-white md:text-left">
              KEEP OPERATIONS RUNNING. HIT YOUR TARGETS.
            </p>
            <h1 className="font-heading text-center text-[24px] font-bold leading-[32px] text-white md:text-left lg:text-[40px] lg:leading-[52px]">
              For the Plant Manager
              <br className="hidden xl:block" /> Who Wants to Lead with
              <br className="hidden xl:block" /> Confidence
            </h1>
            <p className="text-center font-light text-white md:text-left">
              Make smarter decisions, faster. Tractian gives you clarity,
              control,
              <br className="hidden xl:block" /> and confidence - so you can
              lead the plant and prove the ROI.
            </p>
          </article>
          <button
            className="relative z-30 mx-auto flex max-w-fit items-center justify-center gap-2 rounded-sm bg-blue-600 px-4 py-2 font-medium text-white transition duration-150 ease-in-out hover:bg-blue-900 active:bg-blue-950 disabled:cursor-not-allowed disabled:bg-slate-300 md:mx-0"
            type="button"
          >
            Get a Demo
            <svg
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.3671 8.03333L9.90046 13.5L9.16712 12.7667L13.4338 8.5H0.633789V7.5H13.4338L9.16712 3.23333L9.90046 2.5L15.3671 8.03333Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating testimonial card (desktop only) */}
      <div className="absolute inset-0 mx-auto hidden w-full items-center justify-end lg:flex 2xl:right-8 2xl:mr-0">
        <div className="flex max-w-[240px] flex-col gap-4 rounded-l-sm bg-white px-4 py-4 lg:py-6 2xl:max-w-[280px] 2xl:rounded-sm 2xl:px-5 3xl:max-w-[320px] 3xl:px-6 3xl:py-7 4xl:max-w-[335px]">
          <p className="text-slate-500 text-body-sm 2xl:text-body-md 4xl:text-body-lg text-[14px] font-medium">
            &quot;With everything centralized within Tractian platform, we
            finally have the visibility to act fast, plan smarter, and show
            real results.&quot;
          </p>
          <article className="flex w-full flex-col">
            <p className="text-[13px] font-bold text-black">Paul Morais</p>
            <p className="text-[13px] text-black">Plant Manager</p>
            <p className="text-[13px] font-bold text-black">The Fillo Factory</p>
          </article>
        </div>
      </div>
    </section>
  );
}
