'use client';

import { motion } from 'framer-motion';
import { FiClock, FiZap } from 'react-icons/fi';
import { useState } from 'react';

const TaskComparison = () => {
  const [showAllTasks, setShowAllTasks] = useState(false);
  
  const visibleTasks = showAllTasks ? tasks : tasks.slice(0, 6);
  
  return (
    <section id="task-comparison" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-secondary-500">Harder, Better, Faster, Stronger</h2>
          <p className="text-xl text-secondary-400 max-w-3xl mx-auto">
            Companion handles routine tasks automatically, giving you time for strategic work
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-apple-lg shadow-apple overflow-hidden"
          >
            <div className="grid grid-cols-3 text-center font-semibold text-lg text-secondary-500 border-b border-gray-200">
              <div className="py-5 px-4 border-r border-gray-200">Task</div>
              <div className="py-5 px-4 border-r border-gray-200 bg-gray-50">
                <div className="flex items-center justify-center gap-2">
                  <FiClock className="text-secondary-400" />
                  <span>Before</span>
                </div>
              </div>
              <div className="py-5 px-4 bg-primary-50">
                <div className="flex items-center justify-center gap-2">
                  <FiZap className="text-primary-500" />
                  <span>After Companion</span>
                </div>
              </div>
            </div>
            
            {visibleTasks.map((task, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`grid grid-cols-3 text-center ${index !== visibleTasks.length - 1 || (index === visibleTasks.length - 1 && showAllTasks) ? 'border-b border-gray-200' : ''}`}
              >
                <div className="py-6 px-4 border-r border-gray-200 text-left font-medium text-secondary-500">
                  {task.name}
                </div>
                <div className="py-6 px-4 border-r border-gray-200 bg-gray-50 text-secondary-400">
                  {task.before}
                </div>
                <div className="py-6 px-4 bg-primary-50 text-primary-600 font-medium">
                  {task.after}
                </div>
              </motion.div>
            ))}
            
            <div className="text-center py-4 bg-gray-50 border-t border-gray-200">
              <button 
                onClick={() => setShowAllTasks(!showAllTasks)}
                className="text-primary-500 font-medium hover:text-primary-600 transition-colors"
              >
                {showAllTasks ? 'Minimize' : 'See More Tasks'}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const tasks = [
  // Office & Productivity Automation
  {
    name: 'Email drafting & management',
    before: '15 - 30 min',
    after: '2 - 5 min'
  },
  {
    name: 'Google Sheets data management',
    before: '5 min - 1 hour',
    after: '< 1 min - 5 min'
  },
  {
    name: 'Document reading & summarization',
    before: '10 - 60 min',
    after: '1 - 5 min'
  },
  {
    name: 'File & folder organization',
    before: '30 - 60 min',
    after: '5 - 10 min'
  },
  
  // Research & Information Synthesis
  {
    name: 'Web research & information gathering',
    before: '10 min - 2 hours',
    after: '1 - 15 min'
  },
  {
    name: 'Local file content search & analysis',
    before: '5 - 30 min',
    after: '< 1 min - 5 min'
  },
  
  // System & Development Support
  {
    name: 'Command line execution & scripting',
    before: 'Varies (manual)',
    after: 'Instant (automated)'
  },
  {
    name: 'Process management',
    before: '2 - 10 min',
    after: '< 1 min'
  },
  {
    name: 'Remote server interaction (SSH)',
    before: '5 - 15 min',
    after: '1 - 3 min'
  },
  {
    name: 'Automated testing & UI automation',
    before: '30 - 120 min',
    after: '5 - 15 min'
  },
  
  // Web Interaction & Social Media
  {
    name: 'Automating web forms & interactions',
    before: 'Varies (manual)',
    after: 'Instant (automated)'
  },
  {
    name: 'Social media posting',
    before: '5 - 15 min',
    after: '1 - 3 min'
  },
  {
    name: 'Downloading web content',
    before: '2 - 10 min',
    after: '1 - 3 min'
  },
  {
    name: 'Browser tab management',
    before: '1 - 5 min',
    after: '< 1 min'
  },
  
  // Problem Solving & Workflow Optimization
  {
    name: 'Complex task breakdown & planning',
    before: 'Hours/days',
    after: 'Significantly reduced'
  },
  {
    name: 'Debugging assistance',
    before: 'Hours to days',
    after: 'Reduced by 30-50%'
  },
  {
    name: 'Workflow streamlining',
    before: 'Varies (manual)',
    after: 'Significant efficiency gains'
  },
  
  // Original tasks
  {
    name: 'Report generation',
    before: '3 hours',
    after: '15 min'
  },
  {
    name: 'Data processing',
    before: '2 hours',
    after: '15 min'
  }
];

export default TaskComparison; 