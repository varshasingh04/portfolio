import { Scene } from "@/components/canvas/Scene";
import { Navbar } from "@/components/ui/Navbar";
import { Loader } from "@/components/ui/Loader";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Certifications } from "@/components/sections/Certifications";
import { Resume } from "@/components/sections/Resume";
import { Contact } from "@/components/sections/Contact";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useLenis } from "@/hooks/useLenis";

export default function App() {
  useLenis();
  const active = useActiveSection();

  return (
    <div className="relative w-full min-h-screen grain">
      <Loader />
      <ScrollProgress />
      <Navbar active={active} />

      <Scene section={active} />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Resume />
        <Contact />
      </main>

      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-grid-glow opacity-[0.04]"
        style={{ backgroundSize: "60px 60px" }}
      />
    </div>
  );
}
