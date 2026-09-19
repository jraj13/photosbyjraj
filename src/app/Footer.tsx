import Link from 'next/link';

export default function Footer() {
return (
<footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
  <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
    <div className="space-y-3">
      <h3 className="text-white text-lg font-bold">PhotosByJraj</h3>
      <p className="text-sm text-slate-400">
        Turning moments into timeless stories with clarity and artistry.
      </p>
    </div>

    <div>
      <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Quick Links</h4>
      <div className="mt-3 space-y-2 flex flex-col text-sm">
        <Link href="/" className="hover:text-amber-400 transition">Home</Link>
        <Link href="/portfolio" className="hover:text-amber-400 transition">Portfolio</Link>
        <Link href="/booking" className="hover:text-amber-400 transition">Book a Session</Link>
        <Link href="/about" className="hover:text-amber-400 transition">About</Link>
        <Link href="/contact" className="hover:text-amber-400 transition">Contact</Link>
      </div>
    </div>

    <div>
      <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Connect</h4>
      <div className="mt-3 space-y-2 flex flex-col text-sm text-slate-400">
        <p>Alpharetta, GA & Worldwide</p>
        <a href="mailto:info@photosbyjraj.com" className="hover:text-amber-400 transition">
          info@photosbyjraj.com
        </a>
        <a href="https://wa.me/14708974199" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition">
          WhatsApp: 470-897-4199
        </a>
      </div>
    </div>

    <div>
      <h4 className="text-white text-sm font-semibold uppercase tracking-wider">Social</h4>
      <div className="mt-3 flex flex-col text-sm">
        <a
          href="https://www.instagram.com/photosbyjraj"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 hover:underline transition"
        >
          Instagram @photosbyjraj
        </a>
      </div>
    </div>
  </div>

  <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-slate-800 text-xs text-center text-slate-500">
    © {new Date().getFullYear()} PhotosByJraj. All rights reserved.
  </div>
</footer>
);
}