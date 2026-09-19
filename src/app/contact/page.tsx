import Navbar from "../Navbar";
import Footer from "../Footer";

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-white">
      <Navbar />
      <main className="flex-grow max-w-4xl mx-auto px-6 py-16 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
          <p className="mt-4 text-slate-400">
            Have an upcoming event, portrait session, or inquiry? Reach out directly via WhatsApp, Email, or Instagram.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="https://wa.me/14708974199"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 border border-slate-800 hover:border-amber-400/50 rounded-2xl p-6 transition text-center group"
          >
            <div className="text-3xl mb-3">💬</div>
            <h2 className="text-xl font-semibold text-white mb-1">WhatsApp</h2>
            <p className="text-slate-400 text-sm mb-3">Quick inquiries & bookings</p>
            <span className="text-amber-400 font-medium group-hover:underline">470-897-4199</span>
          </a>

          <a
            href="mailto:contact@photosbyjraj.com"
            className="bg-slate-900 border border-slate-800 hover:border-amber-400/50 rounded-2xl p-6 transition text-center group"
          >
            <div className="text-3xl mb-3">✉️</div>
            <h2 className="text-xl font-semibold text-white mb-1">Email</h2>
            <p className="text-slate-400 text-sm mb-3">Detailed event plans</p>
            <span className="text-amber-400 font-medium group-hover:underline">contact@photosbyjraj.com</span>
          </a>

          <a
            href="https://www.instagram.com/photosbyjraj"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-900 border border-slate-800 hover:border-amber-400/50 rounded-2xl p-6 transition text-center group"
          >
            <div className="text-3xl mb-3">📷</div>
            <h2 className="text-xl font-semibold text-white mb-1">Instagram</h2>
            <p className="text-slate-400 text-sm mb-3">Follow & message us</p>
            <span className="text-amber-400 font-medium group-hover:underline">@photosbyjraj</span>
          </a>
        </div>
      </main>
      <Footer />
    </div>
  );
}