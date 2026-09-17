import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite is used here instead of Webpack/CRA specifically because its dev
// server and build are much lighter on CPU/RAM — friendlier to low-spec
// machines than the alternatives.
export default defineConfig({
  plugins: [react()],
});