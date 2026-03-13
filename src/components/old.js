import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import galleryBridal from "@/assets/gallery-bridal.jpg";
import galleryGlitter from "@/assets/gallery-glitter.jpg";
import galleryChrome from "@/assets/gallery-chrome.jpg";
import galleryOmbre from "@/assets/gallery-ombre.jpg";
import gallery3d from "@/assets/gallery-3d.jpg";
import galleryExtensions from "@/assets/gallery-extensions.jpg";
import galleryMarble from "@/assets/gallery-marble.jpg";

const images = [
  { src: galleryBridal, alt: "Bridal nail art with gold accents", label: "Bridal Nail Art" },
  { src: galleryGlitter, alt: "Gold and pink glitter nail design", label: "Glitter Nails" },
  { src: galleryChrome, alt: "Chrome mirror nail art", label: "Chrome Nails" },
  { src: galleryOmbre, alt: "Pink to white ombre nail design", label: "Ombre Nails" },
  { src: gallery3d, alt: "3D floral nail art design", label: "3D Nail Art" },
  { src: galleryExtensions, alt: "Nude pink gel nail extensions", label: "Nail Extensions" },
  { src: galleryMarble, alt: "Marble pattern nail art with gold lines", label: "Marble Nails" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <>
      <section id="gallery" className="py-20 md:py-28 bg-blush-light" ref={ref}>
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-gold mb-3">Our Work</p>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
              Nail Art Gallery
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <motion.button
                key={img.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => setSelectedImage(i)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end justify-center pb-4">
                  <span className="text-sm font-body font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "hsl(0 0% 100%)" }}>
                    {img.label}
                  </span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-foreground/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 p-2" style={{ color: "hsl(0 0% 100%)" }}>
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;
