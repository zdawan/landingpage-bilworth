import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Facilities from "./components/FacilitiesSection";
import CapabilitiesCarousel from "./components/CapabilitiesCarousel";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CapabilitiesCarousel />
      <Facilities />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
