import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false); // close mobile menu after click
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30">
      <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between relative">
        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white/80 hover:text-white transition"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-12 text-base md:text-lg text-white/90 absolute left-1/2 -translate-x-1/2">
          <li
            onClick={() => handleNavigate("/")}
            className="cursor-pointer hover:text-white transition"
          >
            Home
          </li>

          <li
            onClick={() => handleNavigate("/services")}
            className="cursor-pointer hover:text-white transition"
          >
            Our Services
          </li>

          <li
            onClick={() => handleNavigate("/products")}
            className="cursor-pointer hover:text-white transition"
          >
            Products
          </li>

          <li
            onClick={() => handleNavigate("/about")}
            className="cursor-pointer hover:text-white transition"
          >
            About Us
          </li>
        </ul>

        {/* Search icon */}
        <div className="text-white/80 hover:text-white cursor-pointer transition">
          <Search size={20} />
        </div>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden absolute top-full left-0 w-full
          bg-black/70 backdrop-blur-xl
          transition-all duration-300
          ${
            open
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
      >
        <ul className="flex flex-col gap-6 py-8 px-6 text-white/90 text-lg">
          <li onClick={() => handleNavigate("/")}>Home</li>
          <li onClick={() => handleNavigate("/services")}>Our Services</li>
          <li onClick={() => handleNavigate("/products")}>Products</li>
          <li onClick={() => handleNavigate("/about")}>About Us</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
