'use client';

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
    id: 'mcp',
    title: 'Seamless MCP Integration',
    content: 'Set up MCP servers in minutes with our simple interface. No technical configuration needed.',
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
];

const UseCasesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

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

        {/* Use Cases */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-medium p-6 h-full"
              >
                <h4 className="text-lg font-bold text-title mb-4">{useCase.title}</h4>
                <p className="text-text-secondary">{useCase.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Key Differentiator */}
        <div className="bg-brand text-white rounded-lg p-8 mb-12 w-full">
          <div className="flex items-start w-full">
            <div className="mr-4 mt-1 flex-shrink-0">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <div className="w-full">
              <p className="text-lg text-white">
                Unlike API-based automation tools (Zapier, Make) or browser-limited solutions, our computer use technology controls applications like a human would - clicking buttons, filling forms, and navigating interfaces. This computer automation approach works with ANY software, including legacy applications, custom tools, and enterprise systems without APIs. Combined with the market's easiest MCP server integration, our agentic AI framework delivers unmatched workflow automation capabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection; 