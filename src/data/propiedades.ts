export interface Propiedad {
  id: number;
  titulo: string;
  ubicacion: string;
  precio: string;
  tipo: string;
  area: string;
  habitaciones?: number;
  banos?: number;
  descripcion: string;
  imagen: string;
}

export const propiedades: Propiedad[] = [
  {
    id: 1,
    titulo: "Casa en San José Centro",
    ubicacion: "San José, Costa Rica",
    precio: "₡45,000,000",
    tipo: "Casa",
    area: "120 m²",
    habitaciones: 3,
    banos: 2,
    descripcion:
      "Hermosa casa en excelente ubicación, cerca de todos los servicios. Ideal para familias. Cuenta con cochera para dos vehículos, patio amplio y acabados de primera.",
    imagen:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Los-siete-pasos-que-debes-seguir-si-quieres-vender-tu-casa-y-hacer-crecer-tu-patrimonio.jpg",
  },
  {
    id: 2,
    titulo: "Lote en Alajuela",
    ubicacion: "Alajuela, Costa Rica",
    precio: "₡18,500,000",
    tipo: "Lote",
    area: "300 m²",
    descripcion:
      "Lote plano listo para construir en zona residencial tranquila. Acceso a agua y electricidad. Excelente inversión para su futuro hogar.",
    imagen:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Los-siete-pasos-que-debes-seguir-si-quieres-vender-tu-casa-y-hacer-crecer-tu-patrimonio.jpg",
  },
  {
    id: 3,
    titulo: "Casa en Heredia",
    ubicacion: "Heredia, Costa Rica",
    precio: "₡52,000,000",
    tipo: "Casa",
    area: "150 m²",
    habitaciones: 4,
    banos: 2,
    descripcion:
      "Amplia casa familiar con jardín, zona verde y excelente ventilación. Ubicada en barrio seguro con fácil acceso a escuelas y comercios.",
    imagen:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Los-siete-pasos-que-debes-seguir-si-quieres-vender-tu-casa-y-hacer-crecer-tu-patrimonio.jpg",
  },
  {
    id: 4,
    titulo: "Lote en Cartago",
    ubicacion: "Cartago, Costa Rica",
    precio: "₡12,000,000",
    tipo: "Lote",
    area: "250 m²",
    descripcion:
      "Terreno con vista al valle, ideal para construir su casa soñada. Zona en crecimiento con buena plusvalía. Documentos al día.",
    imagen:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Los-siete-pasos-que-debes-seguir-si-quieres-vender-tu-casa-y-hacer-crecer-tu-patrimonio.jpg",
  },
  {
    id: 5,
    titulo: "Casa en Desamparados",
    ubicacion: "Desamparados, San José",
    precio: "₡38,000,000",
    tipo: "Casa",
    area: "100 m²",
    habitaciones: 3,
    banos: 1,
    descripcion:
      "Casa acogedora y bien mantenida, perfecta para familia pequeña. Cerca de paradas de bus, supermercados y centros educativos.",
    imagen:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Los-siete-pasos-que-debes-seguir-si-quieres-vender-tu-casa-y-hacer-crecer-tu-patrimonio.jpg",
  },
  {
    id: 6,
    titulo: "Lote en Grecia",
    ubicacion: "Grecia, Alajuela",
    precio: "₡15,000,000",
    tipo: "Lote",
    area: "400 m²",
    descripcion:
      "Amplio lote en el mejor clima del mundo. Zona tranquila y segura, perfecto para construir. Escritura lista para traspaso inmediato.",
    imagen:
      "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Los-siete-pasos-que-debes-seguir-si-quieres-vender-tu-casa-y-hacer-crecer-tu-patrimonio.jpg",
  },
];
