"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function ContactForm() {
  const [formStatus, setFormStatus] = useState('idle'); // idle, submitting, success, error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
      // Reset after 3 seconds
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-zinc-950 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="text-red-600">Touch</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              Ready to start your fitness journey? Visit us or drop a message. We're here to help you achieve your goals.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-zinc-900 p-3 rounded-lg mr-4 text-red-500">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Our Location</h4>
                  <p className="text-gray-400">123 Fitness Street, Gym City, GC 45001</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-zinc-900 p-3 rounded-lg mr-4 text-red-500">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Phone Number</h4>
                  <p className="text-gray-400">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-zinc-900 p-3 rounded-lg mr-4 text-red-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Email Address</h4>
                  <p className="text-gray-400">info@newworldgym.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-8 rounded-2xl border border-white/5"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    required
                    className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-400 mb-2">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    required
                    className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                    placeholder="+91 98765 43210"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="goal" className="block text-sm font-medium text-gray-400 mb-2">Fitness Goal</label>
                <select 
                  id="goal"
                  className="w-full bg-black border border-gray-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-red-600 transition-colors appearance-none"
                >
                  <option value="">Select your goal</option>
                  <option value="weight-loss">Weight Loss</option>
                  <option value="muscle-gain">Muscle Gain</option>
                  <option value="general-fitness">General Fitness</option>
                  <option value="personal-training">Personal Training</option>
                </select>
              </div>

              <button 
                type="submit" 
                disabled={formStatus === 'submitting' || formStatus === 'success'}
                className={`w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center transition-all ${
                  formStatus === 'success' 
                    ? 'bg-green-600 text-white' 
                    : 'bg-red-600 hover:bg-red-700 text-white'
                }`}
              >
                {formStatus === 'submitting' ? (
                  <span className="animate-pulse">Sending...</span>
                ) : formStatus === 'success' ? (
                  <span>Message Sent!</span>
                ) : (
                  <>
                    Start Your Journey <Send className="ml-2 w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
