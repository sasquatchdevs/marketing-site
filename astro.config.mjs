import { defineConfig } from "astro/config";
import path from "node:path";
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      noExternal: ["bootstrap"],
    },
  },
});
