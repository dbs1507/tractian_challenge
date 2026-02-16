"use client";

import type { DropdownId } from "./types";
import { SolutionsDropdown } from "./SolutionsDropdown";
import { WhoWeServeDropdown } from "./WhoWeServeDropdown";
import { ResourcesDropdown } from "./ResourcesDropdown";
import { CompanyDropdown } from "./CompanyDropdown";
import { PricingDropdown } from "./PricingDropdown";

export type { DropdownId } from "./types";

export type DropdownVariant = "desktop" | "mobile";

export function DropdownContent({
  id,
  onClose,
  variant = "desktop",
}: {
  id: NonNullable<DropdownId>;
  onClose: () => void;
  variant?: DropdownVariant;
}) {
  const common = { onClose, variant };
  switch (id) {
    case "solutions":
      return <SolutionsDropdown {...common} />;
    case "whoWeServe":
      return <WhoWeServeDropdown {...common} />;
    case "resources":
      return <ResourcesDropdown {...common} />;
    case "company":
      return <CompanyDropdown {...common} />;
    case "pricing":
      return <PricingDropdown {...common} />;
  }
}
