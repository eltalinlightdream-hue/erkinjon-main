// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import type { Plugin } from "vite";
import { buildSitemapXml } from "./src/lib/sitemap";

// Regenerates public/sitemap.xml on every build so new articles are listed
// automatically. The output is deterministic, so it only changes in git when
// the page list does.
function sitemapPlugin(): Plugin {
  return {
    name: "generate-sitemap",
    apply: "build",
    buildStart() {
      const target = fileURLToPath(new URL("./public/sitemap.xml", import.meta.url));
      writeFileSync(target, buildSitemapXml());
    },
  };
}

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// @cloudflare/vite-plugin builds from this — wrangler.jsonc main alone is insufficient.
export default defineConfig({
  nitro: { preset: "vercel" },
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    plugins: [sitemapPlugin()],
  },
});
