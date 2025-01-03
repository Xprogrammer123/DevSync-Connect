import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Send, DollarSign, Bell } from 'lucide-react';
import { fadeIn, staggerChildren } from '../../animations/variants';

interface Activity {
  id: number;
  type: 'project_update' | 'payment' | 'application' | 'project_match';
  title: string;
  description: string;
  timestamp: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

const getActivityIcon = (type: Activity['type']) => {
  switch (type) {
    case 'project_update':
      return Send;
    case 'payment':
      return DollarSign;
    case 'application':
      return Send;
    case 'project_match':
      return Bell;
    default:
      return Clock;
  }
};

export const ActivityFeed = ({ activities }: ActivityFeedProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Recent Activity</h2>
      
      <motion.div
        variants={staggerChildren}
        initial="hidden"
        animate="visible"
        className="space-y-6"
      >
        {activities.map((activity) => {
          const Icon = getActivityIcon(activity.type);
          
          return (
            <motion.div
              key={activity.id}
              variants={fadeIn}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-[#4A90E2]/10 rounded-lg flex items-center justify-center">
                  <Icon className="h-4 w-4 text-[#4A90E2]" />
                </div>
              </div>
              
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{activity.title}</p>
                <p className="text-sm text-gray-600">{activity.description}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.timestamp}</p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};