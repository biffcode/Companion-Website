"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

const HeroSection = () => {
  const firstPart = 'Meet Companion:';
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("Video autoplay failed:", error);
      });
    }
  }, []);

  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-28 bg-neutral-50">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col space-y-6 lg:col-span-5"
          >
            <h1 className="text-title">
              <span className="inline-block">{firstPart}</span><br />
              <span className="text-brand inline-block">Your Personal</span><br />
              <span className="text-brand inline-block">AI Assistant</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-text-secondary">
            Companion can actually use your computer — clicking, typing, and navigating any app, just like a human.
            </p>
            
            <ul className="space-y-4">
              {[
                'Works like a real assistant — right on your computer',
                'Fits into your existing workflow — no changes needed',
                'Set up in minutes, not days',
                'Reclaim 10+ hours a week from repetitive work'
              ].map((point, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-brand mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-text-secondary text-lg md:text-xl font-medium">{point}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#demo" className="btn-primary">
                Watch Companion Work
              </Link>
              <Link href="/download" className="btn-secondary">
                Get Companion Now
              </Link>
            </div>
          </motion.div>
          
          {/* Right Content - Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative rounded-lg shadow-medium overflow-hidden lg:col-span-7"
          >
            <video 
              ref={videoRef}
              className="w-full h-auto rounded-lg"
              loop
              muted
              playsInline
              autoPlay
            >
              <source src="/videos/Hero_Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 