"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const CtaSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="download" className="section bg-neutral-100 text-text-primary">
      <div className="container max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-title mb-4">Ready to Get Your Time Back?</h2>
          <p className="text-xl text-text-secondary max-w-2xl mx-auto mb-12">
            Join thousands who've automated their computer work
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Link 
              href="/download" 
              className="btn-primary px-8 py-4 text-lg font-bold"
            >
              Download Free Trial
            </Link>
            
            <Link 
              href="#demo" 
              className="btn-secondary px-8 py-4 text-lg"
            >
              Watch Demo
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-text-secondary">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Try for $5 only</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Setup in under 5 minutes</span>
            </div>
            
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection; 