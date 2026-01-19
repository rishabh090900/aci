"use client";

import { useState, FormEvent } from 'react';
import { siteConfig } from '@/data/siteConfig';
import { FaUser, FaPhone, FaGraduationCap, FaEnvelope, FaBullseye } from 'react-icons/fa';

export default function EnquiryPage() {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    class: '',
    target: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Using FormSubmit.co as a simple alternative to EmailJS
      const response = await fetch('https://formsubmit.co/ajax/' + siteConfig.contact.email, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `New Enquiry from ${formData.name}`,
          _template: 'table',
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          mobile: '',
          email: '',
          class: '',
          target: '',
          message: ''
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-orange-500 to-red-500 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Enquiry Form</h1>
            <p className="text-xl text-orange-100">
              Take the First Step Towards Your Success
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-8">
                <h2 className="text-2xl font-bold mb-2">Get Started Today!</h2>
                <p className="text-green-100">
                  Fill out the form below and our team will contact you within 24 hours
                </p>
              </div>

              <form onSubmit={handleSubmit} className="p-8 space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                    <FaUser className="inline mr-2 text-green-600" />
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Mobile */}
                <div>
                  <label htmlFor="mobile" className="block text-gray-700 font-semibold mb-2">
                    <FaPhone className="inline mr-2 text-green-600" />
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    required
                    pattern="[0-9]{10}"
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                    placeholder="10-digit mobile number"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                    <FaEnvelope className="inline mr-2 text-green-600" />
                    Email Address (Optional)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Class */}
                <div>
                  <label htmlFor="class" className="block text-gray-700 font-semibold mb-2">
                    <FaGraduationCap className="inline mr-2 text-green-600" />
                    Current Class *
                  </label>
                  <select
                    id="class"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select your class</option>
                    <option value="10th Passed">10th Passed</option>
                    <option value="11th Studying">11th Studying</option>
                    <option value="11th Passed">11th Passed</option>
                    <option value="12th Studying">12th Studying</option>
                    <option value="12th Passed">12th Passed</option>
                    <option value="Dropper">Dropper</option>
                  </select>
                </div>

                {/* Target */}
                <div>
                  <label htmlFor="target" className="block text-gray-700 font-semibold mb-2">
                    <FaBullseye className="inline mr-2 text-green-600" />
                    Exam Target *
                  </label>
                  <select
                    id="target"
                    name="target"
                    value={formData.target}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none transition-colors"
                  >
                    <option value="">Select your target exam</option>
                    <option value="NEET">NEET (Medical)</option>
                    <option value="JEE Main">JEE Main</option>
                    <option value="JEE Advanced">JEE Advanced</option>
                    <option value="NEET + JEE">Both NEET & JEE</option>
                    <option value="Foundation 11th">Foundation 11th</option>
                    <option value="Foundation 12th">Foundation 12th</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                    Message (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:outline-none transition-colors resize-none"
                    placeholder="Any specific questions or requirements?"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="bg-green-50 border-2 border-green-500 text-green-700 p-4 rounded-lg">
                    <strong>Success!</strong> Your enquiry has been submitted. We'll contact you soon!
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border-2 border-red-500 text-red-700 p-4 rounded-lg">
                    <strong>Error!</strong> Something went wrong. Please call us directly at {siteConfig.contact.phone[0]}
                  </div>
                )}
              </form>
            </div>

            {/* Contact Info */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">Or reach us directly:</p>
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href={`tel:${siteConfig.contact.phone[0]}`}
                  className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
                >
                  📞 {siteConfig.contact.phone[0]}
                </a>
                <a 
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors"
                >
                  💬 WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
