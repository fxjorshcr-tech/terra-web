import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { propiedades } from "@/data/propiedades";

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

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-50 py-4 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-primary-600">
            Inicio
          </Link>
          <span>/</span>
          <Link href="/propiedades" className="hover:text-primary-600">
            Propiedades
          </Link>
          <span>/</span>
          <span className="text-gray-800">{propiedad.titulo}</span>
        </div>
      </div>

      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="relative h-72 md:h-96 rounded-xl overflow-hidden">
              <Image
                src={propiedad.imagen}
                alt={propiedad.titulo}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="relative h-32 md:h-44 rounded-xl overflow-hidden"
                >
                  <Image
                    src={propiedad.imagen}
                    alt={`${propiedad.titulo} - Foto ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main info */}
            <div className="lg:col-span-2">
              <span className="inline-block bg-primary-100 text-primary-700 text-sm font-semibold px-3 py-1 rounded-full">
                {propiedad.tipo}
              </span>
              <h1 className="text-3xl font-bold text-secondary-700 mt-3">
                {propiedad.titulo}
              </h1>
              <p className="text-gray-500 mt-1 flex items-center gap-1">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {propiedad.ubicacion}
              </p>

              <p className="text-primary-700 font-bold text-3xl mt-4">
                {propiedad.precio}
              </p>

              {/* Details */}
              <div className="flex flex-wrap gap-6 mt-6 py-6 border-t border-b border-gray-200">
                <div className="text-center">
                  <p className="text-2xl font-bold text-secondary-700">
                    {propiedad.area}
                  </p>
                  <p className="text-gray-500 text-sm">Área</p>
                </div>
                {propiedad.habitaciones && (
                  <div className="text-center">
                    <p className="text-2xl font-bold text-secondary-700">
                      {propiedad.habitaciones}
                    </p>
                    <p className="text-gray-500 text-sm">Habitaciones</p>
                  </div>
                )}
                {propiedad.banos && (
                  <div className="text-center">
                    <p className="text-2xl font-bold text-secondary-700">
                      {propiedad.banos}
                    </p>
                    <p className="text-gray-500 text-sm">Baños</p>
                  </div>
                )}
              </div>

              {/* Description */}
              <div className="mt-6">
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
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm sticky top-24">
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto rounded-full overflow-hidden mb-4">
                    <Image
                      src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Gabriel%20Broker.jpeg"
                      alt="Gabriel Orozco"
                      fill
                      className="object-cover"
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
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
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
    </>
  );
}
