import { results2025, results2024, resultStats } from '@/data/results';
import { generateMetadata as genMeta } from '@/components/SEO';
import { siteConfig } from '@/data/siteConfig';
import { FaTrophy, FaStar } from 'react-icons/fa';

export const metadata = genMeta({
  title: 'Results - NEET & JEE Toppers and Achievers',
  description: 'Explore the success stories of our students. ACI Bansur students have achieved top ranks in NEET and JEE exams, securing admissions in premier medical and engineering colleges.',
  keywords: [...siteConfig.keywords, 'NEET results', 'JEE results', 'toppers', 'ACI achievers'],
  url: '/results',
});

export default function ResultsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <FaTrophy className="text-6xl mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Results</h1>
            <p className="text-xl text-green-100">
              Success Stories That Inspire
            </p>
          </div>
        </div>
      </section>

      {/* Result Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { number: resultStats.neet2025Qualified, label: "NEET 2025 Qualified", color: "blue" },
              { number: resultStats.jee2025Qualified, label: "JEE 2025 Qualified", color: "green" },
              { number: resultStats.neet2024Qualified, label: "NEET 2024 Qualified", color: "purple" },
              { number: resultStats.jee2024Qualified, label: "JEE 2024 Qualified", color: "orange" }
            ].map((stat, index) => (
              <div key={index} className={`bg-gradient-to-br from-${stat.color}-50 to-${stat.color}-100 p-6 rounded-xl text-center border-2 border-${stat.color}-200`}>
                <div className={`text-4xl font-bold text-${stat.color}-600 mb-2`}>{stat.number}+</div>
                <div className="text-gray-700 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEET Results 2025 */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <span className="text-green-600">NEET (UG) 2025</span> Achievers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results2025.filter(r => r.exam === "NEET").map((result) => (
                <div key={result.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <span className="text-6xl">🎓</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{result.name}</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-green-600 font-bold">{result.rank}</p>
                      <p className="text-gray-700">{result.score}</p>
                      <p className="text-gray-600">{result.college}</p>
                      <p className="text-gray-500">{result.city}, {result.state}</p>
                      <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {result.batchType}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* JEE Results 2025 */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              <span className="text-green-600">JEE 2025</span> Achievers
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {results2025.filter(r => r.exam === "JEE").map((result) => (
                <div key={result.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all">
                  <div className="h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <span className="text-6xl">🎓</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{result.name}</h3>
                    <div className="space-y-2 text-sm">
                      <p className="text-green-600 font-bold">{result.rank}</p>
                      <p className="text-gray-700">{result.score}</p>
                      <p className="text-gray-600">{result.college}</p>
                      <p className="text-gray-500">{result.city}, {result.state}</p>
                      <span className="inline-block bg-green-100 text-green-600 px-3 py-1 rounded-full text-xs font-semibold">
                        {result.batchType}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Previous Year Results */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Previous Year <span className="text-green-600">Achievers (2024)</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {results2024.map((result) => (
                <div key={result.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-all">
                  <div className="text-center mb-4">
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${result.exam === 'NEET' ? 'from-green-400 to-emerald-500' : 'from-blue-400 to-indigo-500'} flex items-center justify-center text-white text-2xl font-bold mb-3`}>
                      <FaStar />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-1">{result.name}</h3>
                    <p className={`${result.exam === 'NEET' ? 'text-green-600' : 'text-blue-600'} font-bold text-sm`}>{result.rank}</p>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p className="font-medium">{result.college}</p>
                    <p>{result.city}, {result.state}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Be the Next Success Story!</h2>
          <p className="text-xl mb-8 text-green-100">
            Join ACI Bansur and achieve your dream rank
          </p>
          <a 
            href="/enquiry"
            className="inline-block bg-white text-green-600 px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transform hover:scale-105 transition-all"
          >
            Start Your Journey
          </a>
        </div>
      </section>
    </>
  );
}
