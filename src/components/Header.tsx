"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-neutral-200 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/Companion_Logo.svg" 
            alt="Companion Logo" 
            width={120} 
            height={40} 
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#features" className="text-text-secondary hover:text-text-primary font-medium transition-colors">
            Features
          </Link>
          <Link href="#demo" className="text-text-secondary hover:text-text-primary font-medium transition-colors">
            Demo
          </Link>
          <Link href="#integrations" className="text-text-secondary hover:text-text-primary font-medium transition-colors">
            Integrations
          </Link>
          <Link href="#pricing" className="text-text-secondary hover:text-text-primary font-medium transition-colors">
            Pricing
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/download" className="btn-primary">
            Download
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/80 backdrop-blur-sm border-t border-neutral-200 py-4">
          <div className="container flex flex-col space-y-4">
            <Link 
              href="#features" 
              className="text-text-secondary hover:text-text-primary font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#demo" 
              className="text-text-secondary hover:text-text-primary font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Demo
            </Link>
            <Link 
              href="#integrations" 
              className="text-text-secondary hover:text-text-primary font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Integrations
            </Link>
            <Link 
              href="#pricing" 
              className="text-text-secondary hover:text-text-primary font-medium py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/download" 
              className="btn-primary w-full flex justify-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Download
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header; 