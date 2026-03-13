"use client";

import { useState } from "react";
import PropertyCard from "@/components/PropertyCard";
import { propiedades, provincias, tipos } from "@/data/propiedades";

export default function PropiedadesPage() {
  const [provincia, setProvincia] = useState("");
  const [tipo, setTipo] = useState("");

  const filtradas = propiedades.filter((p) => {
    if (provincia && p.provincia !== provincia) return false;
    if (tipo && p.tipo !== tipo) return false;
    return true;
  });

  return (
    <>
      {/* Header */}
      <section className="bg-secondary-700 py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Nuestras Propiedades
        </h1>
        <p className="text-gray-300 mt-3 max-w-xl mx-auto">
          Explore todas las opciones disponibles. Lotes, casas, fincas y más en
          todo Costa Rica.
        </p>
      </section>

      {/* Filters */}
      <section className="bg-gray-50 border-b py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="flex-1 w-full">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Provincia
              </label>
              <select
                value={provincia}
                onChange={(e) => setProvincia(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Todas las provincias</option>
                {provincias.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex-1 w-full">
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Tipo de propiedad
              </label>
              <select
                value={tipo}
                onChange={(e) => setTipo(e.target.value)}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
              >
                <option value="">Todos los tipos</option>
                {tipos.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
            {(provincia || tipo) && (
              <div className="flex-shrink-0 self-end">
                <button
                  onClick={() => {
                    setProvincia("");
                    setTipo("");
                  }}
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm underline py-3"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
          <p className="text-gray-500 text-sm mt-3">
            {filtradas.length} propiedad{filtradas.length !== 1 ? "es" : ""}{" "}
            encontrada{filtradas.length !== 1 ? "s" : ""}
          </p>
        </div>
      </section>

      {/* Listings */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          {filtradas.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtradas.map((prop) => (
                <PropertyCard key={prop.id} propiedad={prop} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-400 text-lg">
                No se encontraron propiedades con esos filtros.
              </p>
              <button
                onClick={() => {
                  setProvincia("");
                  setTipo("");
                }}
                className="mt-4 text-primary-600 hover:text-primary-700 font-medium underline"
              >
                Ver todas las propiedades
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
