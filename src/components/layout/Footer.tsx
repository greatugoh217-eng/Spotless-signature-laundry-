/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Instagram, Facebook, Twitter, MapPin, Phone, MessageCircle } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark pt-20 pb-32 md:pb-12 px-4 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center font-bold text-dark text-lg">
                S
              </div>
              <div>
                <span className="text-md font-display font-bold leading-none block">Spotless Signature</span>
                <span className="text-[8px] text-primary tracking-widest uppercase font-medium">Enterprise</span>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              Premium laundry and dry-cleaning services in Abuja. We treat every garment with signature care and professional precision.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Quick Links</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/50">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Location & Map</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Contact Info</h4>
            <ul className="flex flex-col gap-4 text-sm text-white/50">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary shrink-0 mt-1" />
                <span>Zone E No. 37, Apo Resettlement Area, Abuja</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-primary shrink-0" />
                <span>0813 544 8902</span>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle size={16} className="text-primary shrink-0" />
                <span>WhatsApp: 24/7 Available</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-primary">Stay Clean</h4>
            <p className="text-sm text-white/40 mb-4">Subscribe for special offers and care tips.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-surface border border-white/10 rounded-xl py-3 px-4 text-sm outline-none focus:border-primary transition-colors"
              />
              <button className="absolute right-2 top-1.5 bg-primary text-dark font-black px-4 py-1.5 rounded-lg text-[10px] uppercase">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] text-white/30 font-bold uppercase tracking-widest">
            © {currentYear} Spotless Signature Enterprise. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest">Made for Nigerian customers</span>
            <span className="grayscale opacity-50">🇳🇬</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
