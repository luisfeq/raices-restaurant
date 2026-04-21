import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Raíces Restaurante | Alta Cocina Ecuatoriana en Cuenca",
  description:
    "Experiencia gourmet en el corazón de Cuenca, Ecuador. Cocina ecuatoriana contemporánea con ingredientes locales de temporada. Reserva tu mesa por WhatsApp.",
  keywords: [
    "restaurante Cuenca",
    "alta cocina ecuatoriana",
    "restaurante gourmet Cuenca Ecuador",
    "Raíces restaurante",
    "cocina contemporánea Cuenca",
    "reservar restaurante Cuenca",
  ],
  authors: [{ name: "Raíces Restaurante" }],
  openGraph: {
    title: "Raíces Restaurante | Alta Cocina Ecuatoriana en Cuenca",
    description:
      "Sabores del Ecuador reinterpretados con técnica contemporánea. Reserva tu mesa ahora.",
    type: "website",
    locale: "es_EC",
    siteName: "Raíces Restaurante",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-EC">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
