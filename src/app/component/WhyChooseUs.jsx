"use client";

import { motion } from "framer-motion";
import { Award, Users, Cpu, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Elite & Modern Equipment",
    description:
      "Train with the best. Our state-of-the-art machines and free weights are meticulously maintained.",
  },
  {
    icon: Users,
    title: "Certified Personal Trainers",
    description:
      "Get a customized plan and expert guidance to reach your goals faster and safer than ever before.",
  },
  {
    icon: Cpu,
    title: "Spacious & Clean Facility",
    description:
      "Enjoy your workout in a clean, motivating, and spacious environment. We pride ourselves on our hygiene.",
  },
  {
    icon: Clock,
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
    <section className="py-12 sm:py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-[#b87333]" />
            <span className="text-[#b87333] text-sm font-semibold tracking-[0.2em] uppercase">
              Why Us
            </span>
            <span className="w-12 h-px bg-[#b87333]" />
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl text-white leading-tight mb-4">
            THE{" "}
            <span className="text-[#b87333]">DIFFERENCE</span>
            <br />
            THAT DELIVERS RESULTS
          </h2>
          <p className="text-base sm:text-lg text-white/50">
            We&apos;re not just another gym. We&apos;re a community dedicated to your
            success. Here&apos;s how we stand apart.
          </p>
        </div>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-[#141414] border border-white/5 p-6 sm:p-8 hover:border-[#b87333]/30 transition-all duration-500"
                variants={itemVariants}
              >
                <div className="w-14 h-14 border border-[#b87333]/30 flex items-center justify-center mb-6 group-hover:border-[#b87333] group-hover:bg-[#b87333]/10 transition-all duration-300">
                  <Icon className="w-6 h-6 text-[#b87333]" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 group-hover:text-[#b87333] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-white/50 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;