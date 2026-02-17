"use client";

import type { ReactNode } from "react";
import { useState, useCallback, useRef, useEffect } from "react";

export type AccordionItem = {
  id: string;
  title: string;
  content: string | ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

function ChevronRight({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      className={`shrink-0 transition-all ease-in-out ${
        isOpen ? "rotate-[270deg] text-blue-600" : "rotate-90 text-slate-400"
      }`}
      fill="none"
      height="14"
      viewBox="0 0 9 14"
      width="9"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M1 1.35364L7 7.35364L1 13.3536"
        stroke="currentColor"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function Accordion({ items }: AccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const contentRefs = useRef<Record<string, HTMLDivElement | null>>({});
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
    <div className="flex flex-col gap-y-6" role="list">
      {items.map((item) => {
        const isOpen = openId === item.id;
        const triggerId = `${item.id}-trigger`;
        const panelId = `${item.id}-panel`;
return (
    <div
          key={item.id}
          role="listitem"
          className={`rounded-xs border transition hover:border-blue-600 ${isOpen ? "border-blue-600" : "border-slate-300"}`}
        >
            <button
              id={triggerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => toggle(item.id)}
              className="group w-full bg-transparent p-4 text-left"
            >
              <div className="mb-0 flex w-full items-center justify-between gap-3 transition-all">
                <h3 className={`font-medium text-body-md transition-all group-hover:text-blue-600 lg:font-medium ${isOpen ? "text-blue-600" : "text-slate-700"}`}>
                  {item.title}
                </h3>
                <ChevronRight isOpen={isOpen} />
              </div>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className="overflow-hidden"
              style={{
                maxHeight: isOpen ? `${(heights[item.id] ?? 0) + 16}px` : "0px",
                transition: "max-height 0.2s ease-in-out",
              }}
            >
              <div
                ref={(el) => {
                  contentRefs.current[item.id] = el;
                }}
                className="px-4 pb-4 pt-0 text-left text-body-md text-slate-500"
              >
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
