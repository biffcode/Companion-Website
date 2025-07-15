"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

const demos = [
  {
    id: 'finding-leads',
    title: 'Finding Leads',
    description: 'Find new customers for your business. Companion looks through websites and social media to find people who might want to buy from you. It saves their contact info and helps you reach out to them.',
    videoSrc: '/videos/Finding_Leads.mp4',
  },
  {
    id: 'research',
    title: 'Research',
    description: 'Get information fast. Companion searches many websites at once to find what you need. It reads through lots of pages and gives you the important parts in simple summaries.',
    videoSrc: '/videos/Research.mp4',
  },
  {
    id: 'writing-reports',
    title: 'Writing Reports',
    description: 'Turn your ideas into nice reports. Give Companion your notes and it will write them up properly with good formatting. Perfect for work presentations or school papers.',
    videoSrc: '/videos/writing_Report.mp4',
  },
  {
    id: 'managing-emails',
    title: 'Managing Emails',
    description: 'Keep your inbox clean and organized. Companion sorts your emails, answers simple ones for you, and makes sure you see the important messages first.',
    videoSrc: '/videos/managing_email.mp4',
  },
  {
    id: 'setting-up-meetings',
    title: 'Setting up Meetings',
    description: 'Schedule meetings without the hassle. Companion checks when everyone is free, picks the best times, and sends out invitations. No more back-and-forth emails.',
    videoSrc: '/videos/setup_meeting.mp4',
  },
  {
    id: 'organizing-files',
    title: 'Organizing Files',
    description: 'Keep your computer files neat and tidy. Companion puts files in the right folders, gives them good names, and helps you find things quickly when you need them.',
    videoSrc: '/videos/organizing_files.mp4',
  },
  {
    id: 'computer-security',
    title: 'Computer Security',
    description: 'Watch for bad things trying to get into your computer. Companion looks for viruses, hackers, and other dangerous stuff. It tells you right away if something suspicious is happening.',
    videoSrc: '/videos/computer_security.mp4',
  },
  {
    id: 'social-media-management',
    title: 'Social Media Management',
    description: 'Make social media easy. Companion helps you post at the right times, answers comments, and keeps track of what people are saying about you online.',
    videoSrc: '/videos/social_media.mp4',
  },
  {
    id: 'ai-collaboration',
    title: 'AI Collaboration',
    description: 'Work better with AI helpers. Companion connects you to different AI tools and makes them work together. It helps you get better results from ChatGPT and other AI apps.',
    videoSrc: '/videos/AI_Colaboration.mp4',
  },
  {
    id: 'installing-removing-apps',
    title: 'Installing and Removing Apps',
    description: 'Add and remove programs safely. Companion finds the right software for you, installs it properly, and removes programs completely when you don\'t need them anymore.',
    videoSrc: '/videos/Instaling_software.mp4',
  },
];

const DemoSection = () => {
  const [activeDemo, setActiveDemo] = useState(demos[0].id);
  const [expandedDemo, setExpandedDemo] = useState<string | null>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const activeDemoData = demos.find(demo => demo.id === activeDemo);

  const handleDemoClick = (demoId: string) => {
    setActiveDemo(demoId);
    setExpandedDemo(expandedDemo === demoId ? null : demoId);
  };

  return (
    <section id="demo" className="section bg-neutral-50 py-16">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-title mb-4">See Companion in Action</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Watch real workflows automated in real-time
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Video Display Area */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="bg-white rounded-lg shadow-medium overflow-hidden">
              <div className="bg-neutral-900 flex items-center justify-center overflow-hidden relative aspect-video">
                <AnimatePresence mode="wait">
                  {activeDemoData && (
                    <motion.video
                      key={activeDemoData.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover"
                      loop
                      muted
                      autoPlay
                      playsInline
                    >
                      <source src={activeDemoData.videoSrc} type="video/mp4" />
                      Your browser does not support the video tag.
                    </motion.video>
                  )}
                </AnimatePresence>
              </div>
            </div>
            
            {/* Description Panel */}
            {activeDemoData && (
              <motion.div
                key={activeDemoData.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mt-6 bg-brand text-white p-6 rounded-lg shadow-medium"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{activeDemoData.title}</h3>
                <p className="text-white/90">{activeDemoData.description}</p>
              </motion.div>
            )}
          </div>

          {/* Use Case Selection Area */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="bg-white rounded-lg shadow-medium p-4">
              <h3 className="text-lg font-bold text-title mb-4">Use Cases</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-2">
                {demos.map((demo) => (
                  <button
                    key={demo.id}
                    onClick={() => handleDemoClick(demo.id)}
                    className={`text-left p-3 rounded-lg transition-all ${
                      activeDemo === demo.id
                        ? 'bg-brand text-white shadow-sm'
                        : 'bg-neutral-50 hover:bg-neutral-100'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className={`font-medium ${
                        activeDemo === demo.id ? 'text-white' : 'text-title'
                      }`}>
                        {demo.title}
                      </h4>
                      {activeDemo === demo.id && (
                        <div className="w-2 h-2 rounded-full bg-white"></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <a 
                href="https://www.youtube.com/@companionbyaios" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-primary w-full text-center mt-4"
              >
                Explore More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection; 