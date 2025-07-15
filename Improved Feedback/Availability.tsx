'use client';

import { motion } from 'framer-motion';
import { FiCheck, FiClock } from 'react-icons/fi';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';
import Link from 'next/link';

const Availability = () => {
  return (
    <section id="availability" className="bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-4">
              Platform Availability
            </h2>
            <p className="text-xl text-secondary-400">
              AIOS Companion is expanding to all major platforms
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Windows */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="bg-primary-500 p-4 flex justify-center">
                <FaWindows className="text-white text-5xl" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-secondary-500 mb-2">Windows</h3>
                <div className="flex items-center justify-center mb-4 text-green-500">
                  <FiCheck className="mr-2" />
                  <span>Available Now</span>
                </div>
                <p className="text-secondary-400 mb-6">
                  Full functionality with all features and integrations
                </p>
                <Link 
                  href="/download" 
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
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="bg-gray-200 p-4 flex justify-center">
                <FaApple className="text-gray-500 text-5xl" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-secondary-500 mb-2">macOS</h3>
                <div className="flex items-center justify-center mb-4 text-amber-500">
                  <FiClock className="mr-2" />
                  <span>Coming Soon</span>
                </div>
                <p className="text-secondary-400 mb-6">
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
              className="bg-white rounded-xl shadow-md overflow-hidden"
            >
              <div className="bg-gray-200 p-4 flex justify-center">
                <FaLinux className="text-gray-500 text-5xl" />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-secondary-500 mb-2">Linux</h3>
                <div className="flex items-center justify-center mb-4 text-amber-500">
                  <FiClock className="mr-2" />
                  <span>Coming Soon</span>
                </div>
                <p className="text-secondary-400 mb-6">
                  Linux support is in development for power users
                </p>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-secondary-400">
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