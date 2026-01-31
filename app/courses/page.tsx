import { 
  courses, 
  feeStructure, 
  scholarshipNEET, 
  scholarshipJEE, 
  scholarshipBoard,
  schoolingFees,
  additionalSchoolingCharges,
  hostelFees, 
  additionalScholarships,
  testSeriesFees,
  importantRules,
  documentsRequired
} from '@/data/courses';
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
                Fee <span className="text-green-600">Structure 2026-27</span>
              </h2>
              <p className="text-gray-600">Programs: NEET | IIT-JEE | XI & XII Foundation | CUET | Boards</p>
            </div>

            {/* Main Fee Structure */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
              <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6">
                <h3 className="text-2xl font-bold">XI & XII Foundation (NEET/JEE)</h3>
              </div>
              <div className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Total Tuition Fee</h4>
                    <p className="text-4xl font-bold text-green-600 mb-4">₹1,15,000</p>
                    <p className="text-sm text-gray-600">GST Included</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-4">Includes</h4>
                    <ul className="space-y-2">
                      {feeStructure[0].includes.map((item, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <FaCheckCircle className="text-green-500" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-gray-700">
                    <strong>Registration Fee:</strong> ₹10,000 (included in tuition fee, non-refundable)
                  </p>
                </div>
              </div>
            </div>

            {/* Installment Info */}
            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <p className="text-gray-700 font-semibold mb-2">💳 Installment Options Available</p>
              <p className="text-gray-600">Pay in 3 parts: At admission • After 2 months • After 4 months</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scholarship Section - NEET Based */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <FaStar className="inline-block text-yellow-500 mr-2" />
                Scholarships for Classroom Programme <span className="text-green-600">2026-27</span>
              </h2>
              <p className="text-gray-600 mb-4">A student can avail only one scholarship at a time</p>
            </div>

            {/* NEET 2026 AIR Scholarship */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-green-600 text-white px-4 py-2 rounded-lg">1</span>
                Based on NEET 2026 AIR
              </h3>
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-lg overflow-hidden border-2 border-green-200">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">AIR (GEN/OBC/EWS/MBC)</th>
                        <th className="px-6 py-4 text-center">AIR (SC)</th>
                        <th className="px-6 py-4 text-center">AIR (ST)</th>
                        <th className="px-6 py-4 text-center">Payable Fee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {scholarshipNEET.map((scholarship, index) => (
                        <tr key={index} className="hover:bg-green-100 transition-colors">
                          <td className="px-6 py-4 font-semibold text-gray-900">{scholarship.airGen}</td>
                          <td className="px-6 py-4 text-center text-gray-700">{scholarship.airSC}</td>
                          <td className="px-6 py-4 text-center text-gray-700">{scholarship.airST}</td>
                          <td className="px-6 py-4 text-center font-bold text-green-600">{scholarship.payableFee}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* JEE Main Percentile Scholarship */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-blue-600 text-white px-4 py-2 rounded-lg">2</span>
                Based on JEE Main 2026 Percentile
              </h3>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg overflow-hidden border-2 border-blue-200">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">JEE Main Percentile</th>
                        <th className="px-6 py-4 text-center">GEN/OBC/EWS</th>
                        <th className="px-6 py-4 text-center">SC/ST</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {scholarshipJEE.map((scholarship, index) => (
                        <tr key={index} className="hover:bg-blue-100 transition-colors">
                          <td className="px-6 py-4 font-semibold text-gray-900">{scholarship.percentile}</td>
                          <td className="px-6 py-4 text-center font-bold text-blue-600">{scholarship.genOBCEWS}</td>
                          <td className="px-6 py-4 text-center font-bold text-blue-600">{scholarship.scST}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Board Percentage Scholarship */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="bg-purple-600 text-white px-4 py-2 rounded-lg">3</span>
                Based on Board Percentage (X/XII)
              </h3>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg overflow-hidden border-2 border-purple-200">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                      <tr>
                        <th className="px-6 py-4 text-left">Percentage</th>
                        <th className="px-6 py-4 text-center">Fee Off</th>
                        <th className="px-6 py-4 text-center">Net Payable</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {scholarshipBoard.map((scholarship, index) => (
                        <tr key={index} className="hover:bg-purple-100 transition-colors">
                          <td className="px-6 py-4 font-semibold text-gray-900">{scholarship.percentage}</td>
                          <td className="px-6 py-4 text-center font-bold text-red-600">{scholarship.feeOff}</td>
                          <td className="px-6 py-4 text-center font-bold text-green-600">{scholarship.netPayable}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Additional Scholarships */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl shadow-lg p-8 border-2 border-yellow-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Additional Scholarships (Extra ₹5,000 off)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {additionalScholarships.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-yellow-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-gray-600 italic">*Applied in 3rd installment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schooling Fee */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Schooling Fee <span className="text-green-600">(For XI & XII)</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {schoolingFees.map((school, index) => (
                <div key={index} className="bg-white p-8 rounded-2xl shadow-lg text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{school.board}</h3>
                  <p className="text-4xl font-bold text-green-600">{school.fee}</p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h4 className="font-bold text-gray-900 mb-4">Additional Charges:</h4>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Direct CBSE admission (X/XII): <strong>{additionalSchoolingCharges.directCBSEAdmission}</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">•</span>
                  <span className="text-gray-700">Board change to CBSE in XI: <strong>{additionalSchoolingCharges.boardChangeToCBSE}</strong></span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hostel Facilities */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                <FaHome className="inline-block text-green-600 mr-2" />
                Hostel <span className="text-green-600">Fee</span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border-2 border-green-200 mb-8">
              <div className="text-center mb-6">
                <p className="text-5xl font-bold text-green-600 mb-2">{hostelFees.monthly}</p>
                <p className="text-gray-600">Applicable for {hostelFees.applicableFor}</p>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Test Series Fees */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Test Series <span className="text-green-600">Fees</span>
              </h2>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Program</th>
                      <th className="px-6 py-4 text-center">Online</th>
                      <th className="px-6 py-4 text-center">Offline</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {testSeriesFees.map((test, index) => (
                      <tr key={index} className="hover:bg-green-50 transition-colors">
                        <td className="px-6 py-4 font-semibold text-gray-900">{test.program}</td>
                        <td className="px-6 py-4 text-center font-bold text-green-600">{test.online}</td>
                        <td className="px-6 py-4 text-center font-bold text-green-600">{test.offline}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Rules */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Important <span className="text-green-600">Rules & Terms</span>
              </h2>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 border-2 border-red-200 mb-8">
              <ul className="space-y-3">
                {importantRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-xl">•</span>
                    <span className="text-gray-700">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📄 Documents Required</h3>
              <ul className="space-y-3">
                {documentsRequired.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <FaCheckCircle className="text-green-500 mt-1" />
                    <span className="text-gray-700">{doc}</span>
                  </li>
                ))}
              </ul>
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
