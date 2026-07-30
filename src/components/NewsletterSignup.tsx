"use client";

import { useState } from "react";
import { whatsappUrl } from "@/data/contacto";
import { Dict, tpl } from "@/i18n/dictionaries";

export default function NewsletterSignup({ dict }: { dict: Dict }) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(whatsappUrl(tpl(dict.newsletter.waMsg, { email })), "_blank");
    setEmail("");
  };

  return (
    <section className="bg-primary-700 py-14 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl text-white">{dict.newsletter.titulo}</h2>
        <p className="text-primary-100 mt-3 font-light">{dict.newsletter.sub}</p>
        <form
          onSubmit={handleSubmit}
          className="mt-7 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={dict.newsletter.ph}
            className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-500"
          />
          <button
            type="submit"
            className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            {dict.newsletter.btn}
          </button>
        </form>
        <p className="text-primary-200 text-xs mt-3">{dict.contacto.nota}</p>
      </div>
    </section>
  );
}
