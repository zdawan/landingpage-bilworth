import { useEffect, useState, useRef, useCallback } from "react";
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

const AUTO_DELAY = 4000;
const extendedSectors = [sectors[sectors.length - 1], ...sectors, sectors[0]];

export default function SectorsCarousel() {
  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const timerRef = useRef(null);

  // Mobile swipe
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

  // Infinite loop fix
  useEffect(() => {
    if (current === extendedSectors.length - 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrent(1);
      }, 500);
    }
    if (current === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrent(extendedSectors.length - 2);
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
    <section className="py-8 md:py-20 bg-white">
      <h2 className="text-center text-2xl md:text-5xl font-medium text-[#0B1B5C] mb-6 md:mb-12">
        Sectors
      </h2>

      {/* Carousel */}
      <div
        className="relative flex items-center justify-center
                   h-[210px] sm:h-[240px] md:h-[520px]
                   overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* LEFT FADE */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-20 h-full
             w-8 sm:w-12 md:w-40
             bg-gradient-to-r
             from-white/70 via-white/40 to-transparent"
        />

        {/* RIGHT FADE */}
        <div
          className="pointer-events-none absolute right-0 top-0 z-20 h-full
             w-8 sm:w-12 md:w-40
             bg-gradient-to-l
             from-white/70 via-white/40 to-transparent"
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

        {extendedSectors.map((sector, index) => {
          const offset = index - current;
          if (Math.abs(offset) > 1) return null;

          return (
            <div
              key={index}
              className={`absolute rounded-[20px] md:rounded-[28px]
                overflow-hidden shadow-xl
                ${isAnimating ? "transition-all duration-500 ease-out" : ""}
                ${
                  offset === 0
                    ? "w-[86%] md:w-[72vw] h-full z-10"
                    : "w-[90%] md:w-[54vw] h-[78%] z-0 opacity-90"
                }
                ${offset === -1 ? "-translate-x-[52%] md:-translate-x-[60%]" : ""}
                ${offset === 1 ? "translate-x-[52%] md:translate-x-[60%]" : ""}
              `}
            >
              <img
                src={sector.image}
                alt={sector.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 text-white">
                <h3 className="text-base md:text-3xl font-semibold mb-1">
                  {sector.title}
                </h3>
                <p className="text-[11px] md:text-base max-w-xl opacity-90 leading-snug">
                  {sector.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="mt-4 md:mt-10 flex justify-center gap-2">
        {sectors.map((_, i) => (
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
