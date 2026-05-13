/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Star, MessageCircle, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Shekwotinche John",
    role: "Regular Customer",
    review: "They are very good in handling your laundry and make sure you get your clothes on time without delay.",
    rating: 5,
    date: "2 months ago"
  },
  {
    name: "Miracle LASAPA",
    role: "Local Client",
    review: "I really like how they are working. Very professional and reliable.",
    rating: 5,
    date: "4 months ago"
  },
  {
    name: "Ngozi Okafor",
    role: "Business Professional",
    review: "The express service saved my day. Best dry cleaning I've used in the Apo area.",
    rating: 5,
    date: "1 month ago"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 px-4 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <div className="text-center md:text-left">
            <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
              VOICES OF OUR <br />
              <span className="text-gradient uppercase tracking-normal">Signature Clients</span>
            </h2>
            <div className="flex items-center justify-center md:justify-start gap-3 mt-4">
               <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
               </div>
               <span className="font-bold text-lg">4.8 / 5.0</span>
               <span className="text-white/40 text-sm">• Google Reviews</span>
            </div>
          </div>
          <motion.a 
            href="https://wa.me/2348135448902"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="mt-8 md:mt-0 p-6 glass-card rounded-[2rem] border-white/10 flex items-center gap-4 hover:border-primary/50 transition-all"
          >
            <div className="bg-primary/20 p-3 rounded-2xl text-primary">
              <MessageCircle size={28} />
            </div>
            <div>
              <p className="text-xs font-bold text-white/40 uppercase tracking-widest leading-none mb-1">Share Your Experience</p>
              <p className="font-bold">Leave a Review</p>
            </div>
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((rev, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 rounded-3xl border-white/5 relative"
            >
              <Quote className="absolute top-6 right-8 text-white/5" size={48} />
              <div className="flex text-yellow-400 mb-4">
                {[...Array(rev.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-white/80 leading-relaxed italic mb-8">
                "{rev.review}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-cyan-600 flex items-center justify-center font-bold text-dark text-xs">
                  {rev.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-sm">{rev.name}</h4>
                  <p className="text-[10px] text-white/40 uppercase tracking-widest">{rev.date} • Google Review</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
