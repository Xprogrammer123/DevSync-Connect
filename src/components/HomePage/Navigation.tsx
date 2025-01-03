import React from 'react';
import { Code2 } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Navigation = () => {
  return (
    <nav className="absolute top-0 w-full backdrop-blur-sm bg-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Code2 className="h-8 w-8 text-white" />
            <span className="ml-2 text-white font-semibold text-xl">DevConnect</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-white hover:text-white/80 transition-colors">Home</a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">How It Works</a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">Pricing</a>
              <a href="#" className="text-white hover:text-white/80 transition-colors">Contact</a>
              <Link to="/signup">
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-lg transition-colors">
                Login
              </button>
                </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};