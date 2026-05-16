'use client';

import { experience } from "@/constants/Sections";
import { useEffect, useRef } from "react";


export default function Experience() {
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(
      (card): card is HTMLDivElement => card !== null
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="w-full py-20 sm:py-28 px-5 sm:px-8 md:px-20">
      <div className="flex items-center gap-4 text-accent text-xs font-bold tracking-[0.14em] uppercase mb-4">
        <span className="w-8 h-px bg-accent" />
        Career
      </div>
      <h2 className="font-clash font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4">Work Experience</h2>
      <p className="text-muted text-base font-light mb-12 sm:mb-16 max-w-md">Two companies. Real products. Production deployments.</p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {experience.map((job, i) => (
          <div key={job.id}
            ref={(element) => {
              cardRefs.current[i] = element;
            }}
            className={`exp-card reveal reveal-d${i + 1} bg-card border border-white/[0.06] rounded-2xl p-5 sm:p-8
                        transition-all duration-300 hover:border-white/10 hover:-translate-y-1
                        ${job.current ? 'is-current' : ''}`}>

            {/* Top */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
              <div>
                <div className="text-xs font-bold tracking-[0.1em] uppercase text-muted2 mb-1">{job.company}</div>
                <div className="font-clash font-bold text-2xl leading-tight">{job.role}</div>
              </div>
              <span className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-bold tracking-wide border
                ${job.current
                  ? 'bg-accent2/10 text-accent2 border-accent2/20'
                  : 'bg-white/5 text-muted border-white/[0.06]'
                }`}>
                {job.current ? '● Current' : job.period}
              </span>
            </div>

            <div className="text-xs text-muted2 mb-6 font-medium">
              {job.period} · {job.subline}
            </div>

            {/* Points */}
            <ul className="space-y-2.5 mb-6">
              {job.points.map((p, j) => (
                <li key={j} className="text-sm text-muted font-light leading-relaxed pl-5 relative">
                  <span className="absolute left-0 top-[3px] text-accent text-xs">▸</span>
                  {p}
                </li>
              ))}
            </ul>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 pt-5 border-t border-white/[0.06]">
              {job.tags.map(tag => (
                <span key={tag}
                  className="text-xs px-2.5 py-1 rounded font-semibold
                             bg-blue/[0.08] text-blue border border-blue/20">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
