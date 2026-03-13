import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";

// auto import all images
const imageModules = import.meta.glob("/src/assets/gallery/*.{jpg,jpeg,png,webp}", {
  eager: true,
});

const images = Object.values(imageModules).map((mod: any, i) => ({
  src: mod.default,
  alt: `Gallery image ${i + 1}`,
}));

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // next image
  const nextImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage + 1) % images.length);
  };

  // previous image
  const prevImage = () => {
    if (selectedImage === null) return;
    setSelectedImage((selectedImage - 1 + images.length) % images.length);
  };

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
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold mb-3">
              Our Work
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nail Art Gallery
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                onClick={() => setSelectedImage(i)}
                className={`group relative rounded-xl overflow-hidden cursor-pointer ${
                  (i === 0 || i === 10 || i === 20 || i === 30 || i === 40 || i === 50)
                    ? "md:col-span-2 md:row-span-2"
                    : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-full object-cover aspect-square group-hover:scale-110 transition-transform duration-500"
                />
                {/* <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300 flex items-end justify-center pb-4">
                  <span className="text-sm font-body font-semibold tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: "hsl(0 0% 100%)" }}>
                    {img.label}
                  </span>
                </div> */}
              </motion.button>
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 text-white">
              <X className="w-8 h-8" />
            </button>

            <motion.img
              key={selectedImage}
              src={images[selectedImage].src}
              alt={images[selectedImage].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}

              /* SWIPE SUPPORT */
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.x > 120) prevImage();
                if (info.offset.x < -120) nextImage();
              }}

              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GallerySection;