"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Instagram, Award, Clock } from "lucide-react";

const trainersData = [
  {
    name: "Rohan Verma",
    role: "Head Coach",
    specialty: "Strength & Conditioning",
    experience: "8+ years",
    certifications: ["NSCA-CSCS", "CrossFit L2"],
    imgSrc: "/trainers/rohan.jpg",
    fallback: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=600&h=800&fit=crop",
  },
  {
    name: "Priya Sharma",
    role: "Fitness Director",
    specialty: "HIIT & Functional Training",
    experience: "6+ years",
    certifications: ["ACE-CPT", "NASM-PES"],
    imgSrc: "/trainers/priya.jpg",
    fallback: "https://images.unsplash.com/photo-1594381898411-846e7b193eb2?w=600&h=800&fit=crop",
  },
  {
    name: "Arjun Singh",
    role: "Elite Trainer",
    specialty: "Olympic Lifting",
    experience: "10+ years",
    certifications: ["USA-W L1", "Precision Nutrition"],
    imgSrc: "/trainers/arjun.jpg",
    fallback: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=800&fit=crop",
  },
];

function TrainerCard({ trainer, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative"
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] overflow-hidden bg-[#141414]">
        <Image
          src={trainer.imgSrc}
          alt={trainer.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => {
            e.target.src = trainer.fallback;
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#b87333]/0 group-hover:bg-[#b87333]/20 transition-colors duration-500" />

        {/* Social Link */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <a
            href="#"
            className="w-10 h-10 bg-white/10 backdrop-blur-sm flex items-center justify-center hover:bg-[#b87333] transition-colors duration-300"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>
        </div>

        {/* Certifications Badge */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {trainer.certifications.map((cert, i) => (
            <div
              key={i}
              className="flex items-center gap-1.5 bg-black/60 backdrop-blur-sm px-2 py-1"
            >
              <Award className="w-3 h-3 text-[#b87333]" />
              <span className="text-[10px] text-white/80 uppercase tracking-wider">{cert}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Info Card */}
      <div className="relative -mt-20 mx-4 bg-[#141414] border border-white/5 p-6 group-hover:border-[#b87333]/30 transition-colors duration-500">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-semibold text-white group-hover:text-[#b87333] transition-colors duration-300">
              {trainer.name}
            </h3>
            <p className="text-sm text-[#b87333]">{trainer.role}</p>
          </div>
        </div>

        <p className="text-sm text-white/50 mb-4">{trainer.specialty}</p>

        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-white/40" />
            <span className="text-xs text-white/60">{trainer.experience}</span>
          </div>
        </div>

        {/* View Profile Link */}
        <a
          href="#"
          className="mt-4 flex items-center gap-2 text-sm text-white/60 hover:text-[#b87333] transition-colors duration-300"
        >
          <span>View Profile</span>
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}

export default function TrainersSection() {
  return (
    <section id="trainers" className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-gradient-to-l from-[#b87333]/5 to-transparent -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="w-12 h-px bg-[#b87333]" />
            <span className="text-[#b87333] text-sm font-semibold tracking-[0.2em] uppercase">
              Our Team
            </span>
            <span className="w-12 h-px bg-[#b87333]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-6"
          >
            EXPERT
            <br />
            <span className="text-[#b87333]">COACHES</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/50"
          >
            Learn from the best. Our certified trainers bring years of experience
            and proven methodologies to help you succeed.
          </motion.p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainersData.map((trainer, index) => (
            <TrainerCard key={index} trainer={trainer} index={index} />
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-center mt-16"
        >
          <a
            href="/trainers"
            className="inline-flex items-center gap-3 px-8 py-4 border border-white/20 text-white font-semibold tracking-wider uppercase hover:border-[#b87333] hover:text-[#b87333] transition-all duration-300"
          >
            View All Trainers
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
