import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import designImg from "../assets/01.png";
import medical from "../assets/02.png";
import auto from "../assets/03.png";
import die from "../assets/04.png";

const sectors = [
  {
    image: designImg,
    title: "Aerospace",
    desc: "High-growth technology companies driving innovation and digital transformation.",
  },
  {
    image: medical,
    title: "Medical & Healthcare",
    desc: "Pharmaceuticals, biotech, and healthcare services shaping the future of wellbeing.",
  },
  {
    image: auto,
    title: "Automobile",
    desc: "Traditional and renewable energy sectors powering global economies.",
  },
  {
    image: die,
    title: "Die & Mould",
    desc: "Banks, fintech, and financial institutions enabling capital growth.",
  },
];

export default function SectorsCarousel() {
  const [current, setCurrent] = useState(1);

  const prev = () =>
    setCurrent((prev) => (prev === 0 ? sectors.length - 1 : prev - 1));

  const next = () =>
    setCurrent((prev) => (prev === sectors.length - 1 ? 0 : prev + 1));

  // 🔁 Auto slide
  useEffect(() => {
    const interval = setInterval(next, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-white">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-5xl font-medium text-[#0B1B5C] mb-12">
        Sectors
      </h2>

      {/* Carousel */}
      <div className="relative flex items-center justify-center h-[360px] md:h-[520px] overflow-hidden">
        {sectors.map((sector, index) => {
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
                src={sector.image}
                alt={sector.title}
                loading="lazy"
                className="w-full h-full object-cover scale-[1]"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {/* Text */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-xl md:text-3xl font-semibold mb-2">
                  {sector.title}
                </h3>
                <p className="text-sm md:text-base max-w-xl opacity-90">
                  {sector.desc}
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
          {sectors.map((_, i) => (
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
