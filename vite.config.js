import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  // base 的寫法:
  // base: '/Repository 的名稱/'
  base: "",
  plugins: [vue(), tailwindcss(), "@tailwindcss/postcss"],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
