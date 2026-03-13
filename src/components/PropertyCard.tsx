import Link from "next/link";
import { Propiedad } from "@/data/propiedades";

export default function PropertyCard({ propiedad }: { propiedad: Propiedad }) {
  return (
    <Link href={`/propiedades/${propiedad.id}`} className="group block">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
        <div className="relative h-52 overflow-hidden">
          <img
            src={propiedad.imagen}
            alt={propiedad.titulo}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3 flex gap-2">
            <span className="bg-primary-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {propiedad.tipo}
            </span>
            {propiedad.financiamiento && (
              <span className="bg-accent-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Financiamiento
              </span>
            )}
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-bold text-lg text-secondary-700 group-hover:text-primary-600 transition-colors">
            {propiedad.titulo}
          </h3>
          <p className="text-gray-500 text-sm mt-1 flex items-center gap-1">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {propiedad.ubicacion}
          </p>
          <div className="flex items-center gap-4 mt-3 text-gray-500 text-sm">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              {propiedad.area}
            </span>
            {propiedad.habitaciones && (
              <span>{propiedad.habitaciones} hab</span>
            )}
            {propiedad.banos && (
              <span>{propiedad.banos} baño{propiedad.banos > 1 ? "s" : ""}</span>
            )}
          </div>

          {/* Amenidades mini */}
          <div className="flex flex-wrap gap-2 mt-3">
            {propiedad.amenidades.agua && (
              <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded">Agua</span>
            )}
            {propiedad.amenidades.luz && (
              <span className="text-xs bg-yellow-50 text-yellow-600 px-2 py-0.5 rounded">Luz</span>
            )}
            {propiedad.amenidades.internet && (
              <span className="text-xs bg-purple-50 text-purple-600 px-2 py-0.5 rounded">Internet</span>
            )}
            {propiedad.amenidades.escritura && (
              <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded">Escritura</span>
            )}
          </div>

          <p className="mt-3 text-primary-700 font-bold text-xl">
            {propiedad.precio}
          </p>
        </div>
      </div>
    </Link>
  );
}
