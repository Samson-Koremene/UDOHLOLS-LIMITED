import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import conductorCasingImage from "@/assets/optimized/install.webp";
import soilBoringImage from "@/assets/optimized/soil.webp";
import geotechnicalImage from "@/assets/optimized/geotechnical.webp";
import geotechnicalCreekImage from "@/assets/optimized/geo.webp";
import nonDestructiveImage from "@/assets/optimized/non.webp";
import piezoconeImage from "@/assets/optimized/10ton.webp";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      image: conductorCasingImage,
      title: "Conductor Casing Installation",
      description: "Installation of 24-inch conductor casings at Obitogbo, Koko Delta State. Professional marine construction operations ensuring secure foundation for offshore structures."
    },
    {
      image: soilBoringImage,
      title: "Soil Boring Operations",
      description: "Comprehensive soil boring operations along Badagry Channel. Advanced geotechnical investigation services for marine infrastructure development and foundation assessment."
    },
    {
      image: geotechnicalImage,
      title: "Geotechnical Investigation",
      description: "Professional geotechnical investigation across Robert-kiri Creek. Specialized marine engineering services for infrastructure planning and environmental assessment."
    },
    {
      image: geotechnicalCreekImage,
      title: "Robert-kiri Creek Investigation",
      description: "Field investigation team conducting geotechnical assessment across Robert-kiri Creek in August 2018. Professional marine engineering services with specialized equipment and safety protocols."
    },
    {
      image: nonDestructiveImage,
      title: "Non-Destructive Testing",
      description: "Advanced non-destructive testing services at ENL Terminals. Comprehensive structural integrity assessment using cutting-edge technology and professional expertise."
    },
    {
      image: piezoconeImage,
      title: "Piezocone Deployment",
      description: "10Ton Piezocone deployment system at Lagos Deep Offshore Logistics (LADOL) Free Zone. Specialized geotechnical testing equipment for marine foundation analysis."
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Projects</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Showcasing our commitment to excellence through successful project delivery across the energy sector
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => {
                // Mobile tap to reveal description
                if ('ontouchstart' in window) {
                  const element = document.getElementById(`project-${index}`);
                  element?.classList.toggle('show-overlay');
                }
              }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div
                id={`project-${index}`}
                className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 [.show-overlay_&]:opacity-100"
              >
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-primary-foreground">
                  <h3 className="text-xl sm:text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-sm sm:text-base text-primary-foreground/95 leading-relaxed">{project.description}</p>
                </div>
              </div>
              <div className="bg-card p-4 sm:p-5 border-t border-border">
                <h3 className="text-base sm:text-lg font-semibold text-foreground line-clamp-2">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
