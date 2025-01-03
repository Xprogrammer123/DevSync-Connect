import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ClientDashboard } from '../components/dashboard/client/ClientDashboard';
import { PostProject } from './pages/PostProject';
import { Messages } from '../pages/Messages';

import { Profile } from '../pages/Profile';


export const ClientRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<ClientDashboard />} />
      <Route path="projects" element={<Projects />} />
      <Route path="message" element={<Messages />} />
      
      <Route path="profile" element={<Profile />} />
      
    </Routes>
  );
};
