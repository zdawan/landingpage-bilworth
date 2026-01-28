import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import design from "../assets/c01.png";
import cam from "../assets/c04.png";
import welding from "../assets/c06.png";
import cost from "../assets/c02.png";
import machining from "../assets/c05.png";
import product from "../assets/c03.png";

const slides = [
  {
    image: design,
    title: "Design & Engineering",
    desc: "Personalized strategies to grow, protect, and transfer wealth efficiently.",
  },
  {
    image: cam,
    title: "CAM Programming",
    desc: "Data-driven investment decisions powered by intelligent insights.",
  },
  {
    image: welding,
    title: "Welding",
    desc: "Proactive risk monitoring to safeguard portfolios in volatile markets.",
  },
  {
    image: cost,
    title: "Cost Estimation & Planning",
    desc: "Diversified access to global markets, sectors, and asset classes.",
  },
  {
    image: machining,
    title: "Precision Machining",
    desc: "Diversified access to global markets, sectors, and asset classes.",
  },
  {
    image: product,
    title: "Product Developemnt",
    desc: "Diversified access to global markets, sectors, and asset classes.",
  },
];

export default function CapabilitiesCarousel() {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  // 🔁 Auto slide
  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-5xl font-medium text-[#0B1B5C] mb-12">
        Capabilities
      </h2>

      {/* Carousel */}
      <div className="relative flex items-center justify-center h-[360px] md:h-[520px] overflow-hidden">
        {slides.map((slide, index) => {
          const offset = index - current;
          if (Math.abs(offset) > 1) return null;

          return (
            <div
              key={index}
              className={`absolute transition-all duration-500 ease-out rounded-[28px] overflow-hidden shadow-2xl
                ${
                  offset === 0
                    ? "w-[92%] md:w-[72vw] h-full z-20"
                    : "w-[95%] md:w-[54vw] h-[82%] z-10 opacity-90"
                }
                ${offset === -1 ? "-translate-x-[60%]" : ""}
                ${offset === 1 ? "translate-x-[60%]" : ""}
              `}
            >
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="w-full h-full object-cover scale-[1.03]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Text Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-xl md:text-3xl font-semibold mb-2">
                  {slide.title}
                </h3>
                <p className="text-sm md:text-base max-w-xl opacity-90">
                  {slide.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Controls */}
      <div className="mt-10 flex items-center justify-center gap-6">
        <button
          onClick={prev}
          className="text-gray-400 hover:text-gray-700 transition"
        >
          <ChevronLeft size={22} />
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition ${
                i === current ? "bg-indigo-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="text-gray-400 hover:text-gray-700 transition"
        >
          <ChevronRight size={22} />
        </button>
      </div>
    </section>
  );
}
