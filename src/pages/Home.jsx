import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import SectorsCarousel from "../components/SectorsCarousel";
import CapabilitiesCarousel from "../components/CapabilitiesCarousel";
import FacilitiesSection from "../components/FacilitiesSection";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      <SectorsCarousel />
      <CapabilitiesCarousel />
      <FacilitiesSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default Home;
