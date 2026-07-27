// Datos de contacto centralizados. Actualizar aquí se refleja en todo el sitio.
export const contacto = {
  nombre: "Lic. Gabriel Orozco",
  cargo: "Asesor Inmobiliario / Abogado",
  telefonoDisplay: "+506 6098-2244",
  telefonoHref: "tel:+50660982244",
  whatsappNumero: "50660982244",
  email: "gabrielorozco@orozrealstate.com",
  // TODO: reemplazar con los enlaces reales de las redes sociales
  facebook: "https://www.facebook.com/orozrealstate",
  instagram: "https://www.instagram.com/orozrealstate",
  ubicacion: "Costa Rica",
};

export const marca = {
  nombre: "Oroz Real State",
  grupo: "Grupo Oroz",
  grupoUrl: "https://www.grupooroz.com",
  grupoLogo:
    "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/logos-oroz/GRUPO%20OROZO%20LOGO.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy1vcm96L0dSVVBPIE9ST1pPIExPR08uanBlZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODUxNzMwNDUsImV4cCI6MjQxNTg5MzA0NX0.2dMIrfMnpmJJJgWQS25dcKNohOpRyB0XTbiYiNH60Cs",
  heroImagen:
    "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Ruta%20Pacifico/blog-ruta-pacifico-guanacaste2.webp",
};

export function whatsappUrl(texto?: string) {
  const base = `https://wa.me/${contacto.whatsappNumero}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}
