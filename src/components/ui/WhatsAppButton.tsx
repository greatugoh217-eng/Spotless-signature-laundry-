/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';

interface WhatsAppButtonProps {
  className?: string;
  showText?: boolean;
}

export default function WhatsAppButton({ className = "", showText = true }: WhatsAppButtonProps) {
  const phoneNumber = "2348135448902";
  const message = encodeURIComponent("Hello Spotless Signature Enterprise, I’d like to book a laundry service.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-dark font-semibold rounded-full shadow-lg transition-colors hover:bg-cyan-400 ${className}`}
    >
      <MessageCircle size={20} fill="currentColor" />
      {showText && <span>Book on WhatsApp</span>}
    </motion.a>
  );
}
