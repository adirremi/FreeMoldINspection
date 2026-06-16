/**
 * Icon definitions shared across components.
 * Keeping the type and SVG path data here (a plain .ts module) keeps the
 * Icon component lightweight and avoids exporting types from .astro files.
 */
export type IconName =
  | "search"
  | "flask"
  | "wind"
  | "droplet"
  | "home"
  | "shield"
  | "phone"
  | "mail"
  | "map-pin"
  | "clock"
  | "check"
  | "menu"
  | "star"
  | "chat"
  | "swab";

export const ICON_PATHS: Record<IconName, string> = {
  search: "M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z",
  flask:
    "M9 3h6M10 3v6.5L4.8 18a2 2 0 0 0 1.7 3h11a2 2 0 0 0 1.7-3L14 9.5V3M7.5 14h9",
  wind: "M3 8h11a3 3 0 1 0-3-3M3 16h15a3 3 0 1 1-3 3M3 12h8",
  droplet: "M12 3s6 5.7 6 10.5A6 6 0 0 1 6 13.5C6 8.7 12 3 12 3Z",
  home: "M3 11.5 12 4l9 7.5M5 10v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-9M9.5 20v-5h5v5",
  shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6l8-3ZM9 12l2 2 4-4",
  phone:
    "M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.6A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.4 2.1L8.1 9.9a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.4c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z",
  mail: "M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2ZM2 6l10 7L22 6",
  "map-pin":
    "M12 21s-7-6.5-7-11a7 7 0 0 1 14 0c0 4.5-7 11-7 11ZM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",
  clock: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 7v5l3 2",
  check: "M5 12l5 5L20 7",
  menu: "M3 6h18M3 12h18M3 18h18",
  star: "M12 3l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 21l1.1-6.5L2.6 9.8l6.5-.9L12 3Z",
  chat: "M21 11.5a8.4 8.4 0 0 1-9 8.4 8.6 8.6 0 0 1-3.9-.9L3 20l1-4.1A8.4 8.4 0 0 1 3 11.5a8.5 8.5 0 0 1 9-8.4 8.4 8.4 0 0 1 9 8.4Z",
  swab: "M8 16l8-8M5 19a2.2 2.2 0 1 0 3.1-3.1A2.2 2.2 0 0 0 5 19ZM15.9 8.1a2.2 2.2 0 1 0 3.1-3.1 2.2 2.2 0 0 0-3.1 3.1Z",
};
