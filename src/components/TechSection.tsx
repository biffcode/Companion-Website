"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const techFeatures = [
  {
    title: 'Agentic AI Framework',
    description: 'Coordinates multiple AI models to break down complex tasks into actionable steps and execute workflows autonomously.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Computer Use Technology',
    description: 'Direct Windows integration enables true automation through screen analysis and input simulation for any application.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'MCP Integration',
    description: 'Easy Model Context Protocol setup for seamless connection to external tools and databases.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Token Optimization',
    description: 'Intelligent optimization reduces AI API costs by 40% through efficient context management.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const TechSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="tech" className="section bg-neutral-50">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-title mb-4">The Technology Behind Companion</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Advanced AI that actually controls your computer to automate any workflow
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 bg-brand/10 rounded-lg text-brand mr-4 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-title mb-2">{feature.title}</h3>
                  <p className="text-text-secondary">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-medium p-8"
        >
          <h3 className="text-2xl font-bold text-title mb-12 text-center">
            How It Works
          </h3>
          
          <div className="flex flex-col items-center space-y-10">
            {/* Simplified 3-step flow */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 w-full max-w-4xl">
              
              {/* Step 1 */}
              <div className="bg-brand/10 rounded-xl p-4 sm:p-6 text-center flex-1 w-full md:min-w-0">
                <div className="bg-brand/20 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h4 className="font-bold text-title text-base sm:text-lg mb-2">You Ask</h4>
                <p className="text-text-secondary text-sm sm:text-base">Give Companion a task in plain English</p>
              </div>

              {/* Arrow - horizontal for desktop, vertical for mobile */}
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-brand md:hidden rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <svg className="w-6 h-6 text-brand hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Step 2 */}
              <div className="bg-brand/20 rounded-xl p-4 sm:p-6 text-center flex-1 w-full md:min-w-0">
                <div className="bg-brand rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="font-bold text-title text-base sm:text-lg mb-2">AI Plans</h4>
                <p className="text-text-secondary text-sm sm:text-base">Companion breaks down the task and creates a plan</p>
              </div>

              {/* Arrow - horizontal for desktop, vertical for mobile */}
              <div className="flex justify-center">
                <svg className="w-6 h-6 text-brand md:hidden rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <svg className="w-6 h-6 text-brand hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Step 3 */}
              <div className="bg-brand/10 rounded-xl p-4 sm:p-6 text-center flex-1 w-full md:min-w-0">
                <div className="bg-brand/20 rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="font-bold text-title text-base sm:text-lg mb-2">It Executes</h4>
                <p className="text-text-secondary text-sm sm:text-base">Companion controls your apps to complete the task</p>
              </div>
            </div>

            {/* Supported Apps */}
            <div className="text-center">
              <p className="text-text-secondary mb-4">Works with 2,700+ applications</p>
              <div className="flex flex-wrap justify-center gap-3">
                <div className="bg-white rounded-lg px-4 py-2 text-sm shadow-sm">Word</div>
                <div className="bg-white rounded-lg px-4 py-2 text-sm shadow-sm">Excel</div>
                <div className="bg-white rounded-lg px-4 py-2 text-sm shadow-sm">Chrome</div>
                <div className="bg-white rounded-lg px-4 py-2 text-sm shadow-sm">Slack</div>
                <div className="bg-white rounded-lg px-4 py-2 text-sm shadow-sm">Gmail</div>
                <div className="bg-white rounded-lg px-4 py-2 text-sm shadow-sm font-medium text-brand">+2,700 more</div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
};

export default TechSection; 