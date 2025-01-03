import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, DollarSign, User, CheckCircle } from 'lucide-react';
import { fadeIn, staggerChildren } from '../../animations/variants';

const projects = [
  {
    title: 'E-commerce Platform Redesign',
    description: 'Complete redesign and development of our e-commerce platform using modern technologies.',
    developer: 'Sarah Wilson',
    duration: '3 months',
    budget: '$25,000',
    status: 'Completed',
    technologies: ['React', 'Node.js', 'PostgreSQL'],
  },
  {
    title: 'Mobile App Development',
    description: 'Development of a cross-platform mobile app for inventory management.',
    developer: 'John Smith',
    duration: '4 months',
    budget: '$35,000',
    status: 'Completed',
    technologies: ['React Native', 'Firebase'],
  },
];

export const ClientProjects = () => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {projects.map((project) => (
        <motion.div
          key={project.title}
          variants={fadeIn}
          className="bg-white p-6 rounded-xl shadow-sm"
        >
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-sm mt-2">
                <CheckCircle className="h-4 w-4" />
                {project.status}
              </span>
            </div>
          </div>

          <p className="text-gray-600 mt-4">{project.description}</p>

          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-[#4A90E2]/10 text-[#4A90E2] rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
            <div className="flex items-center gap-2 text-gray-600">
              <User className="h-4 w-4 text-[#4A90E2]" />
              <span>{project.developer}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar className="h-4 w-4 text-[#4A90E2]" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <DollarSign className="h-4 w-4 text-[#4A90E2]" />
              <span>{project.budget}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};