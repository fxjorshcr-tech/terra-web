import { tipos, provinciasDisponibles } from "@/data/propiedades";
import { Dict, Locale } from "@/i18n/dictionaries";

/**
 * Buscador del hero: formulario GET nativo que lleva a /propiedades
 * con los filtros como query params. Funciona sin JavaScript.
 */
export default function HeroSearch({ lang, dict }: { lang: Locale; dict: Dict }) {
  return (
    <form
      action={`/${lang}/propiedades`}
      method="GET"
      className="mt-10 bg-white/95 backdrop-blur rounded-2xl shadow-2xl p-4 md:p-5 max-w-3xl mx-auto"
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <div className="text-left">
          <label
            htmlFor="hero-tipo"
            className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
          >
            {dict.buscador.tipo}
          </label>
          <select
            id="hero-tipo"
            name="tipo"
            defaultValue=""
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
          >
            <option value="">{dict.buscador.todosTipos}</option>
            {tipos.map((t) => (
              <option key={t} value={t}>
                {dict.tipos[t]}
              </option>
            ))}
          </select>
        </div>
        <div className="text-left">
          <label
            htmlFor="hero-provincia"
            className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1"
          >
            {dict.buscador.provincia}
          </label>
          <select
            id="hero-provincia"
            name="provincia"
            defaultValue=""
            className="w-full border border-gray-300 rounded-lg px-3 py-2.5 text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
          >
            <option value="">{dict.buscador.todasProvincias}</option>
            {provinciasDisponibles.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="w-full bg-accent-500 hover:bg-accent-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            {dict.buscador.buscar}
          </button>
        </div>
      </div>
    </form>
  );
}
