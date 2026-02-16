"use client";

import { useRef, useEffect, useState } from "react";

const baseButtonClass =
  "min-w-full !pr-8 w-full rounded-sm outline outline-1 outline-slate-400 hover:outline-slate-700 bg-white p-3 text-body-md text-left transition-colors focus:outline-2 focus:outline-blue-600 disabled:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70";

const chevronClass =
  "pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-slate-400 transition-transform";

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 22 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${chevronClass} ${open ? "rotate-180" : ""}`}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5657 1.56569L11.0001 12.1314L0.43457 1.56569L1.56595 0.434329L11.0001 9.86863L20.4344 0.434326L21.5657 1.56569Z"
        fill="currentColor"
      />
    </svg>
  );
}

export type CustomSelectOption = { value: string; label: string };

export function CustomSelect({
  name,
  value,
  onChange,
  placeholder,
  options,
  "aria-label": ariaLabel,
  id,
}: {
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  options: CustomSelectOption[];
  "aria-label"?: string;
  id?: string;
}) {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const selectedOption = options.find((o) => o.value === value);
  const displayText = selectedOption ? selectedOption.label : "";

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  return (
    <div ref={wrapperRef} className="relative flex w-full flex-col gap-2">
      <input type="hidden" name={name} value={value} readOnly />
      <div className="flex w-full">
        <button
          type="button"
          id={id}
          className={`relative w-full ${baseButtonClass} ${displayText ? "text-slate-700" : "text-slate-500"}`}
          onClick={() => setOpen((prev) => !prev)}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-label={ariaLabel ?? placeholder}
        >
          <span className="block truncate pr-2">
            {displayText || placeholder}
          </span>
          <ChevronDown open={open} />
        </button>
      </div>
      {open && (
        <ul
          role="listbox"
          className="absolute top-full left-0 z-20 mt-1 max-h-60 w-full overflow-auto rounded-sm border border-slate-200 bg-white py-1 shadow-lg"
          aria-label={ariaLabel ?? placeholder}
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={value === option.value}
              data-checked={value === option.value ? "true" : undefined}
              data-selected={value === option.value ? "true" : undefined}
              className="group flex cursor-pointer select-none items-center gap-2 rounded-sm py-2 pl-3 pr-8 text-slate-500 data-[checked]:bg-blue-100 data-[focus]:bg-slate-100 data-[selected]:bg-slate-100 data-[focus]:text-slate-500 data-[selected]:text-slate-500"
              onClick={() => {
                onChange(option.value);
                setOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
