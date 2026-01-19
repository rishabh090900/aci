import { FaAward, FaEye, FaBullseye, FaGraduationCap } from 'react-icons/fa';
import { directorInfo } from '@/data/faculty';
import { generateMetadata as genMeta } from '@/components/SEO';
import { siteConfig } from '@/data/siteConfig';

export const metadata = genMeta({
  title: 'About Us - History, Mission & Vision',
  description: 'Learn about Ayush Career Institute, Bansur - Our history, mission, vision, and commitment to providing quality NEET & JEE coaching with experienced faculty and proven results.',
  keywords: [...siteConfig.keywords, 'about ACI', 'ACI history', 'coaching institute bansur'],
  url: '/about',
});

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-900 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
            <p className="text-xl text-green-100">
              Building Dreams, Shaping Futures
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our <span className="text-green-600">History</span>
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="mb-4">
                <strong>Ayush Career Institute (ACI)</strong> was established with a vision to provide quality education 
                and guidance to NEET and JEE aspirants in Bansur and surrounding areas of Rajasthan. Over the years, 
                we have grown into one of the most trusted coaching institutes in the region.
              </p>
              <p className="mb-4">
                Founded by experienced educators who understood the challenges faced by students in rural and semi-urban 
                areas, ACI was built on the principles of accessible quality education, personalized mentoring, and 
                result-oriented teaching methodologies.
              </p>
              <p className="mb-4">
                Our journey began with a small batch of dedicated students and has now expanded to hundreds of successful 
                students who have secured admissions in prestigious medical and engineering colleges across India. Our 
                consistent results speak volumes about our commitment to excellence.
              </p>
              <p>
                Today, ACI stands as a beacon of hope for thousands of students who dream of becoming doctors and engineers. 
                With state-of-the-art infrastructure, experienced faculty from top institutions, and a proven track record, 
                we continue to transform dreams into reality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <FaBullseye className="text-3xl text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To empower students from all backgrounds with quality education, innovative teaching methods, 
                and comprehensive support to excel in competitive examinations like NEET and JEE. We strive to 
                make quality coaching accessible and affordable while maintaining the highest standards of education.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <FaEye className="text-3xl text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-700 leading-relaxed">
                To be recognized as the most trusted and result-oriented coaching institute in Rajasthan, 
                known for transforming aspirants into achievers. We envision a future where every deserving 
                student has access to quality education and mentorship to fulfill their dreams of joining 
                premier medical and engineering institutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our <span className="text-green-600">Core Values</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  icon: <FaGraduationCap className="text-4xl" />,
                  title: "Excellence",
                  description: "Commitment to highest standards in education"
                },
                {
                  icon: <FaAward className="text-4xl" />,
                  title: "Integrity",
                  description: "Honesty and transparency in all our dealings"
                },
                {
                  icon: "💪",
                  title: "Dedication",
                  description: "Unwavering focus on student success"
                },
                {
                  icon: "🤝",
                  title: "Support",
                  description: "Continuous guidance and mentorship"
                }
              ].map((value, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
                  <div className="text-green-600 mb-4 flex justify-center">
                    {typeof value.icon === 'string' ? <span className="text-4xl">{value.icon}</span> : value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Director Details */}
      <section className="py-16 bg-gradient-to-br from-green-900 to-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">
              Meet Our <span className="text-yellow-400">Director</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative w-full aspect-square max-w-md mx-auto">
                  <div className="absolute inset-0 bg-yellow-400 rounded-2xl transform rotate-6"></div>
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-indigo-100">
                      <span className="text-8xl">👨‍🏫</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{directorInfo.name}</h3>
                <p className="text-yellow-400 text-xl font-semibold mb-4">{directorInfo.designation}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">🎓</span>
                    <div>
                      <p className="font-semibold">Education</p>
                      <p className="text-blue-100">{directorInfo.education}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">⏱️</span>
                    <div>
                      <p className="font-semibold">Experience</p>
                      <p className="text-blue-100">{directorInfo.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-yellow-400 font-bold">📚</span>
                    <div>
                      <p className="font-semibold">Subject Expertise</p>
                      <p className="text-blue-100">{directorInfo.subject}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                  <p className="text-lg leading-relaxed italic">
                    &quot;{directorInfo.message}&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Students <span className="text-blue-600">Choose ACI</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Experienced faculty from IITs, NITs, and top medical colleges",
                "Small batch sizes for personalized attention",
                "Comprehensive study material and daily practice papers",
                "Regular doubt clearing sessions",
                "Weekly tests and performance analysis",
                "Scholarship programs for meritorious students",
                "Well-equipped classrooms and laboratory facilities",
                "Focus on both board exams and competitive entrance tests",
                "Proven track record of selections in top colleges",
                "Safe and conducive learning environment"
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg shadow">
                  <div className="text-green-500 text-xl mt-1">✓</div>
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
