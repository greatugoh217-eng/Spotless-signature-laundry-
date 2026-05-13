/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import React, { useState } from 'react';
import { Calendar, User, Phone, CheckCircle } from 'lucide-react';

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate submission
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section className="py-24 px-4 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none">
              BOOK YOUR <br />
              <span className="text-primary uppercase tracking-normal">Signature Care</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 max-w-lg">
              Can't reach us on WhatsApp? Send us your details below and our team will get in touch to schedule a pickup.
            </p>

            <div className="flex flex-col gap-8">
              {[
                { title: "Schedule Pickup", desc: "Select a date and time that works for you." },
                { title: "Quick Processing", desc: "We wash, dry, and iron within 24 hours." },
                { title: "Expert Care", desc: "Your clothes are in the hands of professionals." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-12 h-12 glass-card rounded-2xl flex items-center justify-center font-bold text-primary border-primary/20 shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                    <p className="text-white/40 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-[3rem] border-white/5 relative overflow-hidden"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center text-primary mb-6">
                  <CheckCircle size={48} />
                </div>
                <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                <p className="text-white/50">Our team will contact you shortly to confirm your booking.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Full Name</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                      <input 
                        type="text" 
                        required 
                        placeholder="John Doe"
                        className="w-full bg-dark/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary transition-colors text-sm"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Phone Number</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                      <input 
                        type="tel" 
                        required 
                        placeholder="0813 544 8902"
                        className="w-full bg-dark/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary transition-colors text-sm"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Service Type</label>
                  <select className="w-full bg-dark/50 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-primary transition-colors text-sm appearance-none">
                    <option>Wash & Fold</option>
                    <option>Dry Cleaning</option>
                    <option>Same-Day Express</option>
                    <option>Corporate Service</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-white/40 ml-4">Preferred Date</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-white/20" size={18} />
                    <input 
                      type="date" 
                      required
                      className="w-full bg-dark/50 border border-white/10 rounded-2xl py-4 pl-12 pr-4 outline-none focus:border-primary transition-colors text-sm"
                    />
                  </div>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-primary hover:bg-cyan-400 text-dark font-black py-5 rounded-2xl shadow-xl shadow-primary/20 transition-all uppercase tracking-widest text-xs mt-4"
                >
                  Confirm Booking Request
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
