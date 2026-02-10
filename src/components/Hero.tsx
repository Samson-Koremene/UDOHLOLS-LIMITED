import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/optimized/hero-oil-rig.webp";
import heroImage2 from "@/assets/optimized/hero-oil-rig2.webp";
import { useEffect, useState } from "react";

const Hero = () => {
  const { scrollY } = useScroll();
  const [isMobile, setIsMobile] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const heroImages = [heroImage, heroImage2];

  // Disable parallax on mobile for better performance
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Image rotation effect - slower on mobile for better performance
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, isMobile ? 7000 : 5000); // 7 seconds on mobile, 5 seconds on desktop

    return () => clearInterval(interval);
  }, [heroImages.length, isMobile]);

  const y = useTransform(scrollY, [0, 500], [0, isMobile ? 0 : 150]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-[#1a2332]">
      {/* Background Image with Overlay - Parallax Effect */}
      <motion.div
        className="absolute inset-0 z-0 bg-[#1a2332]"
        style={{ y: isMobile ? 0 : y }}
      >
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.img
              key={index}
              src={image}
              alt="Oil rig operations"
              className="w-full h-full object-cover object-center absolute inset-0"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              initial={false}
              animate={{
                opacity: currentImageIndex === index ? 0.6 : 0,
                scale: currentImageIndex === index ? 1.1 : 1
              }}
              transition={{
                opacity: { duration: 1.5, ease: "easeInOut" },
                scale: { duration: 5, ease: "linear" }
              }}
            />
          ))}
        </div>
        {/* Subtle vignette effect for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/40" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 drop-shadow-2xl px-4">
            Powering Nigeria's Energy Future
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-primary-foreground/95 mb-6 sm:mb-8 max-w-3xl mx-auto drop-shadow-lg px-4">
            Your trusted partner in Oil & Gas, Marine Services, and Energy Solutions across Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <Button
              size="lg"
              variant="hero"
              onClick={() => scrollToSection("contact")}
              className="w-full sm:w-auto"
            >
              Get in Touch
            </Button>
            <Button
              size="lg"
              variant="outline-light"
              onClick={() => scrollToSection("about")}
              className="w-full sm:w-auto"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-primary-foreground drop-shadow-lg"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
};

export default Hero;
