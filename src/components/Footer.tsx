"use client";

import { useState } from "react";
import Link from "next/link";
import { contacto, whatsappUrl } from "@/data/contacto";
import { FacebookIcon, InstagramIcon, WhatsAppIcon } from "@/components/SocialIcons";

export default function Footer() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto = `Hola, soy ${formData.nombre}. ${formData.mensaje} (Email: ${formData.email})`;
    window.open(whatsappUrl(texto), "_blank");
    setEnviado(true);
    setFormData({ nombre: "", email: "", mensaje: "" });
    setTimeout(() => setEnviado(false), 3000);
  };

  return (
    <footer className="bg-secondary-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo & descripción */}
          <div>
            <img
              src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/gabriel-logo-trans.png"
              alt="Lotes y Casas CR"
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Su aliado de confianza en bienes raíces en Costa Rica. Lotes, casas
              y propiedades al mejor precio.
            </p>
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
            <h3 className="font-semibold text-lg mb-4 font-sans">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/propiedades" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Propiedades
                </Link>
              </li>
              <li>
                <Link href="/nosotros" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-gray-400 hover:text-white text-sm transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4 font-sans">Contacto</h3>
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
            <h3 className="font-semibold text-lg mb-4 font-sans">Escríbanos</h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Nombre"
                required
                value={formData.nombre}
                onChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg bg-secondary-600 border border-secondary-500 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <input
                type="email"
                placeholder="Email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg bg-secondary-600 border border-secondary-500 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <textarea
                placeholder="Mensaje"
                required
                rows={3}
                value={formData.mensaje}
                onChange={(e) =>
                  setFormData({ ...formData, mensaje: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg bg-secondary-600 border border-secondary-500 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-accent-500 resize-none"
              />
              <button
                type="submit"
                className="w-full bg-accent-500 hover:bg-accent-600 text-white py-2 rounded-lg font-semibold text-sm transition-colors"
              >
                Enviar
              </button>
              {enviado && (
                <p className="text-green-400 text-xs text-center">
                  Mensaje enviado correctamente
                </p>
              )}
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Lotes y Casas CR. Todos los
            derechos reservados.
          </p>
          <p>
            {contacto.nombre} &middot; {contacto.telefonoDisplay}
          </p>
        </div>
      </div>
    </footer>
  );
}
