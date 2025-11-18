'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';
import Slider from 'react-slick';

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
    className="bg-neutral-800 hover:bg-neutral-700 text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center transition-colors text-sm rounded"
  >
    {direction === 'left' ? (
      <svg
        className="w-3 h-3 sm:w-4 sm:h-4"
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
        className="w-3 h-3 sm:w-4 sm:h-4"
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
      className="flex flex-col rounded-lg overflow-hidden group mx-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ type: 'spring', stiffness: 90, damping: 15 }}
    >
      <a href={href} className="block">
        <div className="overflow-hidden rounded-t-lg">
          <img
            src={imgSrc}
            alt={title}
            className="w-full h-32 sm:h-36 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="bg-zinc-900 p-3 sm:p-4">
          <h3 className="text-sm sm:text-base font-bold text-white mb-2 truncate">
            {title}
          </h3>
          <p className="text-xs text-neutral-400 mb-3 line-clamp-2">
            {description}
          </p>
          <div className="flex items-center font-bold text-xs text-white uppercase tracking-wider group-hover:text-red-500 transition-colors">
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
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '20px',
        },
      },
    ],
  };

  return (
    <section className="relative bg-black text-white py-20 sm:py-32 md:py-40 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 sm:mb-8 gap-4">
          
          {/* MOBILE OPTIMIZATION HERE: 
            Changed fixed font sizes to text-[18vw] to ensure it spans the full width 
            on mobile devices, matching the "About Us" aesthetic.
          */}
          <div className="relative -mt-6 sm:-mt-10 lg:-mt-16 w-full sm:w-auto flex justify-center sm:block">
            <h1
              className="text-[18vw] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] font-extrabold text-white/5 uppercase leading-none [-webkit-text-stroke:1px_gray] sm:[-webkit-text-stroke:2px_gray]"
              aria-hidden="true"
            >
              CLASSES
            </h1>

            <motion.h2
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-white uppercase whitespace-nowrap w-full text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ type: 'spring', stiffness: 100, damping: 12 }}
            >
              DISCOVER ALL OUR CLASSES
            </motion.h2>
          </div>

          <div className="flex space-x-1 self-end sm:self-auto">
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

        <div className="mb-8 sm:mb-12">
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
          className="flex justify-center mt-6 sm:mt-8 px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <a
            href="/classes"
            className="bg-white text-black font-bold uppercase text-xs sm:text-sm tracking-wider py-3 px-6 sm:px-8 rounded-md hover:bg-gray-200 transition-colors duration-300 w-full sm:w-auto text-center"
          >
            Browse All Classes
          </a>
        </motion.div>
      </div>
    </section>
  );
}