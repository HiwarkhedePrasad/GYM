'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutUsSection() {
  return (
    <section className="relative bg-white pt-24 sm:pt-32 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Background "ABOUT US" text */}
        <div
          className="absolute inset-x-0 top-0 flex justify-center items-center -mt-8 sm:-mt-4"
          aria-hidden="true"
        >
          <h1 className="text-[10rem] sm:text-[14rem] md:text-[18rem] lg:text-[15rem] font-extrabold text-gray-100/80 uppercase leading-none [-webkit-text-stroke:2px_gray]">
            ABOUT US
          </h1>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center py-2">
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black uppercase max-w-4xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 100, damping: 12 }}
          >
            WE ARE NOT JUST A GYM, WE ARE
            <br />
            A WHOLE COMMUNITY
          </motion.h2>

          <motion.p
            className="mt-6 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
            sagittis, diam netus vel eget scelerisque nibh justo, vestibulum.
            Velit senectus.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <button className="bg-black text-white font-bold uppercase text-sm tracking-wider py-4 px-8 rounded-md w-full sm:w-auto hover:bg-red-500 transition-colors duration-300">
              Subscribe Now
            </button>
            <button className="bg-white text-black border-2 border-black font-bold uppercase text-sm tracking-wider py-4 px-8 rounded-md w-full sm:w-auto hover:bg-gray-100 transition-colors duration-300">
              Browse Classes
            </button>
          </motion.div>
        </div>
      </div>

      {/* === IMAGE SECTION WITH BLACK BOTTOM HALF === */}
      <div className="relative mt-24 sm:mt-32">
        <div
          className="absolute bottom-0 left-0 right-0 h-[150px] sm:h-[225px] lg:h-[300px] bg-black z-0"
          aria-hidden="true"
        />

        {/* Main image container for positioning and centering */}
        <div className="relative w-full max-w-7xl mx-auto h-[300px] sm:h-[450px] lg:h-[600px] z-10">
          
          {/* 🖼️ hero.png - MOVED UP & RIGHT */}
          <motion.div
            /* ✅ CHANGES APPLIED:
              - 'translate-x-[40%]': Increased from 20% to restore overlap.
            */
            className="absolute z-30 w-[50%] sm:w-[45%] lg:w-[40%] top-1/2 left-0 -translate-y-1/2 translate-x-[40%]"
            
            /* ✅ ANIMATION CHANGED:
              - 'y: -100': Animates from TOP.
            */
            initial={{ opacity: 0, y: -100, rotate: -5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-150px' }}
            transition={{
              type: 'spring',
              stiffness: 90,
              damping: 15,
              delay: 0.2,
            }}
          >
            <Image
              src="/hero.png"
              alt="Man lifting dumbbells in the gym"
              width={800}
              height={1000}
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </motion.div>

          {/* 🖼️ home.jpg - MOVED DOWN & LEFT */}
          <motion.div
            /* ✅ CHANGES APPLIED:
              - '-translate-x-[25%]': Increased from -10% to restore overlap.
            */
            className="absolute z-20 w-[50%] sm:w-[45%] lg:w-[40%] top-3/4 right-0 -translate-y-1/2 -translate-x-[25%]"
            
            /* ✅ ANIMATION CHANGED:
              - 'y: 100': Animates from BOTTOM.
            */
            initial={{ opacity: 0, y: 100, rotate: 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: 0 }}
            viewport={{ once: true, margin: '-150px' }}
            transition={{
              type: 'spring',
              stiffness: 90,
              damping: 15,
              delay: 0.3,
            }}
          >
            <Image
              src="/home.jpg"
              alt="Woman using a cable machine in the gym"
              width={800}
              height={1000}
              className="w-full h-auto object-cover rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}