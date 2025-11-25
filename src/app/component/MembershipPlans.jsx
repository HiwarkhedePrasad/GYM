"use client";

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Standard",
    price: "₹1,500",
    period: "/ month",
    features: ["Gym Access", "Cardio Zone", "Locker Room", "Free WiFi"],
    recommended: false,
    color: "bg-gray-800"
  },
  {
    name: "Premium",
    price: "₹3,500",
    period: "/ 3 months",
    features: ["All Standard Features", "Personal Trainer (2 Sessions)", "Diet Consultation", "Steam Bath Access"],
    recommended: true,
    color: "bg-red-900"
  },
  {
    name: "Elite",
    price: "₹10,000",
    period: "/ year",
    features: ["All Premium Features", "Unlimited Personal Training", "Nutrition Plan", "Massage Therapy", "Guest Pass"],
    recommended: false,
    color: "bg-gray-800"
  }
];

export default function MembershipPlans() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
            Membership Plans
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Choose the plan that fits your fitness goals. No hidden fees, just results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-2xl border border-white/10 flex flex-col ${
                plan.recommended ? 'bg-gradient-to-b from-red-900/50 to-black transform md:-translate-y-4 shadow-2xl shadow-red-900/20' : 'bg-zinc-900/50'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider">
                  Best Value
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-gray-400 ml-2">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="w-5 h-5 text-red-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-4 rounded-xl font-bold transition-all ${
                plan.recommended 
                  ? 'bg-red-600 hover:bg-red-700 text-white shadow-lg shadow-red-900/40' 
                  : 'bg-white text-black hover:bg-gray-200'
              }`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
