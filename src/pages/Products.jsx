import { useState } from "react";
import { X } from "lucide-react";

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

function Products() {
  const [activeImage, setActiveImage] = useState(null);

  const images = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14];

  return (
    <>
      {/* HERO BANNER */}
      <section className="relative w-full h-[65vh] sm:h-[70vh] md:h-[85vh] lg:h-screen">
        <img
          src={banner}
          alt="Products Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <h1 className="text-white font-light leading-[1.05] tracking-tight text-[44px] sm:text-[56px] md:text-[72px] lg:text-[124px]">
            Our <span className="font-normal">Products</span>
          </h1>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveImage(img)}
                className="relative aspect-square overflow-hidden cursor-pointer group rounded-lg"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE MODAL */}
      {activeImage && (
        <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setActiveImage(null)}
            className="absolute top-6 right-6 text-white bg-black/50 p-2 rounded-full"
          >
            <X size={28} />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex items-center justify-center">
            <img
              src={activeImage}
              alt=""
              className="max-h-[85vh] w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
