import Link from 'next/link';
import Image from 'next/image';
import { FaPhone, FaDownload, FaCheckCircle, FaTrophy, FaUsers, FaBook, FaChalkboardTeacher, FaStar } from 'react-icons/fa';
import { siteConfig } from '@/data/siteConfig';
import { courses } from '@/data/courses';
import { resultStats } from '@/data/results';
import { directorInfo } from '@/data/faculty';
import { generateMetadata as genMeta } from '@/components/SEO';

export const metadata = genMeta({
  title: 'Best NEET & JEE Coaching in Bansur | Ayush Career Institute',
  description: 'ACI Bansur - Leading NEET & IIT-JEE coaching institute in Bansur, Rajasthan. Expert faculty, proven results, and comprehensive courses for medical and engineering aspirants.',
  keywords: siteConfig.keywords,
  url: '/',
});

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-900 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Shape Your Future with
              <span className="block text-yellow-400 mt-2">Ayush Career Institute</span>
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-green-100">
              NEET | IIT-JEE | Foundation Courses
            </p>
            <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto">
              Premier coaching institute in Bansur dedicated to transforming aspirants into achievers
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/enquiry"
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
              >
                Enquiry Now
              </Link>
              <a 
                href={`tel:${siteConfig.contact.phone[0]}`}
                className="bg-white text-green-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all flex items-center gap-2"
              >
                <FaPhone /> Call Now
              </a>
              <Link 
                href="/courses"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-900 transition-all flex items-center gap-2"
              >
                <FaDownload /> Check Fees
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why ACI Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-green-600">ACI Bansur?</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive coaching with a perfect blend of quality education, experienced faculty, and result-oriented approach
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FaChalkboardTeacher className="text-5xl text-green-600" />,
                title: "Expert Faculty",
                description: "Learn from experienced teachers from top institutes"
              },
              {
                icon: <FaTrophy className="text-5xl text-yellow-500" />,
                title: "Proven Results",
                description: "Track record of NEET & JEE selections year after year"
              },
              {
                icon: <FaBook className="text-5xl text-green-600" />,
                title: "Comprehensive Study Material",
                description: "Well-researched notes and practice papers"
              },
              {
                icon: <FaUsers className="text-5xl text-purple-600" />,
                title: "Small Batch Size",
                description: "Personal attention to every student"
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all text-center">
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Achievements</span>
            </h2>
            <p className="text-gray-600">Success stories that inspire excellence</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: resultStats.neet2025Qualified, label: "NEET 2025 Qualified" },
              { number: resultStats.jee2025Qualified, label: "JEE 2025 Qualified" },
              { number: "500+", label: "Students Trained" },
              { number: "10+", label: "Years Experience" }
            ].map((stat, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-xl text-center border-2 border-green-100">
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-gradient-to-r from-green-500 to-teal-500 text-white p-8 rounded-2xl text-center">
            <h3 className="text-2xl font-bold mb-4">🎉 Top Ranks Achieved!</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold">{resultStats.topRankNEET}</div>
                <div className="text-green-100">Best NEET Rank</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                <div className="text-3xl font-bold">{resultStats.topRankJEE}</div>
                <div className="text-green-100">Best JEE Rank</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-green-600">Courses</span>
            </h2>
            <p className="text-gray-600">Choose the right path for your success</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{course.name}</h3>
                  <p className="text-green-100 text-sm">{course.target}</p>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">{course.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-700">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <span>Duration: {course.duration}</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-700">
                      <FaCheckCircle className="text-green-500 mr-2" />
                      <span>{course.eligibility}</span>
                    </div>
                  </div>
                  <Link 
                    href="/courses"
                    className="block text-center bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link 
              href="/courses"
              className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all"
            >
              View All Courses & Fees
            </Link>
          </div>
        </div>
      </section>

      {/* Director Message */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Message from <span className="text-green-600">Director</span>
                </h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {directorInfo.message}
                </p>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900">{directorInfo.name}</h3>
                  <p className="text-green-600 font-medium">{directorInfo.designation}</p>
                  <p className="text-gray-600">{directorInfo.education}</p>
                  <p className="text-gray-600">{directorInfo.experience}</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl transform rotate-6"></div>
                  <div className="relative bg-gray-200 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Placeholder for director image */}
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100">
                      <span className="text-6xl">👨‍🏫</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">🎓 Admissions Open for 2026!</h2>
          <p className="text-xl mb-6 text-green-100">
            Join ACI Bansur and start your journey towards success
          </p>
          <div className="mb-8">
            <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full">
              <p className="text-lg">
                ⭐ <span className="font-bold">Special Scholarship Available</span> based on merit
              </p>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/enquiry"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Apply Now
            </Link>
            <Link 
              href="/courses"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-all"
            >
              View Scholarship Details
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
