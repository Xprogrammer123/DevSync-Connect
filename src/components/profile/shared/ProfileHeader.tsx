import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Edit2 } from 'lucide-react';

interface ProfileHeaderProps {
  name: string;
  title: string;
  location: string;
  avatar: string;
  onEditClick: () => void;
}

export const ProfileHeader = ({ name, title, location, avatar, onEditClick }: ProfileHeaderProps) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Profile</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onEditClick}
          className="flex items-center gap-2 px-4 py-2 bg-[#4A90E2] text-white rounded-lg"
        >
          <Edit2 className="h-4 w-4" />
          Edit Profile
        </motion.button>
      </div>
      
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="relative">
          <img
            src={avatar}
            alt={name}
            className="w-32 h-32 rounded-full object-cover"
          />
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-lg"
          >
            <Camera className="h-5 w-5 text-gray-600" />
          </motion.button>
        </div>
        
        <div className="text-center md:text-left">
          <h3 className="text-2xl font-bold text-gray-900">{name}</h3>
          <p className="text-lg text-gray-600 mt-1">{title}</p>
          <p className="text-sm text-gray-500 mt-2">{location}</p>
        </div>
      </div>
    </div>
  );
};