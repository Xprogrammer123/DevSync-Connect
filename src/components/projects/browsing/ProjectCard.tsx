import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, DollarSign, Bookmark, Star } from 'lucide-react';
import { fadeIn } from '../../animations/variants';

interface Project {
  id: number;
  title: string;
  description: string;
  budget: string;
  deadline: string;
  skills: string[];
  client: {
    name: string;
    image: string;
    rating: number;
  };
}

interface ProjectCardProps {
  project: Project;
  view: 'grid' | 'list';
}

export const ProjectCard = ({ project, view }: ProjectCardProps) => {
  const [isSaved, setIsSaved] = React.useState(false);

  return (
    <motion.div
      variants={fadeIn}
      className={`bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow ${
        view === 'list' ? 'flex gap-6' : ''
      }`}
    >
      <div className="flex-1 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">
              {project.title}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <img
                src={project.client.image}
                alt={project.client.name}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-sm text-gray-600">{project.client.name}</span>
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">
                  {project.client.rating}
                </span>
              </div>
            </div>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsSaved(!isSaved)}
            className={`p-2 rounded-full ${
              isSaved ? 'text-[#4A90E2]' : 'text-gray-400'
            }`}
          >
            <Bookmark className="h-5 w-5" />
          </motion.button>
        </div>

        <p className="text-gray-600 mt-4 line-clamp-2">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-[#4A90E2]/10 text-[#4A90E2] rounded-full text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-6 mt-6">
          <div className="flex items-center gap-2 text-gray-600">
            <DollarSign className="h-5 w-5" />
            <span>{project.budget}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-600">
            <Calendar className="h-5 w-5" />
            <span>{project.deadline}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};