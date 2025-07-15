'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiDollarSign, FiClock } from 'react-icons/fi';

const ROICalculator = () => {
  const [hoursSaved, setHoursSaved] = useState(5);
  const [hourlyRate, setHourlyRate] = useState(25);
  const [monthlySavings, setMonthlySavings] = useState(500); // Initialize with corrected value
  const [daysPerYear, setDaysPerYear] = useState(10); // Initialize with calculated value

  useEffect(() => {
    // Calculate monthly savings (exactly 4 weeks per month)
    const monthly = hoursSaved * hourlyRate * 4;
    setMonthlySavings(monthly);
    
    // Calculate days per year (hours saved per week × 4 weeks × 12 months) / 24 hours per day
    const days = (hoursSaved * 4 * 12) / 24;
    setDaysPerYear(days);
  }, [hoursSaved, hourlyRate]);

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-secondary-500">Calculate your time value</h2>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-apple-lg shadow-apple p-8 md:p-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Sliders */}
              <div className="space-y-10">
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label htmlFor="hours-saved" className="text-lg font-medium text-secondary-500 flex items-center">
                      <FiClock className="mr-2 text-primary-500" />
                      Hours saved per week
                    </label>
                    <span className="text-xl font-semibold text-primary-500">{hoursSaved}</span>
                  </div>
                  <input
                    type="range"
                    id="hours-saved"
                    min="5"
                    max="40"
                    step="1"
                    value={hoursSaved}
                    onChange={(e) => setHoursSaved(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-sm text-secondary-400 mt-2">
                    <span>5 hours</span>
                    <span>40 hours</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label htmlFor="hourly-rate" className="text-lg font-medium text-secondary-500 flex items-center">
                      <FiDollarSign className="mr-2 text-primary-500" />
                      Your hourly rate
                    </label>
                    <span className="text-xl font-semibold text-primary-500">${hourlyRate}</span>
                  </div>
                  <input
                    type="range"
                    id="hourly-rate"
                    min="25"
                    max="500"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary-500"
                  />
                  <div className="flex justify-between text-sm text-secondary-400 mt-2">
                    <span>$25</span>
                    <span>$500</span>
                  </div>
                </div>
              </div>
              
              {/* Results */}
              <div className="bg-gray-50 rounded-apple p-8 flex flex-col justify-center">
                <motion.div
                  key={monthlySavings}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="mb-6"
                >
                  <div className="text-lg text-secondary-400 mb-1">You save</div>
                  <div className="text-4xl font-bold text-primary-500">
                    ${monthlySavings.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                    <span className="text-xl font-normal text-secondary-400 ml-2">per month</span>
                  </div>
                </motion.div>
                
                <motion.div
                  key={daysPerYear}
                  initial={{ opacity: 1, scale: 1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="text-lg text-secondary-400 mb-1">That's</div>
                  <div className="text-4xl font-bold text-primary-500">
                    {daysPerYear.toLocaleString('en-US', { maximumFractionDigits: 1 })}
                  </div>
                  <div className="text-xl font-normal text-secondary-400 mt-1">days of your life back per year</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator; 