import About from "@/components/About";
import Contact from "@/components/Contact ";
import Education from "@/components/Education ";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects ";
import Skills from "@/components/Skills ";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 w-full overflow-x-hidden bg-zinc-50 font-inter dark:bg-black">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}
