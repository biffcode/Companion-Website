'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiClock } from 'react-icons/fi';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';
import Link from 'next/link';

const Availability = () => {
  return (
    <section id="availability" className="section bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-title mb-4">
              Platform Availability
            </h2>
            <p className="text-xl text-text-secondary">
              Companion is expanding to all major platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Windows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-medium overflow-hidden"
            >
              <div className="bg-brand p-4 flex justify-center">
                <FaWindows className="text-white text-5xl" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-title mb-2">Windows</h3>
                <div className="flex items-center justify-center mb-4 text-green-500">
                  <FiCheck className="mr-2" />
                  <span>Available Now</span>
                </div>
                <p className="text-text-secondary mb-6">
                  Full functionality with all features and integrations
                </p>
                <Link 
                  href="#download" 
                  className="btn-primary inline-block py-2 px-6"
                >
                  Download
                </Link>
              </div>
            </motion.div>
            
            {/* macOS */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-medium overflow-hidden"
            >
              <div className="bg-neutral-200 p-4 flex justify-center">
                <FaApple className="text-neutral-500 text-5xl" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-title mb-2">macOS</h3>
                <div className="flex items-center justify-center mb-4 text-amber-500">
                  <FiClock className="mr-2" />
                  <span>Coming Very Soon</span>
                </div>
                <p className="text-text-secondary mb-6">
                  We're working hard to bring the full experience to Mac users
                </p>
              </div>
            </motion.div>
            
            {/* Linux */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-medium overflow-hidden"
            >
              <div className="bg-neutral-200 p-4 flex justify-center">
                <FaLinux className="text-neutral-500 text-5xl" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-title mb-2">Linux</h3>
                <div className="flex items-center justify-center mb-4 text-amber-500">
                  <FiClock className="mr-2" />
                  <span>Coming Soon</span>
                </div>
                <p className="text-text-secondary mb-6">
                  Linux support is in development for power users
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-text-secondary">
              Our team is working to bring AIOS Companion to all major platforms. <br />
              Stay tuned for updates on Mac and Linux availability.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Availability; 