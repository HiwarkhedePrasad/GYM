'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  menu: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Classes', href: '/classes' },
    { label: 'Trainers', href: '/trainers' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '/contact' },
  ],
  utility: [
    { label: 'Style Guide', href: '/utility-pages/style-guide' },
    { label: 'Start Here', href: '/utility-pages/start-here' },
    { label: 'Licenses', href: '/utility-pages/licenses' },
    { label: 'Changelog', href: '/utility-pages/changelog' },
    { label: '404 Not Found', href: '/404' },
  ],
};

const socialLinks = [
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" aria-label="Gymfit X Home">
              <Image
                src="https://cdn.prod.website-files.com/621d8b0423efcfa5ba281fb6/621d8b0423efcf26d6282089_logo-gymfit-x-template.svg"
                alt="Gymfit X Logo"
                width={140}
                height={40}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              The gym for high impact athletes. Transform your body and mind with our expert trainers and world-class facilities.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800 hover:bg-red-600 p-2 rounded transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Menu</h3>
            <ul className="space-y-3">
              {footerLinks.menu.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Utility Pages */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Utility Pages</h3>
            <ul className="space-y-3">
              {footerLinks.utility.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Get In Touch</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:contact@gymfitx.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  contact@gymfitx.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:(323)238-0638"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  (323) 238 - 0638
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <address className="text-gray-400 text-sm not-italic">
                  Near dakhale niwas, sangam road,
                  <br />
                  Hingna Rd, Wanadongri,
                  <br />
                  Maharashtra 441110
                </address>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-neutral-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>© {new Date().getFullYear()} Gymfit X. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}