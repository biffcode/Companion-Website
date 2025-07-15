'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FiTwitter, FiLinkedin, FiMail } from 'react-icons/fi';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  
  // Prefix for section links - empty on homepage, '/' on other pages
  const linkPrefix = isHomePage ? '' : '/';

  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="mb-6 inline-block">
              <Image 
                src="/Companion_Logo.png" 
                alt="Companion Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-secondary-400 mb-6 max-w-md mt-4">
              Companion automates your everyday tasks, right on your computer. 
              Save time with intelligent automation that works for you.
            </p>
            <div className="flex items-center mb-4">
              <FiMail size={16} className="text-secondary-400 mr-2" />
              <a href="mailto:contact@aioscompanion.com" className="text-secondary-400 hover:text-secondary-500 transition-colors text-sm">
                contact@aioscompanion.com
              </a>
            </div>
            <div className="flex space-x-5">
              <a href="https://www.linkedin.com/company/companionbyaios" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-secondary-500 transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="https://x.com/companionbyaios" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-secondary-500 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://www.instagram.com/companionbyaios/" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-secondary-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.youtube.com/@companionbyaios" target="_blank" rel="noopener noreferrer" className="text-secondary-400 hover:text-secondary-500 transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-secondary-500 mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <Link href={`${linkPrefix}#task-comparison`} className="text-secondary-400 hover:text-secondary-500 transition-colors text-sm">
                  Tasks
                </Link>
              </li>
              <li>
                <Link href={`${linkPrefix}#user-types`} className="text-secondary-400 hover:text-secondary-500 transition-colors text-sm">
                  Use Cases
                </Link>
              </li>
              <li>
                <Link href={`${linkPrefix}#comparison`} className="text-secondary-400 hover:text-secondary-500 transition-colors text-sm">
                  Comparison
                </Link>
              </li>
              <li>
                <Link href={`${linkPrefix}#videos`} className="text-secondary-400 hover:text-secondary-500 transition-colors text-sm">
                  Demo
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-secondary-400 hover:text-secondary-500 transition-colors text-sm">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-secondary-500 mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/support" className="text-secondary-400 hover:text-secondary-500 transition-colors text-sm">
                  Support
                </Link>
              </li>
              <li>
                <span className="text-secondary-400 text-sm flex items-center">
                  Documentation
                  <span className="ml-2 text-xs text-amber-500">(Coming Soon)</span>
                </span>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-secondary-400 hover:text-secondary-500 transition-colors text-sm">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-secondary-400 hover:text-secondary-500 transition-colors text-sm">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-secondary-400 mb-4 md:mb-0">
            &copy; {currentYear} AIOS Companion SA. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center">
            <Link href="/privacy-policy" className="text-xs text-secondary-400 hover:text-secondary-500 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-secondary-400 hover:text-secondary-500 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-secondary-400 hover:text-secondary-500 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 