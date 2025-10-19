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
          Udohlols Limited is a dynamic, indigenous Oil and Gas Exploration, Engineering, Procurement, Construction, (EEPC)and Marine Logistics Company dedicated to delivering world-class solutions across the energy and maritime sectors.

Founded with a commitment to innovation, integrity, and excellence, Udohlols Limited provides integrated services that span the entire oil and gas value chain — from exploration and field development , procurement, construction, and offshore marine support operations.

Our expertise combines deep technical knowledge, advanced technology, and strategic partnerships to execute complex energy and marine projects safely, efficiently, and sustainably.Based in Nigeria, we are a 100% Nigerian content company totally committed to delivering the best possible services with client relationships based on trust.
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
          <p className="text-muted-foreground mb-6 leading-relaxed">
            By 2030, Udohlols Limited will be a leading African energy engineering, exploration, and marine logistics powerhouse — pioneering sustainable oil and gas development, technological innovation, and maritime excellence that drive industrial transformation and energy security across the continent.
          </p>

          <h4 className="text-xl font-semibold text-foreground mb-4">Strategic Pillars of Vision 2030</h4>

          <div className="space-y-8 text-muted-foreground">
            <div>
              <h5 className="text-lg font-semibold text-foreground mb-2">1. Integrated Energy & Exploration Leadership</h5>
              <ul className="list-disc pl-5 space-y-2">
                <li>Evolve into a fully integrated exploration and engineering company with expertise across seismic, drilling, and production support.</li>
                <li>Establish in-house Geoscience and Exploration Division using advanced subsurface imaging, 3D modeling, and AI-assisted reservoir analysis.</li>
                <li>Partner with leading exploration technology firms for data acquisition and well management solutions.</li>
                <li>Attain capability to manage small to mid-scale exploration fields independently by 2030.</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-foreground mb-2">2. Engineering Excellence and Innovation</h5>
              <ul className="list-disc pl-5 space-y-2">
                <li>Expand EPCM (Engineering, Procurement, Construction & Maintenance) services across upstream and downstream sectors.</li>
                <li>Develop engineering hubs in Lagos, Port Harcourt, and strategic African regions for fabrication, design, and offshore maintenance.</li>
                <li>Implement digital twin systems, AI-driven predictive maintenance, and IoT-based monitoring for energy assets.</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-foreground mb-2">3. Marine Logistics and Offshore Support</h5>
              <ul className="list-disc pl-5 space-y-2">
                <li>Grow and modernize the Udohlols Marine Fleet to serve exploration, offshore drilling, and cargo transport.</li>
                <li>Establish a Marine Operations Command Centre for fleet tracking, vessel scheduling, and safety management.</li>
                <li>Offer integrated marine logistics, subsea support, and terminal operations to oil majors and independents.</li>
                <li>Expand operations into West African maritime corridors — Nigeria, Ghana, Angola, and Côte d’Ivoire.</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-foreground mb-2">5. Human Capital & Local Content Development</h5>
              <ul className="list-disc pl-5 space-y-2">
                <li>Train and certify 2,000+ local engineers, marine operators, and exploration specialists by 2030.</li>
                <li>Launch the Udohlols Academy of Energy, Engineering & Marine Studies to drive local talent development.</li>
                <li>Partner with universities, NCDMB, and maritime institutions for STEM advancement and technical upskilling.</li>
                <li>Maintain a minimum of 75% local workforce participation across all projects.</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-foreground mb-2">6. Operational Excellence & Safety</h5>
              <ul className="list-disc pl-5 space-y-2">
                <li>Enforce a zero-incident, zero-spill policy across all oilfield and marine operations.</li>
                <li>Implement real-time digital HSE monitoring systems across vessels and rigs.</li>
                <li>Conduct periodic safety audits, emergency response drills, and risk assessments to maintain global best practices.</li>
                <li>Achieve Zero Lost Time Injury (LTI) annually by 2030.</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-foreground mb-2">7. Regional Expansion & Strategic Partnerships</h5>
              <ul className="list-disc pl-5 space-y-2">
                <li>Operate in at least 15 African countries by 2030 through joint ventures and partnerships with IOCs, NOCs, and marine operators.</li>
                <li>Develop regional logistics bases in West, Central, and East Africa.</li>
                <li>Form strategic alliances with global exploration and engineering technology firms for skill and knowledge transfer.</li>
                <li>Expand into offshore asset management and subsea infrastructure projects.</li>
              </ul>
            </div>

            <div>
              <h5 className="text-lg font-semibold text-foreground mb-2">8. Financial Growth & Innovation</h5>
              <ul className="list-disc pl-5 space-y-2">
                <li>Create a Marine and Exploration Investment Fund for fleet expansion, asset acquisition, and technology R&amp;D.</li>
                <li>Implement blockchain-enabled procurement and supply chain transparency for investor confidence.</li>
                <li>Strengthen corporate governance and ESG disclosure to attract foreign investment.</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
