// Datos de contacto centralizados. Actualizar aquí se refleja en todo el sitio.
export const contacto = {
  nombre: "Lic. Gabriel Orozco",
  cargo: "Asesor Inmobiliario / Abogado",
  telefonoDisplay: "+506 6098-2244",
  telefonoHref: "tel:+50660982244",
  whatsappNumero: "50660982244",
  email: "gabrielorozco@orozrealstate.com",
  // TODO: reemplazar con los enlaces reales de las redes sociales
  facebook: "https://www.facebook.com/lotesycasascr",
  instagram: "https://www.instagram.com/lotesycasascr",
  ubicacion: "Costa Rica",
};

export function whatsappUrl(texto?: string) {
  const base = `https://wa.me/${contacto.whatsappNumero}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}
