import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

// Update this to the production domain before deploying to Vercel.
const SITE_URL = "https://www.freemoldinspection.com";

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
