/**
 * Service-area cities and the data used to generate dedicated location pages.
 * Slugs are derived from the city name so adding a city is a one-line change.
 */
export interface City {
  readonly name: string;
  readonly slug: string;
}

const CITY_NAMES = [
  "Miami",
  "Fort Lauderdale",
  "Hollywood",
  "Pembroke Pines",
  "Boca Raton",
  "Delray Beach",
  "West Palm Beach",
  "Jupiter",
  "Orlando",
  "Kissimmee",
  "Tampa",
  "St. Petersburg",
  "Clearwater",
  "Naples",
  "Fort Myers",
  "Cape Coral",
  "Jacksonville",
  "St. Augustine",
  "Melbourne",
  "Tallahassee",
] as const;

export function citySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "-");
}

export const CITIES: readonly City[] = CITY_NAMES.map((name) => ({
  name,
  slug: citySlug(name),
}));

export interface CityService {
  readonly name: string;
  /** Optional link to the related service page (internal linking). */
  readonly href?: string;
}

/** Services listed on every city page, linked to their service pages. */
export const CITY_SERVICES: readonly CityService[] = [
  { name: "Free Mold Inspection", href: "/services/mold-inspection/" },
  { name: "Air Sampling", href: "/services/air-quality-testing/" },
  { name: "Surface Sampling", href: "/services/swab-mold-test/" },
  { name: "Moisture Mapping", href: "/services/water-damage-assessment/" },
  { name: "Thermal Imaging", href: "/services/mold-inspection/" },
  { name: "Lab Testing", href: "/services/mold-testing/" },
  { name: "Insurance Documentation", href: "/contact/" },
];
