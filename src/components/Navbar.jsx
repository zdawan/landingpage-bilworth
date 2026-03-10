import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import dlogo from "../assets/logo01.png";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30">
      <div className="relative max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
        {/* LEFT - LOGO */}
        <div
          onClick={() => handleNavigate("/")}
          className="flex items-center cursor-pointer"
        >
          <img src={dlogo} alt="logo" className="h-8 md:h-10" />
        </div>

        {/* CENTER - DESKTOP MENU */}
        <ul className="hidden md:flex gap-12 text-base md:text-lg text-white/90 absolute left-1/2 -translate-x-1/2">
          <li
            onClick={() => handleNavigate("/")}
            className="cursor-pointer hover:text-white transition"
          >
            Home
          </li>

          <li
            onClick={() => handleNavigate("/about")}
            className="cursor-pointer hover:text-white transition"
          >
            About Us
          </li>

          <li
            onClick={() => handleNavigate("/products")}
            className="cursor-pointer hover:text-white transition"
          >
            Products
          </li>

          <li
            onClick={() => handleNavigate("/media")}
            className="cursor-pointer hover:text-white transition"
          >
            Media
          </li>
        </ul>

        {/* RIGHT */}
        <div className="flex items-center gap-6">
          {/* Desktop Search */}
          <div className="hidden md:flex text-white/80 hover:text-white cursor-pointer transition">
            <Search size={20} />
          </div>

          {/* Mobile Search */}
          <div className="md:hidden text-white/80 hover:text-white cursor-pointer transition">
            <Search size={20} />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white/80 hover:text-white transition"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE DROPDOWN */}
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
          <li onClick={() => handleNavigate("/about")}>About Us</li>
          <li onClick={() => handleNavigate("/products")}>Products</li>
          <li onClick={() => handleNavigate("/media")}>Media</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
