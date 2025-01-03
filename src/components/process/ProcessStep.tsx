import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ProcessStepProps {
  icon: LucideIcon;
  title: string;
  description: string;
  imageUrl: string;
  reversed?: boolean;
}

export const ProcessStep = ({ icon: Icon, title, description, imageUrl, reversed = false }: ProcessStepProps) => {
  return (
    <div className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 py-12`}>
      <div className="flex-1 space-y-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#4A90E2]/10 rounded-lg">
            <Icon className="h-6 w-6 text-[#4A90E2]" />
          </div>
          <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
        </div>
        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
      </div>
      <div className="flex-1">
        <img
          src={imageUrl}
          alt={title}
          className="rounded-lg shadow-xl w-full object-cover"
        />
      </div>
    </div>
  );
};