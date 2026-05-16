'use client';

import { useEffect, useRef } from "react";

const contactLinks = [
  { icon: '✉️', label: 'Email', val: 'deepanshukr890@gmail.com', href: 'mailto:deepanshukr890@gmail.com' },
  { icon: '📱', label: 'Phone', val: '+91 87919 56082', href: 'tel:+918791956082' },
  { icon: '💼', label: 'LinkedIn', val: 'linkedin.com/in/deepanshu', href: 'https://www.linkedin.com/in/deepanshu-63343b25a/' },
  { icon: '🐙', label: 'GitHub', val: 'github.com/deepanshu', href: 'https://github.com/11-Deepanshu' },
];

export default function Contact() {
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
    <section ref={sectionRef} id="contact" className="py-20 sm:py-28 px-5 sm:px-8 md:px-20 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 lg:gap-24 items-center">

        {/* Left */}
        <div>
          <div className="flex items-center gap-4 text-accent text-xs font-bold tracking-[0.14em] uppercase mb-4">
            <span className="w-8 h-px bg-accent" />
            Say Hello
          </div>
          <h2 className="font-clash font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight leading-tight mb-4">
            Let's build<br />something.
          </h2>
          <p className="text-muted text-base font-light mb-10 max-w-sm leading-relaxed">
            Open to full-time roles, freelance work, and interesting conversations about frontend and SaaS.
          </p>

          <div className="flex flex-col gap-3">
            {contactLinks.map(link => (
              <a key={link.label} href={link.href}
                className="flex items-center justify-between gap-4 px-4 sm:px-5 py-4
                           bg-card border border-white/[0.06] rounded-xl text-[#f5f7ff] no-underline
                           transition-all duration-200 hover:border-accent hover:bg-accent/[0.03] hover:translate-x-1.5 group">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.06]
                                  flex items-center justify-center text-base">
                    {link.icon}
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-[0.1em] text-muted font-semibold mb-0.5">{link.label}</div>
                    <div className="text-[0.82rem] sm:text-[0.9rem] font-medium break-all">{link.val}</div>
                  </div>
                </div>
                <span className="text-muted2 text-base transition-all duration-200 group-hover:text-accent group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Right: big CTA box */}
        <div className="reveal reveal-d1">
          <div className="bg-card2 border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-14 text-center">
            <div className="font-clash font-bold leading-[0.9] tracking-[-0.04em] mb-6"
                 style={{ fontSize: 'clamp(3rem, 6vw, 5rem)' }}>
              <span className="block text-accent">Let's</span>
              <span className="block" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.15)', color: 'transparent' }}>Work</span>
              <span className="block text-accent">Together</span>
            </div>
            <p className="text-sm text-muted font-light mb-8">Based in Noida · Available for remote</p>
            <a href="mailto:deepanshukr890@gmail.com"
              className="inline-block px-8 py-3.5 bg-accent text-black font-bold text-sm rounded-lg
                         transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1
                         hover:shadow-[3px_3px_0_rgba(255,255,255,0.15)]">
              Send a Message
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
