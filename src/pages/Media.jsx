import { useState } from "react";
import { X, Play } from "lucide-react";

// Images
import p1 from "../assets/p01.png";
import p2 from "../assets/3.jpeg";
import p3 from "../assets/1.jpeg";
import p4 from "../assets/2.jpeg";
import p5 from "../assets/4.jpeg";
import p6 from "../assets/5.jpeg";
import p7 from "../assets/6.jpeg";
import p8 from "../assets/7.jpeg";
import p9 from "../assets/8.jpeg";
import p10 from "../assets/9.jpeg";
import p11 from "../assets/10.jpeg";
import p12 from "../assets/11.jpeg";
import p13 from "../assets/12.jpeg";
import p14 from "../assets/13.jpeg";

// Banner
import banner from "../assets/b1.jpg";

// Videos
import v1 from "../assets/v1.mp4";
import v2 from "../assets/v2.mp4";
import v3 from "../assets/v3.mp4";
import v4 from "../assets/v4.mp4";
import v5 from "../assets/v5.mp4";
import v6 from "../assets/v6.mp4";
import v7 from "../assets/v7.mp4";
import v8 from "../assets/v8.mp4";

function Products() {
  const [activeMedia, setActiveMedia] = useState(null);

  const media = [
    { type: "image", src: p1 },
    { type: "video", src: v1 },
    { type: "image", src: p2 },
    { type: "video", src: v2 },
    { type: "image", src: p3 },
    { type: "video", src: v3 },
    { type: "image", src: p4 },
    { type: "image", src: p5 },
    { type: "video", src: v4 },
    { type: "image", src: p6 },
    { type: "video", src: v5 },
    { type: "image", src: p7 },
    { type: "video", src: v6 },
    { type: "image", src: p8 },
    { type: "video", src: v7 },
    { type: "video", src: v8 },
    { type: "image", src: p9 },
    { type: "image", src: p10 },
    { type: "image", src: p11 },
    { type: "image", src: p12 },
    { type: "image", src: p13 },
    { type: "image", src: p14 },
  ];

  return (
    <>
      {/* 🔥 HERO STYLE BANNER */}
      <section
        className="relative w-full
        h-[65vh]
        sm:h-[70vh]
        md:h-[85vh]
        lg:h-screen"
      >
        {/* Background */}
        <img
          src={banner}
          alt="Products Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Center Content */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <h1
            className="text-white font-light leading-[1.05] tracking-tight
            text-[44px] sm:text-[56px] md:text-[72px] lg:text-[124px]"
          >
            Our <span className="font-normal">Products</span>
          </h1>
        </div>
      </section>

      {/* 🔥 PRODUCTS GRID SECTION */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {media.map((item, index) => (
              <div
                key={index}
                onClick={() => setActiveMedia(item)}
                className="relative aspect-square overflow-hidden cursor-pointer group rounded-lg"
              >
                {item.type === "image" ? (
                  <img
                    src={item.src}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <>
                    <video
                      src={item.src}
                      muted
                      loop
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                      <Play size={40} className="text-white opacity-90" />
                    </div>
                  </>
                )}

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔥 FULLSCREEN MODAL */}
      {activeMedia && (
        <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setActiveMedia(null)}
            className="absolute top-6 right-6 text-white bg-black/50 p-2 rounded-full"
          >
            <X size={28} />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex items-center justify-center">
            {activeMedia.type === "image" ? (
              <img
                src={activeMedia.src}
                alt=""
                className="max-h-[85vh] w-auto object-contain rounded-lg"
              />
            ) : (
              <video
                src={activeMedia.src}
                controls
                autoPlay
                className="max-h-[85vh] w-auto object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
