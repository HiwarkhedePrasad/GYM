'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

export default function HomeHeroInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true, // animate only once
    threshold: 0.1,
  });

  return (
    // This parent section has a white background.
    <section className="relative bg-white">
      {/* This container is centered and pulled up to overlap the section above */}
      <div className="container mx-auto relative -top-[50px] [left:-12%] bg-black text-white p-16 shadow-xl w-4/5">
        {/* Animated grid container */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8"
        >
          {/* Contact Info Block */}
          <motion.div variants={itemVariants} className="flex items-start gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="h-10 w-10 flex-shrink-0"
              aria-label="Email icon"
            >
              <path d="M464 64H48C21.5 64 0 85.5 0 112v288c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zm0 48L256 262.4 48 112h416zM48 400V141.6l192 144c8 6 17.6 9.6 27.2 9.6s19.2-3.6 27.2-9.6l192-144V400H48z" />
            </svg>
            <div className="flex flex-col">
              <div className="text-lg font-bold uppercase tracking-widest text-white mb-4">
                Contact
              </div>
              <a
                href="mailto:contact@gymfitx.com"
                className="text-lg font-medium text-white hover:text-gray-300 transition-colors duration-200 mb-2"
              >
                contact@gymfitx.com
              </a>
              <a
                href="tel:(323)238-0638"
                className="text-lg font-medium text-white hover:text-gray-300 transition-colors duration-200"
              >
                (323) 238 - 0638
              </a>
            </div>
          </motion.div>

          {/* Open Hours Block */}
          <motion.div variants={itemVariants} className="flex items-start gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="h-10 w-10 flex-shrink-0"
              aria-label="Clock icon"
            >
              <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 464c-114.7 0-208-93.3-208-208S141.3 48 256 48s208 93.3 208 208S370.7 464 256 464zM232 120V256l112.5 67.5 22.9-38.3-91.4-54.5V120h-44z" />
            </svg>
            <div className="flex flex-col w-full max-w-xs">
              <div className="text-lg font-bold uppercase tracking-widest text-white mb-4">
                Open Hours
              </div>
              <div className="flex justify-between gap-4 mb-2">
                <span className="text-base text-gray-400">Mon - Sat (Morning)</span>
                <span className="text-lg text-white font-semibold">5:30AM - 10:00AM</span>
              </div>
              <div className="flex justify-between gap-4 mb-2">
                <span className="text-base text-gray-400">Mon - Sat (Evening)</span>
                <span className="text-lg text-white font-semibold">4:30PM - 10:00PM</span>
              </div>
            </div>
          </motion.div>

          {/* Location Block */}
          <motion.div variants={itemVariants} className="flex items-start gap-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              fill="currentColor"
              className="h-10 w-10 flex-shrink-0 text-white"
              aria-label="Location icon"
            >
              <path d="M192 0C86 0 0 86 0 192c0 106 192 320 192 320s192-214 192-320C384 86 298 0 192 0zm0 288c-53 0-96-43-96-96s43-96 96-96 96 43 96 96-43 96-96 96z" />
            </svg>
            <div className="flex flex-col">
              <div className="text-lg font-bold uppercase tracking-widest text-white mb-4">
                Location
              </div>
              <div className="text-lg font-medium text-gray-400">
                Near dakhale niwas, sangam road,
                <br />
                Hingna Rd, Wanadongri,
                <br />
                Maharashtra 441110
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}