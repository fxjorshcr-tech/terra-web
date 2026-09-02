import type { MetadataRoute } from "next";
import { marca } from "@/data/contacto";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: marca.nombre,
    short_name: "Oroz",
    description:
      "Propiedades en Costa Rica: venta, compra y asesoría inmobiliaria con respaldo legal.",
    start_url: "/es",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#1f2a35",
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png" },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
