import { marca } from "@/data/contacto";

// Logo oficial de Oroz Real Estate (dorado, fondo transparente).
// El PNG tiene bastante aire alrededor, por eso los altos son generosos.
export default function Logo({
  light = false,
  size = "md",
}: {
  light?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const heights = {
    sm: "h-16",
    md: "h-24",
    lg: "h-48 md:h-64",
  }[size];

  return (
    <img
      src={marca.logo}
      alt={marca.nombre}
      className={`${heights} w-auto ${light ? "drop-shadow-lg" : ""}`}
    />
  );
}
