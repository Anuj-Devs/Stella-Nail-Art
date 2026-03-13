import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Palette, Droplets, HandMetal } from "lucide-react";

const serviceCategories = [
  {
    icon: Gem,
    title: "Nail Extensions",
    services: [
      "Acrylic Nail Extensions",
      "Gel Nail Extensions",
      "PolyGel Nail Extensions",
      "Soft Gel Extensions",
      "Nail Extension Refill",
    ],
  },
  {
    icon: Palette,
    title: "Nail Art Designs",
    services: [
      "Simple Nail Art",
      "Hand Painted Nail Art",
      "3D Nail Art",
      "Stone / Rhinestone Nail Art",
      "Glitter Nail Art",
      "Chrome / Mirror Nails",
      "Ombre Nails",
      "Marble Nail Art",
      "Bridal Nail Art",
      "Festival Special Nail Art",
    ],
  },
  {
    icon: Droplets,
    title: "Nail Polish Services",
    services: [
      "Gel Polish Application",
      "Gel Polish Removal",
      "French Tips",
      "Cat Eye Nails",
    ],
  },
  {
    icon: HandMetal,
    title: "Nail Care Services",
    services: [
      "Classic Manicure",
      "Gel Manicure",
      "Spa Manicure",
      "Nail Strengthening Treatment",
      "Cuticle Care",
    ],
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-gold mb-3">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Premium Nail Services
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {serviceCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-full bg-blush-light flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <cat.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-display font-bold text-foreground">{cat.title}</h3>
              </div>
              <ul className="space-y-2.5">
                {cat.services.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-sm font-body text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold flex-shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
