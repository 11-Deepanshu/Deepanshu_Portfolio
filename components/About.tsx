'use client';

import { aboutCards } from "@/constants/Sections";
import { useEffect, useRef } from "react";

const chips = ['Figma → Code', 'AWS EC2', 'Google Marketplace', 'WebSocket', 'Intern → Full-Time', 'Mentored Juniors'];

export default function About() {
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
        <section id="about" className="w-full py-20 sm:py-28 px-5 sm:px-8 md:px-20 bg-[#080c14]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-start">

                {/* Left */}
                <div>
                    <div className="flex items-center gap-4 text-accent text-xs font-bold tracking-[0.14em] uppercase mb-4">
                        <span className="w-8 h-px bg-accent" />
                        Who I Am
                    </div>
                    <h2 className="font-clash font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-[1.05] sm:leading-[1.0] mb-5">
                        Building things people<br />actually use.
                    </h2>
                    <p className="text-muted text-base font-light mb-10 max-w-md">Driven by curiosity, shipped by discipline.</p>

                    <div className="space-y-4 text-muted text-[0.94rem] font-light leading-[1.8]">
                        <p>
                            I'm a <strong className="text-[#f5f7ff] font-medium">Frontend Developer</strong> based in Noida — currently at BeFiSc Pvt Ltd. where I went from intern
                            to full-time contributor by consistently owning and delivering complete features independently.
                        </p>
                        <p>
                            My work spans <strong className="text-[#f5f7ff] font-medium">pixel-perfect UIs</strong>,{' '}
                            <strong className="text-[#f5f7ff] font-medium">SaaS dashboards with RBAC</strong>,{' '}
                            <strong className="text-[#f5f7ff] font-medium">WebSocket integrations</strong>, and even a{' '}
                            <strong className="text-[#f5f7ff] font-medium">Google Workspace Add-on live on the Marketplace</strong>.
                        </p>
                        <p>
                            Previously at Thixpro Technologies, I worked full-stack — shipping web apps from React frontend to
                            Node.js backend, deploying on <strong className="text-[#f5f7ff] font-medium">AWS EC2</strong>, and integrating gaming APIs for interactive experiences.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-8">
                        {chips.map(c => (
                            <span key={c}
                                className="px-3 py-1.5 rounded-md text-xs font-semibold text-accent tracking-wide
                           bg-accent/[0.07] border border-accent/20">
                                {c}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Right: cards */}
                <div className="flex flex-col gap-4">
                    {aboutCards.map((card, i) => (
                        <div key={card.title}
                            ref={(element) => {
                                cardRefs.current[i] = element;
                            }}
                            className={`reveal reveal-d${i + 1} bg-card border border-white/[0.06] rounded-2xl p-5 sm:p-6
                          flex items-start gap-4 transition-all duration-250
                          hover:border-white/10 hover:translate-x-1.5`}>
                            <div className="w-11 h-11 rounded-xl bg-white/[0.04] border border-white/[0.06]
                              flex items-center justify-content text-xl flex-shrink-0 flex items-center justify-center">
                                {card.icon}
                            </div>
                            <div>
                                <div className="text-[0.9rem] font-bold text-[#f5f7ff] mb-1">{card.title}</div>
                                <div className="text-[0.82rem] text-muted font-light leading-relaxed">{card.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
