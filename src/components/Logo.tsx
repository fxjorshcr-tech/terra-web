import { marca } from "@/data/contacto";

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

  return (
    <img
      src={marca.logo}
      alt={marca.nombre}
      className={`w-auto ${className ?? heights} ${light ? "drop-shadow-lg" : ""}`}
    />
  );
}
