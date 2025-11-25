"use client";

import { motion } from 'framer-motion';
import { Dumbbell, Wifi, Droplets, Users, Clock, ShieldCheck } from 'lucide-react';

const facilities = [
  {
    icon: <Dumbbell className="w-8 h-8" />,
    title: "Modern Equipment",
    description: "State-of-the-art machines for every muscle group."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Expert Trainers",
    description: "Certified professionals to guide your fitness journey."
  },
  {
    icon: <Droplets className="w-8 h-8" />,
    title: "Steam & Sauna",
    description: "Relax and recover after an intense workout session."
  },
  {
    icon: <Wifi className="w-8 h-8" />,
    title: "Free High-Speed WiFi",
    description: "Stay connected while you train."
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Extended Hours",
    description: "Open early and late to fit your busy schedule."
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Sanitized Space",
    description: "Clean and hygienic environment for your safety."
  }
];

export default function Facilities() {
  return (
    <section className="py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            World-Class <span className="text-red-600">Facilities</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to push your limits and achieve your best self.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {facilities.map((facility, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-black border border-white/5 p-8 rounded-2xl hover:border-red-600/50 transition-colors group"
            >
              <div className="bg-zinc-900 w-16 h-16 rounded-full flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform duration-300">
                {facility.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-red-500 transition-colors">{facility.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {facility.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
