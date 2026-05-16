export default function Navbar() {
    const links = ['About', 'Experience', 'Projects', 'Skills', 'Contact'];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between gap-4 px-5 sm:px-8 md:px-20 py-4 sm:py-5 border-b border-white/[0.06] bg-[#04050a]/80 backdrop-blur-xl">
            <div className="font-clash font-bold text-xl tracking-tight">
                D<span className="text-accent">.</span>
            </div>

            <ul className="hidden md:flex items-center gap-10 list-none">
                {links.map(l => (
                    <li key={l}>
                        <a href={`#${l.toLowerCase()}`} className="nav-link">{l}</a>
                    </li>
                ))}
            </ul>

            <div className="flex items-center gap-2 text-accent2 text-[0.68rem] sm:text-xs font-semibold tracking-wider
                      bg-accent2/[0.07] border border-accent2/20 rounded-full px-3 sm:px-4 py-1.5 whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-accent2 dot-blink" />
                Open to Work
            </div>
        </nav>
    );
}
