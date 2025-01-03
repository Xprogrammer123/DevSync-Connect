import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Users, Send } from 'lucide-react';

export const QuickActions = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center justify-center gap-2 bg-[#4A90E2] text-white p-4 rounded-lg font-medium hover:bg-[#4A90E2]/90 transition-colors"
      >
        <Briefcase className="h-5 w-5" />
        Post a New Project
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center justify-center gap-2 bg-white text-gray-900 p-4 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
      >
        <Users className="h-5 w-5" />
        View Applications
      </motion.button>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center justify-center gap-2 bg-white text-gray-900 p-4 rounded-lg font-medium border border-gray-200 hover:bg-gray-50 transition-colors"
      >
        <Send className="h-5 w-5" />
        Invite Developers
      </motion.button>
    </div>
  );
};