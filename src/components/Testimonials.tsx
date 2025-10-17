import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: "Dr. Amaka Okonkwo",
      position: "Operations Director, Shell Nigeria",
      content: "UDOHLOLS Limited has consistently delivered exceptional service. Their commitment to safety and reliability is unmatched in the Nigerian oil and gas sector."
    },
    {
      name: "Chief Ibrahim Adeyemi",
      position: "CEO, Lagos Energy Partners",
      content: "Working with UDOHLOLS has transformed our operations. Their innovative solutions and professional approach have been instrumental to our growth."
    },
    {
      name: "Mrs. Chioma Nwankwo",
      position: "Project Manager, NNPC",
      content: "A truly dependable partner. UDOHLOLS' expertise in marine logistics and their dedication to excellence makes them our preferred choice."
    }
  ];

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client <span className="text-accent">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-8" />
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Hear what our valued partners have to say about working with us
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-card p-8 rounded-lg border border-border relative"
            >
              <Quote className="w-12 h-12 text-accent/20 absolute top-6 right-6" />
              <p className="text-muted-foreground mb-6 relative z-10 italic">
                "{testimonial.content}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
