'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const SupportedTools = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-secondary-500">Works With Your Favorite Tools</h2>
          <p className="text-xl text-secondary-400 max-w-3xl mx-auto">
            Companion seamlessly integrates with 2,700+ applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="bg-gray-100 rounded-xl p-4 flex items-center"
              >
                <div className="w-12 h-12 flex-shrink-0 mr-4">
                  <Image 
                    src={tool.logo} 
                    alt={`${tool.name} logo`} 
                    width={48} 
                    height={48}
                    className="object-contain"
                  />
                </div>
                <p className="text-secondary-500 font-medium text-xl">{tool.name}</p>
              </motion.div>
            ))}
            
            {/* Integration count box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: tools.length * 0.1 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="bg-primary-50/30 rounded-xl p-6 flex items-center justify-center"
            >
              <div className="text-center">
                <p className="text-primary-500 font-bold text-xl">2,700+ Controllable<br/>applications</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const tools = [
  { name: 'Chrome', logo: '/app-logos/chrome.png' },
  { name: 'Discord', logo: '/app-logos/discord.jpg' },
  { name: 'Slack', logo: '/app-logos/slack.png' },
  { name: 'Word', logo: '/app-logos/word.png' },
  { name: 'Teams', logo: '/app-logos/teams.webp' },
  { name: 'Notion', logo: '/app-logos/notion.png' },
  { name: 'Trello', logo: '/app-logos/trello.png' },
  { name: 'Calendar', logo: '/app-logos/calendar.png' },
  { name: 'Drive', logo: '/app-logos/Drive.png' },
  { name: 'Calendly', logo: '/app-logos/Calendly.png' },
  { name: 'GitHub', logo: '/app-logos/Github.png' },
  { name: 'Gmail', logo: '/app-logos/Gmail.png' },
  { name: 'Forms', logo: '/app-logos/Forms.png' },
  { name: 'Sheets', logo: '/app-logos/Sheets.png' },
  { name: 'Spotify', logo: '/app-logos/Sportify.png' },
  { name: 'YouTube', logo: '/app-logos/Youtube.png' },
  { name: 'Odoo', logo: '/app-logos/odoo.png' },
  { name: 'Shopify', logo: '/app-logos/SHopify.png' },
  { name: 'Telegram', logo: '/app-logos/Telegram.png' }
];

export default SupportedTools; 