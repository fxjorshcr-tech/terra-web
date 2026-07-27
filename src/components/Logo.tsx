// Logotipo tipográfico provisional de Oroz Real State (mientras se diseña el definitivo).
export default function Logo({
  light = false,
  size = "md",
}: {
  light?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = {
    sm: { nombre: "text-2xl", tag: "text-[0.55rem] tracking-[0.42em]" },
    md: { nombre: "text-3xl", tag: "text-[0.65rem] tracking-[0.45em]" },
    lg: {
      nombre: "text-6xl md:text-8xl",
      tag: "text-sm md:text-lg tracking-[0.55em]",
    },
  }[size];

  return (
    <span className="inline-flex flex-col items-center leading-none select-none">
      <span
        className={`font-display font-bold ${sizes.nombre} ${
          light ? "text-white" : "text-secondary-700"
        }`}
      >
        OROZ
      </span>
      <span
        className={`uppercase font-medium mt-1.5 ${sizes.tag} ${
          light ? "text-accent-500" : "text-accent-600"
        }`}
      >
        Real&nbsp;State
      </span>
    </span>
  );
}
