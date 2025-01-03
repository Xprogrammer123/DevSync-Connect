import React from 'react';
import { HeroSection } from '../components/HomePage/HeroSection.tsx';
import { FeaturesSection } from '../components/features/FeaturesSection.tsx';
import { ProcessSection } from '../components/process/ProcessSection.tsx';
import { CTASection } from '../components/cta/CTASection.tsx';
import { PricingSection } from '../components/pricing/PricingSection.tsx';
import { TestimonialsSection } from '../components/testimonials/TestimonialsSection.tsx';
import { Footer } from '../components/footer/Footer.tsx';



export const Index = () => {
  return (
  <>
  <HeroSection/>
  <FeaturesSection/>
  <ProcessSection/>
  <PricingSection/>
  <TestimonialsSection/>
  <CTASection/>
  <Footer/>
  
  
  
  </>
   
  );
};

