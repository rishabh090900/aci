import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaYoutube, FaWhatsapp, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { siteConfig } from '@/data/siteConfig';

export default function Footer() {
  const quickLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Us' },
    { href: '/faculty', label: 'Faculty' },
    { href: '/courses', label: 'Courses & Fees' },
  ];

  const importantLinks = [
    { href: '/results', label: 'Results' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
    { href: '/enquiry', label: 'Enquiry Form' },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="ACI Bansur Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold">{siteConfig.shortName}</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Leading NEET & IIT-JEE coaching institute in Bansur, Rajasthan. 
              We nurture dreams and shape futures with quality education.
            </p>
            <div className="flex gap-3">
              <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                 aria-label="Facebook">
                <FaFacebook />
              </a>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-pink-600 rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors"
                 aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors"
                 aria-label="YouTube">
                <FaYoutube />
              </a>
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer"
                 className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors"
                 aria-label="WhatsApp">
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">Important Links</h4>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 border-b border-green-700 pb-2">Contact Us</h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-green-400 mt-1 flex-shrink-0" />
                <p className="text-sm">{siteConfig.contact.address.full}</p>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-green-400" />
                <div>
                  <a href={`tel:${siteConfig.contact.phone[0]}`} className="block hover:text-white">
                    {siteConfig.contact.phone[0]}
                  </a>
                  <a href={`tel:${siteConfig.contact.phone[1]}`} className="block hover:text-white">
                    {siteConfig.contact.phone[1]}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-green-400" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white">
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
            <p className="mt-2 md:mt-0">
              Designed & Developed with ❤️ for Success
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
