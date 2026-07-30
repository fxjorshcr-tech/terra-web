import type { MetadataRoute } from "next";
import { propiedades } from "@/data/propiedades";
import { locales } from "@/i18n/dictionaries";

const BASE = "https://www.orozrealstate.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const estaticas = ["", "/propiedades", "/vender", "/nosotros", "/contacto"];

  const paginas: MetadataRoute.Sitemap = [];
  for (const lang of locales) {
    for (const ruta of estaticas) {
      paginas.push({
        url: `${BASE}/${lang}${ruta}`,
        changeFrequency: ruta === "/propiedades" ? "daily" : "weekly",
        priority: ruta === "" ? 1 : 0.8,
      });
    }
    for (const p of propiedades) {
      paginas.push({
        url: `${BASE}/${lang}/propiedades/${p.id}`,
        changeFrequency: "weekly",
        priority: 0.7,
      });
    }
  }
  return paginas;
}
