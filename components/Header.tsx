"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Menú", href: "#menu" },
  { label: "Galería", href: "#galeria" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Ubicación", href: "#ubicacion" },
];

const WA_LINK =
  "https://wa.me/593987654321?text=Hola%2C%20deseo%20hacer%20una%20reserva%20en%20Ra%C3%ADces";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-18 flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" onClick={close} className="flex flex-col leading-none">
          <span
            className="text-2xl font-bold tracking-wider"
            style={{
              fontFamily: "Georgia, serif",
              background: "linear-gradient(135deg, #c9a84c, #e5c97e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            RAÍCES
          </span>
          <span className="text-[10px] tracking-[0.35em] text-stone-400 uppercase">
            Restaurante · Cuenca
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs tracking-widest uppercase text-stone-300 hover:text-yellow-400 transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="hidden md:flex btn-gold gap-2 text-xs px-5 py-3">
          <Phone size={13} />
          Reservar
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden text-stone-300 hover:text-yellow-400 transition-colors"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`md:hidden nav-glass border-t border-stone-800 transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-6 py-4 gap-4">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={close}
              className="text-sm tracking-widest uppercase text-stone-300 hover:text-yellow-400 transition-colors py-1"
            >
              {l.label}
            </a>
          ))}
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            onClick={close}
            className="btn-gold mt-2 text-xs"
          >
            <Phone size={13} />
            Reservar por WhatsApp
          </a>
        </nav>
      </div>
    </header>
  );
}
