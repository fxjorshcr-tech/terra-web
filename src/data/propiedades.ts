export interface Propiedad {
  id: number;
  titulo: string;
  provincia: string;
  canton: string;
  lugarEspecifico: string;
  precio: string;
  tipo: "Casa" | "Lote" | "Finca" | "Otro";
  area: string;
  habitaciones?: number;
  banos?: number;
  descripcion: string;
  imagen: string;
  amenidades: {
    agua: boolean;
    luz: boolean;
    calle: boolean;
    escritura: boolean;
  };
  financiamiento: boolean;
}

export const tipos: Propiedad["tipo"][] = ["Casa", "Lote", "Finca", "Otro"];

const IMG =
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Los-siete-pasos-que-debes-seguir-si-quieres-vender-tu-casa-y-hacer-crecer-tu-patrimonio.jpg";

export const propiedades: Propiedad[] = [
  {
    id: 1,
    titulo: "Casa en San José Centro",
    provincia: "San José",
    canton: "San José",
    lugarEspecifico: "Barrio Amón",
    precio: "₡45,000,000",
    tipo: "Casa",
    area: "120 m²",
    habitaciones: 3,
    banos: 2,
    descripcion:
      "Hermosa casa en excelente ubicación, cerca de todos los servicios. Ideal para familias que buscan comodidad y acceso rápido al transporte público, comercios y centros educativos. Cuenta con cochera para dos vehículos, patio amplio con zona verde, cocina remodelada con muebles de madera y acabados de primera. La propiedad está en una zona residencial tranquila, con vigilancia las 24 horas. Perfecta para familias que quieren vivir cerca de todo sin perder la tranquilidad del hogar.",
    imagen: IMG,
    amenidades: { agua: true, luz: true, calle: true, escritura: true },
    financiamiento: true,
  },
  {
    id: 2,
    titulo: "Lote en San Ramón",
    provincia: "Alajuela",
    canton: "San Ramón",
    lugarEspecifico: "Urbanización Los Ángeles",
    precio: "₡18,500,000",
    tipo: "Lote",
    area: "300 m²",
    descripcion:
      "Lote plano listo para construir en zona residencial tranquila. Ubicado en una urbanización en crecimiento con excelente plusvalía. El terreno cuenta con acceso a todos los servicios básicos: agua potable, electricidad y conexión a internet. La calle de acceso está pavimentada y en buen estado. Ideal para construir su casa soñada o como inversión a futuro. Documentos al día, escritura lista para traspaso inmediato. No pierda esta oportunidad.",
    imagen: IMG,
    amenidades: { agua: true, luz: true, calle: true, escritura: true },
    financiamiento: false,
  },
  {
    id: 3,
    titulo: "Casa en Santo Domingo",
    provincia: "Heredia",
    canton: "Santo Domingo",
    lugarEspecifico: "San Vicente",
    precio: "₡52,000,000",
    tipo: "Casa",
    area: "150 m²",
    habitaciones: 4,
    banos: 2,
    descripcion:
      "Amplia casa familiar con jardín, zona verde y excelente ventilación natural. Ubicada en uno de los barrios más seguros y agradables de Heredia. La casa cuenta con 4 habitaciones espaciosas, 2 baños completos, sala amplia con buena iluminación, comedor independiente y cocina equipada. El patio trasero es ideal para reuniones familiares o para que los niños jueguen con seguridad. Cerca de escuelas, colegios, supermercados y paradas de bus.",
    imagen: IMG,
    amenidades: { agua: true, luz: true, calle: true, escritura: true },
    financiamiento: true,
  },
  {
    id: 4,
    titulo: "Lote en Paraíso",
    provincia: "Cartago",
    canton: "Paraíso",
    lugarEspecifico: "Valle de Orosi",
    precio: "₡12,000,000",
    tipo: "Lote",
    area: "250 m²",
    descripcion:
      "Terreno con vista al valle de Orosi, ideal para construir su casa soñada. Ubicado en zona de crecimiento con buena plusvalía y ambiente campestre. El lote tiene topografía favorable, con una leve pendiente que permite aprovechar las vistas al máximo. Acceso a agua y electricidad disponible. La zona es muy tranquila, rodeada de naturaleza pero con acceso a los servicios básicos en pocos minutos. Documentos completamente al día, escritura lista para traspaso.",
    imagen: IMG,
    amenidades: { agua: true, luz: true, calle: false, escritura: true },
    financiamiento: true,
  },
  {
    id: 5,
    titulo: "Casa en Desamparados",
    provincia: "San José",
    canton: "Desamparados",
    lugarEspecifico: "San Rafael Abajo",
    precio: "₡38,000,000",
    tipo: "Casa",
    area: "100 m²",
    habitaciones: 3,
    banos: 1,
    descripcion:
      "Casa acogedora y bien mantenida, perfecta para familia pequeña. Ubicada en zona céntrica de Desamparados con fácil acceso a transporte público, supermercados, bancos y centros de salud. La propiedad cuenta con 3 habitaciones cómodas, 1 baño completo, sala-comedor integrado, cocina con espacio para lavandería y un pequeño patio. Ideal para quienes buscan una vivienda accesible en una ubicación estratégica. Se acepta financiamiento bancario.",
    imagen: IMG,
    amenidades: { agua: true, luz: true, calle: true, escritura: true },
    financiamiento: true,
  },
  {
    id: 6,
    titulo: "Lote en Grecia",
    provincia: "Alajuela",
    canton: "Grecia",
    lugarEspecifico: "Barrio San Roque",
    precio: "₡15,000,000",
    tipo: "Lote",
    area: "400 m²",
    descripcion:
      "Amplio lote en el mejor clima del mundo. Grecia es reconocida internacionalmente por su clima perfecto durante todo el año. Este terreno está ubicado en una zona residencial tranquila y segura, con acceso a todos los servicios básicos. Perfecto para construir su hogar o como inversión. La zona tiene excelente plusvalía y está en constante crecimiento. Escritura al día, lista para traspaso inmediato. No se necesita rellenar ni nivelar.",
    imagen: IMG,
    amenidades: { agua: true, luz: true, calle: true, escritura: true },
    financiamiento: false,
  },
  {
    id: 7,
    titulo: "Finca en Nicoya",
    provincia: "Guanacaste",
    canton: "Nicoya",
    lugarEspecifico: "Quebrada Honda",
    precio: "₡35,000,000",
    tipo: "Finca",
    area: "5,000 m²",
    descripcion:
      "Hermosa finca en la zona de Nicoya con amplio terreno para ganadería o agricultura. La propiedad cuenta con árboles frutales, un riachuelo que cruza la finca y acceso por calle lastreada. Ideal para proyectos agropecuarios, turismo rural o simplemente para vivir en contacto con la naturaleza. La zona es conocida por su tranquilidad y belleza natural. Cuenta con agua de naciente propia y electricidad. Excelente oportunidad de inversión.",
    imagen: IMG,
    amenidades: { agua: true, luz: true, calle: false, escritura: true },
    financiamiento: true,
  },
  {
    id: 8,
    titulo: "Casa en Esparza",
    provincia: "Puntarenas",
    canton: "Esparza",
    lugarEspecifico: "Residencial Monte Verde",
    precio: "₡42,000,000",
    tipo: "Casa",
    area: "130 m²",
    habitaciones: 3,
    banos: 2,
    descripcion:
      "Casa moderna en Esparza con excelente ubicación cerca de la autopista. Ideal para familias que trabajan en el GAM pero prefieren vivir en un ambiente más tranquilo y con clima cálido. La propiedad cuenta con acabados modernos, pisos de cerámica, cielos de tablilla, ventanas con protección y portones eléctricos. Amplio patio con espacio para jardín y zona de lavandería techada. La urbanización cuenta con áreas verdes comunes y juegos infantiles.",
    imagen: IMG,
    amenidades: { agua: true, luz: true, calle: true, escritura: true },
    financiamiento: true,
  },
  {
    id: 9,
    titulo: "Lote en Guápiles",
    provincia: "Limón",
    canton: "Pococí",
    lugarEspecifico: "Guápiles Centro",
    precio: "₡9,500,000",
    tipo: "Lote",
    area: "350 m²",
    descripcion:
      "Lote a precio accesible en Guápiles, zona en pleno desarrollo. El terreno es plano, ideal para construcción inmediata. Ubicado a pocos minutos del centro de Guápiles, con fácil acceso a comercios, servicios de salud y transporte público. Esta es una excelente opción para quienes buscan invertir con poco presupuesto en una zona con gran potencial de crecimiento. Agua y luz disponibles en el sitio. Escritura al día.",
    imagen: IMG,
    amenidades: { agua: true, luz: true, calle: true, escritura: true },
    financiamiento: false,
  },
];
