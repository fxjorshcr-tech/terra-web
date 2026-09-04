"use client";

import { useState } from "react";
import Link from "next/link";
import { contacto, marca, whatsappUrl } from "@/data/contacto";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/SocialIcons";
import Logo from "@/components/Logo";
import ContactModal from "@/components/ContactModal";
import { Dict, Locale, tpl } from "@/i18n/dictionaries";

export default function Footer({ lang, dict }: { lang: Locale; dict: Dict }) {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [modal, setModal] = useState<"success" | "error" | null>(null);

  const textoWhatsApp = () =>
    `${tpl(dict.contacto.waIntro, { nombre: formData.nombre })} ${formData.mensaje} (Email: ${formData.email})`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (enviando) return;
    setEnviando(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, empresa: honeypot, origen: "footer", lang }),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok && data.ok) {
        setModal("success");
        setFormData({ nombre: "", email: "", mensaje: "" });
      } else {
        setModal("error");
      }
    } catch {
      setModal("error");
    } finally {
      setEnviando(false);
    }
  };

  const links = [
    { href: `/${lang}`, label: dict.nav.inicio },
    { href: `/${lang}/propiedades`, label: dict.nav.propiedades },
    { href: `/${lang}/vender`, label: dict.nav.vender },
    { href: `/${lang}/nosotros`, label: dict.nav.nosotros },
    { href: `/${lang}/contacto`, label: dict.nav.contacto },
  ];

  return (
    <footer className="bg-secondary-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & descripción */}
          <div>
            <div className="mb-4">
              <Logo light size="md" />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {dict.footer.descripcion}
            </p>
            <a
              href={marca.grupoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent-500 text-xs mt-3 inline-block transition-colors"
            >
              {dict.comun.unaEmpresaDe} {marca.grupo}
            </a>
            <div className="flex items-center gap-3 mt-5">
              <a
                href={contacto.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent-500 flex items-center justify-center transition-colors"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href={contacto.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent-500 flex items-center justify-center transition-colors"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-accent-500 flex items-center justify-center transition-colors"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-sans">
              {dict.footer.enlaces}
            </h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-sans">
              {dict.footer.contacto}
            </h3>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <a href={contacto.telefonoHref} className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-4 h-4 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {contacto.telefonoDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contacto.email}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <svg className="w-4 h-4 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all">{contacto.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-accent-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {contacto.ubicacion}
              </li>
            </ul>
          </div>

          {/* Formulario de contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-sans">
              {dict.footer.escribanos}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3 relative">
              <input
                type="text"
                placeholder={dict.footer.phNombre}
                required
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg bg-secondary-600 border border-secondary-500 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <input
                type="email"
                placeholder={dict.footer.phEmail}
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg bg-secondary-600 border border-secondary-500 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <textarea
                placeholder={dict.footer.phMensaje}
                required
                rows={3}
                value={formData.mensaje}
                onChange={(e) =>
                  setFormData({ ...formData, mensaje: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg bg-secondary-600 border border-secondary-500 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 resize-none"
              />
              <div className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden" aria-hidden="true">
                <label htmlFor="f-empresa">Empresa</label>
                <input
                  type="text"
                  id="f-empresa"
                  name="empresa"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={enviando}
                className="w-full bg-accent-500 hover:bg-accent-600 disabled:opacity-60 disabled:cursor-not-allowed text-white py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                {enviando ? dict.contacto.enviando : dict.footer.enviar}
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {marca.nombre}.{" "}
            {dict.footer.derechos}
          </p>
          <p>
            {contacto.nombre} &middot; {contacto.telefonoDisplay}
          </p>
        </div>
      </div>

      <ContactModal
        open={modal === "success"}
        onClose={() => setModal(null)}
        titulo={dict.contacto.modalTitulo}
        texto={dict.contacto.modalTexto}
        cerrar={dict.contacto.modalCerrar}
      />
      <ContactModal
        open={modal === "error"}
        onClose={() => setModal(null)}
        variant="error"
        titulo={dict.contacto.errorTitulo}
        texto={dict.contacto.errorTexto}
        cerrar={dict.contacto.modalCerrar}
        accion={{ label: dict.contacto.errorWhatsApp, href: whatsappUrl(textoWhatsApp()) }}
      />
    </footer>
  );
}
