import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import PartnerLogos from "@/components/PartnerLogos";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <PartnerLogos />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
