'use client';

import { motion } from 'framer-motion';

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

const PlusIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:hidden"
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

const ArrowIcon = () => (
  <svg
    className="w-4 h-4 sm:w-5 sm:h-5 hidden group-hover:block"
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

function TrainerCard({ name, role, imgSrc, index }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.2, type: 'spring', stiffness: 50 }}
    >
      <div className="relative flex justify-center w-full overflow-hidden">
        <img
          src={imgSrc}
          alt={name}
          className="w-full sm:w-[250px] h-[280px] sm:h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/250x300/e0e0e0/999?text=Image+Failed'; }}
        />
        <button className="absolute bottom-4 right-4 bg-red-600 text-white p-2 sm:p-3 transition-all duration-300 group-hover:bg-black hover:scale-105 z-10">
          <PlusIcon />
          <ArrowIcon />
        </button>
      </div>
      <div className="mt-4 sm:mt-6">
        <h3 className="text-lg sm:text-xl font-bold text-black uppercase">{name}</h3>
        <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider">{role}</p>
      </div>
    </motion.div>
  );
}

export default function TrainersSection() {
  return (
    <section className="relative bg-white text-black min-h-screen flex items-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 py-16 sm:py-24 lg:py-32">
        
        {/* Section Header */}
        <div className="relative flex justify-center items-center mb-12 sm:mb-16 -mt-8 sm:-mt-16 lg:-mt-24">
          
          {/* Background "TRAINERS" text - Responsive sizing */}
          <h1
            className="text-[6rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-extrabold text-transparent uppercase leading-none [-webkit-text-stroke:1px_gray] sm:[-webkit-text-stroke:2px_gray]"
            aria-hidden="true"
          >
            TRAINERS
          </h1>

          {/* Foreground Title - Better mobile spacing */}
          <motion.h2
            className="absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-extrabold text-black uppercase px-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ type: 'spring', stiffness: 100, damping: 12 }}
          >
            OUR TEAM OF <br/>PERSONAL TRAINERS
          </motion.h2>
        </div>

        {/* Trainers Grid - Better mobile layout */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap lg:flex-nowrap justify-center gap-6 sm:gap-4 lg:gap-3 mb-12 sm:mb-20">
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
          className="flex justify-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <a
            href="/trainers"
            className="bg-black text-white font-bold uppercase text-xs sm:text-sm tracking-wider py-3 sm:py-4 px-6 sm:px-8 hover:bg-gray-800 transition-colors duration-300 w-full sm:w-auto text-center"
          >
            Browse Trainers
          </a>
        </motion.div>
      </div>
    </section>
  );
}