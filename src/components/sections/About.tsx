/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-4 bg-dark relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[120px] -mr-48" />

      <div className="max-w-7xl mx-auto grid md:grid-template-columns-[1fr_1.2fr] gap-12 items-center">
        <motion.div
           initial={{ opacity: 0, x: -30 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           className="relative aspect-square rounded-3xl overflow-hidden glass-card p-2"
        >
          <img 
            src="https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=1000&auto=format&fit=crop" 
            alt="Spotless Signature Quality"
            className="w-full h-full object-cover rounded-2xl"
          />
          <div className="absolute inset-0 bg-linear-to-t from-dark/80 via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <div className="text-4xl font-black text-primary">24/7</div>
            <div className="text-xs uppercase tracking-widest font-bold text-white/60">Availability</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 glass-card rounded-full w-fit">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-primary">About Our Brand</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1]">
            QUALITY CARE FOR EVERY <br />
            <span className="text-primary italic">GARMENT</span>
          </h2>

          <p className="text-lg text-white/60 leading-relaxed">
            Spotless Signature Enterprise is a modern laundry and dry-cleaning business dedicated to providing high-quality, affordable, and reliable garment care. We specialize in wash & fold, ironing, stain removal, and express same-day services.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-4">
            {[
              "Wash & Fold Specialists",
              "Advanced Stain Removal",
              "Same-Day Service",
              "Expert Dry Cleaning",
              "Organic Detergents",
              "Professional Handling"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-primary" />
                <span className="text-sm font-medium text-white/80">{item}</span>
              </div>
            ))}
          </div>

          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="mt-8 p-6 glass-card rounded-2xl border-primary/10 flex items-center justify-between"
          >
            <div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Our Location</p>
              <p className="text-sm font-medium">Apo Resettlement Area, Abuja</p>
            </div>
            <div className="h-10 w-[1px] bg-white/10" />
            <div className="text-right">
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Response Time</p>
              <p className="text-sm font-medium text-primary">Instant via WhatsApp</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
