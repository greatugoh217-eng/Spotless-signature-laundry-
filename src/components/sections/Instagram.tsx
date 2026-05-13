/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Instagram, Heart, MessageCircle } from 'lucide-react';

export default function InstagramSection() {
  const posts = [
    "https://images.unsplash.com/photo-1582733711311-667798305022?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1489274495757-95c7c837b101?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1545173168-9f1947a8b943?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=600&auto=format&fit=crop"
  ];

  return (
    <section className="py-24 px-4 bg-dark overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
          <div>
            <div className="inline-flex items-center gap-2 mb-4 text-primary font-bold tracking-widest uppercase text-xs">
              <Instagram size={16} />
              <span>Social Presence</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-4">
              FOLLOW OUR <br />
              <span className="text-gradient uppercase">Journey</span>
            </h2>
            <p className="text-white/50 max-w-md">
              See the magic behind the scenes and get updates on special offers.
            </p>
          </div>
          
          <motion.a
            href="https://www.instagram.com/spotless_signatureent/"
            target="_blank"
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-4 px-8 py-4 bg-linear-to-tr from-purple-600 via-pink-600 to-orange-500 rounded-full font-bold text-white shadow-xl shadow-pink-500/20"
          >
            <Instagram size={24} />
            Follow @spotless_signatureent
          </motion.a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {posts.map((url, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group relative aspect-square overflow-hidden rounded-3xl glass-card p-1"
            >
              <img 
                src={url} 
                alt="Instagram Post" 
                className="w-full h-full object-cover rounded-2xl transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6">
                <div className="flex items-center gap-1 text-white font-bold">
                  <Heart size={20} fill="white" />
                  <span>243</span>
                </div>
                <div className="flex items-center gap-1 text-white font-bold">
                  <MessageCircle size={20} fill="white" />
                  <span>12</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
