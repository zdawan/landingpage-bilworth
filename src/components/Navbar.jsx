import { Search } from "lucide-react";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-center relative">
        {/* Center menu */}
        <ul className="flex gap-12 text-base md:text-lg text-white/90">
          <li className="cursor-pointer hover:text-white transition">Home</li>
          <li className="cursor-pointer hover:text-white transition">
            Our Services
          </li>
          <li className="cursor-pointer hover:text-white transition">
            Facilities
          </li>
          <li className="cursor-pointer hover:text-white transition">
            About Us
          </li>
        </ul>

        {/* Search icon */}
        <div className="absolute right-6 text-white/80 hover:text-white cursor-pointer transition">
          <Search size={20} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
