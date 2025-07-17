'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const useCases = [
  {
    id: 'cross-platform',
    title: 'Cross-Platform Workflows',
    content: 'Pull data from GitHub, create summaries in Notion, schedule reviews in Calendar, and notify teams in Slack automatically.',
  },
  {
    id: 'document',
    title: 'Document Automation',
    content: 'From Gmail inquiry to Word proposal to Trello task - complete client onboarding without manual work.',
  },

  {
    id: 'academic',
    title: 'Academic & Research Workflows',
    content: 'Search files and papers instantly, format citations automatically, and generate study materials from lectures.',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Management',
    content: 'Monitor Shopify orders, update inventory in Sheets, process payments, and send confirmations automatically.',
  },
  {
    id: 'social-media',
    title: 'Social Media Management',
    content: 'Schedule posts across platforms, monitor engagement metrics, respond to comments, and generate content reports automatically.',
  },
  {
    id: 'financial',
    title: 'Financial Workflows',
    content: 'Track expenses in Excel, categorize transactions, generate invoices, and send payment reminders through email automatically.',
  },
  {
    id: 'hr-recruitment',
    title: 'HR & Recruitment',
    content: 'Screen resumes, schedule interviews in Calendar, send follow-up emails, and update candidate status in your CRM.',
  },
  {
    id: 'marketing',
    title: 'Marketing Automation',
    content: 'Create email campaigns, segment customer lists, track conversion metrics, and generate performance reports.',
  },

  {
    id: 'customer-support',
    title: 'Customer Support',
    content: 'Route support tickets, update knowledge bases, send automated responses, and escalate urgent issues.',
  },
  {
    id: 'project-management',
    title: 'Project Management',
    content: 'Create project timelines, assign tasks to team members, track progress, and send status updates to stakeholders.',
  },
];

const UseCasesSection = () => {
  const [openAccordions, setOpenAccordions] = useState<Set<string>>(new Set());
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toggleAccordion = (id: string) => {
    setOpenAccordions(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <section className="section bg-background">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-title mb-4">Expandable Use Cases</h2>
        </motion.div>

        {/* Accordion Use Cases */}
        <div className="mb-12 sm:mb-16">
          <div className="space-y-3 sm:space-y-4 max-w-6xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white border border-neutral-200 rounded-lg shadow-soft overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(useCase.id)}
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors duration-200"
                >
                  <h4 className="text-base sm:text-lg font-bold text-title pr-3 sm:pr-4">{useCase.title}</h4>
                  <div className={`transform transition-transform duration-200 flex-shrink-0 ${openAccordions.has(useCase.id) ? 'rotate-180' : ''}`}>
                    <svg className="w-4 h-4 text-text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <motion.div
                  initial={false}
                  animate={{
                    height: openAccordions.has(useCase.id) ? 'auto' : 0,
                    opacity: openAccordions.has(useCase.id) ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 sm:px-5 pb-3 sm:pb-4 border-t border-neutral-100">
                    <p className="text-text-secondary pt-2 sm:pt-3 text-sm sm:text-base">{useCase.content}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Differentiator */}
        <div className="bg-brand text-white rounded-lg p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 max-w-6xl mx-auto">
          <div className="flex items-start w-full">
            <div className="mr-3 sm:mr-4 mt-1 flex-shrink-0">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="w-full">
              <p className="text-sm sm:text-base lg:text-lg text-white">
                Unlike API-based automation tools or browser-limited solutions, our computer use technology controls applications like a human would - clicking buttons, filling forms, and navigating interfaces. This computer automation approach works with ANY software, including legacy applications, custom tools, and enterprise systems without APIs. Combined with the market's easiest MCP server integration, our agentic AI framework delivers unmatched workflow automation capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection; 