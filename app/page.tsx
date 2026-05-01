import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Skills from "@/components/sections/Skills";
import Tools from "@/components/sections/Tools";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />

      <main className="mx-auto max-w-480 overflow-hidden">
        <Hero />
        <About />
        <Skills />
        <Tools />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
