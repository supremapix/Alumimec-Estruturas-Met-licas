import path from "path";
import { readFileSync } from "node:fs";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, ".", "");
  return {
    server: {
      port: 3000,
      host: "0.0.0.0",
    },
    plugins: [
      react(),
      {
        name: "prerender-clean-url-preview",
        configurePreviewServer(server) {
          const routes = new Set<string>(
            JSON.parse(
              readFileSync(
                path.resolve(__dirname, ".prerender-routes.json"),
                "utf8",
              ),
            ).map((route: { path: string }) => route.path),
          );
          server.middlewares.use((req, _res, next) => {
            const [pathname, query] = (req.url || "/").split("?");
            const clean = pathname.replace(/\/$/, "") || "/";
            if (routes.has(clean))
              req.url =
                (clean === "/" ? "" : clean) +
                "/index.html" +
                (query ? "?" + query : "");
            next();
          });
        },
      },
    ],
    define: {
      "process.env.API_KEY": JSON.stringify(env.GEMINI_API_KEY),
      "process.env.GEMINI_API_KEY": JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "."),
      },
    },
  };
});
