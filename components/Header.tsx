"use client";

import Link from 'next/link';
import { useState } from 'react';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { siteConfig } from '@/data/siteConfig';
import Image from 'next/image';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/faculty', label: 'Faculty' },
    { href: '/courses', label: 'Courses & Fees' },
    { href: '/results', label: 'Results' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-green-900 to-green-700 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex flex-wrap items-center gap-4">
              <a href={`tel:${siteConfig.contact.phone[0]}`} className="flex items-center gap-1 hover:text-green-200">
                <FaPhone className="text-xs" />
                <span>{siteConfig.contact.phone[0]}</span>
              </a>
              <a href={`tel:${siteConfig.contact.phone[1]}`} className="flex items-center gap-1 hover:text-green-200">
                <FaPhone className="text-xs" />
                <span>{siteConfig.contact.phone[1]}</span>
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-1 hover:text-green-200">
                <FaEnvelope className="text-xs" />
                <span className="hidden sm:inline">{siteConfig.contact.email}</span>
              </a>
            </div>
            <div className="flex items-center gap-3">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" 
                 className="hover:text-green-200 transition-colors" aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                 className="hover:text-pink-300 transition-colors" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer"
                 className="hover:text-red-300 transition-colors" aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer"
                 className="hover:text-green-300 transition-colors" aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-14 h-14">
              <Image
                src="/logo.png"
                alt="ACI Bansur Logo"
                width={56}
                height={56}
                className="object-contain"
                priority
              />
            </div>
            <div>
              <h1 className="text-xl font-bold text-green-900">{siteConfig.name}</h1>
              <p className="text-xs text-gray-600">NEET | IIT-JEE | Foundation</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link 
              href="/enquiry"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Enquiry Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-gray-700 text-2xl"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold text-center hover:shadow-lg transition-all"
              >
                Enquiry Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
