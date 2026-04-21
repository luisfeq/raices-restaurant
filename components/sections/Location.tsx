"use client";

import { MapPin, Clock, Phone, Mail } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const INFO = [
  {
    icon: MapPin,
    label: "Dirección",
    lines: ["Calle Larga 1-34 y Mariano Cueva", "Centro Histórico, Cuenca, Ecuador"],
  },
  {
    icon: Clock,
    label: "Horario",
    lines: [
      "Lun – Vie: 12:00 – 22:30",
      "Sáb – Dom: 12:00 – 23:00",
      "Reservas hasta 30 min antes del cierre",
    ],
  },
  {
    icon: Phone,
    label: "Teléfono / WhatsApp",
    lines: ["+593 98 765 4321"],
    href: "https://wa.me/593987654321?text=Hola%2C%20deseo%20hacer%20una%20reserva",
  },
  {
    icon: Mail,
    label: "Correo",
    lines: ["reservas@raicescuenca.com"],
    href: "mailto:reservas@raicescuenca.com",
  },
];

export default function Location() {
  const sectionRef = useReveal();

  return (
    <section
      id="ubicacion"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 px-6 md:px-10"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="reveal text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
            style={{ color: "#c9a84c" }}
          >
            Encuéntranos
          </p>
          <h2
            className="reveal reveal-delay-1 text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Visítanos en Cuenca
          </h2>
          <div className="gold-divider reveal reveal-delay-2" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Map */}
          <div
            className="reveal reveal-delay-1 rounded-sm overflow-hidden"
            style={{
              border: "1px solid #2a2a2a",
              height: "420px",
            }}
          >
            <iframe
              title="Ubicación Raíces Restaurante en Cuenca, Ecuador"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.97!2d-78.9983!3d-2.8974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91cd18095610949b%3A0x6defa8b9de02da9b!2sCuenca%2C%20Ecuador!5e0!3m2!1ses!2sec!4v1234567890&style=element:geometry|color:0x1a1a2e&style=element:labels.text.fill|color:0x9a9a9a"
              width="100%"
              height="100%"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 brightness-75"
              style={{ filter: "grayscale(1) contrast(1.2) brightness(0.75)" }}
            />
          </div>

          {/* Info */}
          <div className="reveal reveal-delay-2 flex flex-col gap-6">
            {INFO.map(({ icon: Icon, label, lines, href }) => (
              <div
                key={label}
                className="flex gap-4 p-5 rounded-sm"
                style={{
                  background: "#161616",
                  border: "1px solid #2a2a2a",
                }}
              >
                <div
                  className="w-10 h-10 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: "rgba(201,168,76,0.12)",
                    border: "1px solid rgba(201,168,76,0.25)",
                  }}
                >
                  <Icon size={18} style={{ color: "#c9a84c" }} />
                </div>
                <div>
                  <p className="text-stone-500 text-xs tracking-wider uppercase mb-1">
                    {label}
                  </p>
                  {lines.map((line, i) =>
                    href && i === 0 ? (
                      <a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-stone-200 text-sm hover:text-yellow-400 transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={i} className="text-stone-200 text-sm">
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}

            {/* Reservation CTA */}
            <a
              href="https://wa.me/593987654321?text=Hola%2C%20deseo%20hacer%20una%20reserva%20en%20Ra%C3%ADces"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-sm py-4 mt-2 w-full"
            >
              <Phone size={16} />
              Reservar mesa por WhatsApp
            </a>

            {/* Social note */}
            <p className="text-stone-500 text-xs text-center leading-relaxed">
              Las reservas se confirman en menos de 30 minutos en horario de
              atención. Para grupos de más de 8 personas, contáctanos con
              anticipación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
