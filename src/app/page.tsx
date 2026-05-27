import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border">
        <p>&copy; {new Date().getFullYear()} Khun Ye Aung. All rights reserved.</p>
      </footer>
    </>
  );
}
