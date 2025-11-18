"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define animation variants for the container and its children
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
      
      {/* 1. BACKGROUND IMAGE (Fixed Z-Index to 0) */}
      <Image
        src="/home.jpg"
        alt="Gym Background"
        fill
        priority
        quality={90}
        style={{
          objectFit: "cover",
          objectPosition: "center" 
        }}
        className="absolute inset-0 z-0" // Changed from z-[-1] to z-0
      />

      {/* 2. DARK OVERLAY (Z-Index 1 - on top of image) */}
      <div
        className="absolute inset-0 z-10 bg-black/60" // Increased opacity slightly for readability
        aria-hidden="true"
      ></div>

      {/* 3. CONTENT (Z-Index 20 - on top of everything) */}
      <motion.div
        className="relative z-20 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl font-bold tracking-tight text-white drop-shadow-lg sm:text-6xl md:text-7xl"
        >
          The gym for high impact athletes
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="mt-6 max-w-2xl mx-auto text-lg text-neutral-200 drop-shadow-md sm:text-xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus vehicula ut neque leo, posuere{' '}
          <span className="whitespace-nowrap">purus arcu.</span>
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/pricing"
            className="transform bg-white px-10 py-4 text-lg font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105"
          >
            Subscribe Now
          </Link>
          <Link
            href="/classes"
            className="transform border-2 border-white bg-transparent px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
          >
            Browse Classes
          </Link>
        </motion.div>
      </motion.div>

    </section>
  );
}