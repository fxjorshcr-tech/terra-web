"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { Dict, Locale } from "@/i18n/dictionaries";

export default function Navbar({ lang, dict }: { lang: Locale; dict: Dict }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || isOpen;

  const links = [
    { href: `/${lang}`, label: dict.nav.inicio },
    { href: `/${lang}/propiedades`, label: dict.nav.propiedades },
    { href: `/${lang}/nosotros`, label: dict.nav.nosotros },
    { href: `/${lang}/contacto`, label: dict.nav.contacto },
  ];

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-secondary-800/85 backdrop-blur-md border-b border-white/10 shadow-lg"
          : "bg-gradient-to-b from-black/60 via-black/25 to-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div
          className={`flex items-center justify-between transition-all duration-300 ${
            scrolled ? "h-20" : "h-28 md:h-40"
          }`}
        >
          {/* Logo */}
          <Link href={`/${lang}`} className="flex-shrink-0" aria-label="Oroz Real Estate">
            <Logo
              className={`transition-all duration-300 ${
                scrolled ? "h-16" : "h-28 md:h-40"
              }`}
            />
          </Link>

          {/* Centered nav links */}
          <div className="hidden md:flex items-center gap-10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-100 hover:text-accent-500 font-medium transition-colors text-sm uppercase tracking-widest drop-shadow"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            {/* CTA button */}
            <Link
              href={`/${lang}/contacto`}
              className="hidden md:block bg-accent-500 hover:bg-accent-600 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors"
            >
              {dict.nav.contactenos}
            </Link>

            <LanguageSwitcher lang={lang} />

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white drop-shadow"
              aria-label="Menú"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-2 text-gray-100 hover:text-accent-500 font-medium text-sm uppercase tracking-widest"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href={`/${lang}/contacto`}
              onClick={() => setIsOpen(false)}
              className="block mt-2 text-center bg-accent-500 text-white px-4 py-2.5 rounded-lg text-sm font-medium"
            >
              {dict.nav.contactenos}
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
