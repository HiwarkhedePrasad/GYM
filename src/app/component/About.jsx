'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutUsSection() {
  return (
    // ADDED 'overflow-hidden' HERE to prevent text overlapping the section above
    <section className="relative bg-white pt-20 sm:pt-32 md:pt-40 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        {/* Background "ABOUT US" text */}
        <div
          className="absolute inset-x-0 top-0 flex justify-center items-center -mt-4 sm:-mt-8 md:-mt-4 pointer-events-none"
          aria-hidden="true"
        >
          <h1 className="text-[6rem] sm:text-[10rem] md:text-[14rem] lg:text-[15rem] font-extrabold text-gray-100/80 uppercase leading-none [-webkit-text-stroke:1px_gray] sm:[-webkit-text-stroke:2px_gray]">
            ABOUT US
          </h1>
        </div>

        {/* Foreground Content */}
        <div className="relative z-10 flex flex-col items-center py-2">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-black uppercase max-w-4xl leading-tight px-2"
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
            className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4"
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
            className="mt-6 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <button className="bg-black text-white font-bold uppercase text-xs sm:text-sm tracking-wider py-3 sm:py-4 px-6 sm:px-8 rounded-md w-full sm:w-auto hover:bg-red-500 transition-colors duration-300">
              Subscribe Now
            </button>
            <button className="bg-white text-black border-2 border-black font-bold uppercase text-xs sm:text-sm tracking-wider py-3 sm:py-4 px-6 sm:px-8 rounded-md w-full sm:w-auto hover:bg-gray-100 transition-colors duration-300">
              Browse Classes
            </button>
          </motion.div>
        </div>
      </div>

      {/* IMAGE SECTION WITH BLACK BOTTOM HALF */}
      <div className="relative mt-16 sm:mt-24 md:mt-32">
        <div
          className="absolute bottom-0 left-0 right-0 h-[120px] sm:h-[150px] md:h-[225px] lg:h-[300px] bg-black z-0"
          aria-hidden="true"
        />

        {/* Main image container - Improved mobile layout */}
        <div className="relative w-full max-w-7xl mx-auto h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] z-10 px-4">
          {/* Hero image (man) */}
          <motion.div
            className="absolute z-30 w-[75%] sm:w-[70%] md:w-[45%] lg:w-[40%] top-[10%] left-1/2 -translate-x-1/2 sm:top-1/2 sm:left-0 sm:-translate-y-1/2 sm:translate-x-[20%] md:translate-x-[35%] lg:translate-x-[40%]"
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
              priority
            />
          </motion.div>

          {/* Home image (woman) */}
          <motion.div
            className="absolute z-20 w-[75%] sm:w-[70%] md:w-[45%] lg:w-[40%] top-[50%] left-1/2 -translate-x-1/2 sm:top-3/4 sm:right-0 sm:left-auto sm:-translate-y-1/2 sm:-translate-x-[10%] md:-translate-x-[20%] lg:-translate-x-[25%]"
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
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}