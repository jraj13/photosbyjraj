import Navbar from './Navbar';
import Footer from './Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-white text-gray-900">
      <div>
        <Navbar />
        
        {/* Hero Section */}
        <section className="relative py-24 px-6 max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900">
            Capturing Moments, <br className="hidden sm:inline" />
            <span className="text-indigo-600">Creating Memories</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Professional portrait, event, and cultural photography tailored to bring out authentic emotion and vibrant visual stories.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link 
              href="/portfolio" 
              className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition"
            >
              View Portfolio
            </Link>
            <Link 
              href="/booking" 
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition"
            >
              Book Session
            </Link>
          </div>
        </section>

        {/* Featured Categories */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Photography Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Portraits & Headshots</h3>
                <p className="mt-2 text-gray-600 text-sm">Individual, creative, and executive personal brand sessions.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Events & Celebrations</h3>
                <p className="mt-2 text-gray-600 text-sm">Comprehensive coverage for corporate events, parties, and cultural galas.</p>
              </div>
              <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900">Family & Lifestyle</h3>
                <p className="mt-2 text-gray-600 text-sm">Candid outdoor and studio sessions capturing true family connections.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
