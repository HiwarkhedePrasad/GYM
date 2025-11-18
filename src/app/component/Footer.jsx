'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  menu: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Classes', href: '/classes' },
    { label: 'Trainers', href: '/trainers' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
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
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          
          {/* Brand Column */}
          <div className="space-y-4 sm:space-y-6">
            <Link href="/" aria-label="Gymfit X Home">
              <Image
                src="https://cdn.prod.website-files.com/621d8b0423efcfa5ba281fb6/621d8b0423efcf26d6282089_logo-gymfit-x-template.svg"
                alt="Gymfit X Logo"
                width={120}
                height={36}
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              The gym for high impact athletes. Transform your body and mind with our expert trainers and world-class facilities.
            </p>
            <div className="flex space-x-3 sm:space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-neutral-800 hover:bg-red-600 p-2 rounded transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4 sm:h-5 sm:w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Menu Links */}
          <div>
            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider mb-4 sm:mb-6">Menu</h3>
            <ul className="space-y-2 sm:space-y-3">
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

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-bold uppercase tracking-wider mb-4 sm:mb-6">Get In Touch</h3>
            <ul className="space-y-3 sm:space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:phiwarkhede05@gmail.com"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm break-all"
                >
                  phiwarkhede05@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+919284905505"
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-sm"
                >
                  +91 9284905505
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-red-600 flex-shrink-0 mt-0.5" />
                <address className="text-gray-400 text-sm not-italic leading-relaxed">
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
        <div className="container mx-auto px-4 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
            <p className="text-center sm:text-left">© {new Date().getFullYear()} Gymfit X. All rights reserved.--phiwarkhede05@gmail.com</p>
            <div className="flex gap-4 sm:gap-6">
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