"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Phone, Mail, CheckCircle, Loader2 } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Visit Us",
    value: "Near dakhale niwas, sangam road, Hingna Rd, Wanadongri, Maharashtra 441110",
    href: "https://maps.google.com",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+91 92849 05505",
    href: "tel:+919284905505",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "phiwarkhede05@gmail.com",
    href: "mailto:phiwarkhede05@gmail.com",
  },
];

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success, error
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    goal: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");

    // Simulate API call
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", phone: "", email: "", goal: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#b87333]/5 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Section Label */}
            <div className="flex items-center gap-4 mb-6">
              <span className="w-12 h-px bg-[#b87333]" />
              <span className="text-[#b87333] text-sm font-semibold tracking-[0.2em] uppercase">
                Contact
              </span>
            </div>

            <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-6">
              START YOUR
              <br />
              <span className="text-[#b87333]">JOURNEY</span>
            </h2>

            <p className="text-lg text-white/50 mb-12 max-w-md">
              Ready to transform your life? Get in touch with us today and take
              the first step towards a stronger, healthier you.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                const content = (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 border border-[#b87333]/30 flex items-center justify-center flex-shrink-0 group-hover:border-[#b87333] group-hover:bg-[#b87333]/10 transition-all duration-300">
                      <Icon className="w-5 h-5 text-[#b87333]" />
                    </div>
                    <div>
                      <span className="text-xs text-white/40 uppercase tracking-wider block mb-1">
                        {item.label}
                      </span>
                      <span className="text-white/80 group-hover:text-[#b87333] transition-colors duration-300">
                        {item.value}
                      </span>
                    </div>
                  </motion.div>
                );

                return item.href ? (
                  <a key={index} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#141414] border border-white/5 p-8 sm:p-10"
          >
            {formStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-16 h-16 bg-[#b87333]/20 flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-[#b87333]" />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Message Sent!</h3>
                <p className="text-white/50">We&apos;ll get back to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#b87333] transition-colors duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#b87333] transition-colors duration-300"
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#b87333] transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="goal" className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                    Fitness Goal
                  </label>
                  <select
                    id="goal"
                    name="goal"
                    value={formData.goal}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-[#b87333] transition-colors duration-300 appearance-none cursor-pointer"
                  >
                    <option value="">Select your goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="muscle-gain">Muscle Gain</option>
                    <option value="general-fitness">General Fitness</option>
                    <option value="strength">Strength Training</option>
                    <option value="personal-training">Personal Training</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs text-white/40 uppercase tracking-wider mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-white/10 px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-[#b87333] transition-colors duration-300 resize-none"
                    placeholder="Tell us about your fitness goals..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === "submitting"}
                  className="w-full py-4 bg-[#b87333] text-white font-semibold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#cd7f32] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {formStatus === "submitting" ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
