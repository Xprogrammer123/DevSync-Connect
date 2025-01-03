import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../animations/variants';

interface TestimonialCardProps {
  image: string;
  name: string;
  role: string;
  quote: string;
  company?: string;
}

export const TestimonialCard = ({ image, name, role, quote, company }: TestimonialCardProps) => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
    >
      <div className="flex flex-col items-center text-center gap-4">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={image}
          alt={name}
          className="w-20 h-20 rounded-full object-cover"
        />
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-gray-700 italic"
        >
          {quote}
        </motion.blockquote>
        <motion.div whileHover={{ y: -2 }}>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
          {company && <p className="text-sm text-[#4A90E2]">{company}</p>}
        </motion.div>
      </div>
    </motion.div>
  );
};