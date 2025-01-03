import React from 'react';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import { staggerChildren } from '../../animations/variants';

interface ProjectListProps {
  view: 'grid' | 'list';
}

const mockProjects = [
  {
    id: 1,
    title: 'E-commerce Platform Development',
    description: 'Looking for an experienced full-stack developer to build a modern e-commerce platform with React and Node.js.',
    budget: '$5,000 - $10,000',
    deadline: '2 months',
    skills: ['React', 'Node.js', 'PostgreSQL'],
    client: {
      name: 'Alex Johnson',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4.8,
    },
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Need a React Native developer for a social networking app. Experience with Firebase required.',
    budget: '$8,000 - $15,000',
    deadline: '3 months',
    skills: ['React Native', 'Firebase', 'TypeScript'],
    client: {
      name: 'Sarah Wilson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      rating: 4.9,
    },
  },
];

export const ProjectList = ({ view }: ProjectListProps) => {
  return (
    <motion.div
      variants={staggerChildren}
      initial="hidden"
      animate="visible"
      className={`flex-1 grid gap-6 ${
        view === 'grid' ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
      }`}
    >
      {mockProjects.map((project) => (
        <ProjectCard key={project.id} project={project} view={view} />
      ))}
    </motion.div>
  );
};