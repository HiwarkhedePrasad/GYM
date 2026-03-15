"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Determine active section
      const sections = ['home', 'about', 'facilities', 'classes', 'trainers', 'membership', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { href: '#home', label: 'Home', id: 'home' },
    { href: '#about', label: 'About', id: 'about' },
    { href: '#facilities', label: 'Facilities', id: 'facilities' },
    { href: '#classes', label: 'Classes', id: 'classes' },
    { href: '#trainers', label: 'Trainers', id: 'trainers' },
    { href: '#membership', label: 'Membership', id: 'membership' },
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

  const mobileMenuVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] }
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.2, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.08,
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1]
      }
    }),
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
          scrolled
            ? 'bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/5'
            : 'bg-transparent'
        }`}
      >
        <nav className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo */}
          <Link
            href="#home"
            onClick={(e) => handleScroll(e, '#home')}
            className="flex-shrink-0 relative z-50 group"
            aria-label="New World Gym Home"
          >
            <div className="flex items-center gap-3">
              {/* Custom Logo Mark */}
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 border border-[#b87333] rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                <div className="absolute inset-1 border border-white/20 rotate-45" />
                <span className="font-display text-xl text-[#b87333] relative z-10">N</span>
              </div>
              <div className="hidden sm:block">
                <span className="font-display text-2xl tracking-wider text-white block leading-none">NEW WORLD</span>
                <span className="text-[10px] tracking-[0.3em] text-[#b87333] uppercase">Gym</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className={`relative px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-300 ${
                  activeSection === link.id
                    ? 'text-white'
                    : 'text-white/60 hover:text-white'
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute bottom-0 left-4 right-4 h-px bg-[#b87333]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <button
              onClick={(e) => handleScroll(e, '#contact')}
              className="group relative px-6 py-3 bg-transparent overflow-hidden"
            >
              <span className="absolute inset-0 border border-[#b87333] group-hover:bg-[#b87333] transition-colors duration-300" />
              <span className="relative flex items-center gap-2 text-sm font-semibold tracking-wider uppercase text-white">
                Join Now
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden relative z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative w-12 h-12 flex items-center justify-center"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <motion.div
                animate={isMobileMenuOpen ? "open" : "closed"}
                className="relative w-6 h-6"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </motion.div>
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
            className="fixed inset-0 z-40 bg-[#0a0a0a] lg:hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 40px,
                  rgba(184, 115, 51, 0.3) 40px,
                  rgba(184, 115, 51, 0.3) 41px
                )`
              }} />
            </div>

            <nav className="relative z-10 flex flex-col items-center justify-center h-full px-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  custom={index}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  className="w-full text-center border-b border-white/5 last:border-0"
                >
                  <Link
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="block py-6 font-display text-4xl sm:text-5xl text-white hover:text-[#b87333] transition-colors duration-300 tracking-wider"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                custom={navLinks.length}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="w-full pt-12"
              >
                <button
                  onClick={(e) => handleScroll(e, '#contact')}
                  className="w-full py-4 bg-[#b87333] text-white font-semibold tracking-wider uppercase text-lg hover:bg-[#cd7f32] transition-colors duration-300"
                >
                  Become A Member
                </button>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                custom={navLinks.length + 1}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                className="absolute bottom-8 left-0 right-0 text-center"
              >
                <p className="text-white/40 text-sm tracking-wider">+91 92849 05505</p>
                <p className="text-white/40 text-sm tracking-wider mt-1">phiwarkhede05@gmail.com</p>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
