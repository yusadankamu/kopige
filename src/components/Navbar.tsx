import { useState, useEffect } from "react";
import { Coffee } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-primary/95 backdrop-blur-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <Coffee className="h-8 w-8 text-secondary" />
            <span className="text-2xl font-heading font-bold text-secondary">
              Kopige Republik
            </span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop Menu */}
          <div className={`hidden lg:flex items-center space-x-8`}>
            {["Home", "About Us", "Our Menu", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-white hover:text-secondary transition-colors"
              >
                {item}
              </a>
            ))}
            <button className="bg-secondary text-primary px-6 py-2 rounded-full hover:bg-secondary/90 transition-colors">
              Reserve Now
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden ${
            isMenuOpen ? "block" : "hidden"
          } mt-4 bg-primary/95 rounded-lg p-4`}
        >
          {["Home", "About Us", "Our Menu", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="block py-2 text-white hover:text-secondary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <button className="w-full bg-secondary text-primary px-6 py-2 rounded-full hover:bg-secondary/90 transition-colors mt-2">
            Reserve Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
