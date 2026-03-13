import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Chandni Magecha",
    text: "Beautiful and very clean work. Friendly service. Loved it!",
    rating: 5,
  },
  {
    name: "Urvisha Vagher",
    text: "Best nail salon in Rajkot. Amazing nail designs!",
    rating: 5,
  },
  {
    name: "Janvi Joshi",
    text: "Nice experience. Very professional and hygienic studio.",
    rating: 5,
  },
];

const ReviewsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="reviews" className="py-20 md:py-28 bg-background" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-sm font-body font-semibold tracking-[0.2em] uppercase text-gold mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">What Our Clients Say</h2>
          <div className="flex items-center justify-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-body font-semibold text-foreground">5.0</span>
            <span className="font-body text-muted-foreground text-sm">(32 Reviews on Google)</span>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border relative"
            >
              <Quote className="w-8 h-8 text-blush-light mb-4" />
              <div className="flex gap-0.5 mb-4">
                {[...Array(review.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="font-body text-muted-foreground leading-relaxed mb-6 italic">"{review.text}"</p>
              <p className="font-body font-semibold text-foreground text-sm">— {review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
