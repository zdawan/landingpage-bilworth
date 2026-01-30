import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import cos from "../assets/p01.png";
import spindle from "../assets/p02.png";
import tool from "../assets/p03.png";
import tabel from "../assets/p04.png";

import mig from "../assets/w02.png";
import tig from "../assets/w03.png";
import arc from "../assets/w01 (2).png";

import fusion from "../assets/s01.png";
import solid from "../assets/s02.png";

export default function Facilities() {
  return (
    <section className="py-8 md:py-24 bg-white">
      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-semibold text-[#0B1B5C] mb-16 md:mb-20">
        Facilities
      </h2>

      <FacilityBlock
        title="Machining"
        delay={4000}
        slides={[
          {
            image: cos,
            title: "Cosmos CVM 800",
            desc: "Personalized strategies to grow, protect, and transfer wealth efficiently.",
          },
          {
            image: spindle,
            title: "Spindle Probe",
            desc: "Data-driven investment decisions powered by intelligent insights.",
          },
          {
            image: tool,
            title: "Tool Setter",
            desc: "Proactive risk monitoring to safeguard portfolios in volatile markets.",
          },
          {
            image: tabel,
            title: "Tabletop CNC",
            desc: "Proactive risk monitoring to safeguard portfolios in volatile markets.",
          },
        ]}
      />

      <FacilityBlock
        title="Welding"
        delay={6500}
        slides={[
          {
            image: mig,
            title: "MIG",
            desc: "Diversified access to global markets, sectors, and asset classes.",
          },
          {
            image: tig,
            title: "TIG",
            desc: "Long-term investment opportunities backed by real-time analytics.",
          },
          {
            image: arc,
            title: "ARC",
            desc: "Long-term investment opportunities backed by real-time analytics.",
          },
        ]}
      />

      {/* Software */}
      <div className="mb-24 md:mb-32">
        <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B1B5C] mb-10 md:mb-12">
          Software
        </h3>
        <SoftwareGrid />
      </div>
    </section>
  );
}

/* ---------------- Facility Block ---------------- */

function FacilityBlock({ title, slides, delay }) {
  return (
    <div className="mb-24 md:mb-32">
      <h3 className="text-center text-2xl sm:text-3xl md:text-4xl font-semibold text-[#0B1B5C] mb-10 md:mb-12">
        {title}
      </h3>
      <Carousel slides={slides} delay={delay} />
    </div>
  );
}

/* ---------------- Carousel ---------------- */

function Carousel({ slides, delay }) {
  const extendedSlides = [slides[slides.length - 1], ...slides, slides[0]];

  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const timerRef = useRef(null);

  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const startTimer = useCallback(() => {
    if (!delay) return;
    clearTimer();
    timerRef.current = setInterval(() => {
      setCurrent((p) => p + 1);
    }, delay);
  }, [delay]);

  const prev = () => {
    setCurrent((p) => p - 1);
    startTimer();
  };

  const next = () => {
    setCurrent((p) => p + 1);
    startTimer();
  };

  // Infinite loop correction
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
  }, [current, extendedSlides.length]);

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
    <>
      <div
        className="relative flex items-center justify-center
                   h-[210px] sm:h-[240px] md:h-[520px]
                   overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* LEFT FADE (lighter on mobile) */}
        <div
          className="pointer-events-none absolute left-0 top-0 z-20 h-full
                     w-8 sm:w-12 md:w-40
                     bg-gradient-to-r
                     from-white/70 via-white/40 to-transparent"
        />

        {/* RIGHT FADE (lighter on mobile) */}
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

        {extendedSlides.map((slide, index) => {
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
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

              {offset === 0 && (
                <div className="absolute bottom-4 md:bottom-8 left-4 md:left-8 right-4 md:right-8 text-white">
                  <h4 className="text-base md:text-2xl font-semibold mb-1">
                    {slide.title}
                  </h4>
                  <p className="text-[11px] md:text-base max-w-xl opacity-90 leading-snug">
                    {slide.desc}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="mt-4 md:mt-10 flex justify-center gap-2">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === current - 1 ? "bg-indigo-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
}

/* ---------------- Software Grid ---------------- */

function SoftwareGrid() {
  return (
    <div className="w-[80%] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {[
          { title: "Fusion 360 – CAD / CAM", img: fusion },
          { title: "Solid Edge – CAD", img: solid },
        ].map((item, i) => (
          <div
            key={i}
            className="group relative h-[380px] md:h-[400px] rounded-2xl overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/55 transition duration-500 flex flex-col justify-end p-8">
              <h3 className="text-white text-xl md:text-3xl font-semibold">
                {item.title}
              </h3>
              <p className="text-white/80 text-sm mt-1">
                Technology, innovation & systems integration
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
