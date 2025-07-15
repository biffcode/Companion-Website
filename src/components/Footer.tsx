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
    <footer className="bg-white py-16 border-t border-neutral-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="mb-6 inline-block">
              <Image 
                src="/Companion_Logo.svg" 
                alt="Companion Logo" 
                width={120} 
                height={40} 
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-text-secondary mb-6 max-w-md mt-4">
              Companion automates your everyday tasks, right on your computer. 
              Save time with intelligent automation that works for you.
            </p>
            <div className="flex items-center mb-4">
              <FiMail size={16} className="text-text-secondary mr-2" />
              <a href="mailto:aioscompanion@blackcode.ch" className="text-text-secondary hover:text-brand transition-colors text-sm">
                aioscompanion@blackcode.ch
              </a>
            </div>
            <div className="flex space-x-5">
              <a href="https://www.linkedin.com/company/companionbyaios" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-brand transition-colors">
                <FiLinkedin size={20} />
              </a>
              <a href="https://x.com/companionbyaios" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-brand transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://www.instagram.com/companionbyaios/" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-brand transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="https://www.youtube.com/@companionbyaios" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-brand transition-colors">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-title font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <Link href={`${linkPrefix}#features`} className="text-text-secondary hover:text-brand transition-colors text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link href={`${linkPrefix}#demo`} className="text-text-secondary hover:text-brand transition-colors text-sm">
                  Demo
                </Link>
              </li>
              <li>
                <Link href={`${linkPrefix}#integrations`} className="text-text-secondary hover:text-brand transition-colors text-sm">
                  Integrations
                </Link>
              </li>
              <li>
                <Link href={`${linkPrefix}#pricing`} className="text-text-secondary hover:text-brand transition-colors text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/download" className="text-text-secondary hover:text-brand transition-colors text-sm">
                  Download Free Trial
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-title font-semibold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/support" className="text-text-secondary hover:text-brand transition-colors text-sm">
                  Support
                </Link>
              </li>
              <li>
                <span className="text-text-secondary text-sm flex items-center">
                  Documentation
                  <span className="ml-2 text-xs text-brand">Coming Soon</span>
                </span>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-text-secondary hover:text-brand transition-colors text-sm">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-text-secondary hover:text-brand transition-colors text-sm">
                  Terms
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-text-secondary mb-4 md:mb-0">
            &copy; {currentYear} AIOS Companion SA. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-x-8 gap-y-2 justify-center">
            <Link href="/privacy-policy" className="text-xs text-text-secondary hover:text-brand transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-xs text-text-secondary hover:text-brand transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-xs text-text-secondary hover:text-brand transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 