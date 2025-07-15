"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const techFeatures = [
  {
    title: 'Agentic AI Framework',
    description: 'Our sophisticated Companion coordinates multiple AI models (GPT-4, Claude, Gemini) to break down complex tasks into actionable steps. Unlike simple chatbots, our artificial intelligence system can plan, execute, and adapt workflows autonomously.',
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
          <h3 className="text-2xl font-bold text-title mb-8 text-center">
            Companion Architecture: AI-Powered Computer Automation
          </h3>
          
          <div className="flex flex-col items-center mb-12">
            <div className="relative w-full max-w-4xl mx-auto">
              {/* Top Layer - User & AI Models */}
              <div className="flex justify-between items-center mb-8">
                <div className="bg-brand/10 rounded-lg p-4 w-48 text-center">
                  <div className="bg-brand/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-title text-sm">User</h4>
                </div>

                <div className="flex-grow mx-4 flex justify-center">
                  <div className="border-t-2 border-dashed border-brand/40 w-full relative">
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-white px-2 text-xs text-text-secondary">
                      Instructions
                    </div>
                  </div>
                </div>

                <div className="bg-brand/10 rounded-lg p-4 w-48 text-center">
                  <div className="bg-brand/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-title text-sm">AI Models</h4>
                  <p className="text-xs text-text-secondary mt-1">GPT-4, Claude, Gemini</p>
                </div>
              </div>

              {/* Middle Layer - Companion Core */}
              <div className="bg-brand/20 rounded-lg p-6 mb-8 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-brand text-white px-4 py-1 rounded-full text-sm font-bold">
                  Companion Core
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="bg-brand/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h5 className="font-bold text-title text-sm">Agentic Framework</h5>
                    <p className="text-xs text-text-secondary mt-1">Task planning & coordination</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="bg-brand/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                      </svg>
                    </div>
                    <h5 className="font-bold text-title text-sm">MCP Integration</h5>
                    <p className="text-xs text-text-secondary mt-1">External tool connectivity</p>
                  </div>
                  <div className="bg-white rounded-lg p-3 text-center shadow-sm">
                    <div className="bg-brand/10 rounded-full w-10 h-10 flex items-center justify-center mx-auto mb-2">
                      <svg className="w-5 h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h5 className="font-bold text-title text-sm">Token Optimizer</h5>
                    <p className="text-xs text-text-secondary mt-1">40% cost reduction</p>
                  </div>
                </div>
              </div>

              {/* Bottom Layer - OS & Applications */}
              <div className="flex justify-center items-center">
                <div className="bg-brand/10 rounded-lg p-4 w-full max-w-lg text-center">
                  <div className="bg-brand/20 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
                    <svg className="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="font-bold text-title text-sm">Native OS Control</h4>
                  <p className="text-xs text-text-secondary mt-1">Direct access to 2,700+ Windows applications</p>
                  
                  <div className="flex flex-wrap justify-center mt-4 gap-2">
                    <div className="bg-white rounded-md px-2 py-1 text-xs shadow-sm">Word</div>
                    <div className="bg-white rounded-md px-2 py-1 text-xs shadow-sm">Excel</div>
                    <div className="bg-white rounded-md px-2 py-1 text-xs shadow-sm">Chrome</div>
                    <div className="bg-white rounded-md px-2 py-1 text-xs shadow-sm">Slack</div>
                    <div className="bg-white rounded-md px-2 py-1 text-xs shadow-sm">Notion</div>
                    <div className="bg-white rounded-md px-2 py-1 text-xs shadow-sm">+2,695 more</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-neutral-100 rounded-lg">
            <h4 className="font-bold text-title mb-2">Why This Matters for Workflow Automation</h4>
            <p className="text-text-secondary">
              Unlike API-limited solutions, our computer automation technology works with legacy software, custom applications, 
              and any Windows program. This comprehensive computer use capability, combined with our agentic framework, 
              delivers true end-to-end workflow automation that adapts to your existing tools and processes.
            </p>
            
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white p-3 rounded-md shadow-sm">
                <div className="font-medium text-title mb-1 text-sm">Universal Compatibility</div>
                <p className="text-xs text-text-secondary">Works with any application, not just those with APIs</p>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <div className="font-medium text-title mb-1 text-sm">Intelligent Adaptation</div>
                <p className="text-xs text-text-secondary">Learns from your workflow patterns and preferences</p>
              </div>
              <div className="bg-white p-3 rounded-md shadow-sm">
                <div className="font-medium text-title mb-1 text-sm">Cost Efficiency</div>
                <p className="text-xs text-text-secondary">Optimized token usage saves 40% on AI API costs</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection; 