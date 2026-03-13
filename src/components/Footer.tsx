import { Star, MapPin, Phone, Instagram, Facebook } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Book Now", href: "#booking" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="bg-foreground py-14">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-xl font-bold mb-3" style={{ color: "hsl(0 0% 100%)" }}>
              STELLA <span className="text-gold">NAIL STUDIO</span>
            </h3>
            <p className="text-sm font-body leading-relaxed mb-4" style={{ color: "hsl(20 20% 70%)" }}>
              Luxury Nail Art Studio in Rajkot
            </p>
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-gold text-gold" />
                ))}
              </div>
              <span className="text-xs font-body text-gold">5.0 (32 Reviews)</span>
            </div>
            <div className="flex gap-3">
              <a href="https://www.instagram.com/stella_nail.studio/" target="_blank" aria-label="Instagram" className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-accent-foreground transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/stellanailstudio" target="_blank" aria-label="Facebook" className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-accent-foreground transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-sm mb-4 tracking-wider uppercase" style={{ color: "hsl(0 0% 100%)" }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm font-body hover:text-gold transition-colors" style={{ color: "hsl(20 20% 70%)" }}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-bold text-sm mb-4 tracking-wider uppercase" style={{ color: "hsl(0 0% 100%)" }}>Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                <p className="text-sm font-body" style={{ color: "hsl(20 20% 70%)" }}>
                  Shop 3, Vardhman Heights, New 150 Feet Road, Rajkot 360005
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-gold flex-shrink-0" />
                <a href="tel:08849151381" className="text-sm font-body text-gold hover:underline">088491 51381</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-muted/20 pt-6 text-center">
          <p className="text-xs font-body" style={{ color: "hsl(20 20% 50%)" }}>
            © {new Date().getFullYear()} Stella Nail Studio. All rights reserved. | Best Nail Salon in Rajkot
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
