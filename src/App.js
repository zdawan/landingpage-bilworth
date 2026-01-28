import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Facilities from "./components/FacilitiesSection";
import CapabilitiesCarousel from "./components/CapabilitiesCarousel";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SectorsCarousel from "./components/SectorsCarousel";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <SectorsCarousel />
      <CapabilitiesCarousel />
      <Facilities />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
