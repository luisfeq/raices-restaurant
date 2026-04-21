export interface Testimonial {
  id: number;
  name: string;
  origin: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
  via: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Valentina Herrera",
    origin: "Guayaquil, Ecuador",
    avatar: "VH",
    rating: 5,
    text: "Una experiencia gastronómica increíble. El lomo en salsa de maracuyá era tan perfectamente equilibrado que nos quedamos sin palabras. El servicio, la ambientación y cada detalle transmiten amor por la cocina ecuatoriana. Definitivamente volveremos.",
    date: "Marzo 2025",
    via: "Google",
  },
  {
    id: 2,
    name: "Thomas Keller",
    origin: "Berlín, Alemania",
    avatar: "TK",
    rating: 5,
    text: "Raíces was one of the best meals I had during my month in South America. The duck with chicha jora reduction was extraordinary — bold, complex, deeply local. A must-visit in Cuenca. The rooftop setting at dusk is simply magical.",
    date: "Febrero 2025",
    via: "TripAdvisor",
  },
  {
    id: 3,
    name: "Camila & Andrés Mora",
    origin: "Quito, Ecuador",
    avatar: "CM",
    rating: 5,
    text: "Celebramos nuestro aniversario aquí y fue perfecto en todo sentido. Pedimos la mesa con vista a la calle y el chef nos preparó un menú degustación de sorpresa. El volcán de chocolate fue la joya de la noche. ¡Gracias, Raíces!",
    date: "Enero 2025",
    via: "Instagram",
  },
  {
    id: 4,
    name: "Isabelle Fontaine",
    origin: "Lyon, Francia",
    avatar: "IF",
    rating: 5,
    text: "En tant que française, je suis exigeante en matière de cuisine. Raíces m'a bluffée : technique française, ingrédients andins d'exception, dressage impeccable. Le risotto aux champignons locaux était d'un équilibre rare. Bravo à toute l'équipe.",
    date: "Diciembre 2024",
    via: "Google",
  },
  {
    id: 5,
    name: "Rodrigo Vintimilla",
    origin: "Cuenca, Ecuador",
    avatar: "RV",
    rating: 5,
    text: "Como cuencano, me llena de orgullo que tengamos un restaurante así en nuestra ciudad. Usan productos de nuestras comunidades, respetan la temporada y cuentan la historia de cada plato. Vine con clientes internacionales y quedaron fascinados.",
    date: "Noviembre 2024",
    via: "TripAdvisor",
  },
];
