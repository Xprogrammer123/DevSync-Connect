import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  icon: LucideIcon;
  label: string;
  value: string | number;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  color?: string;
}

export const StatsCard = ({ 
  icon: Icon, 
  label, 
  value, 
  trend, 
  color = '#4A90E2' 
}: StatsCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{label}</p>
          <h3 className="text-2xl font-bold text-gray-900 mt-2">{value}</h3>
          {trend && (
            <div className="flex items-center gap-1 mt-2">
              <span className={trend.isPositive ? 'text-green-500' : 'text-red-500'}>
                {trend.isPositive ? '↑' : '↓'}
              </span>
              <span className={`text-sm ${trend.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {trend.value}%
              </span>
            </div>
          )}
        </div>
        
        <div 
          className="p-3 rounded-lg"
          style={{ backgroundColor: `${color}10` }}
        >
          <Icon 
            className="h-6 w-6"
            style={{ color }}
          />
        </div>
      </div>
    </motion.div>
  );
};