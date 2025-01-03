import React from 'react';
import { useLocation } from 'react-router-dom';
import { ClientDashboard } from '../components/dashboard/client/ClientDashboard';
import { DeveloperDashboard } from '../components/dashboard/developer/DeveloperDashboard';

export const Dashboard = () => {
  const location = useLocation();
  const isDeveloper = location.pathname.includes('/developer');

  return isDeveloper ? <DeveloperDashboard /> : <ClientDashboard />;
};