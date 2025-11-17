// components/WhyChooseUs.jsx
"use client";

import { motion } from "framer-motion";
import { FiAward, FiUsers, FiCpu, FiClock } from "react-icons/fi";

// Data for the feature cards.
// This makes it super easy for the gym owner to update later.
const features = [
  {
    icon: <FiAward size={40} className="text-indigo-500" />,
    title: "Elite & Modern Equipment",
    description:
      "Train with the best. Our state-of-the-art machines and free weights are meticulously maintained.",
  },
  {
    icon: <FiUsers size={40} className="text-indigo-500" />,
    title: "Certified Personal Trainers",
    description:
      "Get a customized plan and expert guidance to reach your goals faster and safer than ever before.",
  },
  {
    icon: <FiCpu size={40} className="text-indigo-500" />,
    title: "Spacious & Clean Facility",
    description:
      "Enjoy your workout in a clean, motivating, and spacious environment. We pride ourselves on our hygiene.",
  },
  {
    icon: <FiClock size={40} className="text-indigo-500" />,
    title: "Flexible Hours & 24/7 Access",
    description:
      "We fit your schedule, not the other way around. Ask about our 24/7 access plans to train on your time.",
  },
];

// Animation for the container (staggered children)
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// Animation for each card (fade in from below)
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const WhyChooseUs = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">
            The <span className="text-indigo-600">Difference</span> That
            Delivers Results
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We're not just another gym. We're a community dedicated to your
            success. Here's how we stand apart.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          // This tells Framer Motion to animate when the section comes into view
          whileInView="show"
          // This ensures the animation only runs once
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-lg border border-gray-100"
              variants={itemVariants}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;