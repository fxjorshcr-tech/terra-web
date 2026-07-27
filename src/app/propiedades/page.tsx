import PropertyCard from "@/components/PropertyCard";
import { propiedades } from "@/data/propiedades";
import { marca } from "@/data/contacto";

export default function PropiedadesPage() {
  return (
    <>
      {/* Header */}
      <section className="relative pt-44 pb-24 md:pt-56 md:pb-28 px-4 text-center overflow-hidden">
        <img
          src={marca.heroImagen}
          alt="Propiedades en Costa Rica"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-800/80 via-secondary-800/60 to-secondary-800/80" />
        <div className="relative z-10">
          <p className="text-accent-500 font-semibold text-xs uppercase tracking-[0.25em]">
            Portafolio
          </p>
          <h1 className="text-3xl md:text-5xl text-white mt-3 drop-shadow-lg">
            Nuestras Propiedades
          </h1>
          <div className="w-14 h-0.5 bg-accent-500 mx-auto mt-5" />
          <p className="text-gray-200 mt-5 max-w-xl mx-auto font-light drop-shadow">
            Explore todas las opciones disponibles. Lotes, casas, fincas y más
            en todo Costa Rica.
          </p>
        </div>
      </section>

      {/* Listings */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-gray-500 text-sm mb-6">
            {propiedades.length} propiedad{propiedades.length !== 1 ? "es" : ""}{" "}
            disponible{propiedades.length !== 1 ? "s" : ""}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propiedades.map((prop) => (
              <PropertyCard key={prop.id} propiedad={prop} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
