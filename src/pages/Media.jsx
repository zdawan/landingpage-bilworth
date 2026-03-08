import { useState } from "react";
import { X, Play } from "lucide-react";

// Banner
import banner from "../assets/b01.jpg";

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
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [v1, v2, v3, v4, v5, v6, v7, v8];

  return (
    <>
      {/* HERO BANNER */}
      <section
        className="relative w-full
        h-[65vh]
        sm:h-[70vh]
        md:h-[85vh]
        lg:h-screen"
      >
        <img
          src={banner}
          alt="Products Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="relative z-10 h-full flex items-center justify-center">
          <h1
            className="text-white font-light leading-[1.05] tracking-tight
            text-[44px] sm:text-[56px] md:text-[72px] lg:text-[124px]"
          >
            Media <span className="font-normal">Updates</span>
          </h1>
        </div>
      </section>

      {/* VIDEOS GRID */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {videos.map((video, index) => (
              <div
                key={index}
                onClick={() => setActiveVideo(video)}
                className="relative aspect-square overflow-hidden cursor-pointer group rounded-lg"
              >
                <video
                  src={video}
                  muted
                  loop
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <Play size={40} className="text-white opacity-90" />
                </div>

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition duration-300" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN VIDEO MODAL */}
      {activeVideo && (
        <div className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center p-4">
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 text-white bg-black/50 p-2 rounded-full"
          >
            <X size={28} />
          </button>

          <div className="max-w-5xl w-full max-h-[85vh] flex items-center justify-center">
            <video
              src={activeVideo}
              controls
              autoPlay
              className="max-h-[85vh] w-auto object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Products;
