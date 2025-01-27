import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stars } from '@react-three/drei';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-black text-white">
      <Canvas className="absolute inset-0">
        <Stars />
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
      <motion.div
        className="relative z-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-bold mb-4">Welcome to Our Platform</h1>
        <p className="text-xl">Explore the future of content management</p>
        <motion.button
          className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Get Started
        </motion.button>
      </motion.div>
    </div>
  );
};

export default HeroSection;
