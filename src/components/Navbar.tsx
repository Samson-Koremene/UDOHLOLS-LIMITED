import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import logo from "@/assets/optimized/udohlols-logo.webp";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-primary/95 backdrop-blur-md shadow-[var(--shadow-navy)]"
        : "bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <motion.div
            className="flex items-center gap-2 md:gap-3"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.img
              src={logo}
              alt="UDOHLOLS LIMITED logo"
              className="h-8 w-auto sm:h-10 md:h-12 object-contain"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
              transition={{ duration: 0.3 }}
            />
            <motion.span
              className="text-sm sm:text-lg md:text-xl font-bold text-primary-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              UDOHLOLS <motion.span
                className="text-accent"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(218, 165, 32, 0)",
                    "0 0 8px rgba(218, 165, 32, 0.5)",
                    "0 0 0px rgba(218, 165, 32, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
              >
                LIMITED
              </motion.span>
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                {link.name}
              </button>
            ))}
            <Button
              variant="hero"
              onClick={() => scrollToSection("contact")}
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-primary-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isMobileMenuOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="pb-6 pt-2">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.id}
                initial={false}
                animate={isMobileMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ duration: 0.3, delay: isMobileMenuOpen ? index * 0.05 : 0 }}
                onClick={() => scrollToSection(link.id)}
                className="block w-full text-left py-3 text-primary-foreground hover:text-accent transition-colors font-medium"
              >
                {link.name}
              </motion.button>
            ))}
            <motion.div
              initial={false}
              animate={isMobileMenuOpen ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ duration: 0.3, delay: isMobileMenuOpen ? navLinks.length * 0.05 : 0 }}
            >
              <Button
                variant="hero"
                className="w-full mt-4"
                onClick={() => scrollToSection("contact")}
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
