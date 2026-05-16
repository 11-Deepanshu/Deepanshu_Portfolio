import { marqueeItems } from "@/constants/Sections";


export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="w-full border-t border-b border-white/6 py-4 overflow-hidden bg-[#080c14]">
      <div className="marquee-track gap-0">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-6 px-8 text-xs font-semibold tracking-[0.08em] uppercase text-muted2">
            <span className="text-accent text-xl">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}