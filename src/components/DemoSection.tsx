"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

const demos = [
  {
    id: 'email',
    title: 'Email Management',
    description: 'Transform your inbox into a productivity powerhouse with intelligent email automation. Companion automatically categorizes incoming emails, prioritizes important messages, and drafts contextual responses based on your communication style. Set up custom rules for different types of emails - from client inquiries to internal communications - and watch as routine follow-ups, meeting confirmations, and status updates are handled seamlessly. The system learns from your email patterns and preferences, ensuring that urgent matters are escalated while routine correspondence is managed efficiently in the background.',
    videoSrc: '/videos/Hero_Video.mp4',
  },
  {
    id: 'file-organizer',
    title: 'File Organizer',
    description: 'Say goodbye to digital chaos with our intelligent file organization system. Companion automatically sorts, renames, and categorizes files across your entire digital workspace using advanced pattern recognition and machine learning. Whether it\'s organizing project documents by client and date, sorting images by content and quality, or managing downloads into appropriate folders, the system creates a logical structure that makes sense for your workflow. Set custom naming conventions, establish folder hierarchies, and define rules based on file type, content, creation date, or even metadata. The AI continuously learns from your preferences to maintain an organized, searchable file system that saves hours of manual sorting.',
    videoSrc: '/videos/File Organization.mp4',
  },
  {
    id: 'data-processing',
    title: 'Data Processing',
    description: 'Unlock the power of your data with sophisticated extraction, transformation, and loading capabilities that work across any format or source. Companion can process everything from complex spreadsheets and databases to PDFs, images, and web content. The system automatically identifies data patterns, cleans inconsistencies, validates entries, and transforms information into your desired format. Whether you\'re consolidating customer data from multiple sources, generating reports from raw analytics, or converting legacy documents into modern formats, Companion handles the heavy lifting. Advanced features include data validation, duplicate detection, format standardization, and intelligent field mapping that adapts to various data structures.',
    videoSrc: '/videos/Data Processing.mp4',
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
    <section id="demo" className="section bg-neutral-50">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-medium p-2 aspect-video flex flex-col">
              <div className="bg-neutral-100 rounded-t-md h-7 flex items-center px-3">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
                </div>
                <div className="ml-3 text-sm font-medium text-text-secondary">
                  {activeDemoData?.title}
                </div>
              </div>
              <div className="bg-neutral-900 rounded-b-md flex-grow flex items-center justify-center overflow-hidden relative">
                <AnimatePresence mode="wait">
                  {activeDemoData && (
                    <motion.video
                      key={activeDemoData.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-full h-full object-cover absolute top-0 left-0"
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
          </div>

          <div className="flex flex-col space-y-2">
            {demos.map((demo) => (
              <div
                key={demo.id}
                className={`rounded-lg transition-all overflow-hidden ${
                  activeDemo === demo.id
                    ? 'bg-brand text-white shadow-medium'
                    : 'bg-white hover:bg-neutral-100 hover:shadow-medium'
                }`}
              >
                <button
                  onClick={() => handleDemoClick(demo.id)}
                  className="w-full text-left p-4 flex items-center justify-between"
                >
                  <h3 className={`text-lg font-bold ${
                    activeDemo === demo.id ? 'text-white' : 'text-title'
                  }`}>
                    {demo.title}
                  </h3>
                  <div className={`transition-transform duration-200 ${
                    expandedDemo === demo.id ? 'rotate-0' : 'rotate-0'
                  }`}>
                    {expandedDemo === demo.id ? (
                      <IoChevronUp className={`w-5 h-5 ${
                        activeDemo === demo.id ? 'text-white' : 'text-text-secondary'
                      }`} />
                    ) : (
                      <IoChevronDown className={`w-5 h-5 ${
                        activeDemo === demo.id ? 'text-white' : 'text-text-secondary'
                      }`} />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedDemo === demo.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4">
                        <p className={`text-sm ${
                          activeDemo === demo.id ? 'text-white/80' : 'text-text-secondary'
                        }`}>
                          {demo.description}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}

            <a 
              href="https://www.youtube.com/@companionbyaios" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary mt-4 text-center"
            >
              Explore More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection; 