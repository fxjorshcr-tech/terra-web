import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import { propiedades } from "@/data/propiedades";
import { marca, whatsappUrl } from "@/data/contacto";
import { WhatsAppIcon } from "@/components/SocialIcons";
import ReviewBadges from "@/components/ReviewBadges";
import { getDict, Locale } from "@/i18n/dictionaries";

export default function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang as Locale;
  const dict = getDict(lang);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center py-20 md:py-24">
        <img
          src={marca.heroImagen}
          alt="Costa Rica"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-800/80 via-secondary-800/60 to-secondary-800/90" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-white text-4xl md:text-6xl font-semibold drop-shadow-lg leading-tight">
            {dict.hero.titulo}
          </h1>
          <div className="w-16 h-0.5 bg-accent-500 mx-auto mt-7" />
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/propiedades`}
              className="bg-accent-500 hover:bg-accent-600 text-white px-9 py-3.5 rounded-lg font-semibold transition-colors"
            >
              {dict.hero.verPropiedades}
            </Link>
            <Link
              href={`/${lang}/contacto`}
              className="border border-white/80 text-white hover:bg-white hover:text-secondary-800 px-9 py-3.5 rounded-lg font-semibold transition-colors"
            >
              {dict.nav.contactenos}
            </Link>
          </div>
        </div>
      </section>

      {/* Propiedades Destacadas */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent-600 font-semibold text-xs uppercase tracking-[0.25em]">
              {dict.home.portafolio}
            </p>
            <h2 className="text-3xl md:text-4xl text-secondary-700 mt-3">
              {dict.home.dispTitulo}
            </h2>
            <div className="w-14 h-0.5 bg-accent-500 mx-auto mt-5" />
            <p className="text-gray-500 mt-5 max-w-xl mx-auto">
              {dict.home.dispSub}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propiedades.map((prop) => (
              <PropertyCard key={prop.id} propiedad={prop} lang={lang} dict={dict} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href={`/${lang}/propiedades`}
              className="inline-block border border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              {dict.comun.verTodas}
            </Link>
          </div>
        </div>
      </section>

      {/* Sección Gabriel Orozco */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-accent-600 font-semibold text-xs uppercase tracking-[0.25em]">
              {dict.home.asesorOverline}
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
                  alt="Gabriel Orozco"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                {dict.home.gabrielP1a}
                <strong>Oroz Real Estate</strong>
                {dict.home.gabrielP1b}
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                {dict.home.gabrielP2a}
                <strong>Grupo Oroz</strong>
                {dict.home.gabrielP2b}
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-700 font-display">10+</p>
                  <p className="text-gray-500 text-sm mt-1">{dict.home.statAnios}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-700 font-display">100+</p>
                  <p className="text-gray-500 text-sm mt-1">{dict.home.statVendidas}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-700 font-display">50+</p>
                  <p className="text-gray-500 text-sm mt-1">{dict.home.statClientes}</p>
                </div>
              </div>
              <Link
                href={`/${lang}/contacto`}
                className="inline-block mt-8 bg-primary-700 hover:bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                {dict.home.hablarGabriel}
              </Link>

              <ReviewBadges />

              {/* Grupo Oroz */}
              <a
                href={marca.grupoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-10 flex items-center gap-5 group"
              >
                <img
                  src={marca.grupoLogo}
                  alt="Grupo Oroz"
                  className="h-28 w-28 md:h-32 md:w-32 rounded-xl object-contain bg-white shadow-md border border-gray-200"
                />
                <span>
                  <span className="block text-xs uppercase tracking-[0.25em] text-gray-400">
                    {dict.comun.unaEmpresaDe}
                  </span>
                  <span className="block text-secondary-700 font-semibold text-2xl md:text-3xl group-hover:text-primary-700 transition-colors font-display">
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
            {dict.home.ctaTitulo}
          </h2>
          <p className="text-gray-300 mt-4 text-lg font-light">
            {dict.home.ctaSub}
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={`/${lang}/contacto`}
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-3.5 rounded-lg font-semibold transition-colors"
            >
              {dict.home.ctaBtn}
            </Link>
            <a
              href={whatsappUrl(dict.comun.whatsappMsgGeneral)}
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
