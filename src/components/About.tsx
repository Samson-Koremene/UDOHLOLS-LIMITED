import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Award, Users } from "lucide-react";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
};

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
};

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const visionRef = useRef(null);
  const isVisionInView = useInView(visionRef, { once: true, margin: "-80px" });

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
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
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

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-12"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={index === 0 ? fadeInLeft : index === 2 ? fadeInRight : fadeInUp}
              className="bg-card p-6 sm:p-8 rounded-lg border border-border hover:shadow-[var(--shadow-gold)] transition-all duration-300 hover:-translate-y-2"
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.4 }}
              >
                <value.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent mb-3 sm:mb-4" />
              </motion.div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2 sm:mb-3">{value.title}</h3>
              <p className="text-sm sm:text-base text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          ref={visionRef}
          variants={scaleIn}
          initial="hidden"
          animate={isVisionInView ? "visible" : "hidden"}
          className="mt-12 sm:mt-16 bg-primary/5 p-6 sm:p-8 rounded-lg border border-accent/20"
        >
          <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Our Vision for 2030</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
            By 2030, Udohlols Limited will be a leading African energy engineering, exploration, and marine logistics powerhouse — pioneering sustainable oil and gas development, technological innovation, and maritime excellence that drive industrial transformation and energy security across the continent.
          </p>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isVisionInView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base"
          >
            {[
              { num: "01", title: "Energy Leadership", desc: "Integrated exploration and engineering excellence across Africa" },
              { num: "02", title: "Innovation", desc: "Advanced technology and digital transformation in energy operations" },
              { num: "03", title: "Marine Excellence", desc: "Modern fleet and offshore support across West Africa" },
              { num: "04", title: "Local Content", desc: "Training 2,000+ local engineers and marine specialists" },
              { num: "05", title: "Safety First", desc: "Zero-incident policy with real-time HSE monitoring" },
              { num: "06", title: "Regional Growth", desc: "Operations in 15+ African countries by 2030" },
            ].map((item) => (
              <motion.div key={item.num} variants={fadeInUp} className="bg-background/50 p-4 rounded-lg hover:bg-background/80 transition-colors duration-300">
                <h5 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <span className="text-accent text-lg">{item.num}</span>
                  {item.title}
                </h5>
                <p className="text-muted-foreground text-xs sm:text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
