import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Send } from "lucide-react";

const services = [
  "Acrylic Nail Extensions",
  "Gel Nail Extensions",
  "PolyGel Nails",
  "Bridal Nail Art",
  "Manicure",
  "Spa Manicure",
  "Gel Polish",
  "Custom Nail Art",
];

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const service = formData.get("service");
    const date = formData.get("date");
    const time = formData.get("time");
    const message = formData.get("message");

    const whatsappMsg = `Hello Stella Nail Studio, I want to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nTime: ${time}\nMessage: ${message || "N/A"}`;

    window.open(
      `https://wa.me/918849151381?text=${encodeURIComponent(whatsappMsg)}`,
      "_blank"
    );
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClasses = "w-full px-4 py-3 rounded-lg border border-border bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors";

  return (
    <section id="booking" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-gold mb-3">Book Now</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">Book Your Appointment</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <form onSubmit={handleSubmit} className="bg-card rounded-2xl p-6 md:p-10 border border-border shadow-lg space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-body font-semibold text-foreground tracking-wider uppercase mb-2">Name *</label>
                <input name="name" required placeholder="Your name" className={inputClasses} />
              </div>
              <div>
                <label className="block text-xs font-body font-semibold text-foreground tracking-wider uppercase mb-2">Phone *</label>
                <input name="phone" required type="tel" placeholder="Your phone number" className={inputClasses} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-body font-semibold text-foreground tracking-wider uppercase mb-2">Service *</label>
              <select name="service" required className={inputClasses}>
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-body font-semibold text-foreground tracking-wider uppercase mb-2">Preferred Date *</label>
                <input name="date" required type="date" className={inputClasses} />
              </div>
              <div>
                <label className="block text-xs font-body font-semibold text-foreground tracking-wider uppercase mb-2">Preferred Time *</label>
                <input name="time" required type="time" className={inputClasses} />
              </div>
            </div>

            <div>
              <label className="block text-xs font-body font-semibold text-foreground tracking-wider uppercase mb-2">Message</label>
              <textarea name="message" rows={3} placeholder="Any special requests..." className={inputClasses} />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-primary-foreground font-body font-semibold text-sm tracking-wider uppercase rounded-full hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              {submitted ? "Redirecting to WhatsApp..." : "Book Appointment"}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingSection;
