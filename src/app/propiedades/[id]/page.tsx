import Link from "next/link";
import { notFound } from "next/navigation";
import { propiedades } from "@/data/propiedades";
import PropertyCard from "@/components/PropertyCard";

export function generateStaticParams() {
  return propiedades.map((p) => ({ id: String(p.id) }));
}

export default function PropiedadDetalle({
  params,
}: {
  params: { id: string };
}) {
  const propiedad = propiedades.find((p) => p.id === Number(params.id));

  if (!propiedad) {
    notFound();
  }

  // Related properties: same type or province, exclude current
  const relacionadas = propiedades
    .filter(
      (p) =>
        p.id !== propiedad.id &&
        (p.tipo === propiedad.tipo || p.provincia === propiedad.provincia)
    )
    .slice(0, 3);

  const amenidadItems = [
    {
      key: "agua" as const,
      label: "Agua potable",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m-8-9H3m18 0h-1M5.636 5.636l.707.707M17.657 17.657l.707.707M5.636 18.364l.707-.707M17.657 6.343l.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
        </svg>
      ),
      color: "text-blue-500",
      bg: "bg-blue-50",
    },
    {
      key: "luz" as const,
      label: "Electricidad",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "text-yellow-500",
      bg: "bg-yellow-50",
    },
    {
      key: "internet" as const,
      label: "Internet",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0" />
        </svg>
      ),
      color: "text-purple-500",
      bg: "bg-purple-50",
    },
    {
      key: "calle" as const,
      label: "Calle pavimentada",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
        </svg>
      ),
      color: "text-gray-500",
      bg: "bg-gray-50",
    },
    {
      key: "escritura" as const,
      label: "Escritura al día",
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "text-green-500",
      bg: "bg-green-50",
    },
  ];

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary-600">Inicio</Link>
          <span>/</span>
          <Link href="/propiedades" className="hover:text-primary-600">Propiedades</Link>
          <span>/</span>
          <span className="text-gray-800">{propiedad.titulo}</span>
        </div>
      </div>

      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="h-72 md:h-96 rounded-xl overflow-hidden">
              <img
                src={propiedad.imagen}
                alt={propiedad.titulo}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-32 md:h-44 rounded-xl overflow-hidden">
                  <img
                    src={propiedad.imagen}
                    alt={`${propiedad.titulo} - Foto ${i}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main info */}
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full">
                  {propiedad.tipo}
                </span>
                {propiedad.financiamiento && (
                  <span className="inline-block bg-accent-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    Se acepta financiamiento
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-secondary-700 mt-3">
                {propiedad.titulo}
              </h1>
              <p className="text-gray-500 mt-1 flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {propiedad.ubicacion}
              </p>

              <p className="text-primary-700 font-bold text-3xl mt-4">
                {propiedad.precio}
              </p>

              {/* Details */}
              <div className="flex flex-wrap gap-6 mt-6 py-6 border-t border-b border-gray-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary-700">{propiedad.area}</p>
                  <p className="text-gray-500 text-sm">Área</p>
                </div>
                {propiedad.habitaciones && (
                  <div className="text-center">
                    <p className="text-2xl font-bold text-secondary-700">{propiedad.habitaciones}</p>
                    <p className="text-gray-500 text-sm">Habitaciones</p>
                  </div>
                )}
                {propiedad.banos && (
                  <div className="text-center">
                    <p className="text-2xl font-bold text-secondary-700">{propiedad.banos}</p>
                    <p className="text-gray-500 text-sm">Baños</p>
                  </div>
                )}
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary-700">{propiedad.provincia}</p>
                  <p className="text-gray-500 text-sm">Provincia</p>
                </div>
              </div>

              {/* Amenidades */}
              <div className="mt-6">
                <h2 className="text-xl font-bold text-secondary-700 mb-4">
                  Amenidades y Servicios
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {amenidadItems.map((item) => (
                    <div
                      key={item.key}
                      className={`flex items-center gap-3 p-3 rounded-lg ${
                        propiedad.amenidades[item.key] ? item.bg : "bg-gray-50"
                      }`}
                    >
                      <span
                        className={
                          propiedad.amenidades[item.key]
                            ? item.color
                            : "text-gray-300"
                        }
                      >
                        {item.icon}
                      </span>
                      <span
                        className={`text-sm font-medium ${
                          propiedad.amenidades[item.key]
                            ? "text-gray-700"
                            : "text-gray-400 line-through"
                        }`}
                      >
                        {item.label}
                      </span>
                      {propiedad.amenidades[item.key] && (
                        <svg className="w-4 h-4 text-green-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                  ))}
                  {/* Financiamiento */}
                  <div
                    className={`flex items-center gap-3 p-3 rounded-lg ${
                      propiedad.financiamiento ? "bg-orange-50" : "bg-gray-50"
                    }`}
                  >
                    <span
                      className={
                        propiedad.financiamiento
                          ? "text-accent-500"
                          : "text-gray-300"
                      }
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    <span
                      className={`text-sm font-medium ${
                        propiedad.financiamiento
                          ? "text-gray-700"
                          : "text-gray-400 line-through"
                      }`}
                    >
                      Financiamiento
                    </span>
                    {propiedad.financiamiento && (
                      <svg className="w-4 h-4 text-green-500 ml-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mt-8">
                <h2 className="text-xl font-bold text-secondary-700 mb-3">
                  Descripción
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {propiedad.descripcion}
                </p>
              </div>
            </div>

            {/* Sidebar - Agent card */}
            <div className="lg:col-span-1">
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-28">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                    <img
                      src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Gabriel%20Broker.jpeg"
                      alt="Gabriel Orozco"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-bold text-lg text-secondary-700">
                    Lic. Gabriel Orozco
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Asesor Inmobiliario / Abogado
                  </p>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href="https://wa.me/50600000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Escribir por WhatsApp
                  </a>
                  <Link
                    href="/contacto"
                    className="w-full block text-center border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    Enviar Consulta
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Properties */}
      {relacionadas.length > 0 && (
        <section className="bg-gray-50 py-14 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl font-bold text-secondary-700 mb-6 text-center">
              Otras Propiedades que le Pueden Interesar
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relacionadas.map((prop) => (
                <PropertyCard key={prop.id} propiedad={prop} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/propiedades"
                className="inline-block border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Ver Todas las Propiedades
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
