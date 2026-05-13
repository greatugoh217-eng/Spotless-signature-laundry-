/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { MapPin, Phone, MessageCircle, Clock, Instagram } from 'lucide-react';

export default function Contact() {
  const address = "Zone E No. 37, Apo Resettlement Area, AMAC, Garki 900104, Federal Capital Territory, Abuja, Nigeria";
  
  return (
    <section id="contact" className="py-24 px-4 bg-dark">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-10"
          >
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">
                VISIT THE <br />
                <span className="text-gradient uppercase">Signature Shop</span>
              </h2>
              <p className="text-white/50 text-lg">
                Conveniently located in the heart of Abuja. Stop by or let us come to you.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { icon: MapPin, title: "Address", content: address },
                { icon: Phone, title: "Phone", content: "0813 544 8902" },
                { icon: MessageCircle, title: "WhatsApp", content: "Chat with us 24/7" },
                { icon: Clock, title: "Business Hours", content: "Open 24 Hours / 7 Days" }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-5 items-start">
                  <div className="p-3 glass-card rounded-xl text-primary">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-white/40 mb-1">{item.title}</h4>
                    <p className="font-bold text-white/90 leading-tight transition-colors hover:text-primary cursor-default">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <a href="https://www.instagram.com/spotless_signatureent/" target="_blank" className="p-4 glass-card rounded-2xl hover:text-primary transition-colors">
                <Instagram size={24} />
              </a>
              <a href="https://wa.me/2348135448902" target="_blank" className="p-4 glass-card rounded-2xl hover:text-primary transition-colors flex items-center gap-3">
                <MessageCircle size={24} />
                <span className="font-bold text-sm">Quick Chat</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="h-[500px] lg:h-full min-h-[500px] w-full bg-surface rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl relative"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15762.639546200213!2d7.485121!3d9.006121!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e09647900b9ed%3A0xe54d3e0988e404b9!2sApo%20Resettlement!5e0!3m2!1sen!2sng!4v1715632000000!5m2!1sen!2sng" 
              width="100%" 
              height="100%" 
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) brightness(0.8)' }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Spotless Signature Location"
            ></iframe>
            
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[90%] glass-card p-4 rounded-2xl border-white/10 backdrop-blur-xl flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-white/40 uppercase tracking-widest mb-1">Apo Resettlement</p>
                <p className="text-sm font-bold">Zone E No. 37</p>
              </div>
              <a 
                href="https://www.google.com/maps/dir/?api=1&destination=Zone+E+No.+37,+Apo+Resettlement+Area,+AMAC,+Garki+900104,+Abuja" 
                target="_blank"
                className="bg-primary text-dark font-black px-4 py-2 rounded-xl text-xs uppercase"
              >
                Directions
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
