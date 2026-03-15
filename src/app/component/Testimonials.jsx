"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Member since 2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    text: "The transformation I've experienced here is incredible. The trainers actually care about your progress, and the equipment is always pristine. Best gym I've ever been to.",
    rating: 5,
    results: "Lost 15kg in 4 months",
  },
  {
    name: "Priya Patel",
    role: "Yoga Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    text: "I was intimidated to join a gym, but the community here is so welcoming. The group classes are phenomenal, and I've made friends who keep me motivated every day.",
    rating: 5,
    results: "Gained strength & confidence",
  },
  {
    name: "Amit Verma",
    role: "Competitive Bodybuilder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    text: "As someone who trains seriously, I need a gym that can keep up. New World Gym delivers with professional-grade equipment and trainers who understand advanced techniques.",
    rating: 5,
    results: "Placed top 3 in state comp",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32 bg-[#141414] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b87333]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#b87333]/30 to-transparent" />
        <div className="absolute top-1/4 -left-32 w-64 h-64 bg-[#b87333]/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-[#b87333]/5 rounded-full blur-[100px]" />
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
              Testimonials
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
            SUCCESS
            <br />
            <span className="text-[#b87333]">STORIES</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/50"
          >
            Real results from real members. See what our community has achieved.
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative bg-[#0a0a0a] border border-white/5 p-8 hover:border-[#b87333]/30 transition-all duration-500"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10">
                <Quote className="w-12 h-12 text-[#b87333]" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#b87333] fill-[#b87333]" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-white/70 leading-relaxed mb-8 relative z-10">
                "{testimonial.text}"
              </blockquote>

              {/* Results Badge */}
              <div className="inline-flex items-center gap-2 bg-[#b87333]/10 border border-[#b87333]/20 px-3 py-1.5 mb-6">
                <span className="text-xs text-[#b87333] font-medium">{testimonial.results}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <div className="relative w-12 h-12 overflow-hidden border border-[#b87333]/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/50">{testimonial.role}</div>
                </div>
              </div>

              {/* Hover Corner Accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-transparent group-hover:border-[#b87333]/50 transition-colors duration-300" />
              <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-transparent group-hover:border-[#b87333]/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-transparent group-hover:border-[#b87333]/50 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-transparent group-hover:border-[#b87333]/50 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-12"
        >
          {[
            { value: "2,000+", label: "Active Members" },
            { value: "50,000+", label: "Lives Changed" },
            { value: "98%", label: "Satisfaction Rate" },
            { value: "4.9", label: "Average Rating" },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="font-display text-4xl sm:text-5xl text-white mb-2">{stat.value}</div>
              <div className="text-sm text-white/40 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
