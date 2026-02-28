import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Facilities from "./components/FacilitiesSection";
import CapabilitiesCarousel from "./components/CapabilitiesCarousel";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SectorsCarousel from "./components/SectorsCarousel";

// New Pages
import Products from "./pages/Products";
import About from "./pages/About";
import Services from "./pages/Services";

function Home() {
  return (
    <>
      <Hero />
      <SectorsCarousel />
      <CapabilitiesCarousel />
      <Facilities />
      <ContactSection />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
