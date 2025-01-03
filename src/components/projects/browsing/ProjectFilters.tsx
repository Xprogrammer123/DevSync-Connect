import React from 'react';
import { motion } from 'framer-motion';
import { Filter, X } from 'lucide-react';
import { fadeIn } from '../../animations/variants';

interface Filters {
  skills: string[];
  budget: {
    min: number;
    max: number;
  };
  deadline: Date | null;
  location: string;
}

interface ProjectFiltersProps {
  filters: Filters;
  onChange: (filters: Filters) => void;
}

const availableSkills = [
  'React',
  'Node.js',
  'TypeScript',
  'Python',
  'AWS',
  'Docker',
  'UI/UX Design',
  'Mobile Development',
];

export const ProjectFilters = ({ filters, onChange }: ProjectFiltersProps) => {
  const [isOpen, setIsOpen] = React.useState(true);

  const handleSkillToggle = (skill: string) => {
    const newSkills = filters.skills.includes(skill)
      ? filters.skills.filter((s) => s !== skill)
      : [...filters.skills, skill];
    onChange({ ...filters, skills: newSkills });
  };

  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="w-full lg:w-64 bg-white rounded-xl shadow-sm border border-gray-200"
    >
      <div className="p-4 border-b border-gray-200">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between w-full"
        >
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <span className="font-medium text-gray-900">Filters</span>
          </div>
          {isOpen ? (
            <X className="h-5 w-5 text-gray-400" />
          ) : (
            <span className="text-sm text-gray-500">
              {filters.skills.length} selected
            </span>
          )}
        </button>
      </div>

      {isOpen && (
        <div className="p-4 space-y-6">
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Skills</h3>
            <div className="space-y-2">
              {availableSkills.map((skill) => (
                <label
                  key={skill}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.skills.includes(skill)}
                    onChange={() => handleSkillToggle(skill)}
                    className="rounded text-[#4A90E2] focus:ring-[#4A90E2]"
                  />
                  <span className="text-sm text-gray-600">{skill}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">
              Budget Range
            </h3>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="10000"
                step="100"
                value={filters.budget.max}
                onChange={(e) =>
                  onChange({
                    ...filters,
                    budget: { ...filters.budget, max: parseInt(e.target.value) },
                  })
                }
                className="w-full"
              />
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>${filters.budget.min}</span>
                <span>${filters.budget.max}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Deadline</h3>
            <input
              type="date"
              onChange={(e) =>
                onChange({ ...filters, deadline: new Date(e.target.value) })
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
            />
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-2">Location</h3>
            <input
              type="text"
              value={filters.location}
              onChange={(e) =>
                onChange({ ...filters, location: e.target.value })
              }
              placeholder="Enter location..."
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-[#4A90E2] focus:border-transparent"
            />
          </div>
        </div>
      )}
    </motion.div>
  );
};