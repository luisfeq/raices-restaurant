import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Menu from "@/components/sections/Menu";
import Gallery from "@/components/sections/Gallery";
import Testimonials from "@/components/sections/Testimonials";
import Location from "@/components/sections/Location";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Menu />
        <Gallery />
        <Testimonials />
        <Location />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
