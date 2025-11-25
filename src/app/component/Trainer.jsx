
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Plus, ArrowRight } from 'lucide-react';

const trainersData = [
  {
    name: 'Rohan Verma',
    role: 'Personal Coach',
    imgSrc: '/trainers/rohan.jpg',
  },
  {
    name: 'Priya Sharma',
    role: 'Personal Coach',
    imgSrc: '/trainers/priya.jpg',
  },
  {
    name: 'Arjun Singh',
    role: 'Personal Coach',
    imgSrc: '/trainers/arjun.jpg',
  },
];

function TrainerCard({ name, role, imgSrc, index }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center group relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.2, type: 'spring', stiffness: 50 }}
    >
      <div className="relative w-full max-w-sm aspect-[3/4] overflow-hidden rounded-2xl">
        <Image
          src={imgSrc}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onError={(e) => { e.target.style.display = 'none'; }} // Fallback handling
        />
        {/* Fallback overlay if image fails (simulated by hiding image) */}
        <div className="absolute inset-0 bg-zinc-800 -z-10 flex items-center justify-center text-gray-500">
          No Image
        </div>

        <button className="absolute bottom-4 right-4 bg-red-600 text-white p-3 rounded-full transition-all duration-300 group-hover:bg-black hover:scale-110 z-10 shadow-lg">
          <Plus className="w-6 h-6 group-hover:hidden" />
          <ArrowRight className="w-6 h-6 hidden group-hover:block" />
        </button>
      </div>
      <div className="mt-6">
        <h3 className="text-2xl font-bold text-black uppercase">{name}</h3>
        <p className="text-sm text-gray-500 uppercase tracking-wider font-medium">{role}</p>
      </div>
    </motion.div>
  );
}

export default function TrainersSection() {
  return (
    <section className="relative bg-white text-black py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="relative flex justify-center items-center mb-16">
          <h1
            className="text-[15vw] sm:text-8xl md:text-9xl font-extrabold text-gray-100 uppercase leading-none select-none"
            aria-hidden="true"
          >
            TRAINERS
          </h1>

          <motion.h2
            className="absolute text-3xl sm:text-4xl md:text-5xl text-center font-extrabold text-black uppercase"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Meet The <span className="text-red-600">Team</span>
          </motion.h2>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trainersData.map((trainer, index) => (
            <TrainerCard
              key={index}
              index={index}
              name={trainer.name}
              role={trainer.role}
              imgSrc={trainer.imgSrc}
            />
          ))}
        </div>

        {/* Browse All Button */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="/trainers"
            className="bg-black text-white font-bold uppercase text-sm tracking-wider py-4 px-10 rounded-full hover:bg-gray-800 transition-colors duration-300 shadow-lg shadow-black/20"
          >
            View All Trainers
          </a>
        </motion.div>
      </div>
    </section>
  );
}
