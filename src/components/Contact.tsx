import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    { icon: MapPin, title: "Head Office", content: "Lagos, Nigeria", link: null },
    { icon: Phone, title: "Phone", content: "+234-904-780-1846", link: "tel:+2349047801846" },
    { icon: Phone, title: "Phone", content: "+234-805-116-1499", link: "tel:+2348051161499" },
    { icon: Mail, title: "Email", content: "info@udohlols.com", link: "mailto:info@udohlols.com" }
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 px-4">
            Get in <span className="text-accent">Touch</span>
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-accent mx-auto mb-6 sm:mb-8" />
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto px-4">
            Ready to partner with us? Reach out and let's discuss how we can help power your projects
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="bg-card h-12" />
              </div>
              <div>
                <Input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="bg-card h-12" />
              </div>
              <div>
                <Textarea placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={6} className="bg-card resize-none" />
              </div>
              <Button type="submit" size="lg" variant="hero" className="w-full">
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6 sm:space-y-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={`${info.title}-${index}`}
                variants={slideInRight}
                className="flex items-start gap-4"
              >
                <motion.div
                  className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <info.icon className="w-6 h-6 text-accent" />
                </motion.div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-semibold text-foreground mb-1 text-base sm:text-lg">{info.title}</h3>
                  {info.link ? (
                    <a href={info.link} className="text-muted-foreground text-sm sm:text-base break-words hover:text-accent transition-colors block">
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-muted-foreground text-sm sm:text-base break-words">{info.content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
