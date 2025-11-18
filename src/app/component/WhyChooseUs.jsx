"use client";

import { motion } from "framer-motion";
import { FiAward, FiUsers, FiCpu, FiClock } from "react-icons/fi";

const features = [
  {
    icon: <FiAward size={32} className="text-indigo-500 sm:w-10 sm:h-10" />,
    title: "Elite & Modern Equipment",
    description:
      "Train with the best. Our state-of-the-art machines and free weights are meticulously maintained.",
  },
  {
    icon: <FiUsers size={32} className="text-indigo-500 sm:w-10 sm:h-10" />,
    title: "Certified Personal Trainers",
    description:
      "Get a customized plan and expert guidance to reach your goals faster and safer than ever before.",
  },
  {
    icon: <FiCpu size={32} className="text-indigo-500 sm:w-10 sm:h-10" />,
    title: "Spacious & Clean Facility",
    description:
      "Enjoy your workout in a clean, motivating, and spacious environment. We pride ourselves on our hygiene.",
  },
  {
    icon: <FiClock size={32} className="text-indigo-500 sm:w-10 sm:h-10" />,
    title: "Flexible Hours & 24/7 Access",
    description:
      "We fit your schedule, not the other way around. Ask about our 24/7 access plans to train on your time.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            The <span className="text-indigo-600">Difference</span> That
            Delivers Results
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600">
            We're not just another gym. We're a community dedicated to your
            success. Here's how we stand apart.
          </p>
        </div>

        {/* Features Grid - Better mobile layout */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-5 sm:p-6 rounded-lg shadow-lg border border-gray-100"
              variants={itemVariants}
            >
              <div className="mb-3 sm:mb-4">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;