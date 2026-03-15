"use client";

import { motion } from "framer-motion";
import {
  Dumbbell,
  Users,
  Droplets,
  Wifi,
  Clock,
  ShieldCheck,
  Zap,
  Heart,
} from "lucide-react";

const facilities = [
  {
    icon: Dumbbell,
    title: "Elite Equipment",
    description: "Top-tier machines and free weights from leading manufacturers.",
    stat: "50+",
    statLabel: "Machines",
  },
  {
    icon: Users,
    title: "Expert Trainers",
    description: "Certified professionals dedicated to your fitness journey.",
    stat: "15",
    statLabel: "Coaches",
  },
  {
    icon: Droplets,
    title: "Recovery Zone",
    description: "Steam room, sauna, and dedicated stretching areas.",
    stat: "3",
    statLabel: "Recovery Areas",
  },
  {
    icon: Wifi,
    title: "Connected Space",
    description: "High-speed WiFi and charging stations throughout.",
    stat: "1Gbps",
    statLabel: "Speed",
  },
  {
    icon: Clock,
    title: "Extended Access",
    description: "Early morning to late evening hours, 7 days a week.",
    stat: "16",
    statLabel: "Hours/Day",
  },
  {
    icon: ShieldCheck,
    title: "Sanitized Environment",
    description: "Rigorous cleaning protocols for your safety.",
    stat: "24/7",
    statLabel: "Cleaning",
  },
  {
    icon: Zap,
    title: "Power Zone",
    description: "Dedicated area for functional and HIIT training.",
    stat: "2k",
    statLabel: "Sq Ft",
  },
  {
    icon: Heart,
    title: "Cardio Theater",
    description: "Premium cardio equipment with entertainment systems.",
    stat: "20+",
    statLabel: "Units",
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#b87333]/5 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
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
              Facilities
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
            WORLD-CLASS
            <br />
            <span className="text-[#b87333]">AMENITIES</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/50"
          >
            Everything you need to push your limits and achieve your goals.
          </motion.p>
        </div>

        {/* Facilities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  delay: index * 0.05,
                  duration: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative bg-[#141414] border border-white/5 p-8 hover:border-[#b87333]/30 transition-all duration-500"
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#b87333]/0 to-[#b87333]/0 group-hover:from-[#b87333]/5 group-hover:to-transparent transition-all duration-500" />

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="w-14 h-14 border border-[#b87333]/30 flex items-center justify-center mb-6 group-hover:border-[#b87333] group-hover:bg-[#b87333]/10 transition-all duration-300">
                    <Icon className="w-6 h-6 text-[#b87333]" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#b87333] transition-colors duration-300">
                    {facility.title}
                  </h3>
                  <p className="text-sm text-white/50 mb-6 leading-relaxed">
                    {facility.description}
                  </p>

                  {/* Stat */}
                  <div className="flex items-baseline gap-2 pt-4 border-t border-white/5">
                    <span className="font-display text-3xl text-white">{facility.stat}</span>
                    <span className="text-xs text-white/40 uppercase tracking-wider">{facility.statLabel}</span>
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-transparent group-hover:border-[#b87333]/50 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-transparent group-hover:border-[#b87333]/50 transition-colors duration-300" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
