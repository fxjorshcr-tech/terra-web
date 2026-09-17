import { marca } from "@/data/contacto";
import { imagenFija } from "@/lib/imagen";

// Logo oficial de Oroz Real Estate (dorado, fondo transparente).
// El PNG está recortado al borde del dibujo (sin aire), así que los altos son
// los que realmente ocupa el logo en pantalla.
// `className` reemplaza el alto predefinido cuando se necesita control fino
// (p. ej. el navbar que cambia de tamaño al hacer scroll).
export default function Logo({
  light = false,
  size = "md",
  className,
}: {
  light?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const heights = {
    sm: "h-12",
    md: "h-16",
    lg: "h-28 md:h-40",
  }[size];

  // El logo es ~1.45:1, así que el ancho que se pide al optimizador sale del
  // alto máximo con el que se dibuja en cada tamaño (md cubre también el
  // navbar, que llega a 96px de alto en escritorio).
  const anchos = { sm: 96, md: 160, lg: 256 }[size];

  return (
    <img
      {...imagenFija(marca.logo, { ancho: anchos, calidad: 80 })}
      alt={marca.nombre}
      className={`w-auto ${className ?? heights} ${light ? "drop-shadow-lg" : ""}`}
    />
  );
}
