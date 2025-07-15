'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const CtaSectionEarly = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-gradient-to-r from-brand/10 to-brand/5">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-title mb-4">
            Ready to Let Your Computer Work for You?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Join thousands of professionals who are already saving 15+ hours per week with Companion
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/download" 
              className="btn-primary text-lg px-8 py-4"
            >
              Try Free - No Setup Required
            </Link>
            <Link 
              href="#demo" 
              className="btn-secondary text-lg px-8 py-4"
            >
              Watch It Work
            </Link>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center items-center text-sm text-text-secondary">
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free credits included
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Works with 2,700+ apps
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Setup in minutes
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSectionEarly; 