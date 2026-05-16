export default function Hero() {
  const stats = [
    { val: '1+', label: 'Years of exp.' },
    { val: '5+', label: 'Projects shipped' },
    { val: 'AWS', label: 'Deployed on EC2' },
    { val: 'Live', label: 'Google Marketplace' },
  ];

  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center px-5 sm:px-8 md:px-20 pt-28 sm:pt-32 pb-16 md:pb-20 relative overflow-hidden"
    >
      <div className="noise" />
      <div
        className="absolute w-full rounded-full top-[-100px] right-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,255,71,0.05) 0%, transparent 70%)' }}
      />
      <div
        className="absolute w-full rounded-full bottom-[50px] left-0 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(124,255,212,0.04) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 w-full max-w-full lg:max-w-[calc(100%-260px)]">
        <div className="flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-8 sm:w-10 h-px bg-accent flex-shrink-0" />
          <span className="text-accent text-[0.68rem] sm:text-xs font-bold tracking-[0.14em] uppercase">
            Frontend Developer
          </span>
        </div>

        <h1 className="font-dmSans font-bold leading-[0.92] mb-6 flex flex-wrap text-[clamp(3.2rem,17vw,6rem)] md:text-9xl">
          <span className="block text-text">Deep</span>
          <span className="text-ghost">anshu.</span>
        </h1>

        <div className="inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-1 bg-card border border-white/10 rounded-lg px-4 sm:px-5 py-2.5 mb-7">
          <span className="font-dmSans font-semibold text-accent text-sm sm:text-lg">
            React - Next.js - Node.js
          </span>
          <span className="hidden sm:inline text-muted">-</span>
          <span className="text-muted text-sm font-light">Noida, India</span>
        </div>

        <p className="text-muted text-base sm:text-lg font-light leading-[1.75] sm:leading-[1.8] max-w-[560px] mb-10 sm:mb-12">
          I craft <strong className="text-text font-medium">pixel-perfect interfaces</strong> and ship{' '}
          <strong className="text-text font-medium">production-ready SaaS products</strong> from Figma to deployment.
          Currently building at BeFiSc with real users on Google Workspace Marketplace.
        </p>

        <div className="flex items-stretch sm:items-center gap-3 sm:gap-6 flex-col min-[420px]:flex-row min-[420px]:flex-wrap">
          <a
            href="#projects"
            className="text-center px-6 sm:px-8 py-3.5 bg-accent text-black font-bold text-sm rounded-lg transition-all duration-200 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[3px_3px_0_rgba(255,255,255,0.15)]"
          >
            See My Projects
          </a>
          <a
            href="#contact"
            className="text-center px-6 sm:px-8 py-3.5 bg-transparent text-text border border-white/10 rounded-lg text-sm font-medium transition-all duration-200 hover:border-accent hover:bg-accent/5 hover:-translate-x-0.5 hover:-translate-y-0.5"
          >
            Let's Talk
          </a>
          <div className="hidden sm:flex items-center gap-3 text-muted2 text-xs uppercase tracking-[0.06em]">
            <span className="scroll-pulse w-10 h-px bg-muted2 inline-block" />
            Scroll
          </div>
        </div>
      </div>

      <div className="hidden lg:flex flex-col gap-4 absolute right-20 top-1/2 -translate-y-1/2 z-10">
        {stats.map((s) => (
          <div
            key={s.val}
            className="bg-card border border-white/[0.06] rounded-xl px-6 py-5 text-right min-w-[150px] transition-all duration-200 hover:border-white/10 hover:-translate-x-1"
          >
            <div className="font-dmSans font-bold text-[2.2rem] text-accent leading-none">{s.val}</div>
            <div className="text-muted text-xs mt-1 tracking-wide">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
