"use client";

import { useState } from "react";
import { contacto, whatsappUrl } from "@/data/contacto";
import FaqAccordion from "@/components/FaqAccordion";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { getDict, Locale, tpl } from "@/i18n/dictionaries";

export default function ContactoPage({
  params,
}: {
  params: { lang: string };
}) {
  const lang = params.lang as Locale;
  const dict = getDict(lang);
  const t = dict.contacto;

  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    email: "",
    interes: "",
    mensaje: "",
  });

  const intereses: Record<string, string> = {
    casa: t.optCasa,
    lote: t.optLote,
    vender: t.optVender,
    info: t.optInfo,
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const interesTexto = intereses[formData.interes]
      ? tpl(t.waInteres, { interes: intereses[formData.interes] })
      : "";
    const texto = `${tpl(t.waIntro, { nombre: formData.nombre })}${interesTexto} ${formData.mensaje} (Tel: ${formData.telefono}, Email: ${formData.email})`;
    window.open(whatsappUrl(texto), "_blank");
  };

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

      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl text-secondary-700 mb-6">{t.formTitulo}</h2>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t.lblNombre}
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={(e) =>
                    setFormData({ ...formData, nombre: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder={t.phNombre}
                />
              </div>
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t.lblTelefono}
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={(e) =>
                    setFormData({ ...formData, telefono: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="+506 0000-0000"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t.lblCorreo}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder={t.phCorreo}
                />
              </div>
              <div>
                <label
                  htmlFor="interes"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t.lblInteres}
                </label>
                <select
                  id="interes"
                  name="interes"
                  value={formData.interes}
                  onChange={(e) =>
                    setFormData({ ...formData, interes: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="">{t.optSeleccione}</option>
                  <option value="casa">{t.optCasa}</option>
                  <option value="lote">{t.optLote}</option>
                  <option value="vender">{t.optVender}</option>
                  <option value="info">{t.optInfo}</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="mensaje"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  {t.lblMensaje}
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  value={formData.mensaje}
                  onChange={(e) =>
                    setFormData({ ...formData, mensaje: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                  placeholder={t.phMensaje}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-primary-700 hover:bg-primary-800 text-white py-3 rounded-lg font-semibold text-lg transition-colors"
              >
                {t.enviar}
              </button>
              <p className="text-gray-400 text-xs text-center">{t.nota}</p>
            </form>
          </div>

          {/* Contact info */}
          <div>
            <h2 className="text-2xl text-secondary-700 mb-6">{t.infoTitulo}</h2>

            {/* Gabriel card */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-100">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                  <img
                    src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Gabriel%20Broker.jpeg"
                    alt="Gabriel Orozco"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-secondary-700 font-sans">
                    {contacto.nombre}
                  </h3>
                  <p className="text-gray-500 text-sm">{t.cargoGabriel}</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-700 font-sans">
                    {t.telefono}
                  </h3>
                  <a
                    href={contacto.telefonoHref}
                    className="text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    {contacto.telefonoDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-700 font-sans">
                    {t.whatsapp}
                  </h3>
                  <a
                    href={whatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline"
                  >
                    {contacto.telefonoDisplay}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-700 font-sans">
                    {t.correo}
                  </h3>
                  <a
                    href={`mailto:${contacto.email}`}
                    className="text-gray-500 hover:text-primary-600 transition-colors break-all"
                  >
                    {contacto.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-700 font-sans">
                    {t.ubicacion}
                  </h3>
                  <p className="text-gray-500">{t.pais}</p>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="mt-8 p-6 bg-gray-50 border border-gray-100 rounded-xl text-center">
              <p className="text-gray-600 text-sm mb-4">{t.siganos}</p>
              <div className="flex justify-center gap-3">
                <a
                  href={contacto.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#1877F2] hover:bg-[#145fc4] text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-colors"
                >
                  <FacebookIcon className="w-5 h-5" />
                  Facebook
                </a>
                <a
                  href={contacto.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white px-5 py-2.5 rounded-lg font-semibold text-sm transition-opacity"
                >
                  <InstagramIcon className="w-5 h-5" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas frecuentes */}
      <FaqAccordion dict={dict} />
    </>
  );
}
