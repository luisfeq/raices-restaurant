"use client";

import { useEffect, useRef } from "react";

/**
 * Adds `.visible` to every `.reveal` element inside the container
 * when they enter the viewport. Cleans up on unmount.
 */
export function useReveal() {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const targets =
      containerRef.current?.querySelectorAll<HTMLElement>(".reveal") ?? [];
    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
