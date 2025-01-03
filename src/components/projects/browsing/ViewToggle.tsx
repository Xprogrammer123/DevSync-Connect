import React from 'react';
import { Grid, List } from 'lucide-react';
import { motion } from 'framer-motion';

interface ViewToggleProps {
  view: 'grid' | 'list';
  onViewChange: (view: 'grid' | 'list') => void;
}

export const ViewToggle = ({ view, onViewChange }: ViewToggleProps) => {
  return (
    <div className="flex items-center gap-2 bg-white rounded-lg border border-gray-200 p-1">
      {[
        { type: 'grid', icon: Grid },
        { type: 'list', icon: List },
      ].map(({ type, icon: Icon }) => (
        <motion.button
          key={type}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onViewChange(type as 'grid' | 'list')}
          className={`p-2 rounded-md ${
            view === type
              ? 'bg-[#4A90E2] text-white'
              : 'text-gray-600 hover:bg-gray-100'
          }`}
        >
          <Icon className="h-5 w-5" />
        </motion.button>
      ))}
    </div>
  );
};