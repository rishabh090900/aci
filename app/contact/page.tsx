import { siteConfig } from '@/data/siteConfig';
import { generateMetadata as genMeta } from '@/components/SEO';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaFacebook, FaInstagram, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import Link from 'next/link';

export const metadata = genMeta({
  title: 'Contact Us - Get in Touch with ACI Bansur',
  description: 'Contact Ayush Career Institute, Bansur. Visit us, call us, or send an email for admissions, enquiries, and more information about our NEET & JEE coaching programs.',
  keywords: [...siteConfig.keywords, 'contact ACI', 'ACI address', 'coaching location', 'phone number'],
  url: '/contact',
});

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-900 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-green-100">
              We're Here to Help You Succeed
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {/* Address */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <FaMapMarkerAlt className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
                <p className="text-gray-700 leading-relaxed">
                  {siteConfig.contact.address.full}
                </p>
              </div>

              {/* Phone */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <FaPhone className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Call Us</h3>
                <div className="space-y-2">
                  <a 
                    href={`tel:${siteConfig.contact.phone[0]}`}
                    className="block text-green-600 hover:text-green-700 font-semibold text-lg"
                  >
                    {siteConfig.contact.phone[0]}
                  </a>
                  <a 
                    href={`tel:${siteConfig.contact.phone[1]}`}
                    className="block text-green-600 hover:text-green-700 font-semibold text-lg"
                  >
                    {siteConfig.contact.phone[1]}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
                <div className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center mb-4">
                  <FaEnvelope className="text-2xl text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Email Us</h3>
                <a 
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-green-600 hover:text-green-700 font-semibold break-words"
                >
                  {siteConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Office Hours */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-2xl shadow-lg mb-12">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center">
                  <FaClock className="text-2xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Office Hours</h3>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-700 font-semibold">Monday - Saturday</p>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="text-gray-700 font-semibold">Sunday</p>
                  <p className="text-gray-600">10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Connect With Us</h3>
              <div className="flex justify-center gap-4">
                <a 
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all hover:scale-110"
                >
                  <FaFacebook className="text-2xl" />
                </a>
                <a 
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-all hover:scale-110"
                >
                  <FaInstagram className="text-2xl" />
                </a>
                <a 
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-all hover:scale-110"
                >
                  <FaYoutube className="text-2xl" />
                </a>
                <a 
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition-all hover:scale-110"
                >
                  <FaWhatsapp className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Find Us on <span className="text-green-600">Map</span>
            </h2>
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Google Maps Embed - Replace with actual coordinates */}
              <div className="aspect-video bg-gray-200 flex items-center justify-center">
                <div className="text-center p-8">
                  <FaMapMarkerAlt className="text-6xl text-green-600 mx-auto mb-4" />
                  <p className="text-gray-700 font-semibold">
                    {siteConfig.contact.address.full}
                  </p>
                  <p className="text-gray-600 mt-2">
                    <a 
                      href="https://maps.google.com/?q=Bansur+Alwar+Rajasthan"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 hover:underline"
                    >
                      Open in Google Maps
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
          <p className="text-xl mb-8 text-green-100">
            Fill out our enquiry form and we'll get back to you shortly
          </p>
          <Link 
            href="/enquiry"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Submit Enquiry
          </Link>
        </div>
      </section>
    </>
  );
}
