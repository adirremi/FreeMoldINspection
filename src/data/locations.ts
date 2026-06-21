/**
 * Service-area cities and the data used to generate dedicated location pages.
 * Slugs are derived from the city name so adding a city is a one-line change.
 *
 * The geographic fields (county, region, nearby, landmarks, note) make each
 * location page genuinely city-specific for local SEO — they are general,
 * factual descriptors only and contain no pricing or outcome claims.
 */
export interface City {
  readonly name: string;
  readonly slug: string;
  readonly county: string;
  readonly region: string;
  readonly nearby: readonly string[];
  readonly landmarks: readonly string[];
  readonly note: string;
}

type CitySeed = Omit<City, "slug">;

const CITY_SEEDS: readonly CitySeed[] = [
  {
    name: "Miami",
    county: "Miami-Dade",
    region: "South Florida",
    nearby: ["Miami Beach", "Coral Gables", "Hialeah", "Doral", "Brickell"],
    landmarks: ["Wynwood", "Little Havana", "the Miami River"],
    note: "Coastal humidity, frequent rain, and a mix of historic and high-rise buildings make moisture intrusion a common concern across Miami.",
  },
  {
    name: "Fort Lauderdale",
    county: "Broward",
    region: "South Florida",
    nearby: ["Plantation", "Sunrise", "Davie", "Oakland Park", "Wilton Manors"],
    landmarks: ["Las Olas Boulevard", "the Riverwalk", "Fort Lauderdale Beach"],
    note: "With hundreds of miles of canals and waterfront homes, Fort Lauderdale properties often face elevated humidity and water-intrusion risks.",
  },
  {
    name: "Hollywood",
    county: "Broward",
    region: "South Florida",
    nearby: ["Hallandale Beach", "Dania Beach", "Pembroke Pines", "Davie"],
    landmarks: ["the Hollywood Beach Broadwalk", "Young Circle", "ArtsPark"],
    note: "Older coastal homes near the beach and the Intracoastal can trap moisture, a common driver of mold growth in Hollywood.",
  },
  {
    name: "Pembroke Pines",
    county: "Broward",
    region: "South Florida",
    nearby: ["Miramar", "Cooper City", "Davie", "Hollywood"],
    landmarks: ["C.B. Smith Park", "Pembroke Lakes Mall", "Silver Lakes"],
    note: "Pembroke Pines' many lakeside and master-planned communities sit in a humid environment where hidden moisture can lead to mold.",
  },
  {
    name: "Boca Raton",
    county: "Palm Beach",
    region: "South Florida",
    nearby: ["Delray Beach", "Deerfield Beach", "Boynton Beach", "Highland Beach"],
    landmarks: ["Mizner Park", "Florida Atlantic University", "Red Reef Park"],
    note: "Boca Raton's mix of coastal condos and single-family homes is exposed to salt air and humidity that can encourage mold.",
  },
  {
    name: "Delray Beach",
    county: "Palm Beach",
    region: "South Florida",
    nearby: ["Boca Raton", "Boynton Beach", "Lake Worth Beach"],
    landmarks: ["Atlantic Avenue", "Pineapple Grove", "the municipal beach"],
    note: "From historic downtown homes to beachfront properties, Delray Beach buildings frequently contend with high humidity and water intrusion.",
  },
  {
    name: "West Palm Beach",
    county: "Palm Beach",
    region: "South Florida",
    nearby: ["Palm Beach", "Lake Worth Beach", "Riviera Beach", "Wellington"],
    landmarks: ["Clematis Street", "Rosemary Square", "the waterfront"],
    note: "West Palm Beach's older neighborhoods and waterfront location make moisture management important for preventing mold.",
  },
  {
    name: "Jupiter",
    county: "Palm Beach",
    region: "South Florida",
    nearby: ["Palm Beach Gardens", "Tequesta", "Juno Beach"],
    landmarks: ["the Jupiter Inlet Lighthouse", "Jupiter Beach", "the Riverwalk"],
    note: "Coastal living along the Loxahatchee River and ocean exposes Jupiter homes to humidity and storm-driven water intrusion.",
  },
  {
    name: "Orlando",
    county: "Orange",
    region: "Central Florida",
    nearby: ["Winter Park", "Maitland", "Altamonte Springs", "Kissimmee"],
    landmarks: ["Lake Eola", "downtown Orlando", "the Milk District"],
    note: "Central Florida's heat, afternoon thunderstorms, and heavy air-conditioning use create humidity swings that can lead to mold in Orlando homes.",
  },
  {
    name: "Kissimmee",
    county: "Osceola",
    region: "Central Florida",
    nearby: ["Orlando", "St. Cloud", "Celebration", "Poinciana"],
    landmarks: ["Old Town", "Lake Tohopekaliga", "the historic downtown"],
    note: "With many vacation homes and rentals near the lakes, Kissimmee properties can develop mold when humidity and ventilation go unmanaged.",
  },
  {
    name: "Tampa",
    county: "Hillsborough",
    region: "the Tampa Bay area",
    nearby: ["St. Petersburg", "Brandon", "Temple Terrace", "Clearwater"],
    landmarks: ["Ybor City", "Hyde Park", "the Tampa Riverwalk"],
    note: "Tampa's bayfront humidity and frequent summer storms make moisture control a key factor in preventing mold.",
  },
  {
    name: "St. Petersburg",
    county: "Pinellas",
    region: "the Tampa Bay area",
    nearby: ["Tampa", "Clearwater", "Pinellas Park", "Gulfport"],
    landmarks: ["the St. Pete Pier", "downtown", "the Old Northeast"],
    note: "Surrounded by water on a peninsula, St. Petersburg homes face steady humidity that can encourage hidden mold growth.",
  },
  {
    name: "Clearwater",
    county: "Pinellas",
    region: "the Tampa Bay area",
    nearby: ["St. Petersburg", "Largo", "Dunedin", "Tampa"],
    landmarks: ["Clearwater Beach", "Coachman Park", "Island Estates"],
    note: "Beachfront and Intracoastal properties in Clearwater are regularly exposed to salt air and humidity that can fuel mold.",
  },
  {
    name: "Naples",
    county: "Collier",
    region: "Southwest Florida",
    nearby: ["Bonita Springs", "Marco Island", "Estero"],
    landmarks: ["Fifth Avenue South", "the Naples Pier", "Old Naples"],
    note: "Naples' Gulf-coast humidity and seasonal rains create conditions where mold can take hold in homes and condos.",
  },
  {
    name: "Fort Myers",
    county: "Lee",
    region: "Southwest Florida",
    nearby: ["Cape Coral", "Estero", "Lehigh Acres", "Bonita Springs"],
    landmarks: ["the River District", "the Edison & Ford Winter Estates", "McGregor Boulevard"],
    note: "Riverfront living and a humid Gulf-coast climate make moisture intrusion a frequent concern for Fort Myers properties.",
  },
  {
    name: "Cape Coral",
    county: "Lee",
    region: "Southwest Florida",
    nearby: ["Fort Myers", "North Fort Myers", "Pine Island"],
    landmarks: ["Cape Harbour", "the Four Mile Cove Ecological Preserve", "Tarpon Point"],
    note: "Built around hundreds of miles of canals, Cape Coral homes sit in a high-humidity environment where mold can develop quickly.",
  },
  {
    name: "Jacksonville",
    county: "Duval",
    region: "Northeast Florida",
    nearby: ["Orange Park", "Atlantic Beach", "Neptune Beach", "Jacksonville Beach"],
    landmarks: ["Riverside", "San Marco", "the St. Johns River"],
    note: "Spanning the St. Johns River and the coast, Jacksonville's humidity and storm activity make moisture management important for mold prevention.",
  },
  {
    name: "St. Augustine",
    county: "St. Johns",
    region: "Northeast Florida",
    nearby: ["St. Augustine Beach", "Ponte Vedra", "Vilano Beach"],
    landmarks: ["St. George Street", "the Castillo de San Marcos", "the historic district"],
    note: "Historic and coastal architecture in St. Augustine, combined with humidity and salt air, can contribute to moisture problems and mold.",
  },
  {
    name: "Melbourne",
    county: "Brevard",
    region: "the Space Coast",
    nearby: ["Palm Bay", "West Melbourne", "Indialantic", "Satellite Beach"],
    landmarks: ["downtown Melbourne", "the Eau Gallie Arts District", "the Indian River Lagoon"],
    note: "Along the Indian River Lagoon and Atlantic coast, Melbourne homes experience humidity and storm exposure that can lead to mold.",
  },
  {
    name: "Tallahassee",
    county: "Leon",
    region: "North Florida",
    nearby: ["Crawfordville", "Quincy", "Midway"],
    landmarks: ["Florida State University", "Cascades Park", "the State Capitol"],
    note: "Tallahassee's humid, tree-shaded neighborhoods and heavy summer rains create conditions where mold can develop indoors.",
  },
];

export function citySlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/\./g, "")
    .replace(/\s+/g, "-");
}

export const CITIES: readonly City[] = CITY_SEEDS.map((seed) => ({
  ...seed,
  slug: citySlug(seed.name),
}));

export interface CityService {
  readonly name: string;
  /** Optional link to the related service page (internal linking). */
  readonly href?: string;
}

export interface Review {
  readonly name: string;
  /** City/area the reviewer is from, e.g. "Fort Lauderdale, FL". */
  readonly location: string;
  readonly quote: string;
}

/**
 * Customer reviews shown on location pages.
 *
 * IMPORTANT: Leave this empty until you have REAL, verified customer reviews.
 * Publishing invented testimonials can violate FTC rules and consumer-protection
 * law. Paste genuine reviews here (ideally matching your Google profile) and the
 * testimonials section will appear automatically. Example shape:
 *
 *   { name: "Jane D.", location: "Fort Lauderdale, FL", quote: "..." }
 */
export const REVIEWS: readonly Review[] = [];

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
