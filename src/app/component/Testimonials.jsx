"use client";

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Member since 2023",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=faces",
    text: "The best gym in the city! The trainers are incredibly supportive and the equipment is top-notch. I've seen amazing results in just 3 months."
  },
  {
    name: "Priya Patel",
    role: "Yoga Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=faces",
    text: "I love the group classes here. The atmosphere is so energetic and motivating. Highly recommend for anyone looking to get fit!"
  },
  {
    name: "Amit Verma",
    role: "Bodybuilder",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=faces",
    text: "Serious gym for serious gains. The free weight section is huge and never too crowded. Perfect for my training needs."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-red-600 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Success <span className="text-red-600">Stories</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear what our members have to say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-zinc-900/80 backdrop-blur-sm p-8 rounded-2xl border border-white/5 relative"
            >
              <Quote className="absolute top-6 right-6 text-red-600/20 w-12 h-12" />
              
              <div className="flex items-center mb-6">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-red-600 mr-4">
                  <Image 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-red-500 text-sm">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
