import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-28 bg-nude-light" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-gold mb-3">Get in Touch</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Visit Our Studio</h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-blush-light flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Address</h3>
                <p className="text-sm font-body text-muted-foreground leading-relaxed">
                  Shop 3, Vardhman Heights<br />
                  New 150 Feet Road<br />
                  Opp. SRP Camp Bapa Sitaram Chowk<br />
                  Rajkot, Gujarat 360005
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-blush-light flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Phone</h3>
                <a href="tel:08849151381" className="text-sm font-body text-gold hover:underline">088491 51381</a>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border">
              <div className="w-12 h-12 rounded-full bg-blush-light flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-bold text-foreground mb-1">Business Hours</h3>
                <p className="text-sm font-body text-muted-foreground">Open Daily – Closes at 7:30 PM</p>
              </div>
            </div>

            <div className="flex gap-4">
              <a
                href="tel:08849151381"
                className="flex-1 py-3 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-full text-center hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="https://www.google.com/maps/search/8PJM+7Q+Rajkot+Gujarat"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 border-2 border-gold text-gold font-body font-semibold text-sm tracking-wider uppercase rounded-full text-center hover:bg-gold hover:text-accent-foreground transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" /> Directions
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-lg border border-border h-[400px] lg:h-full min-h-[350px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.5!2d70.77!3d22.29!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z8PJM+7Q+Rajkot+Gujarat!5e0!3m2!1sen!2sin!4v1600000000000"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Stella Nail Studio location on Google Maps"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
