import type { Metadata } from "next";
import VenderForm from "@/components/VenderForm";
import Reveal from "@/components/Reveal";
import { getDict, Locale } from "@/i18n/dictionaries";

export function generateMetadata({
  params,
}: {
  params: { lang: string };
}): Metadata {
  const dict = getDict(params.lang);
  return {
    title: `${dict.vender.titulo} | Oroz Real Estate`,
    description: dict.vender.sub,
  };
}

export default function VenderPage({ params }: { params: { lang: string } }) {
  const lang = params.lang as Locale;
  const dict = getDict(lang);
  const t = dict.vender;

  const beneficios = [
    {
      titulo: t.benef1t,
      texto: t.benef1p,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      titulo: t.benef2t,
      texto: t.benef2p,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      titulo: t.benef3t,
      texto: t.benef3p,
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Header */}
      <section className="bg-secondary-700 pt-40 md:pt-52 pb-20 px-4 text-center">
        <p className="text-accent-500 font-semibold text-xs uppercase tracking-[0.25em]">
          {t.overline}
        </p>
        <h1 className="text-3xl md:text-4xl text-white mt-3">{t.titulo}</h1>
        <div className="w-14 h-0.5 bg-accent-500 mx-auto mt-5" />
        <p className="text-gray-300 mt-5 max-w-xl mx-auto font-light">{t.sub}</p>
      </section>

      {/* Beneficios */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {beneficios.map((b, i) => (
            <Reveal key={b.titulo} delay={i * 120}>
              <div className="text-center bg-white border border-gray-200 rounded-xl p-8 shadow-sm h-full">
                <div className="w-14 h-14 mx-auto rounded-full bg-primary-100 text-primary-700 flex items-center justify-center mb-4">
                  {b.icon}
                </div>
                <h3 className="font-bold text-lg text-secondary-700">{b.titulo}</h3>
                <p className="text-gray-600 mt-2 text-sm leading-relaxed">{b.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Formulario */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl text-secondary-700 mb-6 text-center">
            {t.formTitulo}
          </h2>
          <div className="bg-white border border-gray-200 rounded-xl p-6 md:p-8 shadow-sm">
            <VenderForm dict={dict} />
          </div>
        </div>
      </section>
    </>
  );
}
