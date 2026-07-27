import Link from "next/link";
import { marca } from "@/data/contacto";
import Logo from "@/components/Logo";
import ReviewBadges from "@/components/ReviewBadges";
import { getDict, Locale } from "@/i18n/dictionaries";

export default function NosotrosPage({
  params,
}: {
  params: { lang: string };
}) {
  const lang = params.lang as Locale;
  const dict = getDict(lang);
  const t = dict.nosotros;

  return (
    <>
      {/* Header */}
      <section className="bg-secondary-700 pt-40 md:pt-52 pb-20 px-4 text-center">
        <p className="text-accent-500 font-semibold text-xs uppercase tracking-[0.25em]">
          {t.overline}
        </p>
        <h1 className="text-3xl md:text-4xl text-white mt-3">{t.titulo}</h1>
        <div className="w-14 h-0.5 bg-accent-500 mx-auto mt-5" />
        <p className="text-gray-300 mt-5 max-w-xl mx-auto font-light">
          {t.sub}
        </p>
      </section>

      {/* About section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="mb-6">
              <Logo size="md" />
            </div>
            <h2 className="text-2xl font-bold text-secondary-700">
              {t.confianzaTitulo}
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {t.p1a}
              <strong>Oroz Real Estate</strong>
              {t.p1b}
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">{t.p2}</p>
          </div>
          <div className="h-80 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/venta-de-propiedades.jpg"
              alt="Costa Rica"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Gabriel Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
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
              <p className="text-primary-600 font-semibold text-sm uppercase tracking-widest">
                {t.respaldo}
              </p>
              <h2 className="text-3xl font-bold text-secondary-700 mt-2">
                Lic. Gabriel Orozco
              </h2>
              <div className="w-12 h-1 bg-primary-600 mt-3 mb-6 rounded-full" />
              <p className="text-gray-600 leading-relaxed">
                {t.gp1a}
                <strong>Grupo Oroz</strong>
                {t.gp1b}
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">{t.gp2}</p>
              <p className="text-gray-600 leading-relaxed mt-4">
                {t.gp3a}
                <strong>Oroz Real Estate</strong>
                {t.gp3b}
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">10+</p>
                  <p className="text-gray-500 text-xs uppercase mt-1">
                    {t.statEmpresas}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">25+</p>
                  <p className="text-gray-500 text-xs uppercase mt-1">
                    {t.statTrayectoria}
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">6+</p>
                  <p className="text-gray-500 text-xs uppercase mt-1">
                    {t.statSectores}
                  </p>
                </div>
              </div>

              <ReviewBadges />

              {/* Grupo Oroz */}
              <a
                href={marca.grupoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center gap-5 group"
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

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-secondary-700">{t.porQue}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-secondary-700">{t.val1t}</h3>
              <p className="text-gray-500 mt-2 text-sm">{t.val1p}</p>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-secondary-700">{t.val2t}</h3>
              <p className="text-gray-500 mt-2 text-sm">{t.val2p}</p>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-secondary-700">{t.val3t}</h3>
              <p className="text-gray-500 mt-2 text-sm">{t.val3p}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-white">{t.ctaTitulo}</h2>
        <Link
          href={`/${lang}/contacto`}
          className="inline-block mt-6 bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          {dict.nav.contactenos}
        </Link>
      </section>
    </>
  );
}
