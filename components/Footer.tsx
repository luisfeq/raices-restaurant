import { Phone, Mail, MapPin } from "lucide-react";

const WA_LINK =
  "https://wa.me/593987654321?text=Hola%2C%20deseo%20hacer%20una%20reserva%20en%20Ra%C3%ADces";

const LINKS = [
  { label: "Inicio", href: "#inicio" },
  { label: "Menú", href: "#menu" },
  { label: "Galería", href: "#galeria" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Ubicación", href: "#ubicacion" },
];

export default function Footer() {
  return (
    <footer
      className="py-16 px-6 md:px-10"
      style={{
        background: "#080808",
        borderTop: "1px solid #2a2a2a",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <span
                className="text-3xl font-bold tracking-wider block"
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
              <span className="text-[10px] tracking-[0.35em] text-stone-500 uppercase">
                Restaurante · Cuenca, Ecuador
              </span>
            </div>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Cocina ecuatoriana contemporánea en el corazón del Centro Histórico
              de Cuenca. Patrimonio de la Humanidad, sabores de siempre.
            </p>

            {/* Socials */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://instagram.com/raicescuenca"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm flex items-center justify-center transition-colors hover:bg-stone-700"
                style={{ background: "#1e1e1e", border: "1px solid #2a2a2a" }}
                aria-label="Instagram"
              >
                {/* Instagram SVG */}
              <svg viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4.5"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="#c9a84c" stroke="none"/>
              </svg>
              </a>
              <a
                href="https://facebook.com/raicescuenca"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm flex items-center justify-center transition-colors hover:bg-stone-700"
                style={{ background: "#1e1e1e", border: "1px solid #2a2a2a" }}
                aria-label="Facebook"
              >
              {/* Facebook SVG */}
              <svg viewBox="0 0 24 24" fill="#c9a84c" className="w-4 h-4" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-xs tracking-widest uppercase mb-5 font-semibold"
              style={{ color: "#c9a84c" }}
            >
              Navegación
            </h3>
            <ul className="flex flex-col gap-3">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-stone-400 text-sm hover:text-yellow-400 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-xs tracking-widest uppercase mb-5 font-semibold"
              style={{ color: "#c9a84c" }}
            >
              Contacto
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3 items-start">
                <MapPin size={14} style={{ color: "#c9a84c" }} className="mt-0.5 flex-shrink-0" />
                <span className="text-stone-400 text-sm leading-snug">
                  Calle Larga 1-34 y Mariano Cueva<br />
                  Centro Histórico, Cuenca
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={14} style={{ color: "#c9a84c" }} className="flex-shrink-0" />
                <a
                  href={WA_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-400 text-sm hover:text-yellow-400 transition-colors"
                >
                  +593 98 765 4321
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={14} style={{ color: "#c9a84c" }} className="flex-shrink-0" />
                <a
                  href="mailto:reservas@raicescuenca.com"
                  className="text-stone-400 text-sm hover:text-yellow-400 transition-colors"
                >
                  reservas@raicescuenca.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-stone-600"
          style={{ borderTop: "1px solid #1e1e1e" }}
        >
          <p>© {new Date().getFullYear()} Raíces Restaurante. Todos los derechos reservados.</p>
          <p>Diseño web — Cuenca, Ecuador</p>
        </div>
      </div>
    </footer>
  );
}
