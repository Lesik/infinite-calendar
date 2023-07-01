import { defineConfig, presetWind, transformerVariantGroup } from "unocss";

export default defineConfig({
  presets: [presetWind()],
  transformers: [transformerVariantGroup()],
});
