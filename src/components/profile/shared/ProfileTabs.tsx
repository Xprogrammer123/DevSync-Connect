import React from 'react';
import { motion } from 'framer-motion';

interface Tab {
  id: string;
  label: string;
}

interface ProfileTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const ProfileTabs = ({ tabs, activeTab, onTabChange }: ProfileTabsProps) => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mb-6">
      <div className="flex space-x-4">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              activeTab === tab.id
                ? 'bg-[#4A90E2] text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>
    </div>
  );
};