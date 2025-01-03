import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Mail, Globe, Users } from 'lucide-react';
import { fadeIn } from '../../animations/variants';

export const ClientOverview = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">About Company</h3>
        <p className="text-gray-600 leading-relaxed">
          TechCorp is a leading software company specializing in innovative solutions 
          for enterprise clients. We're constantly looking for talented developers to 
          join our projects and help us deliver exceptional results to our clients.
        </p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Company Details</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-gray-600">
            <Building2 className="h-5 w-5 text-[#4A90E2]" />
            <div>
              <p className="font-medium">Company Size</p>
              <p>50-100 employees</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-gray-600">
            <Users className="h-5 w-5 text-[#4A90E2]" />
            <div>
              <p className="font-medium">Industry</p>
              <p>Software Development & Technology</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
        <div className="space-y-3">
          {[
            { icon: Mail, label: 'alex.johnson@techcorp.com', href: 'mailto:alex.johnson@techcorp.com' },
            { icon: Globe, label: 'techcorp.com', href: 'https://techcorp.com' },
          ].map(({ icon: Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-gray-600 hover:text-[#4A90E2] transition-colors"
              whileHover={{ x: 4 }}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};