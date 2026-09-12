import type { ImgHTMLAttributes } from "react";

/**
 * Todas las fotos del sitio viven en Supabase Storage, que las entrega en su
 * tamaño original y con `cache-control: max-age=3600`. Eso significaba que cada
 * visitante descargaba el archivo completo (el hero pesa 566 KB) y lo volvía a
 * descargar una hora después: el consumo de egress se disparaba.
 *
 * Estos helpers pasan la imagen por el optimizador de Next (`/_next/image`),
 * que la redimensiona al tamaño en que realmente se ve, la convierte a AVIF o
 * WebP y guarda el resultado en el CDN durante un año (ver `minimumCacheTTL` en
 * `next.config.js`). Supabase termina sirviendo cada foto una vez por año en
 * lugar de una vez por visita.
 *
 * OJO: la URL es la llave de la caché. Si reemplazás una foto en Supabase
 * manteniendo el mismo nombre, el sitio seguirá mostrando la vieja. Subila con
 * otro nombre o agregale `?v=2` al final de la URL.
 */

// Anchos que acepta el optimizador (deviceSizes + imageSizes por defecto).
const ANCHOS_PERMITIDOS = [
  16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048,
  3840,
];

function anchoValido(ancho: number): number {
  return (
    ANCHOS_PERMITIDOS.find((a) => a >= ancho) ??
    ANCHOS_PERMITIDOS[ANCHOS_PERMITIDOS.length - 1]
  );
}

function optimizada(src: string, ancho: number, calidad: number): string {
  const params = new URLSearchParams({
    url: src,
    w: String(anchoValido(ancho)),
    q: String(calidad),
  });
  return `/_next/image?${params.toString()}`;
}

type PropsImagen = Required<
  Pick<ImgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "decoding">
> &
  Pick<ImgHTMLAttributes<HTMLImageElement>, "sizes" | "loading">;

/**
 * Imagen de ancho fijo (avatares, logos). Sirve una versión 1x y otra 2x para
 * pantallas retina.
 */
export function imagenFija(
  src: string,
  { ancho, calidad = 72 }: { ancho: number; calidad?: number }
): PropsImagen {
  return {
    src: optimizada(src, ancho, calidad),
    srcSet: `${optimizada(src, ancho, calidad)} 1x, ${optimizada(src, ancho * 2, calidad)} 2x`,
    loading: "lazy",
    decoding: "async",
  };
}

/**
 * Imagen que se estira con el contenedor (heroes, tarjetas). `sizes` le dice al
 * navegador qué ancho ocupará para que elija la versión más liviana posible.
 */
export function imagenFluida(
  src: string,
  {
    sizes,
    anchos = [640, 1080, 1920],
    calidad = 68,
    prioridad = false,
  }: {
    sizes: string;
    anchos?: number[];
    calidad?: number;
    prioridad?: boolean;
  }
): PropsImagen {
  return {
    src: optimizada(src, anchos[anchos.length - 1], calidad),
    srcSet: anchos
      .map((a) => `${optimizada(src, a, calidad)} ${anchoValido(a)}w`)
      .join(", "),
    sizes,
    loading: prioridad ? "eager" : "lazy",
    decoding: "async",
  };
}
