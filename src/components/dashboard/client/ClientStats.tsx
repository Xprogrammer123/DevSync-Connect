import React from 'react';
import { Briefcase, DollarSign, Star, CheckCircle } from 'lucide-react';
import { StatsCard } from '../shared/StatsCard';

interface ClientStatsProps {
  activeProjects: number;
  completedProjects: number;
  totalSpent: string;
  rating: string;
  projectsTrend?: {
    value: number;
    isPositive: boolean;
  };
}

export const ClientStats = ({
  activeProjects,
  completedProjects,
  totalSpent,
  rating,
  projectsTrend
}: ClientStatsProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <StatsCard
        icon={Briefcase}
        label="Active Projects"
        value={activeProjects}
      />
      <StatsCard
        icon={CheckCircle}
        label="Completed Projects"
        value={completedProjects}
        trend={projectsTrend}
      />
      <StatsCard
        icon={DollarSign}
        label="Total Spent"
        value={totalSpent}
      />
      <StatsCard
        icon={Star}
        label="Developer Rating"
        value={rating}
      />
    </div>
  );
};