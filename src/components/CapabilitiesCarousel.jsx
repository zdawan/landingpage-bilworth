import { useEffect, useState, useRef, useCallback } from "react";
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
    title: "Product Development",
    desc: "Diversified access to global markets, sectors, and asset classes.",
  },
];

const AUTO_DELAY = 5000;

// 👇 CLONED SLIDES FOR INFINITE LOOP
const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

export default function CapabilitiesCarousel() {
  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const timerRef = useRef(null);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setInterval(() => {
      setCurrent((prev) => prev + 1);
    }, AUTO_DELAY);
  }, []);

  const prev = () => {
    setCurrent((prev) => prev - 1);
    startTimer();
  };

  const next = () => {
    setCurrent((prev) => prev + 1);
    startTimer();
  };

  // 🔁 Seamless boundary correction
  useEffect(() => {
    if (current === extendedSlides.length - 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrent(1);
      }, 500);
    }

    if (current === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrent(extendedSlides.length - 2);
      }, 500);
    }
  }, [current]);

  // Re-enable animation after snap
  useEffect(() => {
    if (!isAnimating) {
      requestAnimationFrame(() => setIsAnimating(true));
    }
  }, [isAnimating]);

  // Autoplay start
  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer]);

  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-2xl md:text-5xl font-medium text-[#0B1B5C] mb-12">
        Capabilities
      </h2>

      {/* Carousel */}
      <div className="relative flex items-center justify-center h-[360px] md:h-[520px] overflow-hidden">
        {extendedSlides.map((slide, index) => {
          const offset = index - current;
          if (Math.abs(offset) > 1) return null;

          return (
            <div
              key={index}
              className={`absolute rounded-[28px] overflow-hidden shadow-2xl
                ${isAnimating ? "transition-all duration-500 ease-out" : ""}
                ${
                  offset === 0
                    ? "w-[92%] md:w-[72vw] h-full z-20"
                    : "w-[95%] md:w-[54vw] h-[82%] z-10 opacity-90"
                }
                ${offset === -1 ? "-translate-x-[60%]" : ""}
                ${offset === 1 ? "translate-x-[60%]" : ""}
              `}
            >
              <img
                src={slide.image}
                alt={slide.title}
                loading="lazy"
                className="w-full h-full object-cover scale-[1.03]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

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

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full transition ${
                i === current - 1 ? "bg-indigo-500" : "bg-gray-300"
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
