"use client";

import { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const SERVICES = [
"Portrait & Headshot Session",
"Family / Event Coverage",
"Cultural Celebration",
"Corporate Photography",
];

export default function Booking() {
const [service, setService] = useState(SERVICES[0]);
const [date, setDate] = useState("");
const [location, setLocation] = useState("");
const [notes, setNotes] = useState("");

const handleWhatsAppBooking = (e: React.FormEvent) => {
e.preventDefault();
const text = `Hi Jayaraj! I'd like to book a photography session.%0A%0A*Service:* ${encodeURIComponent(service)}%0A*Preferred Date:* ${encodeURIComponent(date)}%0A*Location:* ${encodeURIComponent(location)}%0A*Details:* ${encodeURIComponent(notes)}`;
window.open(`https://wa.me/14708974199?text=${text}`, "_blank");
};

const handleEmailBooking = () => {
const subject = `Booking Inquiry: ${service}`;
const body = `Hi Jayaraj,\n\nI would like to inquire about booking a session with PhotosByJraj.\n\nService: ${service}\nPreferred Date: ${date}\nLocation/Venue: ${location}\nAdditional Details: ${notes}\n\nThank you!`;
window.location.href = `mailto:contact@photosbyjraj.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
};

return (
<div className="min-h-screen flex flex-col bg-slate-950 text-white">
  <Navbar />
  <main className="flex-grow max-w-3xl mx-auto px-6 py-16 w-full">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Book a Session</h1>
      <p className="mt-4 text-slate-400">
        Select your service details below to initiate a booking request directly.
      </p>
    </div>

    <form onSubmit={handleWhatsAppBooking} className="bg-slate-900 border border-slate-800 rounded-2xl p-8 space-y-6">
      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Select Service</label>
        <select
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400"
        >
          {SERVICES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Preferred Date</label>
          <input
            type="date"
            required
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">Location / Venue</label>
          <input
            type="text"
            required
            placeholder="e.g. Alpharetta, GA or Venue Name"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-slate-300 mb-2">Event / Session Details</label>
        <textarea
          rows={4}
          placeholder="Tell us a bit about the session, estimated duration, or special requests..."
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-amber-400"
        ></textarea>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-2">
        <button
          type="submit"
          className="flex-1 bg-amber-400 text-slate-950 font-semibold py-3.5 px-6 rounded-lg hover:bg-amber-300 transition text-center"
        >
          Book via WhatsApp
        </button>
        <button
          type="button"
          onClick={handleEmailBooking}
          className="flex-1 bg-slate-800 text-white font-semibold py-3.5 px-6 rounded-lg border border-slate-700 hover:bg-slate-700 transition text-center"
        >
          Book via Email
        </button>
      </div>
    </form>
  </main>
  <Footer />
</div>
);
}