import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Sparkles, Palette, Heart } from "lucide-react";
import galleryBridal from "@/assets/gallery-bridal.jpg";

const highlights = [
  { icon: Shield, label: "Hygienic Tools & Clean Environment" },
  { icon: Sparkles, label: "Premium Nail Products" },
  { icon: Palette, label: "Trendy Nail Designs" },
  { icon: Heart, label: "Personalized Client Experience" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-28 bg-nude-light" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-gold mb-3">About Us</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 leading-tight">
              Where Luxury Meets <span className="italic text-primary">Nail Art</span>
            </h2>
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Stella Nail Studio is a premium nail salon in Rajkot specializing in luxury nail extensions, creative nail art, and professional nail care services.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Our expert nail artists design beautiful nails for weddings, festivals, parties, and everyday style. Our goal is to make every client feel confident and glamorous.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-card"
                >
                  <div className="w-10 h-10 rounded-full bg-blush-light flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-body font-medium text-foreground">{item.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex gap-6">
              <div className="text-center">
                <p className="text-2xl font-display font-bold text-gold">500+</p>
                <p className="text-xs font-body text-muted-foreground tracking-wider uppercase">Happy Clients</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-display font-bold text-gold">5.0</p>
                <p className="text-xs font-body text-muted-foreground tracking-wider uppercase">Google Rating</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-display font-bold text-gold">3+</p>
                <p className="text-xs font-body text-muted-foreground tracking-wider uppercase">Years Experience</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img src={galleryBridal} alt="Bridal nail art by Stella Nail Studio" className="w-full h-[500px] object-cover" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-lg border border-border hidden md:block">
              <p className="text-sm font-body font-semibold text-foreground">Women-Owned Business</p>
              <p className="text-xs font-body text-muted-foreground">LGBTQ+ Friendly • Professional Artists</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
