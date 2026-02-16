"use client";

import { useState, useCallback, useRef, useEffect } from "react";

export type AccordionItem = {
  id: string;
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

function ChevronRight({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`shrink-0 transition-all ease-in-out ${
        isOpen ? "rotate-[270deg]" : "rotate-90"
      }`}
      fill="none"
      height="14"
      viewBox="0 0 9 14"
      width="9"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1 1.35364L7 7.35364L1 13.3536"
        stroke={isOpen ? "#2563EB" : "#94A3B8"}
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const contentRefs = useRef<Record<string, HTMLParagraphElement | null>>({});
  const [heights, setHeights] = useState<Record<string, number>>({});

  const toggle = useCallback((id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  }, []);

  useEffect(() => {
    const newHeights: Record<string, number> = {};
    for (const [id, el] of Object.entries(contentRefs.current)) {
      if (el) {
        newHeights[id] = el.scrollHeight;
      }
    }
    setHeights(newHeights);
  }, [items]);

  if (items.length === 0) return null;

  return (
    <div className="flex flex-col gap-y-6">
      {items.map((item) => {
        const isOpen = openId === item.id;
        return (
          <button
            key={item.id}
            type="button"
            onClick={() => toggle(item.id)}
            className="group w-full rounded-xs border border-slate-300 bg-transparent p-4 transition hover:border-blue-600"
          >
            <div className="mb-0 flex w-full items-center justify-between gap-3 transition-all">
              <h3 className={`text-left text-[14px] font-medium leading-[22px] transition-all group-hover:text-blue-600 group-hover:brightness-110 lg:text-[16px] lg:font-semibold lg:leading-[24px] ${isOpen ? "text-blue-600" : "text-slate-700"}`}>
                {item.title}
              </h3>
              <figure>
                <ChevronRight isOpen={isOpen} />
              </figure>
            </div>
            <div
              className="overflow-hidden"
              style={{
                maxHeight: isOpen ? `${(heights[item.id] ?? 0) + 16}px` : "0px",
                transition: "max-height 0.2s ease-in-out",
              }}
            >
              <p
                ref={(el) => {
                  contentRefs.current[item.id] = el;
                }}
                className="pt-3 text-left text-body-md text-slate-500"
              >
                {item.content}
              </p>
            </div>
          </button>
        );
      })}
    </div>
  );
}
