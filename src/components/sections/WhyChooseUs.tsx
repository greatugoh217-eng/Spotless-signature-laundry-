/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { 
  Clock, 
  DollarSign, 
  FastForward, 
  ShieldCheck, 
  Truck, 
  Heart 
} from 'lucide-react';

const reasons = [
  {
    icon: Clock,
    title: "Open 24/7",
    description: "Always available to handle your laundry needs, anytime of the day."
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Premium service doesn't have to break the bank. Competitive Abuja rates."
  },
  {
    icon: FastForward,
    title: "Fast Turnaround",
    description: "Our express options ensure you get your clothes back when you need them."
  },
  {
    icon: ShieldCheck,
    title: "Professional Care",
    description: "State-of-the-art equipment and expert handling for all fabric types."
  },
  {
    icon: Truck,
    title: "Reliable Delivery",
    description: "Our logistics team ensures timely pickup and delivery to your location."
  },
  {
    icon: Heart,
    title: "Satisfaction",
    description: "Dedicated to providing an exceptional experience for every customer."
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter leading-none">
              WHY CUSTOMERS <br />
              <span className="text-primary italic">TRUST US</span>
            </h2>
            <p className="text-white/50 text-lg">
              We've built our reputation in Abuja on consistency, quality, and lightning-fast service.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-dark bg-surface-hover overflow-hidden shadow-xl">
                   <img src={`https://i.pravatar.cc/150?u=${i}`} alt="Customer" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-dark bg-primary flex items-center justify-center text-dark font-bold text-xs shadow-xl">
                +4K
              </div>
            </div>
            <p className="text-[10px] text-white/40 uppercase tracking-widest font-black mt-3 ml-2">Happy Clients in Abuja</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-5"
            >
              <div className="flex-shrink-0 w-12 h-12 glass-card rounded-2xl flex items-center justify-center text-primary border-primary/20">
                <reason.icon size={22} />
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">{reason.title}</h3>
                <p className="text-sm text-white/50 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
