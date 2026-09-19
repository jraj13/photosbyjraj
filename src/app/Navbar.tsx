import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="border-b border-gray-100 bg-white/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tight text-gray-900">
          PhotosByJraj<span className="text-indigo-600">.</span>
        </Link>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-600">
          <Link href="/" className="hover:text-gray-900 transition">Home</Link>
          <Link href="/portfolio" className="hover:text-gray-900 transition">Portfolio</Link>
          <Link href="/about" className="hover:text-gray-900 transition">About</Link>
          <Link href="/contact" className="hover:text-gray-900 transition">Contact</Link>
        </nav>
        <Link 
          href="/booking" 
          className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition"
        >
          Book Session
        </Link>
      </div>
    </header>
  );
}
