/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import WhatsAppButton from '../ui/WhatsAppButton';
import { Instagram, Phone, Star } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax and Ken Burns effect */}
      <motion.div 
        style={{ y, scale }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-dark/70 z-10" />
        <motion.div
           animate={{
             scale: [1, 1.15],
             x: [0, 20],
             y: [0, 10]
           }}
           transition={{
             duration: 20,
             repeat: Infinity,
             repeatType: "reverse",
             ease: "linear"
           }}
           className="w-full h-full"
        >
          <img 
            src="https://images.unsplash.com/photo-1626806819282-2c1dc61a0e05?q=80&w=2000&auto=format&fit=crop" 
            alt="Spotless Signature Laundry"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-20 text-center px-4 max-w-4xl"
      >
        <div className="flex items-center justify-center gap-1 mb-6 glass-card w-fit mx-auto px-3 py-1 rounded-full border-primary/20">
          <div className="flex text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="currentColor" />
            ))}
          </div>
          <span className="text-xs font-bold text-white/90">4.8 Rating • Abuja's Best</span>
        </div>

        <div className="flex flex-col items-center mb-6">
          <span className="text-primary font-bold tracking-[0.3em] uppercase text-xs md:text-sm">Spotless Signature</span>
          <span className="text-white/40 text-[10px] font-black uppercase tracking-[0.5em] -mt-1">Enterprise</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tighter">
          PREMIUM <br />
          <span className="text-gradient">LAUNDRY</span> & <br />
          <span className="md:ml-20">DRY CLEANING</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto font-medium">
          Fast, affordable and reliable laundry care with same-day service options. 
          Expert garment care for your signature style.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <WhatsAppButton className="w-full sm:w-auto text-lg py-4 px-8" />
          <div className="flex gap-4">
            <a 
              href="https://www.instagram.com/spotless_signatureent/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="glass-card hover:bg-white/10 transition-colors p-4 rounded-full"
            >
              <Instagram size={24} />
            </a>
            <a 
              href="tel:+2348135448902" 
              className="glass-card hover:bg-white/10 transition-colors p-4 rounded-full"
            >
              <Phone size={24} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-32 left-1/2 -translate-x-1/2 hidden md:block"
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}
