import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import unoCss from "unocss/vite";

export default defineConfig({
  plugins: [viteReact(), unoCss()],
});
