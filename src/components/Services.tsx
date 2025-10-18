import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Drill, Ship, Wrench, Settings, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Drill,
      title: "GEOTECHNICAL/GEOPHYSICAL/GEODETIC SERVICES",
      description: "We provide geotechnical, geophysical, and geodetic services including soil testing, ground investigation, and hydrographic surveys."
    },
    {
      icon: Wrench,
      title: "CONSTRUCTION SERVICE",
      description: "We deliver safe and efficient construction services across Africa's oil, gas, and energy sectors."
    },
    {
      icon: Ship,
      title: "MARINE SERVICE",
      description: "Full-service marine logistics, offshore support, and maritime operations for the oil and gas industry."
    },
    {
      icon: Settings,
      title: "OPERATION AND MAINTAINANCE SERVICES",
      description: "We offer full-scale operations and maintenance services across the oil, gas, marine, and power sectors."
    },
    {
      icon: Users,
      title: "TECHNICAL CONSULTANCY SERVICES",
      description: "We provide technical consultancy services covering inspection, maintenance, manpower supply, and offshore support for oil, gas, and maritime operations."
    }
  ];

  return (
    <section id="services" className="py-12 sm:py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Comprehensive oil and gas solutions tailored to meet the unique needs of our clients globally
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-[var(--shadow-gold)] transition-all duration-300 border-border">
                <CardHeader className="p-4 sm:p-6">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                    <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                  </div>
                  <CardTitle className="text-base sm:text-lg lg:text-xl leading-tight">{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 sm:p-6 pt-0">
                  <CardDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
