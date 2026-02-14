import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import cos from "../assets/01 final.png";
import spindle from "../assets/02 final.png";
import tool from "../assets/03 final.png";
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
            desc: "Inspection probes enhance quality control by delivering highly precise and reliable measurements throughout the machining process.",
          },
          {
            image: tool,
            title: "Tool Setter",
            desc: "Achieving precise and efficient machining with our automated on-machine tool setters and broken tool detectors",
          },
          {
            image: tabel,
            title: "Granite Surface Table.",
            desc: "Size: 1600x1000x200 mm",
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
  const [isHovered, setIsHovered] = useState(false);
  const [activeSlide, setActiveSlide] = useState(null);
  const timerRef = useRef(null);

  const clearTimer = () => timerRef.current && clearInterval(timerRef.current);

  const startTimer = useCallback(() => {
    clearTimer();
    if (!delay || isHovered) return;
    timerRef.current = setInterval(() => setCurrent((p) => p + 1), delay);
  }, [delay, isHovered]);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer]);

  const restartTimer = () => {
    clearTimer();
    setTimeout(startTimer, 50);
  };
  const prev = () => {
    setCurrent((p) => p - 1);
    restartTimer();
  };
  const next = () => {
    setCurrent((p) => p + 1);
    restartTimer();
  };
  const goTo = (index) => {
    setCurrent(index + 1);
    restartTimer();
  };

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
    if (!isAnimating) requestAnimationFrame(() => setIsAnimating(true));
  }, [isAnimating]);

  return (
    <>
      <div className="relative flex items-center justify-center h-[210px] sm:h-[240px] md:h-[520px] overflow-hidden">
        {/* Arrows */}
        <button
          onClick={prev}
          className="hidden md:flex absolute left-6 z-30 w-12 h-12 rounded-full bg-black/40 items-center justify-center text-white hover:bg-black/60"
        >
          <ChevronLeft size={22} />
        </button>
        <button
          onClick={next}
          className="hidden md:flex absolute right-6 z-30 w-12 h-12 rounded-full bg-black/40 items-center justify-center text-white hover:bg-black/60"
        >
          <ChevronRight size={22} />
        </button>

        {/* Arrow spotlight fades */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-40 z-20 bg-gradient-to-r from-white via-white/70 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-40 z-20 bg-gradient-to-l from-white via-white/70 to-transparent" />

        {extendedSlides.map((slide, index) => {
          const offset = index - current;
          if (Math.abs(offset) > 1) return null;

          return (
            <div
              key={index}
              onMouseEnter={() => offset === 0 && setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className={`absolute rounded-[20px] md:rounded-[28px] overflow-hidden shadow-xl
                ${isAnimating ? "transition-all duration-500 ease-out" : ""}
                ${offset === 0 ? "w-[86%] md:w-[72vw] h-full z-10" : "w-[90%] md:w-[54vw] h-[78%] z-0 opacity-90"}
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
                <>
                  <div className="absolute bottom-6 left-6 right-32 text-white">
                    <h4 className="text-xl md:text-2xl font-semibold">
                      {slide.title}
                    </h4>
                    <p className="text-sm md:text-base opacity-90">
                      {slide.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => setActiveSlide(slide)}
                    className="absolute bottom-6 right-6 bg-white text-[#0B1B5C] px-5 py-2 rounded-full font-medium shadow-lg hover:scale-105"
                  >
                    View More
                  </button>
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* DOTS */}
      <div className="mt-6 flex justify-center gap-3">
        {slides.map((_, i) => {
          const active = i === current - 1;
          return (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`${active ? "w-8 h-3" : "w-3 h-3"} transition-all`}
            >
              <span
                className={`block w-full h-full rounded-full ${active ? "bg-indigo-600" : "bg-gray-300 hover:bg-gray-400"}`}
              />
            </button>
          );
        })}
      </div>

      {/* MODAL */}
      {activeSlide && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden">
            <button
              onClick={() => setActiveSlide(null)}
              className="absolute top-4 right-4 bg-black/70 text-white w-10 h-10 rounded-full"
            >
              ✕
            </button>
            <img
              src={activeSlide.image}
              alt={activeSlide.title}
              className="w-full h-[300px] md:h-[500px] object-contain bg-gray-100"
            />
            <div className="p-6 md:p-8">
              <h3 className="text-2xl md:text-3xl font-semibold text-[#0B1B5C] mb-2">
                {activeSlide.title}
              </h3>
              <p className="text-gray-600">{activeSlide.desc}</p>
            </div>
          </div>
        </div>
      )}
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
            <div className="absolute inset-0 bg-black/35 group-hover:bg-black/55 flex flex-col justify-end p-8">
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
