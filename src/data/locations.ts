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

/** Services listed on every city page. */
export const CITY_SERVICES = [
  "Free Mold Inspection",
  "Air Sampling",
  "Surface Sampling",
  "Moisture Mapping",
  "Thermal Imaging",
  "Lab Testing",
  "Insurance Documentation",
] as const;
