import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import offshoreImage from "@/assets/project-offshore.jpg";
import pipelineImage from "@/assets/project-pipeline.jpg";
import marineImage from "@/assets/project-marine.jpg";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      image: offshoreImage,
      title: "Offshore Drilling Operations",
      description: "Advanced offshore drilling platform operations in the Gulf of Guinea, delivering exceptional results with zero incidents."
    },
    {
      image: pipelineImage,
      title: "Pipeline Infrastructure",
      description: "Development and maintenance of critical pipeline infrastructure connecting production facilities across Nigeria."
    },
    {
      image: marineImage,
      title: "Marine Logistics",
      description: "Comprehensive marine support services ensuring efficient transportation and supply chain management."
    }
  ];

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Showcasing our commitment to excellence through successful project delivery across the energy sector
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-primary-foreground/90">{project.description}</p>
                </div>
              </div>
              <div className="bg-card p-4 border-t border-border">
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
