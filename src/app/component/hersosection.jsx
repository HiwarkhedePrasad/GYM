"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowDown, Play } from 'lucide-react';

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        delay: 0.5,
      },
    },
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/home.jpg"
          alt="Gym interior with dramatic lighting"
          fill
          priority
          quality={90}
          className="object-cover"
          style={{ objectPosition: "center 30%" }}
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#0a0a0a]/80 via-[#0a0a0a]/40 to-[#0a0a0a]" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a0a0a]/90 via-transparent to-transparent" />

      {/* Grain Texture */}
      <div
        className="absolute inset-0 z-20 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Geometric Accent Lines */}
      <motion.div
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-1/3 left-0 w-32 h-px bg-gradient-to-r from-[#b87333] to-transparent z-20 origin-left"
      />
      <motion.div
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-1/3 right-0 w-48 h-px bg-gradient-to-l from-[#b87333] to-transparent z-20 origin-right"
      />

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-30 container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl">
          {/* Eyebrow Text */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-4 mb-6"
          >
            <span className="w-12 h-px bg-[#b87333]" />
            <span className="text-[#b87333] text-sm font-semibold tracking-[0.3em] uppercase">
              Est. 2024
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-[0.9] tracking-tight"
          >
            FORGE YOUR
            <br />
            <span className="text-[#b87333]">LEGACY</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="mt-8 text-lg sm:text-xl text-white/70 max-w-xl leading-relaxed font-light"
          >
            Where iron meets discipline. Premium equipment, expert coaching,
            and a community that pushes limits.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap items-center gap-4"
          >
            <Link
              href="#membership"
              className="group relative px-8 py-4 bg-[#b87333] overflow-hidden inline-flex items-center gap-3"
            >
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
              <span className="relative text-sm font-semibold tracking-wider uppercase text-white group-hover:text-[#0a0a0a] transition-colors duration-300">
                Start Your Journey
              </span>
            </Link>

            <Link
              href="#classes"
              className="group flex items-center gap-3 px-6 py-4 border border-white/20 hover:border-[#b87333] transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center group-hover:border-[#b87333] group-hover:bg-[#b87333]/10 transition-all duration-300">
                <Play className="w-4 h-4 text-white fill-white" />
              </div>
              <span className="text-sm font-medium tracking-wider text-white/80 group-hover:text-white transition-colors">
                View Classes
              </span>
            </Link>
          </motion.div>

          {/* Stats Row */}
          <motion.div
            variants={itemVariants}
            className="mt-20 grid grid-cols-3 gap-8 max-w-lg"
          >
            {[
              { value: "50+", label: "Equipment" },
              { value: "15", label: "Expert Trainers" },
              { value: "2k+", label: "Members" },
            ].map((stat, index) => (
              <div key={index} className="text-center sm:text-left">
                <div className="font-display text-3xl sm:text-4xl text-white">{stat.value}</div>
                <div className="text-xs sm:text-sm text-white/50 tracking-wider uppercase mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/40 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="w-4 h-4 text-[#b87333]" />
        </motion.div>
      </motion.div>

      {/* Side Text */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 hidden lg:block"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
          <span className="text-xs text-white/40 tracking-widest uppercase whitespace-nowrap"
            style={{ writingMode: 'vertical-lr' }}
          >
            Premium Fitness
          </span>
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
