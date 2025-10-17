import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Drill, Ship, Fuel, Truck } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const services = [
    {
      icon: Drill,
      title: "Exploration & Drilling",
      description: "Advanced exploration techniques and precision drilling operations for optimal resource extraction with environmental stewardship."
    },
    {
      icon: Fuel,
      title: "Energy Distribution",
      description: "Comprehensive fuel distribution network and branded fuel station development across Nigeria and Sub-Sahara Africa."
    },
    {
      icon: Ship,
      title: "Marine Services",
      description: "Full-service marine logistics, offshore support, and maritime operations for the oil and gas industry."
    },
    {
      icon: Truck,
      title: "Logistics & Supply",
      description: "Efficient supply chain management and logistics solutions ensuring timely delivery of petroleum products."
    }
  ];

  return (
    <section id="services" className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our <span className="text-accent">Services</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive oil and gas solutions tailored to meet the unique needs of our clients across Africa
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-[var(--shadow-gold)] transition-all duration-300 border-border">
                <CardHeader>
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-8 h-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
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
