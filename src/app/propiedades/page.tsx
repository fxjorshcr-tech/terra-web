import PropertyCard from "@/components/PropertyCard";
import { propiedades } from "@/data/propiedades";

export default function PropiedadesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-secondary-700 py-20 px-4 text-center">
        <p className="text-accent-500 font-semibold text-xs uppercase tracking-[0.25em]">
          Portafolio
        </p>
        <h1 className="text-3xl md:text-4xl text-white mt-3">
          Nuestras Propiedades
        </h1>
        <div className="w-14 h-0.5 bg-accent-500 mx-auto mt-5" />
        <p className="text-gray-300 mt-5 max-w-xl mx-auto font-light">
          Explore todas las opciones disponibles. Lotes, casas, fincas y más en
          todo Costa Rica.
        </p>
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
