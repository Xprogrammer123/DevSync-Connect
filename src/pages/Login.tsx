import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock } from 'lucide-react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { SocialAuth } from '../components/auth/SocialAuth';
import { AuthDivider } from '../components/auth/AuthDivider';
import { fadeIn } from '../components/animations/variants';
import { Footer } from '../components/footer/Footer.tsx';
import { Navigation } from '../components/HomePage/Navigation.tsx';

export const Login = () => {
  return (
    <>
    <Navigation/>

    <AuthLayout
      title="Welcome Back"
      subtitle="Log in to continue to DevConnect"
    >
      <motion.form
        variants={fadeIn}
        className="space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
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
              placeholder="Enter your password"
            />
            <Lock className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="checkbox"
              id="remember"
              className="h-4 w-4 text-[#4A90E2] focus:ring-[#4A90E2] border-gray-300 rounded"
            />
            <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <a href="#" className="text-sm font-medium text-[#4A90E2] hover:text-[#4A90E2]/80">
            Forgot password?
          </a>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#4A90E2] text-white py-2 rounded-lg font-medium hover:bg-[#4A90E2]/90 transition-colors"
        >
          Log In
        </motion.button>
      </motion.form>

      <AuthDivider />
      <SocialAuth />

      <p className="mt-6 text-center text-sm text-gray-600">
        Don't have an account?{' '}
        <a href="/signup" className="font-medium text-[#4A90E2] hover:text-[#4A90E2]/80">
          Sign up
        </a>
      </p>
    </AuthLayout>

    <Footer/>
    </>
  );
};