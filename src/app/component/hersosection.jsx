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
      staggerChildren: 0.2, // Animate children one after the other
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring', // Use a spring animation for a more dynamic feel
      stiffness: 100,
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden text-center text-white">
      {/* Container for the text content, with animations */}
      <motion.div
        className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"
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
            className="transform  bg-white px-10 py-4 text-lg font-semibold text-gray-900 shadow-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105"
          >
            Subscribe Now
          </Link>
          <Link
            href="/classes"
            className="transform  border-2 border-white bg-transparent px-8 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:scale-105"
          >
            Browse Classes
          </Link>
        </motion.div>
      </motion.div>

      {/* Background Image
          NOTE: Your image src="/h.ome.jpg" must be located in the /public folder.
      */}
      <Image
        src="/home.jpg"
        loading="eager"
        fill
        alt="Gym - Gymfit X Webflow Template"
        sizes="100vw"
        style={{
    objectFit: "cover",
    objectPosition: "center 40%" // move image slightly upward
  }}
        className="absolute inset-0 z-[-1] object-cover object-top"
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