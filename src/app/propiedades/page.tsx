import PropertyCard from "@/components/PropertyCard";
import { propiedades } from "@/data/propiedades";

export default function PropiedadesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-secondary-700 py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Nuestras Propiedades
        </h1>
        <p className="text-gray-300 mt-3 max-w-xl mx-auto">
          Explore todas las opciones disponibles. Lotes y casas en las mejores
          zonas de Costa Rica.
        </p>
      </section>

      {/* Listings */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
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
