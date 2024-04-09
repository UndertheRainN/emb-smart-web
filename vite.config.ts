import { defineConfig, type PluginOption } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";
import tsconfigPaths from "vite-tsconfig-paths";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    visualizer() as PluginOption,
    tsconfigPaths({
      loose: true,
    }),
  ],
  css: {
    devSourcemap: true,
  },
  server: {
    port: 3000,
  },
  build: {
    chunkSizeWarningLimit: 300,
    minify: true,
  },
  esbuild: {
    drop: ["console", "debugger"],
  },
});
