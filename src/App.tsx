import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Sidebar } from './components/dashboard/Sidebar';
import { DeveloperRoutes } from './routes/DeveloperRoute';
import { ClientRoutes } from './routes/ClientRoute';
import { Dashboard } from './pages/Dashboard';

const ProtectedRoute = ({ children, userType, requiredRole }: { children: React.ReactNode; userType: 'developer' | 'client'; requiredRole: 'developer' | 'client'; }) => {
  if (userType !== requiredRole) {
    return <Navigate to="/" />;
  }
  return <>{children}</>;
};

function App() {
  const userType: 'developer' | 'client' = 'developer'; // Replace with actual user type logic

  return (
    <Router>
      <div className="flex">
        <Sidebar userType={userType} />
        <div className="flex-1">
          <Routes>
            {/* Developer Routes */}
            <Route
              path="/developer/*"
              element={
                <ProtectedRoute userType={userType} requiredRole="developer">
                  <DeveloperRoutes />
                </ProtectedRoute>
              }
            />

            {/* Client Routes */}
            <Route
              path="/client/*"
              element={
                <ProtectedRoute userType={userType} requiredRole="client">
                  <ClientRoutes />
                </ProtectedRoute>
              }
            />

            {/* Common Dashboard */}
            <Route
              path="/dashboard"
              element={<Dashboard />}
            />

            {/* Redirect to Dashboard */}
            <Route path="/" element={<Navigate to="/dashboard" />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
