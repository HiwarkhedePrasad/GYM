"use client";

import { Phone, MessageCircle, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function MobileActionBar() {
  const scrollToContact = () => {
    const element = document.getElementById('footer');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.div 
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-t border-white/10 px-4 py-3 lg:hidden"
    >
      <div className="grid grid-cols-3 gap-3">
        <a 
          href="tel:+1234567890" 
          className="flex flex-col items-center justify-center gap-1 text-white hover:text-red-500 transition-colors"
        >
          <div className="bg-gray-800 p-2 rounded-full">
            <Phone className="w-5 h-5" />
          </div>
          <span className="text-xs font-medium">Call</span>
        </a>

        <a 
          href="https://wa.me/1234567890" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-white hover:text-green-500 transition-colors"
        >
          <div className="bg-gray-800 p-2 rounded-full">
            <MessageCircle className="w-5 h-5" />
          </div>
          <span className="text-xs font-medium">WhatsApp</span>
        </a>

        <button 
          onClick={scrollToContact}
          className="flex flex-col items-center justify-center gap-1 text-white hover:text-red-500 transition-colors"
        >
          <div className="bg-red-600 p-2 rounded-full shadow-lg shadow-red-900/50">
            <MapPin className="w-5 h-5" />
          </div>
          <span className="text-xs font-bold text-red-500">Join Now</span>
        </button>
      </div>
    </motion.div>
  );
}
