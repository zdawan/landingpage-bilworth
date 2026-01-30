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
const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

export default function CapabilitiesCarousel() {
  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const timerRef = useRef(null);

  // Mobile swipe refs
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = useCallback(() => {
    clearTimer();
    timerRef.current = setInterval(() => {
      setCurrent((p) => p + 1);
    }, AUTO_DELAY);
  }, []);

  const prev = () => {
    setCurrent((p) => p - 1);
    startTimer();
  };

  const next = () => {
    setCurrent((p) => p + 1);
    startTimer();
  };

  // 🔁 Infinite loop correction
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

  useEffect(() => {
    if (!isAnimating) {
      requestAnimationFrame(() => setIsAnimating(true));
    }
  }, [isAnimating]);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer]);

  /* ---------------- MOBILE SWIPE ---------------- */

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;

    if (Math.abs(diff) < 50) return;
    diff > 0 ? next() : prev();
  };

  return (
    <section className="py-10 md:py-20 bg-white">
      <h2 className="text-center text-2xl md:text-5xl font-medium text-[#0B1B5C] mb-6 md:mb-12">
        Capabilities
      </h2>

      {/* Carousel */}
      <div
        className="relative flex items-center justify-center
                   h-[260px] sm:h-[300px] md:h-[520px]
                   overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* 🔥 LEFT FADE */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-20
                     h-full w-16 sm:w-24 md:w-40
                     bg-gradient-to-r from-white via-white/80 to-transparent"
        />

        {/* 🔥 RIGHT FADE */}
        <div
          className="pointer-events-none absolute right-0 top-0 z-20
                     h-full w-16 sm:w-24 md:w-40
                     bg-gradient-to-l from-white via-white/80 to-transparent"
        />

        {/* Desktop arrows */}
        <button
          onClick={prev}
          className="hidden md:flex absolute left-6 z-30
                     w-12 h-12 rounded-full bg-black/40
                     items-center justify-center
                     text-white hover:bg-black/60 transition"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={next}
          className="hidden md:flex absolute right-6 z-30
                     w-12 h-12 rounded-full bg-black/40
                     items-center justify-center
                     text-white hover:bg-black/60 transition"
        >
          <ChevronRight size={22} />
        </button>

        {extendedSlides.map((slide, index) => {
          const offset = index - current;
          if (Math.abs(offset) > 1) return null;

          return (
            <div
              key={index}
              className={`absolute rounded-[24px] md:rounded-[28px]
                overflow-hidden shadow-2xl
                ${isAnimating ? "transition-all duration-500 ease-out" : ""}
                ${
                  offset === 0
                    ? "w-[88%] md:w-[72vw] h-full z-10"
                    : "w-[92%] md:w-[54vw] h-[82%] z-0 opacity-90"
                }
                ${offset === -1 ? "-translate-x-[55%] md:-translate-x-[60%]" : ""}
                ${offset === 1 ? "translate-x-[55%] md:translate-x-[60%]" : ""}
              `}
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-5 md:bottom-8 left-5 md:left-8 right-5 md:right-8 text-white">
                <h3 className="text-lg md:text-3xl font-semibold mb-1 md:mb-2">
                  {slide.title}
                </h3>
                <p className="text-xs md:text-base max-w-xl opacity-90">
                  {slide.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="mt-5 md:mt-10 flex justify-center gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === current - 1 ? "bg-indigo-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
