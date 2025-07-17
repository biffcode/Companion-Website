'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const CtaMomentum = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-brand/5 py-12">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-title mb-4">
            Ready to Automate<br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>Your First Task?
          </h3>
          <p className="text-lg text-text-secondary mb-6">
            Join thousands already saving<br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>15+ hours per week
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
            <Link 
              href="/download" 
              className="btn-primary px-6 py-3"
            >
              Try Free Preview
            </Link>
            <Link 
              href="#pricing" 
              className="btn-secondary px-6 py-3"
            >
              See Pricing
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm text-text-secondary">
            <span>⚡ Setup in 2 minutes</span>
            <span>🔒 No credit card required</span>
            <span>🎯 Works with your existing apps</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaMomentum; 