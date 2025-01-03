import React from 'react';
import { motion } from 'framer-motion';
import {
  LayoutDashboard,
  MessageSquare,
  Briefcase,
  CreditCard,
  UserCircle,
  Settings,
  Menu,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface SidebarProps {
  userType: 'developer' | 'client';
}

export const Sidebar = ({ userType }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  // Updated menu items based on userType and prefixed with the userType path
  const basePath = userType === 'developer' ? '/developer' : '/client';

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: `${basePath}/dashboard` },
    { icon: MessageSquare, label: 'Messages', path: `${basePath}/message` },
    {
      icon: Briefcase,
      label: userType === 'developer' ? 'Jobs' : 'Projects',
      path: userType === 'developer' ? `${basePath}/jobs` : `${basePath}/projects`,
    },
    { icon: CreditCard, label: 'Payments', path: `${basePath}/payments` },
    { icon: UserCircle, label: 'Profile', path: `${basePath}/profile` },
    { icon: Settings, label: 'Settings', path: `${basePath}/settings` },
  ];

  return (
    <motion.div
      initial={false}
      animate={{ width: isCollapsed ? '4rem' : '16rem' }}
      className="h-screen bg-white border-r border-gray-200 flex flex-col"
    >
      <div className="p-4 flex items-center justify-between">
        {!isCollapsed && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl font-bold text-gray-900"
          >
            DevConnect
          </motion.span>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu className="h-5 w-5 text-gray-600" />
        </button>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map(({ icon: Icon, label, path }) => (
          <Link
            key={path}
            to={path}
            className="flex items-center gap-3 p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <Icon className="h-5 w-5" />
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {label}
              </motion.span>
            )}
          </Link>
        ))}
      </nav>
    </motion.div>
  );
};
