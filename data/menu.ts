export type Category = "Entradas" | "Principales" | "Postres" | "Bebidas";

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: Category;
  image: string;
  featured?: boolean;
  badge?: string;
}

export const menuItems: MenuItem[] = [
  // Entradas
  {
    id: 1,
    name: "Ceviche de Camarón Ecuatoriano",
    description:
      "Camarón fresco marinado en limón, naranjilla y ají amarillo, servido con chifles y canguil.",
    price: 14,
    category: "Entradas",
    image:
      "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=600&q=80",
    featured: true,
    badge: "Chef's pick",
  },
  {
    id: 2,
    name: "Tiradito de Corvina",
    description:
      "Finas láminas de corvina del Pacífico con leche de tigre andina, aguacate y microgreens.",
    price: 16,
    category: "Entradas",
    image:
      "https://images.unsplash.com/photo-1519984388953-d2406bc725e1?w=600&q=80",
  },
  {
    id: 3,
    name: "Causa de Cangrejo",
    description:
      "Terrina de papa amarilla rellena de cangrejo desmenuzado, mayonesa de ají rocoto y huevas de trucha.",
    price: 13,
    category: "Entradas",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
  },

  // Principales
  {
    id: 4,
    name: "Lomo Fino en Salsa de Maracuyá",
    description:
      "Filete de res AAA madurado 21 días, con reducción de maracuyá local, puré de zanahoria blanca y espárragos.",
    price: 32,
    category: "Principales",
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80",
    featured: true,
    badge: "Especialidad",
  },
  {
    id: 5,
    name: "Corvina a la Plancha con Quinua",
    description:
      "Corvina salvaje sellada en mantequilla de hierbas, quinua tricolor del altiplano y salsa de culantro.",
    price: 26,
    category: "Principales",
    image:
      "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=600&q=80",
  },
  {
    id: 6,
    name: "Risotto de Hongos y Trufa",
    description:
      "Arroz arborio con mix de hongos secos ecuatorianos, aceite de trufa negra y parmesano reggiano.",
    price: 24,
    category: "Principales",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80",
  },
  {
    id: 7,
    name: "Pato en Reducción de Chicha Jora",
    description:
      "Pato de campo confitado en chicha jora artesanal, servido con yuca crispy y camote asado.",
    price: 29,
    category: "Principales",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    featured: true,
    badge: "Nuevo",
  },

  // Postres
  {
    id: 8,
    name: "Volcán de Chocolate con Mora",
    description:
      "Fondant de cacao Arriba Nacional con corazón líquido, helado de mora de Castilla y tierra de galleta.",
    price: 10,
    category: "Postres",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    featured: true,
    badge: "Favorito",
  },
  {
    id: 9,
    name: "Tres Leches de Naranjilla",
    description:
      "Bizcocho empapado en tres leches con coulis de naranjilla, crema chantilly y ralladura de limón.",
    price: 9,
    category: "Postres",
    image:
      "https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600&q=80",
  },
  {
    id: 10,
    name: "Crème Brûlée de Canela",
    description:
      "Crema tostada clásica perfumada con canela de Ceilán y vainilla de Oriente, con caramelo crujiente.",
    price: 9,
    category: "Postres",
    image:
      "https://images.unsplash.com/photo-1470124182917-cc6e71b22ecc?w=600&q=80",
  },

  // Bebidas
  {
    id: 11,
    name: "Coctel de Guayusa & Gin",
    description:
      "Gin artesanal con infusión de guayusa amazónica, agua tónica premium, pepino y lima.",
    price: 12,
    category: "Bebidas",
    image:
      "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=600&q=80",
  },
  {
    id: 12,
    name: "Mocktail de Taxo y Menta",
    description:
      "Jugo natural de taxo de altura, jarabe de menta fresca, jengibre y agua con gas. Sin alcohol.",
    price: 8,
    category: "Bebidas",
    image:
      "https://images.unsplash.com/photo-1499638673689-79a0b5115d87?w=600&q=80",
  },
];

export const CATEGORIES: Category[] = [
  "Entradas",
  "Principales",
  "Postres",
  "Bebidas",
];
