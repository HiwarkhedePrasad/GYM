"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-center text-white">
      {/* Container for the text content, with animations */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white drop-shadow-lg leading-tight"
        >
          The gym for high impact athletes
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-4 sm:mt-6 max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-neutral-200 drop-shadow-md px-2"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus vehicula ut neque leo, posuere{' '}
          <span className="whitespace-nowrap">purus arcu.</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 px-4"
        >
          <Link
            href="/pricing"
            className="transform bg-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105 w-full sm:w-auto text-center"
          >
            Subscribe Now
          </Link>
          <Link
            href="/classes"
            className="transform border-2 border-white bg-transparent px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:scale-105 w-full sm:w-auto text-center"
          >
            Browse Classes
          </Link>
        </motion.div>
      </motion.div>

      {/* Background Image */}
      <Image
        src="/home.jpg"
        loading="eager"
        fill
        alt="Gym - Gymfit X Webflow Template"
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center 40%"
        }}
        className="absolute inset-0 z-[-1]"
        priority
      />

      {/* Dark Overlay Filter */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70"
        aria-hidden="true"
      ></div>
    </section>
  );
}