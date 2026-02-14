// ============================================================
// Remote image URLs — served via imgix / S3 CDN
// ============================================================

const IMGIX = "https://imgix.tractian.com";
const S3 = "https://tractian-webpage.s3.us-east-1.amazonaws.com";

// Shared imgix params for auto-format, compress, and quality
const IX = "auto=format,compress&cs=origin&fit=max&q=75";

// ---- Hero ----
export const heroImages = {
  desktop: `${S3}/website/pages/who-we-serve/plant-manager/en/plant-manager-header-image.png`,
  mobile: `${S3}/website/pages/who-we-serve/plant-manager/en/plant-manager-header-image-mobile.png`,
};

// ---- Why Choose (feature image) ----
export const whyChooseImages = {
  proveRoi: `${IMGIX}/website/pages/who-we-serve/plant-manager/en/prove-the-roi.png?${IX}&w=3840`,
};

// ---- Reports / Tabs ----
export const reportsImages = {
  reportsForScalability: `${IMGIX}/website/pages/who-we-serve/plant-manager/en/reports-for-scalability.png?${IX}&w=3840`,
};

// ---- Testimonials (avatars) ----
export const testimonialAvatars = {
  paul: `${IMGIX}/website/pages/who-we-serve/plant-manager/en/paul-v2.png?${IX}&w=256`,
  nicholas: `${IMGIX}/website/pages/who-we-serve/plant-manager/en/nicholas.png?${IX}&w=256`,
  fabiano: `${IMGIX}/website/pages/who-we-serve/plant-manager/en/fabiano.png?${IX}&w=256`,
  andy: `${IMGIX}/website/pages/who-we-serve/plant-manager/en/andy.png?${IX}&w=256`,
};

// ---- Company Logos (carousel) ----
export const companyLogos = [
  {
    name: "Georgia Aquarium",
    src: `${IMGIX}/website/components/company-logos/georgiaAquarium.png?${IX}&w=640`,
    width: 140,
    height: 40,
  },
  {
    name: "Air Liquide",
    src: `${IMGIX}/website/components/company-logos/airLiquide.png?${IX}&w=640`,
    width: 140,
    height: 40,
  },
  {
    name: "Scotts Miracle Gro",
    src: `${IMGIX}/website/pages/home/v3/general/carousel-logos/CustomerScottsMiracleGro.png?${IX}&w=384`,
    width: 140,
    height: 40,
  },
  {
    name: "Ingredion",
    src: `${IMGIX}/website/components/company-logos/ingredion.png?${IX}&w=640`,
    width: 140,
    height: 40,
  },
  {
    name: "Kraft Heinz",
    src: `${IMGIX}/website/components/company-logos/kraftHeinz.png?${IX}&w=640`,
    width: 140,
    height: 40,
  },
  {
    name: "Whirlpool",
    src: `${IMGIX}/website/components/company-logos/whirlpool.png?${IX}&w=640`,
    width: 140,
    height: 40,
  },
  {
    name: "CSX",
    src: `${IMGIX}/website/components/company-logos/csx.png?${IX}&w=640`,
    width: 140,
    height: 40,
  },
  {
    name: "Verizon",
    src: `${IMGIX}/website/components/company-logos/verizon.png?${IX}&w=640`,
    width: 140,
    height: 40,
  },
  {
    name: "Kubota",
    src: `${IMGIX}/website/components/company-logos/kubota.png?${IX}&w=640`,
    width: 140,
    height: 40,
  },
  {
    name: "Cummins",
    src: `${IMGIX}/website/components/company-logos/cummins.png?${IX}&w=640`,
    width: 140,
    height: 40,
  },
  {
    name: "Mauser",
    src: `${IMGIX}/website/components/company-logos/mauser.png?${IX}&w=640`,
    width: 140,
    height: 40,
  },
  {
    name: "Greif",
    src: `${IMGIX}/website/components/company-logos/greif.png?${IX}&w=640`,
    width: 140,
    height: 40,
  },
];

// ---- CTA Background ----
export const ctaImages = {
  moreThanMachines: `${S3}/website/pages/who-we-serve/maintenance-engineer/en/more-than-machines.png`,
};

// ---- Footer Badges ----
export const footerBadges = [
  {
    name: "Front Runners",
    src: `${IMGIX}/website/components/footer/v2/front-runners.png?${IX}&w=384`,
    width: 80,
    height: 80,
  },
  {
    name: "Forbes AI",
    src: `${IMGIX}/website/components/footer/v2/forbes-ai.png?${IX}&w=384`,
    width: 80,
    height: 80,
  },
  {
    name: "AICPA SOC",
    src: `${IMGIX}/website/components/footer/v2/aicpa-soc.png?${IX}&w=384`,
    width: 80,
    height: 80,
  },
  {
    name: "SAP Silver Partner",
    src: `${IMGIX}/website/components/footer/v2/sap-partner.png?${IX}&w=640`,
    width: 80,
    height: 80,
  },
  {
    name: "ISO 27001",
    src: `${IMGIX}/website/components/footer/v2/BadgeISO27001.png?${IX}&w=640`,
    width: 80,
    height: 80,
  },
  {
    name: "Oracle Cloud",
    src: `${IMGIX}/website/components/footer/v2/oracle-cloud.png?${IX}&w=384`,
    width: 80,
    height: 80,
  },
  {
    name: "ISO 9001",
    src: `${IMGIX}/website/components/footer/v2/iso-9001.png?${IX}&w=384`,
    width: 80,
    height: 80,
  },
  {
    name: "Best Meets Requirements",
    src: `${IMGIX}/website/components/footer/v2/asset-management-best-meets-requirements.png?${IX}&w=384`,
    width: 80,
    height: 80,
  },
];

// ---- SVG Icons (local, from public/images/svgs/) ----
export const icons = {
  tractianLogo: "/images/svgs/tractian-logo.svg",
  chevronDown: "/images/svgs/chevron-down.svg",
  globeLanguage: "/images/svgs/globe-language.svg",
  hamburgerMenu: "/images/svgs/hamburger-menu.svg",
  arrowRight: "/images/svgs/arrow-right.svg",
  checkmark: "/images/svgs/checkmark.svg",
  faqChevron: "/images/svgs/faq-chevron.svg",
  pillarReliability: "/images/svgs/pillar-reliability.svg",
  pillarMaintenance: "/images/svgs/pillar-maintenance.svg",
  pillarCompliance: "/images/svgs/pillar-compliance.svg",
  processStep: "/images/svgs/process-step.svg",
  g2Badge: "/images/svgs/g2-badge.svg",
  toggleSwitch: "/images/svgs/toggle-switch.svg",
  socialLinkedin: "/images/svgs/social-linkedin.svg",
  socialFacebook: "/images/svgs/social-facebook.svg",
  socialInstagram: "/images/svgs/social-instagram.svg",
  socialYoutube: "/images/svgs/social-youtube.svg",
  socialXTwitter: "/images/svgs/social-x-twitter.svg",
  phoneIcon: "/images/svgs/phone-icon.svg",
};
