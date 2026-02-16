"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { DemoModal } from "@/components/Modal/DemoModal";
type DemoModalContextValue = {
  openDemoModal: () => void;
};

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const openDemoModal = useCallback(() => setIsOpen(true), []);

  return (
    <DemoModalContext.Provider value={{ openDemoModal }}>
      {children}
      {isOpen && <DemoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
    </DemoModalContext.Provider>
  );
}

export function useDemoModal(): DemoModalContextValue {
  const ctx = useContext(DemoModalContext);
  if (!ctx) {
    throw new Error("useDemoModal must be used within DemoModalProvider");
  }
  return ctx;
}
