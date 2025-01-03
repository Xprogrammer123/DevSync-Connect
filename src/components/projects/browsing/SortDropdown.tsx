import React from 'react';
import { ArrowUpDown } from 'lucide-react';

interface SortDropdownProps {
  value: string;
  onChange: (value: string) => void;
}

export const SortDropdown = ({ value, onChange }: SortDropdownProps) => {
  return (
    <div className="flex items-center gap-2">
      <ArrowUpDown className="h-5 w-5 text-gray-400" />
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
      >
        <option value="recent">Most Recent</option>
        <option value="budget-high">Highest Budget</option>
        <option value="budget-low">Lowest Budget</option>
        <option value="deadline">Closest Deadline</option>
      </select>
    </div>
  );
};