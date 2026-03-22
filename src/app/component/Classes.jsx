"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ArrowLeft, ArrowRight, Clock, Users, Flame } from "lucide-react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const classesData = [
  {
    title: "High-Intensity Training",
    description: "Push your limits with explosive movements and maximum effort intervals.",
    duration: "45 min",
    intensity: "High",
    capacity: "20",
    imgSrc: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800",
  },
  {
    title: "Strength & Conditioning",
    description: "Build raw power with compound movements and progressive overload.",
    duration: "60 min",
    intensity: "High",
    capacity: "15",
    imgSrc: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=800",
  },
  {
    title: "CrossFit",
    description: "Functional fitness combining cardio, weightlifting, and gymnastics.",
    duration: "60 min",
    intensity: "Extreme",
    capacity: "12",
    imgSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
  },
  {
    title: "Cardio Blast",
    description: "Heart-pumping sessions designed to maximize calorie burn.",
    duration: "45 min",
    intensity: "Medium",
    capacity: "25",
    imgSrc: "https://images.unsplash.com/photo-1576678927484-cc907957088c?q=80&w=800",
  },
  {
    title: "Power Yoga",
    description: "Strength-focused yoga flow building flexibility and core stability.",
    duration: "60 min",
    intensity: "Medium",
    capacity: "18",
    imgSrc: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=800",
  },
  {
    title: "Olympic Lifting",
    description: "Master the snatch and clean & jerk with expert coaching.",
    duration: "90 min",
    intensity: "High",
    capacity: "10",
    imgSrc: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=800",
  },
];

function ClassCard({ title, description, duration, intensity, capacity, imgSrc }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="group relative bg-[#141414] overflow-hidden cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={imgSrc}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/50 to-transparent" />

        {/* Intensity Badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5">
          <Flame className="w-3 h-3 text-[#b87333]" />
          <span className="text-xs font-medium text-white uppercase tracking-wider">{intensity}</span>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#b87333]/0 group-hover:bg-[#b87333]/10 transition-colors duration-500" />
      </div>

      {/* Content */}
      <div className="p-6 relative">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#b87333] transition-colors duration-300">
          {title}
        </h3>
        <p className="text-sm text-white/50 mb-4 line-clamp-2">{description}</p>

        {/* Meta Info */}
        <div className="flex items-center gap-4 pt-4 border-t border-white/5">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-white/40" />
            <span className="text-xs text-white/60">{duration}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-3.5 h-3.5 text-white/40" />
            <span className="text-xs text-white/60">{capacity} spots</span>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-4 flex items-center gap-2 text-[#b87333] text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span>View Details</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>

      {/* Border Animation */}
      <div className="absolute inset-0 border border-white/5 group-hover:border-[#b87333]/30 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  );
}

export default function ClassesSection() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1, centerMode: true, centerPadding: "20px" },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1, centerMode: false, centerPadding: "0px" },
      },
    ],
  };

  return (
    <section id="classes" className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-[#b87333]/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-4"
            >
              <span className="w-12 h-px bg-[#b87333]" />
              <span className="text-[#b87333] text-sm font-semibold tracking-[0.2em] uppercase">
                Classes
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl text-white"
            >
              TRAINING
              <br />
              <span className="text-[#b87333]">PROGRAMS</span>
            </motion.h2>
          </div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex gap-3"
          >
            <button
              onClick={() => sliderRef.current?.slickPrev()}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#b87333] hover:bg-[#b87333]/10 transition-all duration-300 group"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5 text-white/60 group-hover:text-[#b87333] transition-colors" />
            </button>
            <button
              onClick={() => sliderRef.current?.slickNext()}
              className="w-12 h-12 border border-white/20 flex items-center justify-center hover:border-[#b87333] hover:bg-[#b87333]/10 transition-all duration-300 group"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5 text-white/60 group-hover:text-[#b87333] transition-colors" />
            </button>
          </motion.div>
        </div>

        {/* Slider */}
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <div className="px-4 sm:px-6 lg:px-8">
            <Slider ref={sliderRef} {...settings}>
              {classesData.map((classItem, index) => (
                <div key={index} className="px-3">
                  <ClassCard {...classItem} />
                </div>
              ))}
            </Slider>
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="/classes"
            className="inline-flex items-center gap-3 px-8 py-4 border border-[#b87333] text-[#b87333] font-semibold tracking-wider uppercase hover:bg-[#b87333] hover:text-white transition-all duration-300"
          >
            View All Classes
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
