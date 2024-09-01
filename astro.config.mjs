import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https:matiassolisschneeberger.github.io',
  base: 'swifties-eras-tour',
  integrations: [tailwind(), react()],
  output: "server",
  adapter: node({
    mode: "standalone"
  })
});