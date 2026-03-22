'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <section className="relative bg-[#0a0a0a] text-white min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#b87333]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">

        {/* Section Header / 404 Display */}
        <div className="relative flex flex-col justify-center items-center">

          {/* Background "404" text (Hollow Style) */}
          <h1
            className="text-[8rem] sm:text-[14rem] lg:text-[18rem] font-extrabold text-transparent uppercase leading-none select-none opacity-10"
            style={{ WebkitTextStroke: '2px #b87333' }}
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
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="w-8 h-px bg-[#b87333]" />
              <span className="text-[#b87333] text-xs font-semibold tracking-[0.3em] uppercase">Error</span>
              <span className="w-8 h-px bg-[#b87333]" />
            </div>
            <h2 className="font-display text-4xl sm:text-6xl lg:text-8xl text-white uppercase mb-4 tracking-wide">
              PAGE NOT FOUND
            </h2>
            <p className="text-white/50 uppercase tracking-wider text-sm sm:text-base max-w-md mx-auto">
              We couldn&apos;t find the page you were looking for. It might have been moved or deleted.
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
            className="group relative px-8 py-4 overflow-hidden inline-flex items-center gap-2"
          >
            <span className="absolute inset-0 border border-[#b87333] group-hover:bg-[#b87333] transition-colors duration-300" />
            <span className="relative font-semibold uppercase text-sm tracking-wider text-white">
              Back to Home
            </span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}