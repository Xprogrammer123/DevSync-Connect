import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { DeveloperDashboard } from '../components/dashboard/developer/DeveloperDashboard';

import { Messages } from '../pages/Messages';

import { Profile } from '../pages/Profile';


export const DeveloperRoutes = () => {
  return (
    <Routes>
      <Route path="dashboard" element={<DeveloperDashboard />} />
  
      <Route path="message" element={<Messages />} />
    
      <Route path="profile" element={<Profile />} />

    </Routes>
  );
};
