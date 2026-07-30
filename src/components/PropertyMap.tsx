import { Propiedad, mapsQueryDe } from "@/data/propiedades";
import { Dict } from "@/i18n/dictionaries";

/** Mapa embebido de Google Maps (no requiere API key). */
export default function PropertyMap({
  propiedad,
  dict,
}: {
  propiedad: Propiedad;
  dict: Dict;
}) {
  const query = encodeURIComponent(mapsQueryDe(propiedad));

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold text-secondary-700 mb-3">
        {dict.mapa.titulo}
      </h2>
      <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
        <iframe
          title={dict.mapa.titulo}
          src={`https://maps.google.com/maps?q=${query}&z=13&output=embed`}
          className="w-full h-72 md:h-80 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
      <p className="text-gray-400 text-xs mt-2">{dict.mapa.aproxNota}</p>
    </div>
  );
}
