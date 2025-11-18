"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'tween', ease: 'easeOut' } },
    exit: { x: '100%', transition: { type: 'tween', ease: 'easeIn' } },
  };

  // 1. Update hrefs to use ID hashes
  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#classes', label: 'Classes' },
    { href: '#trainers', label: 'Trainers' },
    // { href: '#pricing', label: 'Pricing' }, // Uncomment if you have a pricing section
    { href: '#footer', label: 'Contact' },
  ];

  // 2. Create a smooth scroll handler
  const handleScroll = (e, href) => {
    e.preventDefault();
    // Only run on client-side and if href is an anchor
    if (typeof window !== 'undefined' && href.startsWith('#')) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        const offset = 80; // Height of your fixed header
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
      // Close mobile menu if open
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* Added 'fixed' so the navbar stays visible while scrolling */}
      <header className=" top-0 left-0 z-50 w-full bg-black/80 backdrop-blur-lg text-white shadow-md border-b border-white/10">
        <nav className="container mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo */}
          <Link 
            href="#home" 
            onClick={(e) => handleScroll(e, '#home')} 
            className="flex-shrink-0" 
            aria-label="home"
          >
            <Image
              src="https://cdn.prod.website-files.com/621d8b0423efcfa5ba281fb6/621d8b0423efcf26d6282089_logo-gymfit-x-template.svg"
              alt="Gymfit X Logo"
              width={100}
              height={28}
              className="h-6 sm:h-8 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden items-center space-x-6 lg:space-x-8 lg:flex">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href} 
                onClick={(e) => handleScroll(e, link.href)}
                className="text-sm font-medium transition-colors hover:text-red-500"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="rounded-full p-2 transition-colors hover:bg-gray-700"
              aria-label="Open mobile menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-50 flex flex-col bg-black p-4 lg:hidden"
          >
            <div className="flex items-center justify-between">
              <Link 
                href="#home" 
                onClick={(e) => handleScroll(e, '#home')}
                className="flex-shrink-0" 
                aria-label="home"
              >
                <Image
                  src="https://cdn.prod.website-files.com/621d8b0423efcfa5ba281fb6/621d8b0423efcf26d6282089_logo-gymfit-x-template.svg"
                  alt="Gymfit X Logo"
                  width={100}
                  height={28}
                  className="h-6 sm:h-8 w-auto"
                />
              </Link>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="rounded-full p-2 text-white transition-colors hover:bg-gray-700"
                aria-label="Close mobile menu"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <nav className="mt-12 flex flex-col space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="rounded-lg px-4 py-4 text-lg font-medium text-white hover:bg-gray-800 hover:text-red-500 transition-colors active:bg-gray-700"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}