import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const PartnerLogos = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const partners = [
    { name: "Shell", logo: "/placeholder.svg" },
    { name: "Chevron", logo: "/placeholder.svg" },
    { name: "ExxonMobil", logo: "/placeholder.svg" },
    { name: "BP", logo: "/placeholder.svg" },
    { name: "TotalEnergies", logo: "/placeholder.svg" },
    { name: "ConocoPhillips", logo: "/placeholder.svg" },
    { name: "Equinor", logo: "/placeholder.svg" },
    { name: "Eni", logo: "/placeholder.svg" },
  ];

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-12 sm:py-16 bg-muted/30" ref={ref}>
      <motion.div
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
          Our Trusted Partners
        </h2>

        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-background to-transparent z-10" />

          <div
            ref={scrollRef}
            className="flex gap-8 sm:gap-12 animate-scroll touch-pan-y"
            style={{ width: "fit-content" }}
          >
            {duplicatedPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-40 sm:w-48 h-20 sm:h-24 flex items-center justify-center transition-all duration-300 opacity-70 hover:opacity-100 active:opacity-100"
              >
                <span className="text-xl sm:text-2xl font-bold text-foreground/80 hover:text-foreground active:text-foreground transition-colors">
                  {partner.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default PartnerLogos;
