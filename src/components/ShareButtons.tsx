"use client";

import { useState } from "react";
import { FacebookIcon, WhatsAppIcon } from "@/components/SocialIcons";
import { Dict } from "@/i18n/dictionaries";

export default function ShareButtons({
  titulo,
  dict,
}: {
  titulo: string;
  dict: Dict;
}) {
  const [copiado, setCopiado] = useState(false);

  const urlActual = () => (typeof window !== "undefined" ? window.location.href : "");

  const copiar = async () => {
    try {
      await navigator.clipboard.writeText(urlActual());
    } catch {
      // Fallback para navegadores sin Clipboard API (contextos no seguros).
      const input = document.createElement("input");
      input.value = urlActual();
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
    }
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2500);
  };

  const compartirWhatsApp = () => {
    const texto = `${titulo} - ${urlActual()}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(texto)}`, "_blank");
  };

  const compartirFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(urlActual())}`,
      "_blank"
    );
  };

  return (
    <div className="flex items-center gap-3 flex-wrap">
      <span className="text-gray-500 text-sm font-medium">{dict.compartir.titulo}:</span>
      <button
        onClick={compartirWhatsApp}
        aria-label="WhatsApp"
        className="w-9 h-9 rounded-full bg-[#25D366] hover:opacity-85 text-white flex items-center justify-center transition-opacity"
      >
        <WhatsAppIcon className="w-4 h-4" />
      </button>
      <button
        onClick={compartirFacebook}
        aria-label="Facebook"
        className="w-9 h-9 rounded-full bg-[#1877F2] hover:opacity-85 text-white flex items-center justify-center transition-opacity"
      >
        <FacebookIcon className="w-4 h-4" />
      </button>
      <button
        onClick={copiar}
        className="flex items-center gap-1.5 text-sm text-gray-600 border border-gray-300 hover:border-primary-700 hover:text-primary-700 px-3 py-1.5 rounded-full transition-colors"
      >
        {copiado ? (
          <>
            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {dict.compartir.copiado}
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            {dict.compartir.copiar}
          </>
        )}
      </button>
    </div>
  );
}
