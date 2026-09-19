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
        Have an upcoming event, portrait session, or inquiry? Reach out to discuss your project.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
        <h2 className="text-2xl font-bold text-white">Contact Info</h2>
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Email</p>
          <a href="mailto:contact@photosbyjraj.com" className="text-lg text-amber-400 hover:underline">
            contact@photosbyjraj.com
          </a>
        </div>
        <div>
          <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Services</p>
          <p className="text-slate-300">Portraits, Events, Cultural & Corporate Photography</p>
        </div>
      </div>

      <form action="https://formspree.io/f/xvgzpyje" method="POST" className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Name</label>
          <input type="text" id="name" name="name" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-amber-400" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email</label>
          <input type="email" id="email" name="email" required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-amber-400" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1">Message</label>
          <textarea id="message" name="message" rows={4} required className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-amber-400"></textarea>
        </div>
        <button type="submit" className="w-full bg-amber-400 text-slate-950 font-semibold py-3 rounded-lg hover:bg-amber-300 transition">
          Send Message
        </button>
      </form>
    </div>
  </main>
  <Footer />
</div>
);
}