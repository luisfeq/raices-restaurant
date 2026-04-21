"use client";

import Image from "next/image";
import { galleryImages } from "@/data/gallery";
import { useReveal } from "@/hooks/useReveal";

export default function Gallery() {
  const sectionRef = useReveal();

  return (
    <section
      id="galeria"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 px-6 md:px-10"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <p
            className="reveal text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
            style={{ color: "#c9a84c" }}
          >
            Un vistazo a nuestra experiencia
          </p>
          <h2
            className="reveal reveal-delay-1 text-4xl md:text-5xl font-bold mb-4"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Galería
          </h2>
          <div className="gold-divider reveal reveal-delay-2" />
          <p className="reveal reveal-delay-2 text-stone-400 max-w-md mx-auto text-sm leading-relaxed">
            Cada espacio de Raíces fue diseñado para crear momentos
            inolvidables. Iluminación cálida, detalles artesanales y
            una atmósfera íntima.
          </p>
        </div>

        {/* Masonry-inspired grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[200px]">
          {galleryImages.map((img, idx) => (
            <div
              key={img.id}
              className={`reveal reveal-delay-${Math.min(idx + 1, 6)} gallery-item relative rounded-sm overflow-hidden group cursor-pointer ${
                img.span === "wide"
                  ? "col-span-2"
                  : img.span === "tall"
                  ? "row-span-2"
                  : ""
              }`}
              style={{ border: "1px solid #2a2a2a" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4"
                style={{ background: "linear-gradient(to top, rgba(13,13,13,0.8) 0%, transparent 60%)" }}>
                <p className="text-stone-200 text-xs leading-snug">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-10 reveal">
          <p className="text-stone-400 text-sm mb-4">
            Síguenos y comparte tu experiencia
          </p>
          <a
            href="https://instagram.com/raicescuenca"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-xs px-8 py-3.5 inline-flex items-center gap-2"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            @raicescuenca
          </a>
        </div>
      </div>
    </section>
  );
}
