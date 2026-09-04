"use client";

import { useEffect, useRef } from "react";

type Props = {
  open: boolean;
  onClose: () => void;
  titulo: string;
  texto: string;
  cerrar: string;
  variant?: "success" | "error";
  /** Acción secundaria opcional (p. ej. abrir WhatsApp si falla el envío). */
  accion?: { label: string; href: string };
};

export default function ContactModal({
  open,
  onClose,
  titulo,
  texto,
  cerrar,
  variant = "success",
  accion,
}: Props) {
  const cerrarRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    cerrarRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  if (!open) return null;

  const esError = variant === "error";

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-titulo"
    >
      <div
        className="absolute inset-0 bg-secondary-800/70 backdrop-blur-sm animate-[fadeIn_.2s_ease-out]"
        onClick={onClose}
      />
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 text-center animate-[popIn_.25s_ease-out]">
        <div
          className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center ${
            esError ? "bg-red-100" : "bg-primary-100"
          }`}
        >
          {esError ? (
            <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01M4.93 19h14.14c1.54 0 2.5-1.67 1.73-3L13.73 4c-.77-1.33-2.69-1.33-3.46 0L3.2 16c-.77 1.33.19 3 1.73 3z" />
            </svg>
          ) : (
            <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
            </svg>
          )}
        </div>
        <h3
          id="contact-modal-titulo"
          className="text-2xl text-secondary-700 mt-5"
        >
          {titulo}
        </h3>
        <div className="w-10 h-0.5 bg-accent-500 mx-auto mt-3" />
        <p className="text-gray-500 mt-4 font-light leading-relaxed">{texto}</p>
        <div className="mt-7 flex flex-col gap-3">
          {accion && (
            <a
              href={accion.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-colors"
            >
              {accion.label}
            </a>
          )}
          <button
            ref={cerrarRef}
            type="button"
            onClick={onClose}
            className={`w-full py-3 rounded-lg font-semibold transition-colors ${
              accion
                ? "bg-gray-100 hover:bg-gray-200 text-secondary-700"
                : "bg-primary-700 hover:bg-primary-800 text-white"
            }`}
          >
            {cerrar}
          </button>
        </div>
      </div>
    </div>
  );
}
