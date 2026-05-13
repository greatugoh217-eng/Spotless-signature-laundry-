/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Phone, Instagram, MapPin, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

export default function MobileNav() {
  const phoneNumber = "2348135448902";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  const igUrl = "https://www.instagram.com/spotless_signatureent/";
  const mapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Zone+E+No.+37,+Apo+Resettlement+Area,+AMAC,+Garki+900104,+Abuja";

  const navItems = [
    { icon: Phone, label: "Call", href: `tel:${phoneNumber}`, primary: false },
    { icon: MessageCircle, label: "WhatsApp", href: whatsappUrl, primary: true },
    { icon: Instagram, label: "IG", href: igUrl, primary: false },
    { icon: MapPin, label: "Map", href: mapsUrl, primary: false },
  ];

  return (
    <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-sm">
      <div className="glass-card rounded-[2rem] p-2 flex items-center justify-between shadow-2xl border border-white/10">
        {navItems.map((item, idx) => (
          <motion.a
            key={idx}
            href={item.href}
            target={item.href.startsWith('http') ? "_blank" : undefined}
            rel="noopener noreferrer"
            whileTap={{ scale: 0.9 }}
            className={`flex flex-col items-center justify-center p-3 rounded-full transition-all ${
              item.primary 
                ? "bg-primary text-dark shadow-lg shadow-primary/20 scale-110 px-6" 
                : "text-white/70 hover:text-white"
            }`}
          >
            <item.icon size={item.primary ? 24 : 20} />
            <span className={`text-[10px] font-bold mt-1 ${item.primary ? "hidden" : "block"}`}>
              {item.label}
            </span>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
