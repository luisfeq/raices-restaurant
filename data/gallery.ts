export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=900&q=80",
    alt: "Interior elegante del restaurante Raíces",
    span: "wide",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600&q=80",
    alt: "Presentación del lomo fino",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=80",
    alt: "Vista nocturna del restaurante",
    span: "tall",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?w=600&q=80",
    alt: "Coctel de guayusa y gin",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&q=80",
    alt: "Salón principal con iluminación cálida",
    span: "wide",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?w=600&q=80",
    alt: "Mesa preparada para cena romántica",
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    alt: "Volcán de chocolate con mora",
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1576867757603-05b134ebc379?w=600&q=80",
    alt: "Chef preparando el plato principal",
    span: "tall",
  },
];
