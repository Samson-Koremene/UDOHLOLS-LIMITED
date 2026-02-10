import { Linkedin, Twitter, Facebook, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer ref={ref} className="bg-primary text-primary-foreground py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">
              UDOHLOLS <span className="text-accent">LIMITED</span>
            </h3>
            <p className="text-primary-foreground/80 text-xs sm:text-sm">
              Your trusted partner in Oil & Gas, Marine Services, and Energy Solutions across Africa.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#projects" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Services</h4>
            <ul className="space-y-2 text-xs sm:text-sm text-primary-foreground/80">
              <li>Geotechnical/Geophysical/Geodetic Services</li>
              <li>Construction Services</li>
              <li>Marine Services</li>
              <li>Operation and Maintenance Services</li>
              <li>Technical Consultancy Services</li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Connect With Us</h4>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <motion.a
                href="#"
                className="w-11 h-11 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all touch-manipulation"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="w-11 h-11 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all touch-manipulation"
                aria-label="Twitter"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Twitter size={20} />
              </motion.a>
              <motion.a
                href="#"
                className="w-11 h-11 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all touch-manipulation"
                aria-label="Facebook"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                href="mailto:info@udohlols.com"
                className="w-11 h-11 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all touch-manipulation"
                aria-label="Email"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail size={20} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="border-t border-primary-foreground/20 pt-6 sm:pt-8 text-center"
        >
          <p className="text-xs sm:text-sm text-primary-foreground/80">
            © {currentYear} UDOHLOLS LIMITED. All rights reserved. | Delivering Excellence, Integrity & Solution
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
