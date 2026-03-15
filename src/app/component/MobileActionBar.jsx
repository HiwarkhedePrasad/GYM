"use client";

import { Phone, MessageCircle, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function MobileActionBar() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 100 }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl border-t border-white/5 px-4 py-3 lg:hidden"
    >
      <div className="grid grid-cols-3 gap-3">
        <a
          href="tel:+919284905505"
          className="flex flex-col items-center justify-center gap-1 text-white/70 hover:text-[#b87333] transition-colors"
        >
          <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
            <Phone className="w-4 h-4" />
          </div>
          <span className="text-[10px] uppercase tracking-wider">Call</span>
        </a>

        <a
          href="https://wa.me/919284905505"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-white/70 hover:text-green-500 transition-colors"
        >
          <div className="w-10 h-10 border border-white/10 flex items-center justify-center">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-[10px] uppercase tracking-wider">WhatsApp</span>
        </a>

        <button
          onClick={scrollToContact}
          className="flex flex-col items-center justify-center gap-1 text-[#b87333]"
        >
          <div className="w-10 h-10 bg-[#b87333] flex items-center justify-center">
            <MapPin className="w-4 h-4 text-white" />
          </div>
          <span className="text-[10px] uppercase tracking-wider font-medium">Visit Us</span>
        </button>
      </div>
    </motion.div>
  );
}
