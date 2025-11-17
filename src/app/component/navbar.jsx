"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPagesOpen, setIsPagesOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Animation variants for the mobile menu
  const mobileMenuVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'tween', ease: 'easeOut' } },
    exit: { x: '100%', transition: { type: 'tween', ease: 'easeIn' } },
  };
  
  // Animation variants for the cart
  const cartVariants = {
    hidden: { x: '100%' },
    visible: { x: 0, transition: { type: 'tween', ease: 'easeOut' } },
    exit: { x: '100%', transition: { type: 'tween', ease: 'easeIn' } },
  };
  
  // Animation for the dropdown
  const dropdownVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 300, damping: 20 } },
    exit: { opacity: 0, y: 10, scale: 0.95 },
  };

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/classes', label: 'Classes' },

  ];

  return (
    <>
      <header className=" top-0 z-50 w-full bg-black/80 backdrop-blur-lg text-white shadow-md">
        <nav className="container mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          
          {/* Logo */}
          <Link href="/" className="flex-shrink-0" aria-label="home">
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
          <div className="hidden items-center space-x-6 lg:flex">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-gray-300">
                {link.label}
              </Link>
            ))}

            {/* Pages Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsPagesOpen(true)}
              onMouseLeave={() => setIsPagesOpen(false)}
            >
              <button className="flex items-center rounded-md px-3 py-2 text-sm font-medium transition-colors hover:text-gray-300">
                Pages <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isPagesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {isPagesOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 mt-2 w-max -translate-x-1/2 rounded-lg bg-white p-6 shadow-xl"
                  >
                    <div className="flex gap-12 text-black">
                      {/* Menu Column */}
                      <div>
                        <h3 className="mb-3 text-sm font-semibold text-gray-400">Menu</h3>
                        <ul className="space-y-2">
                          <li><Link href="/class/high-intensity-training" className="text-sm hover:text-gray-600">Single Class</Link></li>
                          <li><Link href="/blog" className="text-sm hover:text-gray-600">Blog</Link></li>
                          <li><Link href="/blog/the-beginners-guide-to-weight-lifting" className="text-sm hover:text-gray-600">Blog Post</Link></li>
                          <li><Link href="/product/15lb-weights" className="text-sm hover:text-gray-600">Single Product</Link></li>
                          <li><Link href="/pricing" className="text-sm hover:text-gray-600">Pricing</Link></li>
                          <li><Link href="/trainers" className="text-sm hover:text-gray-600">Trainers</Link></li>
                          <li><Link href="/trainer/john-carter" className="text-sm hover:text-gray-600">Trainer Single</Link></li>
                          <li><Link href="/contact" className="text-sm hover:text-gray-600">Contact</Link></li>
                        </ul>
                      </div>
                      {/* Utility Pages Column */}
                      <div>
                        <h3 className="mb-3 text-sm font-semibold text-gray-400">Utility Pages</h3>
                        <ul className="space-y-2">
                          <li><Link href="/utility-pages/style-guide" className="text-sm hover:text-gray-600">Style guide</Link></li>
                          <li><Link href="/utility-pages/start-here" className="text-sm hover:text-gray-600">Start here</Link></li>
                          <li><Link href="/404" className="text-sm hover:text-gray-600">404 Not Found</Link></li>
                          <li><Link href="/401" className="text-sm hover:text-gray-600">Password protected</Link></li>
                          <li><Link href="/utility-pages/licenses" className="text-sm hover:text-gray-600">Licenses</Link></li>
                          <li><Link href="/utility-pages/changelog" className="text-sm hover:text-gray-600">Changelog</Link></li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Cart & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
           
            
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
              <Link href="/" className="flex-shrink-0" aria-label="home" onClick={() => setIsMobileMenuOpen(false)}>
                <Image
                  src="https://cdn.prod.website-files.com/621d8b0423efcfa5ba281fb6/621d8b0423efcf26d6282089_logo-gymfit-x-template.svg"
                  alt="Gymfit X Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto"
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
            <nav className="mt-12 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-4 py-3 text-lg font-medium text-white hover:bg-gray-800"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              {/* Mobile "Pages" links - simplified */}
              <div className="px-4 pt-4">
                <h3 className="mb-3 text-sm font-semibold text-gray-400">More Pages</h3>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                  <Link href="/pricing" className="text-white hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Pricing</Link>
                  <Link href="/trainers" className="text-white hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Trainers</Link>
                  <Link href="/blog" className="text-white hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                  <Link href="/contact" className="text-white hover:text-gray-300" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cart Panel */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/50"
              onClick={() => setIsCartOpen(false)}
            />
            {/* Cart Content */}
            <motion.div
              variants={cartVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 z-50 h-full w-full max-w-md bg-white text-black shadow-xl"
            >
              <div className="flex h-full flex-col">
                <div className="flex items-center justify-between border-b p-6">
                  <h2 className="text-xl font-semibold">Your Cart</h2>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100"
                    aria-label="Close cart"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>
                {/* Cart Body */}
                <div className="flex-1 overflow-y-auto p-6">
                  {/* Empty Cart Message - replace with item mapping */}
                 
                  {/* Example of cart items would go here */}
                </div>
                {/* Cart Footer */}
                <div className="border-t p-6">
                  <div className="mb-4 flex justify-between font-semibold">
                    <span>Subtotal</span>
                    <span>$0.00</span>
                  </div>
                  <Link
                    href="/checkout"
                    className="w-full rounded-full bg-black py-3 px-6 text-center font-semibold text-white transition-colors hover:bg-gray-800"
                    onClick={() => setIsCartOpen(false)}
                  >
                    Continue to Checkout
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}