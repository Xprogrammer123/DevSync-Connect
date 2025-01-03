import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Lock, UserCircle } from 'lucide-react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { SocialAuth } from '../components/auth/SocialAuth';
import { AuthDivider } from '../components/auth/AuthDivider';
import { fadeIn } from '../components/animations/variants';
import { Footer } from '../components/footer/Footer.tsx';
import { Navigation } from '../components/HomePage/Navigation.tsx';

export const Signup = () => {
  return (
  <>
  <Navigation/>
    <AuthLayout
      title="Create an Account"
      subtitle="Join the largest developer-client network"
    >
      <motion.form
        variants={fadeIn}
        className="space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <div className="mt-1 relative">
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-[#4A90E2] focus:border-[#4A90E2]"
              placeholder="Enter your full name"
            />
            <User className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="mt-1 relative">
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-[#4A90E2] focus:border-[#4A90E2]"
              placeholder="Enter your email"
            />
            <Mail className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <div className="mt-1 relative">
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-[#4A90E2] focus:border-[#4A90E2]"
              placeholder="Create a password"
            />
            <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            I am a
          </label>
          <div className="mt-2 grid grid-cols-2 gap-4">
            {['Client', 'Developer'].map((role) => (
              <motion.label
                key={role}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative flex cursor-pointer rounded-lg border bg-white p-4 focus:outline-none"
              >
                <input
                  type="radio"
                  name="role"
                  value={role.toLowerCase()}
                  className="sr-only"
                  defaultChecked={role === 'Client'}
                />
                <span className="flex items-center gap-2">
                  <UserCircle className="h-5 w-5 text-[#4A90E2]" />
                  {role}
                </span>
                <span className="pointer-events-none absolute -inset-px rounded-lg border-2 border-transparent peer-checked:border-[#4A90E2]" />
              </motion.label>
            ))}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#4A90E2] text-white py-2 rounded-lg font-medium hover:bg-[#4A90E2]/90 transition-colors"
        >
          Create Account
        </motion.button>
      </motion.form>

      <AuthDivider />
      <SocialAuth />

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{' '}
        <a href="/login" className="font-medium text-[#4A90E2] hover:text-[#4A90E2]/80">
          Log in
        </a>
      </p>
    </AuthLayout>
    <Footer/>
    </>
  );
};