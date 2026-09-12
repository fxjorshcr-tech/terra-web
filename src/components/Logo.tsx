import { marca } from "@/data/contacto";
import { imagenFija } from "@/lib/imagen";

// Logo oficial de Oroz Real Estate (dorado, fondo transparente).
// El PNG tiene bastante aire alrededor, por eso los altos son generosos.
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
    sm: "h-20",
    md: "h-24",
    lg: "h-40 md:h-64",
  }[size];

  // El logo es 3:2, así que el ancho que se pide al optimizador sale del alto
  // máximo con el que se dibuja en cada tamaño.
  const anchos = { sm: 128, md: 160, lg: 384 }[size];

  return (
    <img
      {...imagenFija(marca.logo, { ancho: anchos, calidad: 80 })}
      alt={marca.nombre}
      className={`w-auto ${className ?? heights} ${light ? "drop-shadow-lg" : ""}`}
    />
  );
}
