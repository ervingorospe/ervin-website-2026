import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
      </main>

      <Footer />
    </>
  );
}
