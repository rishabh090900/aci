import Image from 'next/image';
import { facultyData } from '@/data/faculty';
import { generateMetadata as genMeta } from '@/components/SEO';
import { siteConfig } from '@/data/siteConfig';
import { FaGraduationCap, FaBriefcase, FaMapMarkerAlt } from 'react-icons/fa';

export const metadata = genMeta({
  title: 'Our Faculty - Expert Teachers for NEET & JEE',
  description: 'Meet our experienced faculty members at ACI Bansur. Learn from expert teachers with proven track records from top institutes like Allen, Resonance, and more.',
  keywords: [...siteConfig.keywords, 'ACI faculty', 'NEET teachers', 'JEE teachers', 'experienced faculty'],
  url: '/faculty',
});

export default function FacultyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-900 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Faculty</h1>
            <p className="text-xl text-green-100">
              Learn from the Best, Become the Best
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Meet Our <span className="text-green-600">Expert Teachers</span>
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Our faculty comprises experienced educators from premier institutions with a passion for teaching and a proven track record of producing top rankers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {facultyData.map((faculty) => (
                <div 
                  key={faculty.id} 
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all transform hover:-translate-y-2"
                >
                  {/* Faculty Image */}
                  <div className="relative h-64 bg-gradient-to-br from-green-100 to-emerald-100">
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-6xl">👨‍🏫</span>
                    </div>
                  </div>

                  {/* Faculty Info */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{faculty.name}</h3>
                    <p className="text-green-600 font-semibold text-lg mb-4">{faculty.subject}</p>

                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <FaMapMarkerAlt className="text-gray-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500">From</p>
                          <p className="text-gray-700 font-medium">{faculty.from}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaBriefcase className="text-gray-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500">Experience</p>
                          <p className="text-gray-700 font-medium">{faculty.experience}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <FaGraduationCap className="text-gray-400 mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-sm text-gray-500">Education</p>
                          <p className="text-gray-700 font-medium">{faculty.education}</p>
                        </div>
                      </div>

                      {faculty.exInstitute && (
                        <div className="pt-3 border-t">
                          <p className="text-sm text-gray-500">Previously at</p>
                          <p className="text-gray-700 font-medium">{faculty.exInstitute}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Highlights */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What Makes Our <span className="text-green-600">Faculty Special</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Experienced Professionals",
                  description: "All our teachers have 8-15+ years of experience in coaching NEET & JEE aspirants"
                },
                {
                  title: "From Top Institutes",
                  description: "Faculty members from Allen, Resonance, Aakash, and other premier coaching institutes"
                },
                {
                  title: "Subject Matter Experts",
                  description: "Deep knowledge and expertise in their respective subjects with advanced degrees"
                },
                {
                  title: "Student-Centric Approach",
                  description: "Focus on individual student needs with personalized guidance and doubt clearing"
                },
                {
                  title: "Result-Oriented Teaching",
                  description: "Proven methodologies that have helped hundreds of students crack NEET & JEE"
                },
                {
                  title: "Regular Updates",
                  description: "Stay updated with latest exam patterns, syllabus changes, and teaching techniques"
                }
              ].map((highlight, index) => (
                <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border-l-4 border-green-600">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{highlight.title}</h3>
                  <p className="text-gray-700">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Learn from the Best?</h2>
          <p className="text-xl mb-8 text-green-100">
            Join ACI Bansur and get guidance from experienced faculty
          </p>
          <a 
            href="/enquiry"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Enquire Now
          </a>
        </div>
      </section>
    </>
  );
}
