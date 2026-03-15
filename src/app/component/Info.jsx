"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Clock, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    lines: ["phiwarkhede05@gmail.com"],
    href: "mailto:phiwarkhede05@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    lines: ["+91 92849 05505"],
    href: "tel:+919284905505",
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["Mon-Sat: 5:30AM - 10PM"],
    href: null,
  },
  {
    icon: MapPin,
    title: "Location",
    lines: ["Wanadongri, Maharashtra 441110"],
    href: "#contact",
  },
];

export default function HomeHeroInfo() {
  return (
    <section className="relative bg-[#0a0a0a] py-16 sm:py-20">
      {/* Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#b87333]/50 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
        >
          {contactInfo.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group relative"
              >
                <div className="flex items-start gap-4">
                  {/* Icon Container */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 border border-[#b87333]/30 flex items-center justify-center group-hover:border-[#b87333] group-hover:bg-[#b87333]/10 transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#b87333]" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <span className="text-xs text-white/40 tracking-[0.2em] uppercase block mb-1">
                      {item.title}
                    </span>
                    {item.lines.map((line, i) => (
                      <span
                        key={i}
                        className={`text-sm sm:text-base text-white/80 block ${
                          item.href ? "group-hover:text-[#b87333] transition-colors duration-300" : ""
                        }`}
                      >
                        {line}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Divider for desktop */}
                {index < contactInfo.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-2 w-px h-12 bg-white/10 -translate-y-1/2" />
                )}
              </motion.div>
            );

            return item.href ? (
              <a
                key={index}
                href={item.href}
                className="block cursor-pointer"
              >
                {content}
              </a>
            ) : (
              <div key={index}>{content}</div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
