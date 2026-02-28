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
            desc: "High precision vertical machining center.",
            modalDesc:
              "The Cosmos CVM 800 is engineered for high-accuracy machining operations, delivering stability, speed, and precision for industrial applications.",

            specs: {
              table: [
                { label: "Table size", value: "1000 x 500 mm" },
                { label: "Table loading capacity", value: "600 kgs" },
              ],
              spindle: [
                { label: "Motor", value: "11 / 15 / 18.5 kW" },
                { label: "Speed", value: "10,000 rpm" },
                { label: "Spindle nose", value: "BBT # 40" },
              ],
            },
          },
          {
            image: spindle,
            title: "Spindle Probe",
            desc: "Accurate inspection probe measurements.",
            modalDesc:
              "The spindle probe system provides precise measurement capabilities directly from the machine spindle. It enables real-time inspection and quality control during machining processes, ensuring tight tolerances and reducing the need for manual measurements. Automation improves efficiency by reducing manual intervention and minimizing human error. Real-time feedback enables better process control, preventing parts from drifting out of tolerance. Early detection of deviations reduces scrap, lowers costs, and increases manufacturing flexibility",
          },
          {
            image: tool,
            title: "Tool Setter",
            desc: "Automatic tool calibration system.",
            modalDesc:
              "Achieving precise and efficient machining with our automated on-machine tool setters and broken tool detectors. The tool setter is an automated system designed to calibrate and measure cutting tools with high precision. It ensures accurate tool length and diameter measurements, which are critical for maintaining machining accuracy and consistency. By automating the tool calibration process, it reduces setup time, minimizes human error, and enhances overall productivity in manufacturing operations.",
          },
          {
            image: tabel,
            title: "Granite Surface Table.",
            desc: "Size: 1600x1000x200 mm",
            modalDesc:
              "The granite surface table provides a stable and flat reference surface for precision measurement and inspection tasks. Made from high-quality granite, it offers excellent rigidity and vibration damping properties, ensuring accurate measurements and reliable results in quality control processes. Measurements: 1600x1000x200 mm",
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
            desc: "Metal inert gas welding process.",
            modalDesc:
              "MIG welding, or Metal Inert Gas welding, is a versatile and widely used welding process that utilizes a continuous wire electrode and an inert shielding gas to create strong and clean welds. It is suitable for a variety of metals and thicknesses, making it ideal for both industrial applications and DIY projects. MIG welding offers high productivity, ease of use, and excellent weld quality, making it a popular choice for fabricators and manufacturers.",
          },
          {
            image: tig,
            title: "TIG",
            desc: "High quality tungsten inert gas welding.",
            modalDesc:
              "TIG welding, or Tungsten Inert Gas welding, is a precise and high-quality welding process that uses a non-consumable tungsten electrode to produce clean and strong welds. It is ideal for welding thin materials and provides excellent control over the welding process, making it suitable for applications that require a high level of precision and aesthetics. TIG welding is commonly used in industries such as aerospace, automotive, and art fabrication due to its ability to create visually appealing welds with minimal spatter.",
          },
          {
            image: arc,
            title: "ARC",
            desc: "Standard arc welding setup.",
            modalDesc:
              "Standard arc welding setup with appropriate safety measures and equipment.",
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
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const clearTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const startTimer = useCallback(() => {
    clearTimer();
    if (!delay || isHovered) return;
    timerRef.current = setInterval(() => {
      setCurrent((p) => p + 1);
    }, delay);
  }, [delay, isHovered]);

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

  /* ---------------- Swipe Support ---------------- */

  /* ---------------- Swipe Support (FIXED) ---------------- */

  const isSwiping = useRef(false);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
    isSwiping.current = false;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;

    const distance = Math.abs(touchStartX.current - touchEndX.current);
    if (distance > 10) {
      isSwiping.current = true;
    }
  };

  const handleTouchEnd = () => {
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 60;

    if (!isSwiping.current) return; // 👈 This allows button taps

    if (distance > threshold) {
      next();
    } else if (distance < -threshold) {
      prev();
    }
  };

  /* ---------------- Infinite Loop ---------------- */

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

  return (
    <>
      <div
        className="relative flex items-center justify-center 
  h-[180px] sm:h-[210px] md:h-[380px] lg:h-[400px] 
  overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* LEFT EDGE FADE */}
        <div
          className="pointer-events-none absolute left-0 top-0 h-full 
          w-6 md:w-32 z-20
          bg-gradient-to-r from-white via-white/40 md:via-white/80 to-transparent"
        />

        {/* RIGHT EDGE FADE */}
        <div
          className="pointer-events-none absolute right-0 top-0 h-full 
          w-6 md:w-32 z-20
          bg-gradient-to-l from-white via-white/40 md:via-white/80 to-transparent"
        />
        {/* Desktop Arrows */}
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
                src={slide.image}
                alt={slide.title}
                className={`w-full h-full object-cover transition duration-500
                ${
                  offset === 0
                    ? "brightness-100"
                    : "brightness-75 md:brightness-[.80]"
                }`}
              />

              <div
                className="absolute bottom-0 left-0 w-full 
                h-20 md:h-40
                bg-gradient-to-t 
                from-black/60 md:from-black/80
                via-black/30 md:via-black/50 
                to-transparent"
              />

              {offset === 0 && (
                <>
                  <div className="absolute bottom-5 left-5 right-28 md:right-32 text-white">
                    <h4 className="text-base md:text-2xl font-semibold">
                      {slide.title}
                    </h4>
                    <p className="hidden md:block text-sm md:text-base opacity-90">
                      {slide.desc}
                    </p>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation(); // 👈 Prevent swipe trigger
                      setActiveSlide(slide);
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
      <div className="mt-4 flex justify-center gap-3">
        {slides.map((_, i) => {
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

      {/* Modal */}
      {activeSlide && (
        <div className="fixed inset-0 z-[999] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div
            className="
                relative bg-white rounded-2xl w-full max-w-4xl
                max-h-[90vh] flex flex-col overflow-hidden
              "
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveSlide(null)}
              className="absolute top-4 right-4 bg-black/70 text-white w-10 h-10 rounded-full z-10"
            >
              ✕
            </button>

            {/* Image */}
            <div className="flex-shrink-0 relative w-full overflow-hidden rounded-t-2xl bg-white">
              <img
                src={activeSlide.image}
                alt={activeSlide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Control height here */}
              <div className="pt-[40%] md:pt-[32%]" />
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8">
              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-semibold text-[#0B1B5C] mb-3">
                {activeSlide.title}
              </h3>

              {/* Extended Description */}
              <p className="text-gray-600 leading-relaxed mb-6">
                {activeSlide.modalDesc || activeSlide.desc}
              </p>

              {/* SPECIFICATION TABLE (Only if exists) */}
              {activeSlide.specs && (
                <div className="mb-8 border border-gray-300 rounded-lg overflow-hidden">
                  {/* TABLE SECTION */}
                  <div className="grid grid-cols-1 md:grid-cols-3 text-sm md:text-base">
                    {/* LEFT CATEGORY - TABLE */}
                    <div className="bg-gray-100 font-semibold p-4 border-r">
                      Table
                    </div>

                    <div className="col-span-2">
                      {activeSlide.specs.table.map((item, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-2 border-b last:border-b-0"
                        >
                          <div className="p-4 border-r font-medium text-[#0B1B5C]">
                            {item.label}
                          </div>
                          <div className="p-4 text-gray-700">{item.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* LEFT CATEGORY - SPINDLE */}
                    <div className="bg-gray-100 font-semibold p-4 border-r border-t">
                      Spindle
                    </div>

                    <div className="col-span-2 border-t">
                      {activeSlide.specs.spindle.map((item, i) => (
                        <div
                          key={i}
                          className="grid grid-cols-2 border-b last:border-b-0"
                        >
                          <div className="p-4 border-r font-medium text-[#0B1B5C]">
                            {item.label}
                          </div>
                          <div className="p-4 text-gray-700">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Bottom Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex-1 bg-[#0B1B5C] text-white py-3 rounded-lg font-medium hover:bg-[#08133f] transition">
                  Request Quote
                </button>

                <button className="flex-1 border border-[#0B1B5C] text-[#0B1B5C] py-3 rounded-lg font-medium hover:bg-[#0B1B5C] hover:text-white transition">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------------- Software Grid (UNCHANGED) ---------------- */

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
