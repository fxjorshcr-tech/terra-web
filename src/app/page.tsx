import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import { propiedades } from "@/data/propiedades";
import { marca, whatsappUrl } from "@/data/contacto";
import { WhatsAppIcon } from "@/components/SocialIcons";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[520px] flex items-center justify-center">
        <img
          src={marca.heroImagen}
          alt="Bienes Raíces Costa Rica"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-800/70 via-secondary-800/40 to-secondary-800/80" />
        <div className="relative z-10 text-center px-4 max-w-3xl mx-auto drop-shadow-2xl">
          <Logo light size="lg" />
          <p className="text-accent-500 uppercase tracking-[0.3em] text-xs md:text-sm mt-8 font-medium">
            Bienes Raíces en Costa Rica
          </p>
          <h1 className="text-white text-3xl md:text-5xl mt-3 font-medium drop-shadow-lg">
            Encuentre su propiedad ideal
          </h1>
          <p className="text-gray-200 text-base md:text-lg mt-4 font-light max-w-xl mx-auto">
            Lotes, casas y fincas con documentación verificada y el respaldo
            profesional del Lic. Gabriel Orozco.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/propiedades"
              className="bg-primary-700 hover:bg-primary-800 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Ver Propiedades
            </Link>
            <Link
              href="/contacto"
              className="bg-white/95 hover:bg-white text-secondary-700 px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Contáctenos
            </Link>
          </div>
        </div>
      </section>

      {/* Propiedades Destacadas */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent-600 font-semibold text-xs uppercase tracking-[0.25em]">
              Portafolio
            </p>
            <h2 className="text-3xl md:text-4xl text-secondary-700 mt-3">
              Propiedades Disponibles
            </h2>
            <div className="w-14 h-0.5 bg-accent-500 mx-auto mt-5" />
            <p className="text-gray-500 mt-5 max-w-xl mx-auto">
              Explore nuestra selección de lotes y casas en las mejores zonas de
              Costa Rica
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propiedades.map((prop) => (
              <PropertyCard key={prop.id} propiedad={prop} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/propiedades"
              className="inline-block border border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Ver Todas las Propiedades
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Gabriel Orozco */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent-600 font-semibold text-xs uppercase tracking-[0.25em]">
              Su Asesor Inmobiliario
            </p>
            <h2 className="text-3xl md:text-4xl text-secondary-700 mt-3">
              Lic. Gabriel Orozco
            </h2>
            <div className="w-14 h-0.5 bg-accent-500 mx-auto mt-5" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                director de <strong>Oroz Real Estate</strong>. Con amplia
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
                  <p className="text-3xl font-bold text-primary-700 font-display">10+</p>
                  <p className="text-gray-500 text-sm mt-1">Años de experiencia</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-700 font-display">100+</p>
                  <p className="text-gray-500 text-sm mt-1">Propiedades vendidas</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-700 font-display">50+</p>
                  <p className="text-gray-500 text-sm mt-1">Clientes satisfechos</p>
                </div>
              </div>
              <Link
                href="/contacto"
                className="inline-block mt-8 bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Hablar con Gabriel
              </Link>

              {/* Grupo Oroz */}
              <a
                href={marca.grupoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex items-center gap-4 group"
              >
                <img
                  src={marca.grupoLogo}
                  alt="Grupo Oroz"
                  className="h-16 w-16 rounded-lg object-contain bg-white shadow-sm border border-gray-200"
                />
                <span>
                  <span className="block text-[0.65rem] uppercase tracking-[0.25em] text-gray-400">
                    Una empresa de
                  </span>
                  <span className="block text-secondary-700 font-semibold group-hover:text-primary-700 transition-colors">
                    {marca.grupo}
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="bg-secondary-700 py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl text-white">
            ¿Listo para encontrar su propiedad?
          </h2>
          <p className="text-gray-300 mt-4 text-lg font-light">
            Contáctenos hoy y le ayudamos a dar el primer paso hacia su nuevo
            hogar
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              Contáctenos Ahora
            </Link>
            <a
              href={whatsappUrl("Hola, me gustaría recibir información sobre sus propiedades.")}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1ebe5b] text-white px-8 py-3.5 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
