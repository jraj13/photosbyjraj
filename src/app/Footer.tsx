import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-white text-lg font-bold">PhotosByJraj</h3>
          <p className="mt-2 text-sm text-gray-400">Capturing life&apos;s timeless moments with clarity and artistry.</p>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
          <div className="mt-3 space-y-2 flex flex-col text-sm">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <Link href="/portfolio" className="hover:text-white transition">Portfolio</Link>
            <Link href="/about" className="hover:text-white transition">About</Link>
            <Link href="/contact" className="hover:text-white transition">Contact</Link>
          </div>
        </div>
        <div>
          <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Connect</h4>
          <p className="mt-3 text-sm text-gray-400">Alpharetta, GA & Worldwide</p>
          <p className="mt-1 text-sm text-gray-400">contact@photosbyjraj.com</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-gray-800 text-xs text-center text-gray-500">
        © {new Date().getFullYear()} PhotosByJraj. All rights reserved.
      </div>
    </footer>
  );
}
