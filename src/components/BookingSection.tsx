import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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

type FormDataType = {
  name: FormDataEntryValue | null;
  phone: FormDataEntryValue | null;
  service: FormDataEntryValue | null;
  date: FormDataEntryValue | null;
  time: FormDataEntryValue | null;
  message: FormDataEntryValue | null;
};

type ErrorType = {
  name?: string;
  phone?: string;
  service?: string;
  date?: string;
  time?: string;
};

const BookingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [defaultDate, setDefaultDate] = useState("");
  const [defaultTime, setDefaultTime] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [errors, setErrors] = useState<ErrorType>({});

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    setDefaultDateFunction();
  }, []);

  const setDefaultDateFunction = () => {
    const now = new Date();

    const todayDate = now.toISOString().split("T")[0];

    now.setHours(now.getHours() + 2);
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");

    setDefaultDate(todayDate);
    setDefaultTime(`${hours}:${minutes}`);
  }

  const validateForm = (data: FormDataType) => {
    const newErrors: ErrorType = {};

    if (!data.name) newErrors.name = "Please enter your name";

    if (!data.phone) {
      newErrors.phone = "Please enter your phone number";
    } else if (!/^[0-9]{10}$/.test(data.phone.toString())) {
      newErrors.phone = "Enter valid 10 digit phone number";
    }

    if (!data.service) newErrors.service = "Please select a service";
    if (!data.date) newErrors.date = "Please select a date";
    if (!data.time) newErrors.time = "Please select a time";

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data: FormDataType = {
      name: formData.get("name"),
      phone: formData.get("phone"),
      service: formData.get("service"),
      date: formData.get("date"),
      time: formData.get("time"),
      message: formData.get("message"),
    };

    if (!validateForm(data)) return;

    const { name, phone, service, date, time, message } = data;

    const whatsappMsg = `Hello Stella Nail Studio, I want to book an appointment.

    Name: ${name}
    Phone: ${phone}
    Service: ${service}
    Date: ${date}
    Time: ${time}
    Message: ${message || "N/A"}`;

    window.open(
      `https://wa.me/918849151381?text=${encodeURIComponent(whatsappMsg)}`,
      "_blank"
    );

    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 3000);

    form.reset();

    setDefaultDateFunction();

    setErrors({});
  };

  const inputClasses = (error?: string) =>
    `w-full px-4 py-3 rounded-lg border ${
      error
        ? "border-red-500 focus:ring-red-500"
        : "border-border focus:ring-primary/50 focus:border-primary"
    } bg-card text-foreground font-body text-sm focus:outline-none focus:ring-2 transition-colors`;

  const renderError = (error?: string) => (
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          className="text-red-500 text-xs mt-1"
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  );

  return (
    <section id="booking" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-gold mb-3">
            Book Now
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
            Book Your Appointment
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-6 md:p-10 border border-border shadow-lg space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase mb-2">
                  Name *
                </label>
                <input
                  name="name"
                  placeholder="Your name"
                  className={inputClasses(errors.name)}
                  onChange={() => setErrors({ ...errors, name: "" })}
                />
                {renderError(errors.name)}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase mb-2">
                  Phone *
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="Your phone number"
                  className={inputClasses(errors.phone)}
                  onChange={() => setErrors({ ...errors, phone: "" })}
                />
                {renderError(errors.phone)}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase mb-2">
                Service *
              </label>
              <select
                name="service"
                className={inputClasses(errors.service)}
                onChange={() => setErrors({ ...errors, service: "" })}
              >
                <option value="">Select a service</option>
                {services.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
              {renderError(errors.service)}
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold uppercase mb-2">
                  Preferred Date *
                </label>
                <input
                  name="date"
                  type="date"
                  min={today}
                  value={defaultDate}
                  onChange={(e) => {
                    setDefaultDate(e.target.value);
                    setErrors({ ...errors, date: "" });
                  }}
                  className={inputClasses(errors.date)}
                />
                {renderError(errors.date)}
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase mb-2">
                  Preferred Time *
                </label>
                <input
                  name="time"
                  type="time"
                  value={defaultTime}
                  onChange={(e) => {
                    setDefaultTime(e.target.value);
                    setErrors({ ...errors, time: "" });
                  }}
                  className={inputClasses(errors.time)}
                />
                {renderError(errors.time)}
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase mb-2">
                Message
              </label>
              <textarea
                name="message"
                rows={3}
                placeholder="Any special requests..."
                className="w-full px-4 py-3 rounded-lg border border-border bg-card text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-primary text-primary-foreground font-semibold text-sm uppercase rounded-full hover:opacity-90 transition flex items-center justify-center gap-2"
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