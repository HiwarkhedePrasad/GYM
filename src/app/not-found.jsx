'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <section className="relative bg-white text-black min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header / 404 Display */}
        <div className="relative flex flex-col justify-center items-center">
          
          {/* Background "404" text (Hollow Style) */}
          <h1
            className="text-[10rem] sm:text-[16rem] lg:text-[20rem] font-extrabold text-transparent [-webkit-text-stroke:2px_gray] uppercase leading-none select-none opacity-50"
            aria-hidden="true"
          >
            404
          </h1>

          {/* Foreground Title */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100, damping: 12 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-black uppercase mb-4">
              PAGE NOT FOUND
            </h2>
            <p className="text-gray-500 uppercase tracking-wider text-sm sm:text-base max-w-md mx-auto">
              We couldn't find the page you were looking for. It might have been moved or deleted.
            </p>
          </motion.div>
        </div>

        {/* Back Home Button */}
        <motion.div
          className="flex justify-center mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link
            href="/"
            className="bg-black text-white font-bold uppercase text-sm tracking-wider py-4 px-8 hover:bg-gray-800 transition-colors duration-300"
          >
            Back to Home
          </Link>
        </motion.div>
      </div>
    </section>
  );
}