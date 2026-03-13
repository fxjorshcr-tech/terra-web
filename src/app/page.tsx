import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import { propiedades } from "@/data/propiedades";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center">
        <img
          src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/venta-de-propiedades.jpg"
          alt="Bienes Raíces Costa Rica"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center px-4">
          <img
            src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/gabriel-logo-trans.png"
            alt="Lotes y Casas CR"
            className="mx-auto h-40 md:h-56 w-auto drop-shadow-2xl brightness-0 invert"
          />
          <p className="text-white text-lg md:text-2xl mt-6 font-light max-w-2xl mx-auto drop-shadow-lg">
            Encuentre su propiedad ideal en Costa Rica
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/propiedades"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Ver Propiedades
            </Link>
            <Link
              href="/contacto"
              className="bg-white/90 hover:bg-white text-secondary-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Contáctenos
            </Link>
          </div>
        </div>
      </section>

      {/* Propiedades Destacadas */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-secondary-700">
              Propiedades Disponibles
            </h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">
              Explore nuestra selección de lotes y casas en las mejores zonas de
              Costa Rica
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {propiedades.map((prop) => (
              <PropertyCard key={prop.id} propiedad={prop} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/propiedades"
              className="inline-block border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Ver Todas las Propiedades
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Gabriel Orozco */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest">
              Su Asesor Inmobiliario
            </p>
            <h2 className="text-3xl font-bold text-secondary-700 mt-2">
              Lic. Gabriel Orozco
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <div className="w-72 h-80 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Gabriel%20Broker.jpeg"
                  alt="Gabriel Orozco - Asesor Inmobiliario"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                El Licenciado Gabriel Orozco, empresario y abogado, es el
                director de <strong>Lotes y Casas CR</strong>. Con amplia
                experiencia en el mercado inmobiliario costarricense, Gabriel se
                dedica a ayudar a familias a encontrar su hogar ideal.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Como director de <strong>Grupo Oroz</strong>, aporta su visión
                y conocimiento del mercado para ofrecer a cada cliente un
                servicio personalizado, transparente y orientado a resultados.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">10+</p>
                  <p className="text-gray-500 text-sm mt-1">Años de experiencia</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">100+</p>
                  <p className="text-gray-500 text-sm mt-1">Propiedades vendidas</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">50+</p>
                  <p className="text-gray-500 text-sm mt-1">Clientes satisfechos</p>
                </div>
              </div>
              <Link
                href="/contacto"
                className="inline-block mt-8 bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Hablar con Gabriel
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-secondary-700 py-14 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            ¿Listo para encontrar su propiedad?
          </h2>
          <p className="text-gray-300 mt-3 text-lg">
            Contáctenos hoy y le ayudamos a dar el primer paso hacia su nuevo
            hogar
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Contáctenos Ahora
            </Link>
            <a
              href="https://wa.me/50600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
