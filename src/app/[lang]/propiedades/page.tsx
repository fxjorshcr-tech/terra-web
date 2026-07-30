import { Suspense } from "react";
import PropertyExplorer from "@/components/PropertyExplorer";
import { marca } from "@/data/contacto";
import { getDict, Locale } from "@/i18n/dictionaries";

export default function PropiedadesPage({
  params,
}: {
  params: { lang: string };
}) {
  const lang = params.lang as Locale;
  const dict = getDict(lang);

  return (
    <>
      {/* Header */}
      <section className="relative pt-44 pb-24 md:pt-56 md:pb-32 px-4 text-center overflow-hidden">
        <img
          src={marca.heroImagen}
          alt="Costa Rica"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-800/80 via-secondary-800/60 to-secondary-800/80" />
        <div className="relative z-10">
          <p className="text-accent-500 font-semibold text-xs uppercase tracking-[0.25em]">
            {dict.propsPage.portafolio}
          </p>
          <h1 className="text-3xl md:text-5xl text-white mt-3 drop-shadow-lg">
            {dict.propsPage.titulo}
          </h1>
          <div className="w-14 h-0.5 bg-accent-500 mx-auto mt-5" />
          <p className="text-gray-200 mt-5 max-w-xl mx-auto font-light drop-shadow">
            {dict.propsPage.sub}
          </p>
        </div>
      </section>

      {/* Filtros + Listings */}
      <section className="pb-16 px-4">
        <div className="max-w-6xl mx-auto">
          <Suspense>
            <PropertyExplorer lang={lang} dict={dict} />
          </Suspense>
        </div>
      </section>
    </>
  );
}
