'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';



const IntegrationsSection = () => {
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
          <h2 className="text-title mb-4">Works With All Your Favorite Apps</h2>
          <p className="text-xl text-text-secondary max-w-4xl mx-auto">
          Companion works with any app<br className="md:hidden" />
          <span className="hidden md:inline"> </span>on your computer. It clicks<br className="md:hidden" />
          <span className="hidden md:inline"> </span>and types just like you do.<br className="md:hidden" />
          <span className="hidden md:inline"> </span><span className="md:hidden"><br /></span>
          <span className="hidden md:inline"><br /></span>No setup needed. It helps you<br className="md:hidden" />
          <span className="hidden md:inline"> </span>with all the programs<br className="md:hidden" />
          <span className="hidden md:inline"> </span>you already use every day.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-neutral-100 rounded-lg p-3 sm:p-4 flex items-center"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 mr-2 sm:mr-3 overflow-hidden">
                  <Image 
                    src={tool.logo} 
                    alt={`${tool.name} logo`} 
                    width={40} 
                    height={40}
                    className="object-contain w-full h-full"
                  />
                </div>
                <p className="text-text-primary font-medium text-sm sm:text-base truncate">{tool.name}</p>
              </motion.div>
            ))}
            
            {/* Integration count box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: tools.length * 0.05 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-brand/10 rounded-lg p-4 flex items-center justify-center col-span-full"
                  >
                    <div className="text-center w-full">
                <p className="text-brand font-bold text-base sm:text-lg">2,700+ Controllable applications</p>
                      </div>
            </motion.div>
          </div>
        </motion.div>


      </div>
    </section>
  );
};

const tools = [
  { name: 'Chrome', logo: '/images/logos/chrome.png' },
  { name: 'Gmail', logo: '/images/logos/Gmail.png' },
  { name: 'Word', logo: '/images/logos/word.png' },
  { name: 'Excel', logo: '/images/logos/excel.png' },
  { name: 'Teams', logo: '/images/logos/teams.webp' },
  { name: 'Slack', logo: '/images/logos/slack.png' },
  { name: 'WhatsApp', logo: '/images/logos/whatsapp.png' },
  { name: 'Notion', logo: '/images/logos/notion.png' },
  { name: 'Trello', logo: '/images/logos/trello.png' },
  { name: 'Calendar', logo: '/images/logos/calendar.png' },
  { name: 'Drive', logo: '/images/logos/Drive.png' },
  { name: 'Sheets', logo: '/images/logos/Sheets.png' },
  { name: 'Google Docs', logo: '/images/logos/document.png' },
  { name: 'Google Forms', logo: '/images/logos/Forms.png' },
  { name: 'Shopify', logo: '/images/logos/SHopify.png' },
  { name: 'Spotify', logo: '/images/logos/Sportify.png' },
  { name: 'YouTube', logo: '/images/logos/Youtube.png' },
  { name: 'Discord', logo: '/images/logos/discord.jpg' },
  { name: 'GitHub', logo: '/images/logos/Github.png' },
  { name: 'Calendly', logo: '/images/logos/Calendly.png' },
  { name: 'Odoo', logo: '/images/logos/odoo.png' }
];

export default IntegrationsSection; 