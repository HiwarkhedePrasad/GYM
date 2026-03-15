"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { ArrowRight, Target, Users, Trophy } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Goal-Focused",
    description: "Personalized training programs tailored to your specific fitness objectives.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Join a supportive network of like-minded individuals pushing their limits.",
  },
  {
    icon: Trophy,
    title: "Proven Results",
    description: "Track record of transforming members through science-backed methodologies.",
  },
];

export default function AboutUsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const textY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#141414] to-transparent" />
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#b87333]/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Column */}
          <motion.div
            style={{ y: imageY }}
            className="relative"
          >
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/hero.png"
                  alt="Athlete training at New World Gym"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/50 to-transparent" />
              </div>

              {/* Decorative Frame */}
              <div className="absolute -inset-4 border border-[#b87333]/20 -z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-[#b87333]" />
            </motion.div>

            {/* Floating Stats Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 sm:left-8 bg-[#141414] border border-white/10 p-6 z-20"
            >
              <div className="font-display text-5xl text-[#b87333]">10+</div>
              <div className="text-sm text-white/60 mt-1">Years of Excellence</div>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div style={{ y: textY }} className="relative">
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="w-12 h-px bg-[#b87333]" />
              <span className="text-[#b87333] text-sm font-semibold tracking-[0.2em] uppercase">
                About Us
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl text-white leading-[0.95] mb-8"
            >
              WE ARE MORE
              <br />
              <span className="text-[#b87333]">THAN A GYM</span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-white/60 leading-relaxed mb-10 max-w-lg"
            >
              New World Gym is a sanctuary for those who refuse to settle.
              We combine cutting-edge equipment with expert coaching to create
              an environment where limits are shattered and legends are born.
            </motion.p>

            {/* Feature Grid */}
            <div className="space-y-6 mb-10">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-10 h-10 border border-[#b87333]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#b87333] group-hover:bg-[#b87333]/10 transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#b87333]" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-white/50">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.a
              href="#classes"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="group inline-flex items-center gap-3 text-white font-semibold tracking-wider uppercase"
            >
              <span className="relative">
                Explore Our Classes
                <span className="absolute bottom-0 left-0 w-full h-px bg-[#b87333] origin-left group-hover:scale-x-0 transition-transform duration-300" />
              </span>
              <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:border-[#b87333] group-hover:bg-[#b87333] transition-all duration-300">
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" />
              </div>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
