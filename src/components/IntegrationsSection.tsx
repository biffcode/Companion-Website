'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const useCases = [
  {
    id: 'cross-platform',
    title: 'Cross-Platform Workflows',
    content: 'Watch Companion pull data from GitHub, create a summary in Notion, schedule a review in Calendar, and notify the team in Slack - all in one automated sequence.',
  },
  {
    id: 'document',
    title: 'Document Automation',
    content: 'From Gmail inquiry to Word proposal to Trello task to Calendar follow-up - completely automated client onboarding.',
  },
  {
    id: 'mcp',
    title: 'Seamless MCP Integration',
    content: 'Set up and configure MCP servers in just a few clicks. Our solution offers the easiest MCP integration on the market with no complex configuration required.',
  },
  {
    id: 'academic',
    title: 'Academic & Research Workflows',
    content: 'Companion empowers students and professors to streamline their workflows. Accelerate research by instantly searching local files and academic papers, automate tedious tasks like formatting citations, and enhance learning by generating quizzes or summaries from lecture materials.',
  },
  {
    id: 'ecommerce',
    title: 'E-commerce Management',
    content: 'Monitor Shopify orders, update inventory in Sheets, process payments, and send confirmation emails through Gmail.',
  },
];

const IntegrationsSection = () => {
  const [activeUseCase, setActiveUseCase] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="integrations" className="section bg-neutral-50">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-title mb-4">Universal Computer Automation Across 2,700+ Applications</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Our computer use technology works with any Windows application through direct control - not just API-limited tools. From legacy software to modern cloud applications, our agentic framework delivers comprehensive workflow automation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-neutral-100 rounded-lg p-4 flex items-center"
              >
                <div className="w-10 h-10 flex-shrink-0 mr-3">
                  <Image 
                    src={tool.logo} 
                    alt={`${tool.name} logo`} 
                    width={40} 
                    height={40}
                    className="object-contain"
                  />
                </div>
                <p className="text-text-primary font-medium text-sm md:text-base truncate">{tool.name}</p>
              </motion.div>
            ))}
            
            {/* Integration count box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: tools.length * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-brand/10 rounded-lg p-4 flex items-center justify-center col-span-2"
                  >
                    <div className="text-center">
                <p className="text-brand font-bold text-lg">2,700+ Controllable applications</p>
                      </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Use Cases */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-title mb-8 text-center">
            Expandable Use Cases
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-medium overflow-hidden h-full"
              >
                <button
                  onClick={() => setActiveUseCase(activeUseCase === useCase.id ? null : useCase.id)}
                  className="w-full p-6 text-left"
                >
                  <div className="flex justify-between items-center">
                    <h4 className="text-lg font-bold text-title">{useCase.title}</h4>
                    <svg
                      className={`w-5 h-5 text-text-secondary transition-transform ${
                        activeUseCase === useCase.id ? 'transform rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </button>
                {activeUseCase === useCase.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6"
                  >
                    <p className="text-text-secondary">{useCase.content}</p>
                  </motion.div>
                )}
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

const tools = [
  { name: 'Chrome', logo: '/images/logos/chrome.png' },
  { name: 'Discord', logo: '/images/logos/discord.jpg' },
  { name: 'Slack', logo: '/images/logos/slack.png' },
  { name: 'Word', logo: '/images/logos/word.png' },
  { name: 'Teams', logo: '/images/logos/teams.webp' },
  { name: 'Notion', logo: '/images/logos/notion.png' },
  { name: 'Trello', logo: '/images/logos/trello.png' },
  { name: 'Calendar', logo: '/images/logos/calendar.png' },
  { name: 'Drive', logo: '/images/logos/Drive.png' },
  { name: 'Calendly', logo: '/images/logos/Calendly.png' },
  { name: 'GitHub', logo: '/images/logos/Github.png' },
  { name: 'Gmail', logo: '/images/logos/Gmail.png' },
  { name: 'Forms', logo: '/images/logos/Forms.png' },
  { name: 'Sheets', logo: '/images/logos/Sheets.png' },
  { name: 'Spotify', logo: '/images/logos/Sportify.png' },
  { name: 'YouTube', logo: '/images/logos/Youtube.png' },
  { name: 'Odoo', logo: '/images/logos/odoo.png' },
  { name: 'Shopify', logo: '/images/logos/SHopify.png' },
  { name: 'Telegram', logo: '/images/logos/Telegram.png' }
];

export default IntegrationsSection; 