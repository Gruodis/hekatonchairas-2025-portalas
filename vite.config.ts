import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon/favicon.ico', 'favicon/apple-touch-icon.png', 'favicon/favicon.svg', 'images/*'],
      manifest: {
        name: "Duomenų konferencija - Hekatoncheiras",
        short_name: "Duomenų konferencija",
        description: "Jau tradicija tapusioje konferencijoje kviečiame susipažinti su Valstybės duomenų ežero ir moderniausių analitinių įrankių galimybėmis, leidžiančiomis efektyviai naudoti įvairius valstybės duomenis.",
        theme_color: "#1c2228",
        icons: [
          {
            src: "/favicon/web-app-manifest-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/favicon/web-app-manifest-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
