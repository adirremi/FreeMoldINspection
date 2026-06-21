/**
 * Single source of truth for global business information.
 * Keeping this here avoids duplication (DRY) across pages, schema, and meta tags.
 */

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export interface SiteConfig {
  readonly name: string;
  readonly legalName: string;
  readonly tagline: string;
  readonly description: string;
  readonly url: string;
  readonly phone: string;
  readonly phoneHref: string;
  readonly smsHref: string;
  readonly email: string;
  /** Primary Google Business Profile category. */
  readonly gmbCategory: string;
  /**
   * Link to the Google Business Profile. Replace with your real GBP share link
   * (e.g. https://g.page/your-profile) when available. Until then this points to
   * a valid Google Maps search for the business so the link never 404s.
   */
  readonly gmbUrl: string;
  /**
   * Web3Forms access key for the contact form (https://web3forms.com).
   * Create a free key with the address below and paste it here.
   */
  readonly web3formsKey: string;
  readonly address: {
    readonly street: string;
    readonly city: string;
    readonly state: string;
    readonly zip: string;
    readonly country: string;
  };
  readonly geo: {
    readonly latitude: number;
    readonly longitude: number;
  };
  readonly hours: readonly string[];
  readonly areasServed: readonly string[];
  readonly nav: readonly NavItem[];
  readonly social: readonly NavItem[];
}

export const SITE: SiteConfig = {
  name: "Free Mold Inspection",
  legalName: "Free Mold Inspection",
  tagline: "Certified Mold Inspection & Testing in South Florida",
  description:
    "Certified mold inspection, testing & air quality assessments in Pembroke Park & Broward County, FL. Fast, honest, and thorough reporting.",
  url:
    import.meta.env.PUBLIC_SITE_URL ?? "https://free-mold-i-nspection.vercel.app",
  phone: "(888) 800-4980",
  phoneHref: "tel:+18888004980",
  smsHref: "sms:+18888004980",
  email: "Freemoldinspection1@gmail.com",
  gmbCategory: "Mold Inspection Service",
  gmbUrl:
    "https://www.google.com/maps/search/?api=1&query=Free+Mold+Inspection+Pembroke+Park+FL",
  web3formsKey: "YOUR_WEB3FORMS_ACCESS_KEY",
  address: {
    street: "4077 SW 40th Ave",
    city: "Pembroke Park",
    state: "FL",
    zip: "33023",
    country: "US",
  },
  geo: {
    latitude: 25.9879,
    longitude: -80.1773,
  },
  hours: [
    "Sunday – Thursday: 8:00 AM – 8:00 PM",
    "Friday: 8:00 AM – 3:00 PM",
    "Saturday: Closed",
  ],
  areasServed: [
    "Pembroke Park",
    "Hollywood",
    "Hallandale Beach",
    "Miramar",
    "Pembroke Pines",
    "Fort Lauderdale",
    "Broward County",
    "Miami-Dade County",
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Service Areas", href: "/locations/" },
    { label: "About", href: "/about/" },
    { label: "Contact", href: "/contact/" },
  ],
  // Add real, verified profile URLs here when available (used for SEO sameAs).
  social: [],
} as const;

/** Convenience helper: a single formatted address line. */
export function formattedAddress(): string {
  const { street, city, state, zip } = SITE.address;
  return `${street}, ${city}, ${state} ${zip}`;
}
