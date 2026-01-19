import { courses, feeStructure, scholarshipCriteria, hostelFees } from '@/data/courses';
import { generateMetadata as genMeta, generateCourseSchema } from '@/components/SEO';
import { siteConfig } from '@/data/siteConfig';
import { FaCheckCircle, FaStar, FaHome } from 'react-icons/fa';
import Link from 'next/link';

export const metadata = genMeta({
  title: 'Courses & Fees Structure - NEET, JEE, Foundation',
  description: 'Explore our comprehensive courses for NEET, JEE, and Foundation classes. View detailed fee structure, scholarship options, and hostel facilities at ACI Bansur.',
  keywords: [...siteConfig.keywords, 'NEET fees', 'JEE fees', 'scholarship', 'hostel fees', 'course details'],
  url: '/courses',
});

export default function CoursesPage() {
  const courseSchema = generateCourseSchema(
    'NEET & JEE Coaching Programs',
    'Comprehensive coaching for NEET, IIT-JEE, and Foundation courses at Ayush Career Institute, Bansur'
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
      />

      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-900 to-emerald-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Courses & Fees</h1>
            <p className="text-xl text-green-100">
              Choose Your Path to Success
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our <span className="text-green-600">Courses</span>
              </h2>
              <p className="text-gray-600">Comprehensive programs tailored for your success</p>
            </div>

            <div className="space-y-8">
              {courses.map((course) => (
                <div key={course.id} className="bg-gradient-to-br from-white to-green-50 rounded-2xl shadow-lg overflow-hidden border border-green-100">
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-green-600 to-emerald-600 text-white p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold mb-2">{course.name}</h3>
                      <p className="text-green-100 text-lg mb-4">{course.target}</p>
                      <div className="space-y-2">
                        <p className="flex items-center gap-2">
                          <span className="text-yellow-400">⏱️</span>
                          <span>{course.duration}</span>
                        </p>
                        <p className="flex items-center gap-2">
                          <span className="text-yellow-400">🎓</span>
                          <span>{course.eligibility}</span>
                        </p>
                      </div>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <p className="text-gray-700 mb-6">{course.description}</p>
                      <h4 className="font-bold text-gray-900 mb-3">Course Highlights:</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {course.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start gap-2">
                            <FaCheckCircle className="text-green-500 mt-1 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Fee <span className="text-green-600">Structure</span>
              </h2>
              <p className="text-gray-600">Transparent and affordable pricing</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Course</th>
                      <th className="px-6 py-4 text-center">RBSE Board</th>
                      <th className="px-6 py-4 text-center">CBSE Board</th>
                      <th className="px-6 py-4 text-center">Registration Fee</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {feeStructure.map((fee, index) => (
                      <tr key={index} className="hover:bg-green-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">{fee.course}</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">{fee.rbseFee}</td>
                        <td className="px-6 py-4 text-center text-green-600 font-bold">{fee.cbseFee}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{fee.registrationFee}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>Note:</strong> Fees can be paid in installments. Additional charges may apply for study material and test series.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <FaStar className="inline-block text-yellow-500 mr-2" />
                Scholarship <span className="text-green-600">Program</span>
              </h2>
              <p className="text-gray-600">Rewarding merit and encouraging excellence</p>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-2xl shadow-lg overflow-hidden border-2 border-yellow-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Category</th>
                      <th className="px-6 py-4 text-center">NEET %</th>
                      <th className="px-6 py-4 text-center">JEE %</th>
                      <th className="px-6 py-4 text-center">Board %</th>
                      <th className="px-6 py-4 text-center">Scholarship</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {scholarshipCriteria.map((scholarship, index) => (
                      <tr key={index} className="hover:bg-yellow-100 transition-colors">
                        <td className="px-6 py-4 font-bold text-gray-900">{scholarship.category}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{scholarship.neetPercentage}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{scholarship.jeePercentage}</td>
                        <td className="px-6 py-4 text-center text-gray-700">{scholarship.boardPercentage}</td>
                        <td className="px-6 py-4 text-center font-bold text-green-600">{scholarship.scholarship}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-6 bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="text-gray-700">
                <strong>Scholarship Eligibility:</strong> Scholarships are based on performance in previous exams. 
                Students need to provide relevant mark sheets for verification.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Facilities */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <FaHome className="inline-block text-green-600 mr-2" />
                Hostel <span className="text-green-600">Facilities</span>
              </h2>
              <p className="text-gray-600">Safe and comfortable accommodation for outstation students</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">AC Rooms</h3>
                <p className="text-3xl font-bold text-green-600 mb-4">{hostelFees.ac}</p>
                <p className="text-gray-600">Air-conditioned rooms with modern amenities</p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Non-AC Rooms</h3>
                <p className="text-3xl font-bold text-green-600 mb-4">{hostelFees.nonAc}</p>
                <p className="text-gray-600">Well-ventilated rooms with all basic facilities</p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Hostel Facilities Include:</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {hostelFees.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <FaCheckCircle className="text-green-500" />
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-green-500" />
                  <span className="text-gray-700">{hostelFees.meals}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl mb-8 text-green-100">
            Download our detailed fee structure or contact us for more information
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              href="/enquiry"
              className="bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
            >
              Enquire Now
            </Link>
            <a 
              href={`tel:${siteConfig.contact.phone[0]}`}
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-green-600 transition-all"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
