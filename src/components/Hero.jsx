function Hero() {
  return (
    <section
      className="relative w-full
        h-[65vh]
        sm:h-[70vh]
        md:h-[85vh]
        lg:h-screen"
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1606871386240-f329223889d0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Hero background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Content */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="text-white max-w-2xl mt-20">
          {/* TITLE */}
          <h1
            className="font-light leading-[1.05] tracking-tight
                         text-[44px] sm:text-[56px] md:text-[72px] lg:text-[124px]"
          >
            Empowering Your <br />
            <span className="font-normal">Business</span>
          </h1>

          {/* WATCH CTA */}
          <div
            className="mt-8 inline-flex items-center gap-4 cursor-pointer group
              px-3 py-2 rounded-full
              bg-white/15 backdrop-blur-md
              border border-white/30
              shadow-lg shadow-black/10
              transition-all duration-300
              hover:bg-white/25 hover:border-white/60 hover:scale-[1.03]"
          >
            {/* Play Icon */}
            <div
              className="relative w-12 h-12 rounded-full
            bg-white/20 backdrop-blur-md
            border border-white/40
            flex items-center justify-center
            transition"
            >
              <span className="ml-1 text-white text-sm">▶</span>

              {/* glow */}
              <div className="absolute inset-0 rounded-full bg-white/30 blur-xl opacity-0 group-hover:opacity-100 transition" />
            </div>

            {/* Text */}
            <span
              className="pr-4 text-white/80 text-lg font-medium
      transition group-hover:text-white"
            >
              Watch
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
