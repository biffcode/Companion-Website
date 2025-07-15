'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const CtaSocialProof = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-neutral-50 py-16">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-title mb-4">
            Join 10,000+ Professionals Already Using Companion
          </h2>
          <p className="text-xl text-text-secondary mb-12">
            See what others are building with Companion's automation
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-brand mb-2">⭐⭐⭐⭐⭐</div>
              <div className="text-2xl font-bold text-title mb-1">4.8/5</div>
              <div className="text-text-secondary">Average Rating</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-brand mb-2">🚀</div>
              <div className="text-2xl font-bold text-title mb-1">50,000+</div>
              <div className="text-text-secondary">Tasks Automated Daily</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-soft">
              <div className="text-3xl font-bold text-brand mb-2">⏰</div>
              <div className="text-2xl font-bold text-title mb-1">2M+</div>
              <div className="text-text-secondary">Hours Saved This Year</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-medium mb-8 max-w-3xl mx-auto">
            <div className="text-lg text-text-secondary mb-4 italic">
              "Companion has transformed how I work. What used to take me 3 hours now happens automatically while I focus on strategy. It's like having a super-powered assistant."
            </div>
            <div className="font-semibold text-title">- Sarah Chen, Marketing Director</div>
          </div>
          
          <Link 
            href="/download" 
            className="btn-primary text-lg px-10 py-4"
          >
            Get Started Free
          </Link>
          
          <div className="mt-6 text-sm text-text-secondary">
            Join the automation revolution - no credit card required
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSocialProof; 