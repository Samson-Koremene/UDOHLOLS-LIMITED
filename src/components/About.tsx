import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Award, Users } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const values = [
    {
      icon: Target,
      title: "Delivery",
      description: "We promote nothing short of excellence to improve processes and results, setting high standards for everyone."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We demand integrity and personal accountability at every level with unwavering commitment to safety."
    },
    {
      icon: Users,
      title: "Solution",
      description: "We strategically invest in our assets and employees to ensure they excel in providing innovative solutions."
    }
  ];

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-accent">UDOHLOLS LIMITED</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            Udohlols Limited is an indigenous Nigerian Oil and Gas, Marine Company dedicated to delivering superior 
            performance and results for Oil and Gas, Marine Companies in Nigeria and across the world. Based in Nigeria, 
            we are a 100% Nigerian content company totally committed to delivering the best possible services with 
            client relationships based on trust.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 rounded-lg border border-border hover:shadow-[var(--shadow-gold)] transition-all duration-300"
            >
              <value.icon className="w-12 h-12 text-accent mb-4" />
              <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-primary/5 p-8 rounded-lg border border-accent/20"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision for 2030</h3>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              Be recognized as a top 50 Africa Oil and Gas, Marine Company for value, volumes, earnings and brand recognition
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              Grow through meaningful customer value propositions combined with innovative product development
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              Double our manufacturing, marketing and sales of branded products
            </li>
            <li className="flex items-start">
              <span className="text-accent mr-2">•</span>
              Enhance development of branded fuel station network across Sub-Sahara Africa
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
