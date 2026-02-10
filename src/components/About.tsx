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
    <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
            About <span className="text-accent">UDOHLOLS LIMITED</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed px-4">
            Udohlols Limited is a dynamic, indigenous Oil and Gas Exploration, Engineering, Procurement, Construction, (EEPC)and Marine Logistics Company dedicated to delivering world-class solutions across the energy and maritime sectors.

            Founded with a commitment to innovation, integrity, and excellence, Udohlols Limited provides integrated services that span the entire oil and gas value chain — from exploration and field development , procurement, construction, and offshore marine support operations.

            Our expertise combines deep technical knowledge, advanced technology, and strategic partnerships to execute complex energy and marine projects safely, efficiently, and sustainably.Based in Nigeria, we are a 100% Nigerian content company totally committed to delivering the best possible services with client relationships based on trust.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-6 sm:p-8 rounded-lg border border-border hover:shadow-[var(--shadow-gold)] transition-all duration-300"
            >
              <value.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent mb-3 sm:mb-4" />
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">{value.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 sm:mt-16 bg-primary/5 p-6 sm:p-8 rounded-lg border border-accent/20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Our Vision for 2030</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
            By 2030, Udohlols Limited will be a leading African energy engineering, exploration, and marine logistics powerhouse — pioneering sustainable oil and gas development, technological innovation, and maritime excellence that drive industrial transformation and energy security across the continent.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base">
            <div className="bg-background/50 p-4 rounded-lg">
              <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-accent text-lg">01</span>
                Energy Leadership
              </h5>
              <p className="text-muted-foreground text-xs sm:text-sm">Integrated exploration and engineering excellence across Africa</p>
            </div>

            <div className="bg-background/50 p-4 rounded-lg">
              <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-accent text-lg">02</span>
                Innovation
              </h5>
              <p className="text-muted-foreground text-xs sm:text-sm">Advanced technology and digital transformation in energy operations</p>
            </div>

            <div className="bg-background/50 p-4 rounded-lg">
              <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-accent text-lg">03</span>
                Marine Excellence
              </h5>
              <p className="text-muted-foreground text-xs sm:text-sm">Modern fleet and offshore support across West Africa</p>
            </div>

            <div className="bg-background/50 p-4 rounded-lg">
              <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-accent text-lg">04</span>
                Local Content
              </h5>
              <p className="text-muted-foreground text-xs sm:text-sm">Training 2,000+ local engineers and marine specialists</p>
            </div>

            <div className="bg-background/50 p-4 rounded-lg">
              <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-accent text-lg">05</span>
                Safety First
              </h5>
              <p className="text-muted-foreground text-xs sm:text-sm">Zero-incident policy with real-time HSE monitoring</p>
            </div>

            <div className="bg-background/50 p-4 rounded-lg">
              <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                <span className="text-accent text-lg">06</span>
                Regional Growth
              </h5>
              <p className="text-muted-foreground text-xs sm:text-sm">Operations in 15+ African countries by 2030</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
