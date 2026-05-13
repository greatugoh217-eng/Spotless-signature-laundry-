/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How long does your same-day express service take?",
    answer: "Our express same-day laundry service typically takes between 4 to 8 hours depending on the load and time of drop-off. Most express orders dropped off before 11:00 AM are ready by 6:00 PM."
  },
  {
    question: "Do you offer pickup and delivery in Abuja?",
    answer: "Yes! We offer reliable pickup and delivery services across Garki, Apo, and surrounding areas in Abuja. You can schedule a pickup directly through our WhatsApp or the booking form."
  },
  {
    question: "What is your pricing for dry cleaning?",
    answer: "Our pricing is very competitive for the Abuja market. Since every garment is different, we provide exact quotes via WhatsApp. Generally, basic dry cleaning starts at affordable rates for standard items."
  },
  {
    question: "Can you handle delicate fabrics and heavy stains?",
    answer: "Absolutely. We specialize in advanced stain removal and professional care for all fabric types, including silk, lace, and high-end suits. Our technicians inspect every garment before processing."
  },
  {
    question: "Are you really open 24 hours?",
    answer: "Yes, Spotless Signature Enterprise operates 24 hours a day, 7 days a week. We understand that our customers have busy schedules, so we're always here to receive or process your laundry."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 px-4 bg-dark">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 glass-card rounded-full text-[10px] font-black uppercase tracking-widest text-primary mb-6"
          >
            <HelpCircle size={14} />
            <span>Support Center</span>
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
            COMMON <br />
            <span className="text-gradient uppercase">Questions</span>
          </h2>
          <p className="text-white/40 text-lg">
            Everything you need to know about Abuja's premium laundry service.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass-card rounded-3xl overflow-hidden border-white/5 transition-colors"
              style={{
                borderColor: openIndex === idx ? 'var(--color-primary-20)' : 'rgba(255,255,255,0.05)'
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg md:text-xl pr-8">{faq.question}</span>
                <div className={`p-2 rounded-full transition-colors ${openIndex === idx ? 'bg-primary text-dark' : 'bg-white/5 text-white/40'}`}>
                  {openIndex === idx ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <div className="px-6 md:px-8 pb-8 text-white/50 leading-relaxed">
                      <div className="h-[1px] w-full bg-white/5 mb-6" />
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
