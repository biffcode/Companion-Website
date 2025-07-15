"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const techFeatures = [
  {
    title: 'Agentic AI Framework',
    description: 'Our sophisticated agentic framework coordinates multiple AI models (GPT-4, Claude, Gemini) to break down complex tasks into actionable steps. Unlike simple chatbots, our artificial intelligence system can plan, execute, and adapt workflows autonomously.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Native Computer Use Technology',
    description: 'Direct Windows OS integration enables true computer automation through native API calls, screen analysis, and input simulation. Our computer use technology goes beyond browser automation to control any Windows application through clicking, typing, and navigation.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'MCP Server Integration',
    description: 'Industry-leading Model Context Protocol (MCP) server integration allows seamless connection to external tools and databases. Our implementation offers the easiest MCP setup on the market, enabling powerful tool use capabilities with just a few clicks.',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
  },
  {
    title: 'Token Optimization Engine',
    description: 'Advanced workflow automation includes intelligent token optimization that reduces AI API costs by 40%. Our system manages context efficiently, minimizes redundant requests, and optimizes prompt engineering for maximum cost-effectiveness.',
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
          <h2 className="text-title mb-4">How Companion's Technology Works</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Built on cutting-edge artificial intelligence and computer automation technology, Companion represents the next evolution in agentic AI frameworks
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
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
          <h3 className="text-2xl font-bold text-title mb-6 text-center">
            Companion Architecture: AI-Powered Computer Automation
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="text-center">
              <div className="bg-brand/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-bold text-title mb-2">Multi-AI Coordination</h4>
              <p className="text-sm text-text-secondary">Agentic framework orchestrates GPT-4, Claude, and Gemini for optimal task execution</p>
            </div>
            
            <div className="flex justify-center">
              <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
            
            <div className="text-center">
              <div className="bg-brand/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="font-bold text-title mb-2">Native OS Control</h4>
              <p className="text-sm text-text-secondary">Direct computer use through Windows APIs enables control of 2,700+ applications</p>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-neutral-100 rounded-lg">
            <h4 className="font-bold text-title mb-2">Why This Matters for Workflow Automation</h4>
            <p className="text-text-secondary">
              Unlike API-limited solutions, our computer automation technology works with legacy software, custom applications, 
              and any Windows program. This comprehensive computer use capability, combined with our agentic AI framework, 
              delivers true end-to-end workflow automation that adapts to your existing tools and processes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection; 