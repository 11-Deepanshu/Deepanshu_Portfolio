'use client';

import { projects } from "@/constants/Sections";
import { useEffect, useRef } from "react";

export default function Projects() {
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
            { threshold: 0.2, rootMargin: "0px 0px -80px 0px" }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="projects" className="w-full py-20 sm:py-28 px-5 sm:px-8 md:px-20 bg-[#080c14]">
            <div className="flex items-center gap-4 text-accent text-xs font-bold tracking-[0.14em] uppercase mb-4">
                <span className="w-8 h-px bg-accent" />
                Work
            </div>
            <h2 className="font-clash font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4">Featured Projects</h2>
            <p className="text-muted text-base font-light mb-12 sm:mb-16 max-w-md">Production apps with real users, real data, real complexity.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((proj, i) => (
                    <div key={proj.id}
                        className={`reveal reveal-d${(i % 4) + 1} bg-card border border-white/[0.06] rounded-2xl overflow-hidden
                        flex flex-col transition-all duration-300 hover:border-white/10 hover:-translate-y-1.5`}>

                        {/* Header */}
                        <div className="flex items-start justify-between gap-4 p-5 sm:p-7 sm:pb-5 border-b border-white/[0.06]">
                            <div>
                                <div className="text-xs font-bold tracking-[0.1em] uppercase text-accent2 mb-1">{proj.cat}</div>
                                <div className="font-clash font-bold text-xl sm:text-2xl leading-tight">{proj.name}</div>
                            </div>
                            <div className="font-clash font-bold text-5xl text-white/[0.05] leading-none flex-shrink-0">
                                {proj.num}
                            </div>
                        </div>

                        {/* Body */}
                        <div className="p-5 sm:p-7 flex flex-col gap-4 flex-1">
                            <p className="text-sm text-muted font-light leading-[1.75] flex-1">{proj.desc}</p>
                            <div className="bg-accent/[0.04] border border-accent/10 rounded-lg px-4 py-3
                              text-xs text-accent/70 font-light leading-relaxed">
                                <span className="text-accent mr-1">★</span>{proj.highlight}
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-1.5 px-5 sm:px-7 pb-6">
                            {proj.tags.map(tag => (
                                <span key={tag}
                                    className="text-xs px-2.5 py-1 rounded font-medium
                             bg-white/[0.04] text-muted border border-white/[0.06]
                             hover:text-[#f5f7ff] transition-colors">
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
