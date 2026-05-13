/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  WashingMachine, 
  Wind, 
  Layers, 
  Zap, 
  Truck, 
  Building2, 
  Trash2,
  LucideIcon 
} from 'lucide-react';

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
}

const services: Service[] = [
  {
    title: "Wash & Fold",
    description: "Everyday laundry cleaned, dried, and perfectly folded just the way you like.",
    icon: WashingMachine
  },
  {
    title: "Dry Cleaning",
    description: "Professional care for suits, gowns, and delicate fabrics requiring special handling.",
    icon: Wind
  },
  {
    title: "Ironing & Folding",
    description: "Expert pressing using commercial-grade steam irons for a crisp, professional finish.",
    icon: Layers
  },
  {
    title: "Stain Removal",
    description: "Advanced techniques to tackle tough stains while preserving fabric integrity.",
    icon: Trash2
  },
  {
    title: "Express Laundry",
    description: "In a hurry? Get your clothes back clean and fresh within the same day.",
    icon: Zap,
    badge: "Popular"
  },
  {
    title: "Pickup & Delivery",
    description: "Convenience at your doorstep. We pick up and deliver across Garki and Apo.",
    icon: Truck
  },
  {
    title: "Corporate Services",
    description: "Specialized laundry management for hotels, offices, and large organizations.",
    icon: Building2
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 bg-surface text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1 glass-card rounded-full text-[10px] font-black uppercase tracking-widest text-primary border border-primary/20 mb-4"
          >
            What We Do
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            PRO CARE FOR YOUR <br />
            <span className="text-gradient uppercase">Wardrobe</span>
          </h2>
          <p className="max-w-2xl mx-auto text-white/50 text-lg">
            From basic wash to specialized garment restoration, we handle your signature style with the utmost professional care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="p-8 glass-card rounded-3xl relative group transition-all hover:bg-surface-hover hover:border-primary/30"
            >
              {service.badge && (
                <div className="absolute top-6 right-6 px-2 py-1 bg-primary/10 text-primary text-[10px] font-black uppercase rounded-lg border border-primary/20 animate-pulse">
                  {service.badge}
                </div>
              )}
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-dark transition-colors duration-300">
                <service.icon size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">{service.title}</h3>
              <p className="text-white/50 leading-relaxed text-sm">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
