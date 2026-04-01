import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Skills from "@/components/sections/Skills";
import Tools from "@/components/sections/Tools";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Skills />
        <Tools />
      </main>

      <Footer />
    </>
  );
}
