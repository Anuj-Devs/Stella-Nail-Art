import { motion } from "framer-motion";
import { Star, Phone, ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-nails.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16 md:pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Luxury nail art studio interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-foreground/20" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-4"
          >
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-body text-gold-light tracking-wide">5.0 (32 Reviews)</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
            style={{ color: "hsl(0 0% 100%)" }}
          >
            Luxury Nail Art & Nail Extensions in{" "}
            <span className="text-gold italic">Rajkot</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl font-body font-light leading-relaxed mb-8"
            style={{ color: "hsl(20 20% 85%)" }}
          >
            Experience premium nail designs, nail extensions, and professional nail care at Stella Nail Studio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#booking"
              className="px-8 py-3.5 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-full hover:opacity-90 transition-opacity"
            >
              Book Appointment
            </a>
            <a
              href="tel:08849151381"
              className="px-8 py-3.5 border-2 border-gold text-gold font-body font-semibold text-sm tracking-wider uppercase rounded-full hover:bg-gold hover:text-accent-foreground transition-all flex items-center gap-2"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href="#services"
              className="px-8 py-3.5 font-body font-semibold text-sm tracking-wider uppercase rounded-full hover:opacity-80 transition-opacity flex items-center gap-2"
              style={{ color: "hsl(0 0% 100%)" }}
            >
              View Services <ArrowDown className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
