'use client';

import { useEffect, useRef } from "react";

export default function Education() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.querySelectorAll<HTMLElement>(".reveal").forEach((item) => {
            item.classList.add("visible");
          });
          observer.unobserve(section);
        }
      },
      { threshold: 0.25, rootMargin: "0px 0px -80px 0px" }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="education" className="py-20 sm:py-28 px-5 sm:px-8 md:px-20 bg-[#080c14] w-full">
      <div className="flex items-center gap-4 text-accent text-xs font-bold tracking-[0.14em] uppercase mb-4">
        <span className="w-8 h-px bg-accent" />
        Background
      </div>
      <h2 className="font-clash font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4">Education</h2>
      <p className="text-muted text-base font-light mb-12 sm:mb-16 max-w-md">Computer Science engineering foundation from MIET Meerut.</p>

      <div className="reveal reveal-d1 bg-card border border-white/[0.06] rounded-2xl p-5 sm:p-10 max-w-3xl
                      transition-all duration-200 hover:border-white/10
                      grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-8 items-center">

        {/* Ghost year */}
        <div className="font-clash font-bold text-[3.5rem] leading-none text-white/[0.05] hidden md:block">
          2025
        </div>

        {/* Info */}
        <div>
          <div className="text-xs font-bold tracking-[0.08em] uppercase text-accent mb-2">
            MIET — Meerut Institute of Engineering & Technology
          </div>
          <div className="font-clash font-bold text-2xl sm:text-3xl leading-tight mb-2">
            B.Tech — Computer Science<br/>& Engineering
          </div>
          <div className="text-sm text-muted font-light">Meerut, Uttar Pradesh · 2021 – 2025</div>
        </div>

        {/* Grade */}
        <div className="text-left md:text-right">
          <div className="font-clash font-bold text-[2.5rem] text-accent2 leading-none">7.76</div>
          <div className="text-xs text-muted mt-1 tracking-wide">CGPA / 10</div>
        </div>

      </div>
    </section>
  );
}
