"use client";

import { useEffect, useState } from "react";
import { ChevronDown, Phone, Star } from "lucide-react";

const WA_LINK =
  "https://wa.me/593987654321?text=Hola%2C%20deseo%20hacer%20una%20reserva%20en%20Ra%C3%ADces";

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800&q=85')",
        }}
      />

      {/* Base dark layer — dims the image uniformly */}
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.55)" }} />

      {/* Gradient overlay — extra darkening at top and bottom */}
      <div className="hero-overlay absolute inset-0" />

      {/* Decorative corner ornament */}
      <div
        className="absolute top-28 left-10 w-16 h-16 border-l-2 border-t-2 opacity-40"
        style={{ borderColor: "#c9a84c" }}
      />
      <div
        className="absolute top-28 right-10 w-16 h-16 border-r-2 border-t-2 opacity-40"
        style={{ borderColor: "#c9a84c" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Pre-title badge */}
        <div
          className={`inline-flex items-center gap-2 mb-6 transition-all duration-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div
            className="h-px w-10"
            style={{ background: "#c9a84c" }}
          />
          <span
            className="text-xs tracking-[0.3em] uppercase font-semibold"
            style={{ color: "#c9a84c" }}
          >
            Alta cocina ecuatoriana
          </span>
          <div
            className="h-px w-10"
            style={{ background: "#c9a84c" }}
          />
        </div>

        {/* Main title */}
        <h1
          className={`font-bold leading-none mb-4 transition-all duration-700 delay-150 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ fontFamily: "Georgia, serif" }}
        >
          <span
            className="block text-6xl md:text-8xl lg:text-9xl"
            style={{
              background: "linear-gradient(135deg, #c9a84c, #e5c97e, #a0782a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            RAÍCES
          </span>
          <span className="block text-2xl md:text-3xl font-light tracking-[0.2em] text-stone-200 mt-2 uppercase">
            Restaurante · Cuenca
          </span>
        </h1>

        {/* Divider */}
        <div
          className={`my-8 transition-all duration-700 delay-300 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        >
          <div className="gold-divider" />
        </div>

        {/* Subtitle */}
        <p
          className={`text-lg md:text-xl text-stone-300 leading-relaxed max-w-2xl mx-auto mb-10 transition-all duration-700 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Sabores del Ecuador reinterpretados con técnica contemporánea.
          Ingredientes locales, historias que se sienten en cada bocado.
        </p>

        {/* CTA buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold text-sm px-8 py-4 w-full sm:w-auto">
            <Phone size={16} />
            Reservar ahora
          </a>
          <a href="#menu" className="btn-outline-gold text-sm px-8 py-4 w-full sm:w-auto">
            Ver menú
          </a>
        </div>

        {/* Trust badges */}
        <div
          className={`mt-12 flex flex-wrap gap-6 justify-center items-center transition-all duration-700 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <div className="flex items-center gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#c9a84c" className="star" />
            ))}
            <span className="text-sm text-stone-400 ml-1">5.0 en Google</span>
          </div>
          <div className="w-px h-4 bg-stone-700" />
          <span className="text-sm text-stone-400">
            Mejor restaurante Cuenca 2024 · TripAdvisor
          </span>
          <div className="w-px h-4 bg-stone-700" />
          <span className="text-sm text-stone-400">
            +2,000 reservas exitosas
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#menu"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-stone-400 hover:text-yellow-400 transition-colors"
        aria-label="Scroll down"
      >
        <span className="text-xs tracking-widest uppercase">Explorar</span>
        <ChevronDown
          size={20}
          className="animate-bounce"
          style={{ color: "#c9a84c" }}
        />
      </a>
    </section>
  );
}
