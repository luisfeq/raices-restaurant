"use client";

import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { useReveal } from "@/hooks/useReveal";

export default function Testimonials() {
  const sectionRef = useReveal();

  return (
    <section
      id="testimonios"
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
            Lo que dicen nuestros comensales
          </p>
          <h2
            className="reveal reveal-delay-1 text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Experiencias Reales
          </h2>
          <div className="gold-divider reveal reveal-delay-2" />
        </div>

        {/* Stats */}
        <div className="reveal reveal-delay-2 grid grid-cols-3 gap-4 max-w-2xl mx-auto mb-16">
          {[
            { value: "5.0", label: "Calificación Google" },
            { value: "98%", label: "Recomendarían" },
            { value: "+500", label: "Reseñas verificadas" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold mb-1"
                style={{
                  background: "linear-gradient(135deg, #c9a84c, #e5c97e)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontFamily: "Georgia, serif",
                }}
              >
                {s.value}
              </div>
              <div className="text-stone-400 text-xs tracking-wide">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <article
              key={t.id}
              className={`reveal reveal-delay-${Math.min(idx + 1, 6)} card-hover rounded-sm p-6 flex flex-col gap-4`}
              style={{
                background: "#161616",
                border: "1px solid #2a2a2a",
              }}
            >
              {/* Quote icon */}
              <Quote
                size={28}
                style={{ color: "#c9a84c", opacity: 0.5 }}
                className="flex-shrink-0"
              />

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={13} fill="#c9a84c" className="star" />
                ))}
              </div>

              {/* Text */}
              <blockquote className="text-stone-300 text-sm leading-relaxed flex-1">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-stone-800">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #c9a84c, #a0782a)",
                    color: "#0d0d0d",
                  }}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-stone-200 text-sm font-semibold">
                    {t.name}
                  </div>
                  <div className="text-stone-500 text-xs">
                    {t.origin} · {t.date}
                  </div>
                </div>
                <div className="ml-auto">
                  <span
                    className="text-[9px] tracking-widest uppercase font-semibold px-2 py-0.5 rounded-sm"
                    style={{
                      background: "rgba(201,168,76,0.1)",
                      color: "#c9a84c",
                      border: "1px solid rgba(201,168,76,0.2)",
                    }}
                  >
                    {t.via}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
