"use client";

import { motion } from "framer-motion";
import { Check, Sparkles, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Standard",
    price: "1,500",
    currency: "₹",
    period: "month",
    description: "Perfect for beginners starting their fitness journey.",
    features: [
      "Full Gym Access",
      "Cardio & Weight Zones",
      "Locker Room Access",
      "Free WiFi",
      "Basic Fitness Assessment",
    ],
    recommended: false,
    cta: "Get Started",
  },
  {
    name: "Premium",
    price: "3,500",
    currency: "₹",
    period: "3 months",
    description: "Our most popular choice for serious fitness enthusiasts.",
    features: [
      "Everything in Standard",
      "2 Personal Training Sessions",
      "Diet Consultation",
      "Steam & Sauna Access",
      "Priority Class Booking",
      "Guest Pass (2/month)",
    ],
    recommended: true,
    cta: "Join Premium",
  },
  {
    name: "Elite",
    price: "10,000",
    currency: "₹",
    period: "year",
    description: "The ultimate package for maximum results.",
    features: [
      "Everything in Premium",
      "Unlimited Personal Training",
      "Custom Nutrition Plan",
      "Monthly Body Composition",
      "Recovery Treatments",
      "Unlimited Guest Passes",
      "24/7 Access",
    ],
    recommended: false,
    cta: "Go Elite",
  },
];

export default function MembershipPlans() {
  return (
    <section id="membership" className="relative py-24 sm:py-32 bg-[#0a0a0a] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[#b87333]/5 rounded-full blur-[150px]" />
        <div className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(90deg, transparent 49%, #b87333 49%, #b87333 51%, transparent 51%)`,
            backgroundSize: '100px 100%',
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <span className="w-12 h-px bg-[#b87333]" />
            <span className="text-[#b87333] text-sm font-semibold tracking-[0.2em] uppercase">
              Membership
            </span>
            <span className="w-12 h-px bg-[#b87333]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-display text-5xl sm:text-6xl lg:text-7xl text-white mb-6"
          >
            CHOOSE YOUR
            <br />
            <span className="text-[#b87333]">PATH</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg text-white/50"
          >
            Flexible plans designed to fit your goals and budget.
            No hidden fees, cancel anytime.
          </motion.p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={`relative ${plan.recommended ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Recommended Badge */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="flex items-center gap-1.5 bg-[#b87333] px-4 py-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-white" />
                    <span className="text-xs font-semibold text-white uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                </div>
              )}

              <div
                className={`h-full p-8 border transition-all duration-500 ${
                  plan.recommended
                    ? "bg-[#141414] border-[#b87333] shadow-[0_0_40px_rgba(184,115,51,0.15)]"
                    : "bg-[#141414]/50 border-white/5 hover:border-white/20"
                }`}
              >
                {/* Plan Header */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-white/50">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="mb-8 pb-8 border-b border-white/5">
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl text-white/60">{plan.currency}</span>
                    <span className="font-display text-5xl sm:text-6xl text-white">{plan.price}</span>
                  </div>
                  <span className="text-sm text-white/40">per {plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 ${
                        plan.recommended ? "bg-[#b87333]/20" : "bg-white/5"
                      }`}>
                        <Check className={`w-3 h-3 ${
                          plan.recommended ? "text-[#b87333]" : "text-white/60"
                        }`} />
                      </div>
                      <span className="text-sm text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-4 font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group ${
                    plan.recommended
                      ? "bg-[#b87333] text-white hover:bg-[#cd7f32]"
                      : "border border-white/20 text-white hover:border-[#b87333] hover:text-[#b87333]"
                  }`}
                >
                  {plan.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center text-sm text-white/40 mt-12"
        >
          All plans include a 7-day free trial. No credit card required.
        </motion.p>
      </div>
    </section>
  );
}
