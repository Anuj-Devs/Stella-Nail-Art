import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/70 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-3 font-display font-bold tracking-wide text-foreground">
          <img src="/edited_logo_yellow.png" alt="Stella Nail Studio" className="h-auto w-24 rounded-full object-cover" />
          {/* <div>
            <div className="text-lg md:text-2xl">STELLA</div>
            <div className="text-xs md:text-sm uppercase text-gold">NAIL STUDIO</div>
          </div> */}
        </a>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-body font-medium tracking-wider uppercase text-muted-foreground hover:text-gold transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#booking"
            className="ml-4 px-6 py-2.5 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wider uppercase rounded-full hover:opacity-90 transition-opacity"
          >
            Book Now
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-3 lg:hidden">
          <a href="tel:08849151381" className="p-2 text-gold">
            <Phone className="w-5 h-5" />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="p-2  text-gold">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden bg-black/40"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute top-16 left-0 right-0 bg-card border-b border-border overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="px-4 py-6 flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-body font-medium tracking-wider uppercase text-muted-foreground hover:text-gold transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#booking"
                  onClick={() => setIsOpen(false)}
                  className="mt-2 px-6 py-3 bg-primary text-primary-foreground font-body text-sm font-semibold tracking-wider uppercase rounded-full text-center"
                >
                  Book Appointment
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
