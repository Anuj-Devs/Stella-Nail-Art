import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const message = encodeURIComponent("Hello Stella Nail Studio, I want to book a nail service appointment.");

  return (
    <a
      href={`https://wa.me/918849151381?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" style={{ color: "hsl(0 0% 100%)" }} />
    </a>
  );
};

export default WhatsAppButton;
