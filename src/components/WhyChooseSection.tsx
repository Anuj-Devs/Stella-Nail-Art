import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ShieldCheck, Sparkles, Palette, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Award, title: "Experienced Nail Artists", desc: "Skilled professionals trained in latest nail art techniques" },
  { icon: Sparkles, title: "Premium Quality Products", desc: "We use only top-tier, long-lasting nail products" },
  { icon: ShieldCheck, title: "Clean & Hygienic Studio", desc: "Sterilized tools and sanitized workspace every time" },
  { icon: Palette, title: "Creative Nail Designs", desc: "From bridal to trendy, we create stunning nail art" },
  { icon: HeartHandshake, title: "Friendly Customer Service", desc: "Warm, welcoming, and attentive to your needs" },
];

const WhyChooseSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-28 bg-nude-light" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-gold mb-3">Why Us</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Why Choose Stella Nail Studio</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-6 bg-card rounded-2xl border border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-blush-light flex items-center justify-center mx-auto mb-4">
                <r.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display font-bold text-foreground text-sm mb-2">{r.title}</h3>
              <p className="text-xs font-body text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
