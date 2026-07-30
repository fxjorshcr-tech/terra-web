import Link from "next/link";
import PropertyCard from "@/components/PropertyCard";
import HeroSearch from "@/components/HeroSearch";
import Reveal from "@/components/Reveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import NewsletterSignup from "@/components/NewsletterSignup";
import { propiedadesDisponibles } from "@/data/propiedades";
import { marca, whatsappUrl } from "@/data/contacto";
import { WhatsAppIcon } from "@/components/SocialIcons";
import ReviewBadges from "@/components/ReviewBadges";
import { getDict, Locale } from "@/i18n/dictionaries";

export default function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang as Locale;
  const dict = getDict(lang);

  const destacadas = propiedadesDisponibles.slice(0, 6);

  const razones = [
    {
      titulo: dict.invertir.item1t,
      texto: dict.invertir.item1p,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      titulo: dict.invertir.item2t,
      texto: dict.invertir.item2p,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      titulo: dict.invertir.item3t,
      texto: dict.invertir.item3p,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
        </svg>
      ),
    },
    {
      titulo: dict.invertir.item4t,
      texto: dict.invertir.item4p,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 13H5.5a2.5 2.5 0 012.5 2.5V17a2 2 0 002 2h.5M12 3a9 9 0 11-9 9M12 3a9 9 0 019 9M12 3v2.5A2.5 2.5 0 0014.5 8H17" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21a9 9 0 009-9" />
        </svg>
      ),
    },
  ];

  const pasos = [
    { titulo: dict.invertir.paso1t, texto: dict.invertir.paso1p },
    { titulo: dict.invertir.paso2t, texto: dict.invertir.paso2p },
    { titulo: dict.invertir.paso3t, texto: dict.invertir.paso3p },
    { titulo: dict.invertir.paso4t, texto: dict.invertir.paso4p },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center py-20 md:py-24">
        <img
          src={marca.heroImagen}
          alt="Costa Rica"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-800/80 via-secondary-800/60 to-secondary-800/90" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto w-full">
          <h1 className="text-white text-4xl md:text-6xl font-semibold drop-shadow-lg leading-tight">
            {dict.hero.titulo}
          </h1>
          <div className="w-16 h-0.5 bg-accent-500 mx-auto mt-7" />

          <HeroSearch lang={lang} dict={dict} />

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
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
          <Reveal>
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
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destacadas.map((prop, i) => (
              <Reveal key={prop.id} delay={(i % 3) * 100}>
                <PropertyCard propiedad={prop} lang={lang} dict={dict} />
              </Reveal>
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

      {/* ¿Por qué invertir en Costa Rica? */}
      <section className="bg-secondary-700 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-accent-500 font-semibold text-xs uppercase tracking-[0.25em]">
                {dict.invertir.overline}
              </p>
              <h2 className="text-3xl md:text-4xl text-white mt-3">
                {dict.invertir.titulo}
              </h2>
              <div className="w-14 h-0.5 bg-accent-500 mx-auto mt-5" />
              <p className="text-gray-300 mt-5 max-w-xl mx-auto font-light">
                {dict.invertir.sub}
              </p>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {razones.map((r, i) => (
              <Reveal key={r.titulo} delay={i * 100}>
                <div className="bg-white/5 border border-white/10 rounded-xl p-6 h-full hover:bg-white/10 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-accent-500/20 text-accent-500 flex items-center justify-center mb-4">
                    {r.icon}
                  </div>
                  <h3 className="text-white font-semibold text-lg">{r.titulo}</h3>
                  <p className="text-gray-300 text-sm mt-2 leading-relaxed font-light">
                    {r.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Guía del comprador: 4 pasos */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="text-center mb-14">
              <p className="text-accent-600 font-semibold text-xs uppercase tracking-[0.25em]">
                {dict.invertir.pasosOverline}
              </p>
              <h2 className="text-3xl md:text-4xl text-secondary-700 mt-3">
                {dict.invertir.pasosTitulo}
              </h2>
              <div className="w-14 h-0.5 bg-accent-500 mx-auto mt-5" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {pasos.map((paso, i) => (
              <Reveal key={paso.titulo} delay={i * 120}>
                <div className="relative text-center h-full">
                  <div className="w-14 h-14 mx-auto rounded-full bg-primary-700 text-white flex items-center justify-center text-xl font-bold font-display mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-lg text-secondary-700">
                    {paso.titulo}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                    {paso.texto}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Sección Gabriel Orozco */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <div className="text-center mb-12">
              <p className="text-accent-600 font-semibold text-xs uppercase tracking-[0.25em]">
                {dict.home.asesorOverline}
              </p>
              <h2 className="text-3xl md:text-4xl text-secondary-700 mt-3">
                Lic. Gabriel Orozco
              </h2>
              <div className="w-14 h-0.5 bg-accent-500 mx-auto mt-5" />
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <Reveal className="flex justify-center">
              <div className="w-72 h-80 rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Gabriel%20Broker.jpeg"
                  alt="Gabriel Orozco"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
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
                  <p className="text-3xl font-bold text-primary-700 font-display">
                    <AnimatedCounter value={10} suffix="+" />
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{dict.home.statAnios}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-700 font-display">
                    <AnimatedCounter value={100} suffix="+" />
                  </p>
                  <p className="text-gray-500 text-sm mt-1">{dict.home.statVendidas}</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-700 font-display">
                    <AnimatedCounter value={50} suffix="+" />
                  </p>
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
            </Reveal>
          </div>
        </div>
      </section>

      {/* Newsletter / alertas */}
      <NewsletterSignup dict={dict} />

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
