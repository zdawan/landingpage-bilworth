import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import designImg from "../assets/01.png";
import medical from "../assets/02.png";
import auto from "../assets/03.png";
import die from "../assets/04.png";

const sectors = [
  { image: designImg, title: "Aerospace" },
  { image: medical, title: "Medical & Healthcare" },
  { image: auto, title: "Automobile" },
  { image: die, title: "Die & Mould" },
];

export default function SectorsCarousel() {
  const extendedSectors = [sectors[sectors.length - 1], ...sectors, sectors[0]];

  const [current, setCurrent] = useState(1);
  const [isAnimating, setIsAnimating] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSlide, setActiveSlide] = useState(null);

  const timerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isSwiping = useRef(false);

  const AUTO_DELAY = 4000;

  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startTimer = useCallback(() => {
    clearTimer();
    if (isHovered) return;
    timerRef.current = setInterval(() => {
      setCurrent((p) => p + 1);
    }, AUTO_DELAY);
  }, [isHovered]);

  useEffect(() => {
    startTimer();
    return clearTimer;
  }, [startTimer]);

  const restartTimer = () => {
    clearTimer();
    setTimeout(() => startTimer(), 50);
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

  /* Swipe */

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    isSwiping.current = false;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
    const distance = Math.abs(touchStartX.current - touchEndX.current);
    if (distance > 10) isSwiping.current = true;
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 60;

    if (!isSwiping.current) return;

    if (distance > threshold) next();
    else if (distance < -threshold) prev();
  };

  /* Infinite loop */

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
  }, [current, extendedSectors.length]);

  useEffect(() => {
    if (!isAnimating) {
      requestAnimationFrame(() => setIsAnimating(true));
    }
  }, [isAnimating]);

  return (
    <>
      <section className="py-8 md:py-20 bg-white">
        <h2 className="text-center text-2xl md:text-5xl font-semibold text-[#0B1B5C] mb-10 md:mb-16">
          Sectors
        </h2>

        <div
          className="relative flex items-center justify-center h-[210px] sm:h-[240px] md:h-[520px] overflow-hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* ✅ LEFT EDGE FADE */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-full 
            w-8 md:w-32 z-20
            bg-gradient-to-r from-white via-white/60 md:via-white/80 to-transparent"
          />

          {/* ✅ RIGHT EDGE FADE */}
          <div
            className="pointer-events-none absolute right-0 top-0 h-full 
            w-8 md:w-32 z-20
            bg-gradient-to-l from-white via-white/60 md:via-white/80 to-transparent"
          />

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

          {extendedSectors.map((sector, index) => {
            const offset = index - current;
            if (Math.abs(offset) > 1) return null;

            return (
              <div
                key={index}
                onMouseEnter={() => offset === 0 && setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className={`absolute rounded-[20px] md:rounded-[28px] overflow-hidden shadow-xl
                ${isAnimating ? "transition-all duration-500 ease-out" : ""}
                ${
                  offset === 0
                    ? "w-[86%] md:w-[72vw] h-full z-10 opacity-100 scale-100"
                    : "w-[90%] md:w-[54vw] h-[78%] z-0 opacity-45 md:opacity-50 scale-[0.9]"
                }
                ${offset === -1 ? "-translate-x-[52%] md:-translate-x-[60%]" : ""}
                ${offset === 1 ? "translate-x-[52%] md:translate-x-[60%]" : ""}
                `}
              >
                <img
                  src={sector.image}
                  alt={sector.title}
                  className={`w-full h-full object-cover transition duration-500
                  ${
                    offset === 0
                      ? "brightness-100"
                      : "brightness-75 md:brightness-[.80]"
                  }`}
                />

                {/* ❌ Removed full image overlay */}

                {offset === 0 && (
                  <>
                    {/* Bottom Dark Gradient */}
                    <div
                      className="absolute bottom-0 left-0 w-full h-24 md:h-40
                      bg-gradient-to-t from-black/80 via-black/50 to-transparent"
                    />
                    <div className="absolute bottom-5 left-5 right-28 md:right-32 text-white">
                      <h4 className="text-base md:text-2xl font-semibold">
                        {sector.title}
                      </h4>
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveSlide(sector);
                      }}
                      className="absolute bottom-5 right-5 md:bottom-6 md:right-6 bg-white text-[#0B1B5C] px-3 py-1.5 md:px-5 md:py-2 text-xs md:text-base rounded-full font-medium shadow-lg hover:scale-105"
                    >
                      View More
                    </button>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-3">
          {sectors.map((_, i) => {
            const active = i === current - 1;
            return (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`${active ? "w-8 h-3" : "w-3 h-3"} transition-all`}
              >
                <span
                  className={`block w-full h-full rounded-full ${
                    active ? "bg-indigo-600" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              </button>
            );
          })}
        </div>
      </section>

      {/* Modal (unchanged) */}
      {activeSlide && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative bg-white rounded-2xl max-w-4xl w-full overflow-hidden">
            <button
              onClick={() => setActiveSlide(null)}
              className="absolute top-4 right-4 bg-black/70 text-white w-10 h-10 rounded-full"
            >
              ✕
            </button>

            <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="w-full h-full object-cover brightness-[0.85] md:brightness-[0.8]"
              />

              {/* ✅ Bottom Gradient */}
              <div
                className="absolute bottom-0 left-0 w-full h-32 md:h-40
              bg-gradient-to-t from-black/80 via-black/50 to-transparent pointer-events-none"
              />

              {/* ✅ Title on Image */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-2xl md:text-3xl font-semibold drop-shadow-md">
                  {activeSlide.title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
