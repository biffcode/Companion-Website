"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiDollarSign, FiClock } from 'react-icons/fi';

const benefits = [
  '10-20 hours saved weekly on average',
  '40% reduction in context switching',
  'Replace 10+ paid AI subscriptions',
  '60% faster document processing',
  '80% fewer manual errors',
];

const TimeValueSection = () => {
  const [hoursSaved, setHoursSaved] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [monthlySavings, setMonthlySavings] = useState(500);
  const [daysPerYear, setDaysPerYear] = useState(10);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    // Calculate monthly savings (exactly 4 weeks per month)
    const monthly = hoursSaved * hourlyRate * 4;
    setMonthlySavings(monthly);
    
    // Calculate days per year (hours saved per week × 4 weeks × 12 months) / 24 hours per day
    const days = (hoursSaved * 4 * 12) / 24;
    setDaysPerYear(days);
  }, [hoursSaved, hourlyRate]);

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
          <h2 className="text-title mb-4">Get Your Time Back!</h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
            Companion does boring computer work for you, so you can do the fun stuff instead
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* ROI Calculator */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card"
          >
            <h3 className="text-xl font-bold text-title mb-6">Calculate Your Savings</h3>
            
            <div className="space-y-10">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="hours-saved" className="text-lg font-medium text-text-secondary flex items-center">
                    <FiClock className="mr-2 text-brand" />
                    Hours saved per week
                  </label>
                  <span className="text-xl font-semibold text-brand">{hoursSaved}</span>
                </div>
                <input
                  type="range"
                  id="hours-saved"
                  min="5"
                  max="40"
                  step="1"
                  value={hoursSaved}
                  onChange={(e) => setHoursSaved(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-brand"
                />
                <div className="flex justify-between text-sm text-text-secondary mt-2">
                  <span>5 hours</span>
                  <span>40 hours</span>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="hourly-rate" className="text-lg font-medium text-text-secondary flex items-center">
                    <FiDollarSign className="mr-2 text-brand" />
                    Your hourly rate
                  </label>
                  <span className="text-xl font-semibold text-brand">${hourlyRate}</span>
                </div>
                <input
                  type="range"
                  id="hourly-rate"
                  min="10"
                  max="500"
                  step="1"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-neutral-200 rounded-lg appearance-none cursor-pointer accent-brand"
                />
                <div className="flex justify-between text-sm text-text-secondary mt-2">
                  <span>$10</span>
                  <span>$500</span>
                </div>
              </div>
            </div>
            
            <div className="bg-neutral-100 p-6 rounded-lg mt-8">
              <motion.div
                key={monthlySavings}
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="mb-6"
              >
                <div className="text-lg text-text-secondary mb-1">You save</div>
                <div className="text-4xl font-bold text-brand">
                  ${monthlySavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                  <span className="text-xl font-normal text-text-secondary ml-2">per month</span>
                </div>
              </motion.div>
              
              <motion.div
                key={daysPerYear}
                initial={{ opacity: 1, scale: 1 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="text-lg text-text-secondary mb-1">That's</div>
                <div className="text-4xl font-bold text-brand">
                  {daysPerYear.toLocaleString('en-US', { maximumFractionDigits: 1 })}
                </div>
                <div className="text-xl font-normal text-text-secondary mt-1">days of your life back per year</div>
              </motion.div>
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
                  <div className="text-lg font-medium text-text-primary">Whether you earn $10 or $500 an hour, you'll see real return on time saved — faster than you'd expect.</div>
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