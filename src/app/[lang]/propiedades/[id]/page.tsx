import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Propiedad,
  propiedades,
  formatCRC,
  formatUSD,
} from "@/data/propiedades";
import PropertyCard from "@/components/PropertyCard";
import FinancingCalculator from "@/components/FinancingCalculator";
import ShareButtons from "@/components/ShareButtons";
import PropertyMap from "@/components/PropertyMap";
import { contacto, whatsappUrl } from "@/data/contacto";
import { WhatsAppIcon } from "@/components/SocialIcons";
import { getDict, Locale, tituloPropiedad, tpl } from "@/i18n/dictionaries";

export function generateStaticParams() {
  return propiedades.map((p) => ({ id: String(p.id) }));
}

export function generateMetadata({
  params,
}: {
  params: { lang: string; id: string };
}): Metadata {
  const lang = params.lang as Locale;
  const dict = getDict(lang);
  const propiedad = propiedades.find((p) => p.id === Number(params.id));
  if (!propiedad) return {};
  const titulo = tituloPropiedad(propiedad, lang, dict);
  const descripcion = `${formatCRC(propiedad.precio)} (≈ ${formatUSD(propiedad.precio)} USD) · ${propiedad.area} · ${propiedad.lugarEspecifico}, ${propiedad.canton}, ${propiedad.provincia}. ${propiedad.descripcion.slice(0, 120)}...`;
  return {
    title: `${titulo} | Oroz Real Estate`,
    description: descripcion,
    openGraph: {
      title: titulo,
      description: descripcion,
      images: [{ url: propiedad.imagen }],
      type: "website",
    },
  };
}

const estadoEstilos: Record<NonNullable<Propiedad["estado"]>, string> = {
  nuevo: "bg-emerald-600",
  rebajado: "bg-red-600",
  vendido: "bg-gray-900",
  reservado: "bg-amber-500",
};

export default function PropiedadDetalle({
  params,
}: {
  params: { lang: string; id: string };
}) {
  const lang = params.lang as Locale;
  const dict = getDict(lang);
  const propiedad = propiedades.find((p) => p.id === Number(params.id));

  if (!propiedad) {
    notFound();
  }

  const titulo = tituloPropiedad(propiedad, lang, dict);

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
      label: dict.detail.aguaPotable,
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
      label: dict.detail.electricidad,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "text-yellow-500",
      bg: "bg-yellow-50",
    },
    {
      key: "calle" as const,
      label: dict.detail.calle,
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
      label: dict.detail.escritura,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      color: "text-green-500",
      bg: "bg-green-50",
    },
  ];

  // Datos estructurados para buscadores (rich results de Google).
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "RealEstateListing",
    name: titulo,
    description: propiedad.descripcion,
    image: propiedad.imagen,
    url: `https://www.orozrealstate.com/${lang}/propiedades/${propiedad.id}`,
    offers: {
      "@type": "Offer",
      price: propiedad.precio,
      priceCurrency: "CRC",
      availability:
        propiedad.estado === "vendido"
          ? "https://schema.org/SoldOut"
          : "https://schema.org/InStock",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: propiedad.canton,
      addressRegion: propiedad.provincia,
      addressCountry: "CR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Breadcrumb */}
      <div className="bg-secondary-800 pt-32 md:pt-44 pb-5 px-4">
        <div className="max-w-5xl mx-auto flex items-center gap-2 text-sm text-gray-400">
          <Link href={`/${lang}`} className="hover:text-accent-500 transition-colors">
            {dict.nav.inicio}
          </Link>
          <span>/</span>
          <Link href={`/${lang}/propiedades`} className="hover:text-accent-500 transition-colors">
            {dict.nav.propiedades}
          </Link>
          <span>/</span>
          <span className="text-white">{titulo}</span>
        </div>
      </div>

      <section className="py-10 px-4">
        <div className="max-w-5xl mx-auto">
          {/* Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="h-64 sm:h-72 md:h-96 rounded-xl overflow-hidden">
              <img
                src={propiedad.imagen}
                alt={titulo}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden md:grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-32 md:h-44 rounded-xl overflow-hidden">
                  <img
                    src={propiedad.imagen}
                    alt={`${titulo} - ${i}`}
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
                  {dict.tipos[propiedad.tipo]}
                </span>
                {propiedad.estado && (
                  <span
                    className={`inline-block ${estadoEstilos[propiedad.estado]} text-white text-sm font-semibold px-3 py-1 rounded-full`}
                  >
                    {dict.estados[propiedad.estado]}
                  </span>
                )}
                {propiedad.financiamiento && (
                  <span className="inline-block bg-accent-500 text-white text-sm font-semibold px-3 py-1 rounded-full">
                    {dict.detail.seAcepta}
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-secondary-700 mt-3">
                {titulo}
              </h1>
              <p className="text-gray-500 mt-1 flex items-center gap-1">
                <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {propiedad.lugarEspecifico}, {propiedad.canton}, {propiedad.provincia}
              </p>

              <div className="mt-4 flex items-baseline gap-3 flex-wrap">
                <p className="text-primary-700 font-bold text-3xl">
                  {formatCRC(propiedad.precio)}
                </p>
                {propiedad.precioAnterior && (
                  <p className="text-gray-400 text-xl line-through">
                    {formatCRC(propiedad.precioAnterior)}
                  </p>
                )}
              </div>
              <p className="text-gray-500 text-lg">
                ≈ {formatUSD(propiedad.precio)} USD
              </p>

              {/* Details */}
              <div className="flex flex-wrap gap-6 mt-6 py-6 border-t border-b border-gray-200">
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-secondary-700">{propiedad.area}</p>
                  <p className="text-gray-500 text-sm">{dict.detail.area}</p>
                </div>
                {propiedad.habitaciones && (
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-secondary-700">{propiedad.habitaciones}</p>
                    <p className="text-gray-500 text-sm">{dict.detail.habitaciones}</p>
                  </div>
                )}
                {propiedad.banos && (
                  <div className="text-center">
                    <p className="text-xl md:text-2xl font-bold text-secondary-700">{propiedad.banos}</p>
                    <p className="text-gray-500 text-sm">{dict.detail.banos}</p>
                  </div>
                )}
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-secondary-700">{propiedad.canton}</p>
                  <p className="text-gray-500 text-sm">{dict.detail.canton}</p>
                </div>
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-secondary-700">{propiedad.provincia}</p>
                  <p className="text-gray-500 text-sm">{dict.detail.provincia}</p>
                </div>
              </div>

              {/* Amenidades */}
              <div className="mt-6">
                <h2 className="text-xl font-bold text-secondary-700 mb-4">
                  {dict.detail.amenidades}
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
                      {dict.detail.financiamiento}
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
                  {dict.detail.descripcion}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {propiedad.descripcion}
                </p>
              </div>

              {/* Compartir */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <ShareButtons titulo={titulo} dict={dict} />
              </div>

              {/* Mapa */}
              <PropertyMap propiedad={propiedad} dict={dict} />

              {/* Calculadora de financiamiento */}
              {propiedad.financiamiento && propiedad.estado !== "vendido" && (
                <FinancingCalculator
                  precio={propiedad.precio}
                  titulo={titulo}
                  dict={dict}
                />
              )}
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
                  <h3 className="font-bold text-lg text-secondary-700 font-sans">
                    {contacto.nombre}
                  </h3>
                  <p className="text-gray-500 text-sm">{dict.detail.cargoGabriel}</p>
                </div>

                <div className="mt-6 space-y-3">
                  <a
                    href={whatsappUrl(tpl(dict.detail.whatsappMsg, { titulo }))}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5b] text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                    {dict.detail.escribirWhatsApp}
                  </a>
                  <a
                    href={contacto.telefonoHref}
                    className="w-full block text-center border border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white py-3 rounded-lg font-semibold transition-colors"
                  >
                    {dict.detail.llamar} {contacto.telefonoDisplay}
                  </a>
                  <Link
                    href={`/${lang}/contacto`}
                    className="w-full block text-center border border-gray-300 text-gray-600 hover:border-primary-700 hover:text-primary-700 py-3 rounded-lg font-semibold transition-colors"
                  >
                    {dict.detail.enviarConsulta}
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
              {dict.detail.otras}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relacionadas.map((prop) => (
                <PropertyCard key={prop.id} propiedad={prop} lang={lang} dict={dict} />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href={`/${lang}/propiedades`}
                className="inline-block border border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                {dict.comun.verTodas}
              </Link>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
