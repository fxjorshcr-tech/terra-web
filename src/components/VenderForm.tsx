"use client";

import { useState } from "react";
import { whatsappUrl } from "@/data/contacto";
import { tipos } from "@/data/propiedades";
import { Dict, tpl } from "@/i18n/dictionaries";

export default function VenderForm({ dict }: { dict: Dict }) {
  const t = dict.vender;
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    tipo: "",
    ubicacion: "",
    precio: "",
    detalles: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const tipoTexto = formData.tipo
      ? dict.tipos[formData.tipo as keyof Dict["tipos"]]
      : "";
    let texto =
      tpl(t.waIntro, { nombre: formData.nombre }) +
      tpl(t.waDetalle, { tipo: tipoTexto, ubicacion: formData.ubicacion });
    if (formData.precio) texto += tpl(t.waPrecio, { precio: formData.precio });
    texto += ` ${formData.detalles} (Tel: ${formData.telefono})`;
    window.open(whatsappUrl(texto), "_blank");
  };

  const inputClase =
    "w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent";

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="v-nombre" className="block text-sm font-medium text-gray-700 mb-1">
            {dict.contacto.lblNombre}
          </label>
          <input
            type="text"
            id="v-nombre"
            required
            value={formData.nombre}
            onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
            className={inputClase}
            placeholder={dict.contacto.phNombre}
          />
        </div>
        <div>
          <label htmlFor="v-telefono" className="block text-sm font-medium text-gray-700 mb-1">
            {dict.contacto.lblTelefono}
          </label>
          <input
            type="tel"
            id="v-telefono"
            required
            value={formData.telefono}
            onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
            className={inputClase}
            placeholder="+506"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="v-tipo" className="block text-sm font-medium text-gray-700 mb-1">
            {t.lblTipo}
          </label>
          <select
            id="v-tipo"
            required
            value={formData.tipo}
            onChange={(e) => setFormData({ ...formData, tipo: e.target.value })}
            className={`${inputClase} bg-white`}
          >
            <option value="">{dict.contacto.optSeleccione}</option>
            {tipos.map((tipo) => (
              <option key={tipo} value={tipo}>
                {dict.tipos[tipo]}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="v-precio" className="block text-sm font-medium text-gray-700 mb-1">
            {t.lblPrecio}
          </label>
          <input
            type="text"
            id="v-precio"
            value={formData.precio}
            onChange={(e) => setFormData({ ...formData, precio: e.target.value })}
            className={inputClase}
            placeholder={t.phPrecio}
          />
        </div>
      </div>
      <div>
        <label htmlFor="v-ubicacion" className="block text-sm font-medium text-gray-700 mb-1">
          {t.lblUbicacion}
        </label>
        <input
          type="text"
          id="v-ubicacion"
          required
          value={formData.ubicacion}
          onChange={(e) => setFormData({ ...formData, ubicacion: e.target.value })}
          className={inputClase}
          placeholder={t.phUbicacion}
        />
      </div>
      <div>
        <label htmlFor="v-detalles" className="block text-sm font-medium text-gray-700 mb-1">
          {t.lblDetalles}
        </label>
        <textarea
          id="v-detalles"
          required
          rows={4}
          value={formData.detalles}
          onChange={(e) => setFormData({ ...formData, detalles: e.target.value })}
          className={`${inputClase} resize-none`}
          placeholder={t.phDetalles}
        />
      </div>
      <button
        type="submit"
        className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3.5 rounded-lg font-semibold transition-colors"
      >
        {t.enviar}
      </button>
      <p className="text-gray-400 text-xs text-center">{dict.contacto.nota}</p>
    </form>
  );
}
