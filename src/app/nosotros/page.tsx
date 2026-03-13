import Link from "next/link";

export default function NosotrosPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-secondary-700 py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold text-white">
          Sobre Nosotros
        </h1>
        <p className="text-gray-300 mt-3 max-w-xl mx-auto">
          Conozca más sobre Lotes y Casas CR y nuestro compromiso con usted
        </p>
      </section>

      {/* About section */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/gabriel-logo-trans.png"
              alt="Lotes y Casas CR"
              className="h-28 w-auto mb-6"
            />
            <h2 className="text-2xl font-bold text-secondary-700">
              Bienes Raíces de Confianza
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              <strong>Lotes y Casas CR</strong> nació con la misión de facilitar
              el acceso a propiedades de calidad para las familias
              costarricenses. Sabemos lo importante que es encontrar el lugar
              perfecto para su hogar o su próxima inversión.
            </p>
            <p className="text-gray-600 mt-4 leading-relaxed">
              Nos especializamos en la venta de lotes y casas en todo el país,
              ofreciendo opciones para todos los presupuestos. Nuestro equipo se
              encarga de verificar cada propiedad, asegurar la documentación
              legal y acompañarlo en todo el proceso de compra.
            </p>
          </div>
          <div className="h-80 rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/venta-de-propiedades.jpg"
              alt="Propiedades en Costa Rica"
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
                Respaldo Profesional
              </p>
              <h2 className="text-3xl font-bold text-secondary-700 mt-2">
                Lic. Gabriel Orozco
              </h2>
              <div className="w-12 h-1 bg-primary-600 mt-3 mb-6 rounded-full" />
              <p className="text-gray-600 leading-relaxed">
                El Licenciado Gabriel Orozco, empresario y abogado, es
                fundador y director de <strong>Grupo Oroz</strong>, un
                conglomerado costarricense con presencia en bienes raíces,
                construcción, tecnología y más.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Con amplia trayectoria empresarial en Costa Rica, Gabriel ha
                liderado el crecimiento de sus compañías, posicionando a Grupo
                Oroz como un referente de confianza en el mercado.
              </p>
              <p className="text-gray-600 leading-relaxed mt-4">
                Como director de <strong>Lotes y Casas CR</strong>, aporta su
                visión estratégica y su conocimiento del mercado inmobiliario
                para ofrecer a cada cliente un servicio personalizado,
                transparente y orientado a resultados.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">10+</p>
                  <p className="text-gray-500 text-xs uppercase mt-1">
                    Empresas
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">25+</p>
                  <p className="text-gray-500 text-xs uppercase mt-1">
                    Años de Trayectoria
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-primary-600">6+</p>
                  <p className="text-gray-500 text-xs uppercase mt-1">
                    Sectores
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-secondary-700">
            ¿Por qué elegirnos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="p-6">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-secondary-700">
                Confianza y Seguridad
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Todas nuestras propiedades cuentan con documentación legal
                verificada. Usted compra con total tranquilidad.
              </p>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-secondary-700">
                Precios Justos
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Opciones para todos los presupuestos. Trabajamos para que
                encuentre la mejor propiedad al mejor precio.
              </p>
            </div>
            <div className="p-6">
              <div className="w-14 h-14 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="font-bold text-lg text-secondary-700">
                Atención Personalizada
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Le acompañamos en cada paso del proceso. Desde la búsqueda
                hasta la firma, estamos con usted.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-white">
          ¿Tiene preguntas? Estamos para ayudarle
        </h2>
        <Link
          href="/contacto"
          className="inline-block mt-6 bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          Contáctenos
        </Link>
      </section>
    </>
  );
}
