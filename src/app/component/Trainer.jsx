'use client';

import { motion } from 'framer-motion';

// Data for the trainers
const trainersData = [
  {
    name: 'Rohan Verma',
    role: 'Personal Coach',
    imgSrc: 'http://googleusercontent.com/image_collection/image_retrieval/10172667054723755190',
  },
  {
    name: 'Priya Sharma',
    role: 'Personal Coach',
    imgSrc: 'http://googleusercontent.com/image_collection/image_retrieval/7678012537724276385',
  },
  {
    name: 'Arjun Singh',
    role: 'Personal Coach',
    imgSrc: 'http://googleusercontent.com/image_collection/image_retrieval/16846093637362713871',
  },
];

// Re-usable Plus Icon
const PlusIcon = () => (
  <svg
    className="w-5 h-5 group-hover:hidden" // Fades out on hover
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M12 6v12m6-6H6"
    />
  </svg>
);

// NEW Arrow Icon
const ArrowIcon = () => (
  <svg
    className="w-5 h-5 hidden group-hover:block" // Fades in on hover
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);


// Individual Trainer Card Component
function TrainerCard({ name, role, imgSrc }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center group" // Added "group" for hover effects
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ type: 'spring', stiffness: 90, damping: 15 }}
    >
      <div className="relative flex justify-center w-full"> {/* Centered the image */}
        <img
          src={imgSrc}
          alt={name}
          className="w-[250px] h-[300px] object-cover" // Set exact size
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/250x300/e0e0e0/999?text=Image+Failed'; }}
        />
        <button className="absolute bottom-4 right-4 bg-red-600 text-white p-3 transition-all duration-300 group-hover:bg-black hover:scale-105">
          <PlusIcon />
          <ArrowIcon /> {/* Added ArrowIcon here */}
        </button>
      </div>
      <div className="mt-6">
        <h3 className="text-xl font-bold text-black uppercase">{name}</h3>
        <p className="text-sm text-gray-500 uppercase tracking-wider">{role}</p>
      </div>
    </motion.div>
  );
}

// Main Section Component
export default function TrainersSection() {
  return (
    <section className="relative bg-white text-black min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 py-24 sm:py-32">
        
        {/* Section Header */}
        <div className="relative flex justify-center items-center mb-16 -mt-16 sm:-mt-20 lg:-mt-24">
          
          {/* Background "TRAINERS" text */}
          <h1
            className="text-[8rem] [-webkit-text-stroke:2px_gray] sm:text-[10rem] lg:text-[12rem] font-extrabold text-transparent uppercase leading-none" // Changed text-white to text-transparent
            aria-hidden="true"
          >
            TRAINERS
          </h1>

          {/* Foreground Title */}
          <motion.h2
            className=" absolute text-2xl sm:text-3xl text-center lg:text-4xl font-extrabold text-black uppercase" // Removed whitespace-nowrap
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 100, damping: 12 }}
          >
            OUR TEAM OF <br/>PERSONAL TRAINERS
          </motion.h2>
        </div>

        {/* Trainers Grid */}
        <div className="flex flex-col md:flex-row justify-center gap-3 mb-20"> {/* Changed to flex, centered, and added gap-3 */}
          {trainersData.map((trainer, index) => (
            <TrainerCard
              key={index}
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
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <a
            href="/trainers"
            className="bg-black text-white font-bold uppercase text-sm tracking-wider py-4 px-8 hover:bg-gray-800 transition-colors duration-300"
          >
            Browse Trainers
          </a>
        </motion.div>
      </div>
    </section>
  );
}