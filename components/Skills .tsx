"use client";

import { skillBars, skills } from '@/constants/Sections';
import { useEffect, useRef } from 'react';

export default function Skills() {
    const skillsRef = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const section = skillsRef.current;
        if (!section) return;

        const obs = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                section.querySelectorAll<HTMLElement>('.reveal').forEach((item) => {
                    item.classList.add('visible');
                });

                section.querySelectorAll<HTMLElement>('.skill-fill').forEach(bar => {
                    const w = bar.getAttribute('data-width');
                    setTimeout(() => {
                        bar.style.width = `${w ?? 0}%`;
                    }, 100);
                });

                obs.unobserve(section);
            }
        }, { threshold: 0.3 });

        obs.observe(section);
        return () => obs.disconnect();
    }, []);

    return (
        <section ref={skillsRef} id="skills" className="py-20 sm:py-28 px-5 sm:px-8 md:px-20 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">

                {/* Left: bars */}
                <div>
                    <div className="flex items-center gap-4 text-accent text-xs font-bold tracking-[0.14em] uppercase mb-4">
                        <span className="w-8 h-px bg-accent" />
                        Toolkit
                    </div>
                    <h2 className="font-clash font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4">
                        Skills &<br />Technologies
                    </h2>
                    <p className="text-muted text-base font-light mb-10 sm:mb-12 max-w-sm">
                        JavaScript-first, with full-stack reach and cloud deployment experience.
                    </p>

                    <div className="space-y-6">
                        {skillBars.map((s, i) => (
                            <div key={s.name} className={`reveal reveal-d${(i % 4) + 1}`}>
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-sm font-semibold text-[#f5f7ff]">{s.name}</span>
                                    <span className="text-xs text-muted font-light">{s.level}</span>
                                </div>
                                <div className="h-[3px] bg-card2 rounded-full overflow-hidden">
                                    <div className="skill-fill" data-width={s.pct} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {skills.map((group, i) => (
                        <div key={group.category}
                            className={`reveal reveal-d${(i % 4) + 1} bg-card border border-white/[0.06] rounded-xl p-5
                          transition-all duration-200 hover:border-white/10`}>
                            <div className="text-xs font-bold tracking-[0.1em] uppercase text-accent mb-4">{group.category}</div>
                            <div className="flex flex-col gap-2">
                                {group.items.map(item => (
                                    <div key={item}
                                        className="text-[0.82rem] text-muted font-light py-1.5 border-b border-white/[0.04]
                               last:border-none hover:text-[#f5f7ff] transition-colors cursor-default">
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
