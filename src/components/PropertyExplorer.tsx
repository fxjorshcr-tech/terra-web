"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import PropertyCard from "@/components/PropertyCard";
import {
  Propiedad,
  propiedades,
  tipos,
  provinciasDisponibles,
  formatCRC,
} from "@/data/propiedades";
import { Dict, Locale, tituloPropiedad, tpl } from "@/i18n/dictionaries";

const PRECIOS_MAX = [10_000_000, 20_000_000, 30_000_000, 50_000_000, 75_000_000];
const HABITACIONES_MIN = [1, 2, 3, 4];

type Orden = "recientes" | "precioAsc" | "precioDesc";

export default function PropertyExplorer({
  lang,
  dict,
}: {
  lang: Locale;
  dict: Dict;
}) {
  const searchParams = useSearchParams();

  const [q, setQ] = useState(searchParams.get("q") ?? "");
  const [tipo, setTipo] = useState(searchParams.get("tipo") ?? "");
  const [provincia, setProvincia] = useState(searchParams.get("provincia") ?? "");
  const [precioMax, setPrecioMax] = useState("");
  const [habMin, setHabMin] = useState("");
  const [orden, setOrden] = useState<Orden>("recientes");

  const hayFiltros = q !== "" || tipo !== "" || provincia !== "" || precioMax !== "" || habMin !== "";

  const limpiar = () => {
    setQ("");
    setTipo("");
    setProvincia("");
    setPrecioMax("");
    setHabMin("");
  };

  const filtradas = useMemo(() => {
    const texto = q.trim().toLowerCase();
    const resultado = propiedades.filter((p) => {
      if (tipo && p.tipo !== tipo) return false;
      if (provincia && p.provincia !== provincia) return false;
      if (precioMax && p.precio > Number(precioMax)) return false;
      if (habMin && (p.habitaciones ?? 0) < Number(habMin)) return false;
      if (texto) {
        const campos = [
          tituloPropiedad(p, lang, dict),
          p.titulo,
          p.lugarEspecifico,
          p.canton,
          p.provincia,
        ]
          .join(" ")
          .toLowerCase();
        if (!campos.includes(texto)) return false;
      }
      return true;
    });

    // Vendidas siempre al final; dentro de cada grupo aplica el orden elegido.
    const rango = (p: Propiedad) => (p.estado === "vendido" ? 1 : 0);
    resultado.sort((a, b) => {
      if (rango(a) !== rango(b)) return rango(a) - rango(b);
      if (orden === "precioAsc") return a.precio - b.precio;
      if (orden === "precioDesc") return b.precio - a.precio;
      return b.id - a.id;
    });
    return resultado;
  }, [q, tipo, provincia, precioMax, habMin, orden, lang, dict]);

  const chips: { label: string; onRemove: () => void }[] = [];
  if (tipo) chips.push({ label: dict.tipos[tipo as Propiedad["tipo"]], onRemove: () => setTipo("") });
  if (provincia) chips.push({ label: provincia, onRemove: () => setProvincia("") });
  if (precioMax)
    chips.push({
      label: `≤ ${formatCRC(Number(precioMax))}`,
      onRemove: () => setPrecioMax(""),
    });
  if (habMin)
    chips.push({
      label: `${habMin}+ ${dict.filtros.habitaciones.toLowerCase()}`,
      onRemove: () => setHabMin(""),
    });
  if (q.trim()) chips.push({ label: `"${q.trim()}"`, onRemove: () => setQ("") });

  const selectClase =
    "w-full border border-gray-300 rounded-lg px-3 py-2.5 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white";

  return (
    <div>
      {/* Barra de filtros */}
      <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-4 md:p-5 -mt-16 relative z-10">
        <div className="relative mb-3">
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={dict.filtros.buscarPh}
            className="w-full border border-gray-300 rounded-lg pl-10 pr-4 py-2.5 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              {dict.buscador.tipo}
            </label>
            <select value={tipo} onChange={(e) => setTipo(e.target.value)} className={selectClase}>
              <option value="">{dict.buscador.todosTipos}</option>
              {tipos.map((t) => (
                <option key={t} value={t}>
                  {dict.tipos[t]}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              {dict.buscador.provincia}
            </label>
            <select
              value={provincia}
              onChange={(e) => setProvincia(e.target.value)}
              className={selectClase}
            >
              <option value="">{dict.buscador.todasProvincias}</option>
              {provinciasDisponibles.map((p) => (
                <option key={p} value={p}>
                  {p}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              {dict.filtros.precioMax}
            </label>
            <select
              value={precioMax}
              onChange={(e) => setPrecioMax(e.target.value)}
              className={selectClase}
            >
              <option value="">{dict.filtros.sinLimite}</option>
              {PRECIOS_MAX.map((p) => (
                <option key={p} value={p}>
                  {formatCRC(p)}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              {dict.filtros.habitaciones}
            </label>
            <select value={habMin} onChange={(e) => setHabMin(e.target.value)} className={selectClase}>
              <option value="">{dict.filtros.cualquiera}</option>
              {HABITACIONES_MIN.map((h) => (
                <option key={h} value={h}>
                  {h}+
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
              {dict.filtros.ordenar}
            </label>
            <select
              value={orden}
              onChange={(e) => setOrden(e.target.value as Orden)}
              className={selectClase}
            >
              <option value="recientes">{dict.filtros.ordenRecientes}</option>
              <option value="precioAsc">{dict.filtros.ordenPrecioAsc}</option>
              <option value="precioDesc">{dict.filtros.ordenPrecioDesc}</option>
            </select>
          </div>
        </div>
      </div>

      {/* Contador + chips */}
      <div className="flex flex-wrap items-center gap-2 mt-6 mb-6">
        <p className="text-gray-500 text-sm mr-2">
          {tpl(dict.filtros.mostrando, {
            n: String(filtradas.length),
            total: String(propiedades.length),
          })}
        </p>
        {chips.map((chip) => (
          <button
            key={chip.label}
            onClick={chip.onRemove}
            className="flex items-center gap-1.5 bg-primary-100 text-primary-700 text-sm font-medium px-3 py-1 rounded-full hover:bg-primary-700 hover:text-white transition-colors"
          >
            {chip.label}
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        ))}
        {hayFiltros && (
          <button
            onClick={limpiar}
            className="text-sm text-gray-500 underline hover:text-primary-700 transition-colors"
          >
            {dict.filtros.limpiar}
          </button>
        )}
      </div>

      {/* Resultados */}
      {filtradas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtradas.map((prop) => (
            <PropertyCard key={prop.id} propiedad={prop} lang={lang} dict={dict} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-xl">
          <svg
            className="w-12 h-12 text-gray-300 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-gray-500 max-w-md mx-auto">{dict.filtros.sinResultados}</p>
          <button
            onClick={limpiar}
            className="mt-5 inline-block border border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
          >
            {dict.filtros.limpiar}
          </button>
        </div>
      )}
    </div>
  );
}
