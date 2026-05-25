function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
        <p className="text-sm md:text-base text-white/70">
          © 2026 Bilworth. All rights reserved.
        </p>
        <p className="text-sm md:text-base text-white/70">
          Designed & developed by{" "}
          <a
            href="https://zdawan.github.io/dharshan.github.io/"
            className="text-white hover:text-white/80 transition-colors underline decoration-white/30 hover:decoration-white"
          >
            AD Agency
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
