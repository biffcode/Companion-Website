"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const benefits = [
  '10-20 hours saved weekly on average',
  '40% reduction in context switching',
  'Replace 10+ paid AI subscriptions',
  '60% faster document processing',
  '80% fewer manual errors',
];

const TimeValueSection = () => {
  const [hoursPerWeek, setHoursPerWeek] = useState(15);
  const [hourlyRate, setHourlyRate] = useState(50);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Calculate annual savings
  const annualSavings = hoursPerWeek * hourlyRate * 52;
  const formattedSavings = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(annualSavings);

  return (
    <section className="section bg-background">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-title mb-4">Reclaim Your Most Valuable Asset Through Computer Automation!</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Stop doing what computers should do for you - let our agentic AI framework handle workflow automation while you focus on what matters most
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card"
          >
            <h3 className="text-xl font-bold text-title mb-6">Calculate Your Savings</h3>
            
            <div className="mb-6">
              <label className="block text-text-secondary mb-2">
                Hours spent on repetitive tasks weekly
              </label>
              <div className="flex items-center">
                <input
                  type="range"
                  min="5"
                  max="40"
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-brand"
                />
                <span className="ml-4 w-12 text-text-primary font-medium">{hoursPerWeek}</span>
              </div>
            </div>
            
            <div className="mb-8">
              <label className="block text-text-secondary mb-2">
                Your hourly value ($)
              </label>
              <input
                type="number"
                min="10"
                max="500"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                className="w-full px-4 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand"
              />
            </div>
            
            <div className="bg-neutral-100 p-6 rounded-lg">
              <div className="text-center">
                <div className="text-sm text-text-secondary mb-1">Annual savings with Companion</div>
                <div className="text-4xl font-bold text-brand">{formattedSavings}</div>
              </div>
            </div>
          </motion.div>
          
          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-title mb-6">Proven Benefits</h3>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-brand/10 p-2 rounded-full mr-4 flex-shrink-0">
                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-lg text-text-primary">{benefit}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-10 bg-neutral-100 p-6 rounded-lg">
              <div className="flex flex-col space-y-4">
                <div>
                  <div className="text-sm text-text-secondary">Success Metric</div>
                  <div className="text-lg font-medium text-text-primary">Our users save an average of 15 hours per week</div>
                </div>
                <div>
                  <div className="text-sm text-text-secondary">Return on Investment</div>
                  <div className="text-lg font-medium text-text-primary">ROI achieved within first month for 89% of users</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TimeValueSection; 