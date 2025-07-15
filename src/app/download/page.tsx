'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';
import { HiDownload, HiInformationCircle } from 'react-icons/hi';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const DownloadPage = () => {
  const [selectedOS, setSelectedOS] = useState<string>('windows');
  const [showBetaNotice, setShowBetaNotice] = useState(true);

  // Windows download URL
  const windowsDownloadUrl = '/Software/Companion Setup 0.0.8.exe';

  return (
    <>
      <Header />
      <div className="bg-white py-24">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Beta Notice Banner */}
            {showBetaNotice && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-lg mb-10 relative"
              >
                <button 
                  onClick={() => setShowBetaNotice(false)}
                  className="absolute top-3 right-3 text-blue-400 hover:text-blue-600"
                  aria-label="Close beta notice"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-0.5">
                    <HiInformationCircle className="h-6 w-6 text-blue-500" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-blue-800">Beta Software Notice</h3>
                    <div className="mt-2 text-sm text-blue-700">
                      <p className="mb-2">
                        AIOS Companion is currently in beta. We're committed to making it better every week, but you might encounter occasional bugs or incomplete features.
                      </p>
                      <p className="mb-2">
                        Your feedback is invaluable to us! Please report any issues or suggestions through our support portal to help us improve.
                      </p>
                      <p>
                        Thank you for being an early adopter and for your patience as we refine the experience.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h1 className="mb-6">Download AIOS Companion</h1>
              <p className="text-xl text-secondary-400 max-w-2xl mx-auto">
                Get the unfair advantage you deserve. Automate your job before someone else does.
              </p>
            </motion.div>

            {/* OS Selection */}
            <div className="mb-12">
              <div className="flex flex-wrap justify-center gap-6">
                {/* Windows - Available */}
                <motion.button
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  onClick={() => setSelectedOS('windows')}
                  className={`flex flex-col items-center p-6 rounded-xl transition-all ${
                    selectedOS === 'windows'
                      ? 'bg-primary-50 border-2 border-primary-500'
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  <div className={`mb-3 ${selectedOS === 'windows' ? 'text-primary-500' : 'text-secondary-400'}`}>
                    <FaWindows className="text-3xl" />
                  </div>
                  <span className={`font-medium ${selectedOS === 'windows' ? 'text-primary-500' : 'text-secondary-500'}`}>
                    Windows
                  </span>
                </motion.button>

                {/* macOS - Coming Soon */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col items-center p-6 rounded-xl bg-gray-50 border-2 border-transparent"
                >
                  <div className="mb-3 text-gray-400">
                    <FaApple className="text-3xl" />
                  </div>
                  <span className="font-medium text-gray-400">macOS</span>
                  <span className="text-xs font-medium text-gray-500 mt-2">Coming Soon</span>
                </motion.div>

                {/* Linux - Coming Soon */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="flex flex-col items-center p-6 rounded-xl bg-gray-50 border-2 border-transparent"
                >
                  <div className="mb-3 text-gray-400">
                    <FaLinux className="text-3xl" />
                  </div>
                  <span className="font-medium text-gray-400">Linux</span>
                  <span className="text-xs font-medium text-gray-500 mt-2">Coming Soon</span>
                </motion.div>
              </div>
            </div>

            {/* Download Options */}
            {selectedOS === 'windows' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-xl p-8"
              >
                <h2 className="text-2xl font-medium mb-6">
                  Download for Windows
                </h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm">
                    <div>
                      <h3 className="font-medium text-secondary-500">Windows 10/11 (64-bit)</h3>
                      <p className="text-sm text-secondary-400">Size: 191 MB</p>
                    </div>
                    <Link 
                      href={windowsDownloadUrl}
                      className="btn-primary flex items-center gap-2 py-2 px-4"
                      download
                    >
                      <HiDownload className="text-lg" />
                      Download
                    </Link>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Release Notes */}
            <div className="mt-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gray-50 p-6 rounded-xl"
              >
                <h3 className="text-xl font-medium mb-4">Release Notes</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Version 0.0.8 (Beta Version)</h4>
                    <p className="text-sm text-secondary-400 mb-2">Released July 9, 2025</p>
                    <ul className="list-disc list-inside text-sm space-y-1 text-secondary-500">
                      <li>Solved UI bugs that were making the product experience bad.</li>
                      <li>Solved bug in which we lost context when we cancelled a message, making the user experience better.</li>
                      <li>Implemented authentication on the desktop app.</li>
                      <li>Implemented authentication on the Langgraph side to separate user data.</li>
                      <li>Refactored to use session based authentication for logging in.</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DownloadPage; 