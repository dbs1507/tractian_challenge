"use client";

import { useState, useEffect, useCallback, useMemo } from "react";
import { useTranslations } from "next-intl";
import { CustomSelect } from "./CustomSelect";

const ASSET_OPTIONS = [
  "assetLess25",
  "asset25_49",
  "asset50_99",
  "asset100_249",
  "asset250Plus",
  "assetNA",
] as const;

const inputClass =
  "rounded-sm p-3 text-body-md outline ring-0 w-full placeholder:text-slate-500 text-slate-700 bg-white outline-1 outline-slate-400 hover:outline-slate-700 focus:outline-2 focus:outline-blue-600 disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70";

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function DemoModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const t = useTranslations("demoModal");
  const [selectedAssets, setSelectedAssets] = useState<string | null>(null);
  const [jobTitle, setJobTitle] = useState("");
  const [industrySector, setIndustrySector] = useState("");
  const [solutionOfInterest, setSolutionOfInterest] = useState("");

  const jobOptions = useMemo(
    () => [
      { value: "plant-manager", label: t("jobOptionPlantManager") },
      { value: "maintenance", label: t("jobOptionMaintenance") },
      { value: "reliability", label: t("jobOptionReliability") },
      { value: "other", label: t("jobOptionOther") },
    ],
    [t]
  );
  const industryOptions = useMemo(
    () => [
      { value: "automotive", label: t("industryOptionAutomotive") },
      { value: "chemical", label: t("industryOptionChemical") },
      { value: "manufacturing", label: t("industryOptionManufacturing") },
      { value: "mining", label: t("industryOptionMining") },
      { value: "other", label: t("industryOptionOther") },
    ],
    [t]
  );
  const solutionOptions = useMemo(
    () => [
      { value: "condition-monitoring", label: t("solutionOptionCM") },
      { value: "cmms", label: t("solutionOptionCMMS") },
      { value: "oee", label: t("solutionOptionOEE") },
    ],
    [t]
  );

  const handleEscape = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, handleEscape]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"
        onClick={onClose}
        aria-hidden
      />

      <div
        className="relative z-10 flex w-full max-w-3xl flex-col rounded-sm bg-white font-heading text-left"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          aria-label="Close"
        >
          <CloseIcon className="h-5 w-5" />
        </button>

        <div className="w-full bg-slate-50 px-6 py-8 md:px-16 lg:py-[59px]">
          <article className="mb-6 flex flex-col px-5 text-center">
            <h2
              id="demo-modal-title"
              className="font-semibold text-title-xs lg:text-[32px] mb-6 leading-[10px] text-slate-700"
            >
              {t("title")}
            </h2>
            <h3 className="font-sans text-body-md text-slate-500">{t("subtitle")}</h3>
          </article>

          <form
            id="modalDemoForm"
            className="flex w-full flex-col gap-y-3"
            onSubmit={(e) => e.preventDefault()}
          >
            {/* Honeypot */}
            <div className="pointer-events-none absolute -top-[9999px] opacity-0">
              <input
                autoComplete="off"
                id="website"
                tabIndex={-1}
                type="text"
                name="website"
              />
            </div>

            <fieldset className="flex w-full flex-col gap-2 sm:w-auto font-sans">
              <div className="group relative w-full">
                <input
                  type="text"
                  name="name"
                  placeholder={t("name")}
                  className={inputClass}
                />
              </div>
            </fieldset>

            <fieldset className="flex w-full flex-col gap-2 sm:w-auto font-sans">
              <div className="group relative w-full">
                <input
                  type="email"
                  name="email"
                  placeholder={t("workEmail")}
                  className={inputClass}
                />
              </div>
            </fieldset>

            <section className="flex w-full flex-col gap-3 sm:flex-row sm:gap-4">
              <fieldset className="default-fieldset flex min-w-0 flex-1 flex-col gap-2 font-sans">
                <div className="relative flex rounded-sm outline outline-1 outline-slate-400 hover:outline-slate-700 focus-within:outline-2 focus-within:outline-blue-600">
                  <select
                    name="countryCode"
                    aria-label="Country"
                    className="rounded-l-sm border-0 bg-white px-3 py-3 text-body-md text-slate-700 outline-none"
                  >
                    <option value="+55">🇧🇷 +55</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+44">🇬🇧 +44</option>
                    <option value="+34">🇪🇸 +34</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+55"
                    className={`flex-1 min-w-0 rounded-r-sm border-0 border-l border-slate-200 bg-white px-3 py-3 text-body-md outline-none placeholder:text-slate-500 focus:ring-0 ${inputClass}`}
                  />
                </div>
              </fieldset>
              <div className="relative flex min-w-0 flex-1 flex-col gap-2 font-sans">
                <CustomSelect
                  name="jobTitle"
                  value={jobTitle}
                  onChange={setJobTitle}
                  placeholder={t("jobTitle")}
                  options={jobOptions}
                  aria-label={t("jobTitle")}
                />
              </div>
            </section>

            <div className="relative mx-auto flex w-full flex-col gap-2">
              <CustomSelect
                name="industrySector"
                value={industrySector}
                onChange={setIndustrySector}
                placeholder={t("industrySector")}
                options={industryOptions}
                aria-label={t("industrySector")}
              />
            </div>

            <fieldset className="flex w-full flex-col gap-2" data-cid="select-input">
              <div className="relative">
                <CustomSelect
                  name="solutionOfInterest"
                  value={solutionOfInterest}
                  onChange={setSolutionOfInterest}
                  placeholder={t("solutionOfInterest")}
                  options={solutionOptions}
                  aria-label={t("solutionOfInterest")}
                />
              </div>
            </fieldset>

            <fieldset className="flex w-full flex-col gap-2 rounded-sm border border-slate-400 bg-white p-3 font-sans">
              <label
                id="quantityOfAssets-modal-form-label"
                className="my-1 text-left text-body-sm text-slate-500 md:text-body-md"
              >
                {t("assetsQuestion")}
              </label>
              <div
                aria-labelledby="quantityOfAssets-modal-form-label"
                className="flex flex-wrap gap-1.5"
                role="radiogroup"
              >
                {ASSET_OPTIONS.map((key) => (
                  <button
                    key={key}
                    type="button"
                    role="radio"
                    aria-checked={selectedAssets === key}
                    onClick={() =>
                      setSelectedAssets(selectedAssets === key ? null : key)
                    }
                    className={`rounded-sm border px-2 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 sm:px-3 sm:py-1.5 sm:text-body-sm ${
                      selectedAssets === key
                        ? "border-blue-600 bg-blue-50 text-blue-700"
                        : "border-slate-300 bg-white text-slate-500 hover:border-slate-400 hover:bg-slate-100"
                    }`}
                  >
                    {t(key)}
                  </button>
                ))}
              </div>
            </fieldset>

            <button
              type="submit"
              className="max-w-fit w-full min-w-full rounded-sm bg-green-600 px-6 py-3 text-center font-sans font-medium text-body-lg leading-[22px] text-white transition ease-in-out duration-150 hover:bg-green-900 active:bg-green-950 disabled:cursor-not-allowed disabled:bg-slate-300 lg:leading-6"
            >
              {t("requestDemo")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
