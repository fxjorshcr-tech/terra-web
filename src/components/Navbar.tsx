"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/propiedades", label: "Propiedades" },
    { href: "/nosotros", label: "Nosotros" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-center h-20 relative">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute left-4 md:hidden text-secondary-600"
            aria-label="Abrir menú"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Logo small in navbar */}
          <Link href="/" className="absolute left-4 hidden md:block">
            <Image
              src="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/gabriel-logo-trans.png"
              alt="Lotes y Casas CR"
              width={50}
              height={50}
              className="h-12 w-auto"
            />
          </Link>

          {/* Centered nav links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-secondary-600 hover:text-primary-600 font-medium transition-colors text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA button */}
          <Link
            href="/contacto"
            className="absolute right-4 hidden md:block bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors"
          >
            Contáctenos
          </Link>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-3 px-2 text-secondary-600 hover:text-primary-600 font-medium text-sm uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="block mt-2 text-center bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium"
            >
              Contáctenos
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
