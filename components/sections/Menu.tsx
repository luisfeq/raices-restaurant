"use client";

import { useState } from "react";
import Image from "next/image";
import { menuItems, CATEGORIES, type Category } from "@/data/menu";
import { useReveal } from "@/hooks/useReveal";

export default function Menu() {
  const [active, setActive] = useState<Category>("Principales");
  const sectionRef = useReveal();
  const filtered = menuItems.filter((m) => m.category === active);

  return (
    <section
      id="menu"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="py-24 px-6 md:px-10 max-w-7xl mx-auto"
    >
      {/* Heading — uses reveal (IntersectionObserver, static elements) */}
      <div className="text-center mb-14">
        <p
          className="reveal text-xs tracking-[0.3em] uppercase mb-3 font-semibold"
          style={{ color: "#c9a84c" }}
        >
          Carta de temporada
        </p>
        <h2
          className="reveal reveal-delay-1 text-4xl md:text-5xl font-bold mb-4"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Nuestro Menú
        </h2>
        <div className="gold-divider reveal reveal-delay-2" />
        <p className="reveal reveal-delay-2 text-stone-400 max-w-xl mx-auto leading-relaxed text-sm">
          Ingredientes de temporada seleccionados en mercados locales de Cuenca
          y comunidades del Azuay. Carta actualizada cada trimestre.
        </p>
      </div>

      {/* Category tabs */}
      <div className="reveal reveal-delay-3 flex flex-wrap gap-3 justify-center mb-12">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`tab-btn ${active === cat ? "tab-active" : ""}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/*
        key={active} forces React to unmount/remount the grid when the
        category changes, so the CSS card-in animation re-triggers on
        every tab switch without needing IntersectionObserver.
      */}
      <div
        key={active}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((item, idx) => (
          <MenuCard key={item.id} item={item} index={idx} />
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-14 reveal">
        <p className="text-stone-400 text-sm mb-6">
          Menú completo disponible en el restaurante o consultando por WhatsApp.
        </p>
        <a
          href="https://wa.me/593987654321?text=Hola%2C%20quisiera%20ver%20el%20men%C3%BA%20completo"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-outline-gold text-xs px-8 py-3.5"
        >
          Ver carta completa
        </a>
      </div>
    </section>
  );
}

function MenuCard({
  item,
  index,
}: {
  item: (typeof menuItems)[0];
  index: number;
}) {
  return (
    <article
      className="card-in card-hover rounded-sm overflow-hidden"
      style={{
        background: "#161616",
        border: "1px solid #2a2a2a",
        // Stagger each card by 80 ms so they cascade in
        animationDelay: `${index * 80}ms`,
      }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 hover:scale-105"
          // First card in the default category may be LCP; mark it eager
          loading={index === 0 ? "eager" : "lazy"}
          priority={index === 0}
        />
        {item.badge && (
          <span
            className="absolute top-3 left-3 text-[10px] tracking-widest uppercase font-bold px-3 py-1 rounded-sm"
            style={{
              background: "linear-gradient(135deg, #c9a84c, #e5c97e)",
              color: "#0d0d0d",
            }}
          >
            {item.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3 mb-2">
          <h3
            className="font-semibold text-stone-100 leading-snug text-base"
            style={{ fontFamily: "Georgia, serif" }}
          >
            {item.name}
          </h3>
          <span
            className="text-base font-bold whitespace-nowrap"
            style={{ color: "#c9a84c" }}
          >
            ${item.price}
          </span>
        </div>
        <p className="text-stone-400 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>
    </article>
  );
}
