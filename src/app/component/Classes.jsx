'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';

// Make sure these packages are installed: npm install slick-carousel react-slick
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const classesData = [
  {
    title: 'High-Intensity Training',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing amet, aliquet orci tellus. Massa sit risus gravida doloril.',
    href: '/class/high-intensity-training',
    imgSrc:
      'https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=800',
  },
  {
    title: 'Weight Lifting',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing amet, aliquet orci tellus. Massa sit risus gravida doloril.',
    href: '/class/weight-lifting',
    imgSrc:
      'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?q=80&w=800',
  },
  {
    title: 'Crossfit',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing amet, aliquet orci tellus. Massa sit risus gravida doloril.',
    href: '/class/crossfit',
    imgSrc:
      'https://images.unsplash.com/photo-1517963628607-6d7c6d74a1e1?q=80&w=800',
  },
  {
    title: 'Cardio',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing amet, aliquet orci tellus. Massa sit risus gravida doloril.',
    href: '/class/cardio',
    imgSrc:
      'https://images.unsplash.com/photo-1554284126-aa88f22d8b72?q=80&w=800',
  },
  {
    title: 'Yoga',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing amet, aliquet orci tellus. Massa sit risus gravida doloril.',
    href: '/class/yoga',
    imgSrc:
      'https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=800',
  },
  {
    title: 'Spin Class',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. adipiscing amet, aliquet orci tellus. Massa sit risus gravida doloril.',
    href: '/class/spin-class',
    imgSrc:
      'https://images.unsplash.com/photo-1554284126-5d88a9a3e6cf?q=80&w=800',
  },
];

const placeholderSlide = { type: 'placeholder' };
// Adding placeholders so the first real card doesn't start at the very edge
const slides = [placeholderSlide, placeholderSlide, ...classesData];

const ArrowIcon = () => (
  <svg
    className="w-3 h-3 ml-1 transition-transform group-hover:translate-x-1"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 8l4 4m0 0l-4 4m4-4H3"
    />
  </svg>
);

const NavButton = ({ onClick, direction }) => (
  <button
    onClick={onClick}
    className="bg-neutral-800 hover:bg-neutral-700 text-white w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center transition-colors text-sm rounded-full"
    aria-label={direction === 'left' ? 'Previous slide' : 'Next slide'}
  >
    {direction === 'left' ? (
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    ) : (
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    )}
  </button>
);

function ClassCard({ title, description, href, imgSrc }) {
  return (
    <motion.div
      className="flex flex-col rounded-xl overflow-hidden group mx-2 bg-zinc-900 border border-white/5"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ type: 'spring', stiffness: 90, damping: 15 }}
    >
      <a href={href} className="block h-full flex flex-col">
        <div className="relative h-48 sm:h-56 overflow-hidden">
          <Image
            src={imgSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <div className="p-5 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-2 truncate">
              {title}
            </h3>
            <p className="text-sm text-neutral-400 mb-4 line-clamp-2">
              {description}
            </p>
          </div>
          <div className="flex items-center font-bold text-xs text-red-500 uppercase tracking-wider group-hover:text-white transition-colors mt-auto">
            Class Information
            <ArrowIcon />
          </div>
        </div>
      </a>
    </motion.div>
  );
}

export default function ClassesSection() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  };

  return (
    <section className="relative bg-black text-white py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-end mb-12 gap-6">
          
          <div className="relative w-full sm:w-auto">
            <h1
              className="text-[15vw] sm:text-8xl md:text-9xl font-extrabold text-white/5 uppercase leading-none select-none"
              aria-hidden="true"
            >
              CLASSES
            </h1>

            <motion.h2
              className="absolute top-1/2 left-0 -translate-y-1/2 text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Our <span className="text-red-600">Classes</span>
            </motion.h2>
          </div>

          <div className="flex space-x-2">
            <NavButton
              onClick={() => sliderRef.current?.slickPrev()}
              direction="left"
            />
            <NavButton
              onClick={() => sliderRef.current?.slickNext()}
              direction="right"
            />
          </div>
        </div>

        <div className="mb-12">
          <Slider ref={sliderRef} {...settings}>
            {slides.map((slideItem, index) =>
              slideItem.type === 'placeholder' ? (
                <div key={index} className="mx-2" />
              ) : (
                <ClassCard
                  key={index}
                  title={slideItem.title}
                  description={slideItem.description}
                  href={slideItem.href}
                  imgSrc={slideItem.imgSrc}
                />
              )
            )}
          </Slider>
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="/classes"
            className="bg-white text-black font-bold uppercase text-sm tracking-wider py-4 px-10 rounded-full hover:bg-gray-200 transition-colors duration-300 shadow-lg shadow-white/10"
          >
            Browse All Classes
          </a>
        </motion.div>
      </div>
    </section>
  );
}