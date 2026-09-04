// Datos de contacto centralizados. Actualizar aquí se refleja en todo el sitio.
export const contacto = {
  nombre: "Lic. Gabriel Orozco",
  cargo: "Asesor Inmobiliario / Abogado",
  telefonoDisplay: "+506 6000-3218",
  telefonoHref: "tel:+50660003218",
  whatsappNumero: "50660003218",
  email: "gabrielorozco@orozrealestate.com",
  // TODO: reemplazar con los enlaces reales de las redes sociales
  facebook: "https://www.facebook.com/orozrealestate",
  instagram: "https://www.instagram.com/orozrealestate",
  ubicacion: "Costa Rica",
};

export const marca = {
  nombre: "Oroz Real Estate",
  logo: "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/logos-oroz/ChatGPT%20Image%2027%20jul%202026,%2011_27_19%20(1).png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy1vcm96L0NoYXRHUFQgSW1hZ2UgMjcganVsIDIwMjYsIDExXzI3XzE5ICgxKS5wbmciLCJzY29wZSI6ImRvd25sb2FkIiwiaWF0IjoxNzg1MTczMjg2LCJleHAiOjI0MTU4OTMyODZ9.Bi7TBOxj2n51VEOfSLjRHqaGV4yAu2pNnGENS_Tj6AM",
  grupo: "Grupo Oroz",
  grupoUrl: "https://www.grupooroz.com",
  grupoLogo:
    "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/sign/logos-oroz/GRUPO%20OROZO%20LOGO.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9iZmNkZjM3My00NzkzLTRhYjQtYmRhOC04OWY1ZmNiMjdhMzciLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy1vcm96L0dSVVBPIE9ST1pPIExPR08uanBlZyIsInNjb3BlIjoiZG93bmxvYWQiLCJpYXQiOjE3ODUxNzMwNDUsImV4cCI6MjQxNTg5MzA0NX0.2dMIrfMnpmJJJgWQS25dcKNohOpRyB0XTbiYiNH60Cs",
  heroImagen:
    "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Ruta%20Pacifico/blog-ruta-pacifico-guanacaste2.webp",
};

// Insignias de reseñas (Google Business Profile / Trustpilot).
// Se muestran automáticamente cuando se completan con los datos REALES del
// perfil: url del perfil público y calificación actual. Dejarlas vacías
// mientras los perfiles no existan.
export const resenas = {
  google: { url: "", rating: "" }, // ej: { url: "https://g.page/...", rating: "5.0" }
  trustpilot: { url: "", rating: "" }, // ej: { url: "https://www.trustpilot.com/review/orozrealestate.com", rating: "4.8" }
};

export function whatsappUrl(texto?: string) {
  const base = `https://wa.me/${contacto.whatsappNumero}`;
  return texto ? `${base}?text=${encodeURIComponent(texto)}` : base;
}
