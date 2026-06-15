import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Canonical site URL. Defaults to the live Vercel domain and can be overridden
// with a PUBLIC_SITE_URL environment variable once a custom domain is connected.
const SITE_URL =
  process.env.PUBLIC_SITE_URL ?? "https://free-mold-i-nspection.vercel.app";

export default defineConfig({
  site: SITE_URL,
  output: "static",
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    // Allow Astro's built-in image optimization for local assets.
    responsiveStyles: true,
  },
});
