/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Instagram, Phone, MapPin } from 'lucide-react';
import WhatsAppButton from '../ui/WhatsAppButton';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-4 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between pointer-events-auto">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-2"
        >
          <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center font-bold text-dark text-xl">
            S
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-display font-bold leading-none block">Spotless Signature</span>
            <span className="text-[10px] text-primary tracking-widest uppercase font-medium">Enterprise</span>
          </div>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#about" className="hover:text-primary transition-colors text-white/70">About</a>
          <a href="#services" className="hover:text-primary transition-colors text-white/70">Services</a>
          <a href="#contact" className="hover:text-primary transition-colors text-white/70">Contact</a>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3"
        >
          <a 
            href="https://www.instagram.com/spotless_signatureent/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 glass-card rounded-full hover:text-primary transition-colors hidden sm:flex"
          >
            <Instagram size={20} />
          </a>
          <WhatsAppButton className="hidden sm:inline-flex py-2 px-4 text-xs" />
        </motion.div>
      </div>
    </nav>
  );
}
