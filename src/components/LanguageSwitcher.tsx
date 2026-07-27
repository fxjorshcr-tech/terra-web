"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { locales, nombresIdiomas, Locale } from "@/i18n/dictionaries";

function Bandera({ lang, className = "w-6 h-4" }: { lang: Locale; className?: string }) {
  const common = `${className} rounded-[2px] shadow-sm flex-shrink-0`;
  switch (lang) {
    case "es":
      return (
        <svg className={common} viewBox="0 0 24 16" aria-hidden="true">
          <rect width="24" height="16" fill="#AA151B" />
          <rect y="4" width="24" height="8" fill="#F1BF00" />
        </svg>
      );
    case "en":
      return (
        <svg className={common} viewBox="0 0 24 16" aria-hidden="true">
          <rect width="24" height="16" fill="#012169" />
          <path d="M0 0l24 16M24 0L0 16" stroke="#fff" strokeWidth="3.2" />
          <path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.6" />
          <path d="M12 0v16M0 8h24" stroke="#fff" strokeWidth="5" />
          <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="3" />
        </svg>
      );
    case "fr":
      return (
        <svg className={common} viewBox="0 0 24 16" aria-hidden="true">
          <rect width="8" height="16" fill="#002395" />
          <rect x="8" width="8" height="16" fill="#fff" />
          <rect x="16" width="8" height="16" fill="#ED2939" />
        </svg>
      );
    case "de":
      return (
        <svg className={common} viewBox="0 0 24 16" aria-hidden="true">
          <rect width="24" height="5.33" fill="#000" />
          <rect y="5.33" width="24" height="5.33" fill="#DD0000" />
          <rect y="10.66" width="24" height="5.34" fill="#FFCE00" />
        </svg>
      );
  }
}

export default function LanguageSwitcher({ lang }: { lang: Locale }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const cambiar = (nuevo: Locale) => {
    setOpen(false);
    if (nuevo === lang) return;
    const resto = pathname.replace(new RegExp(`^/${lang}(?=/|$)`), "") || "";
    router.push(`/${nuevo}${resto}`);
  };

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen(!open)}
        aria-label="Idioma / Language"
        className="flex items-center gap-2 bg-black/25 hover:bg-black/40 border border-white/20 rounded-lg px-3 py-2 transition-colors"
      >
        <Bandera lang={lang} />
        <svg
          className={`w-3 h-3 text-white transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-1">
          {locales.map((l) => (
            <button
              key={l}
              onClick={() => cambiar(l)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left transition-colors ${
                l === lang
                  ? "bg-primary-50 text-primary-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <Bandera lang={l} />
              {nombresIdiomas[l]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
