"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: '-100%' },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.3 } },
  };

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#classes', label: 'Classes' },
    { href: '#trainers', label: 'Trainers' },
    { href: '#membership', label: 'Membership' },
    { href: '#contact', label: 'Contact' },
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    if (typeof window !== 'undefined' && href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const offset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header 
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
          scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg py-2' : 'bg-transparent py-4'
        }`}
      >
        <nav className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo */}
          <Link 
            href="#home" 
            onClick={(e) => handleScroll(e, '#home')} 
            className="flex-shrink-0 relative z-50" 
            aria-label="home"
          >
            <Image
              src="https://cdn.prod.website-files.com/621d8b0423efcfa5ba281fb6/621d8b0423efcf26d6282089_logo-gymfit-x-template.svg"
              alt="Gymfit X Logo"
              width={120}
              height={32}
              className="h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center space-x-8 lg:flex">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium uppercase tracking-wider text-gray-300 transition-colors hover:text-red-500"
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={(e) => handleScroll(e, '#contact')}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-transform transform hover:scale-105"
            >
              JOIN NOW
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden relative z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-full p-2 text-white transition-colors hover:bg-gray-800"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center bg-black/95 backdrop-blur-xl lg:hidden"
          >
            <nav className="flex flex-col items-center space-y-8 w-full px-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                  className="w-full text-center"
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="block w-full text-3xl font-bold text-white hover:text-red-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="w-full pt-8"
              >
                <button 
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="w-full bg-red-600 text-white py-4 rounded-xl text-xl font-bold shadow-lg shadow-red-900/20 active:scale-95 transition-transform"
                >
                  BECOME A MEMBER
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}