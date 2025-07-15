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
        isScrolled ? 'bg-background/80 backdrop-blur-sm border-b border-neutral-200 py-5' : 'bg-transparent py-8'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image 
            src="/Companion_Logo.svg" 
            alt="Companion Logo" 
            width={180} 
            height={60} 
            className="h-12 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-12">
          <Link href="#features" className="text-text-secondary hover:text-text-primary font-medium text-xl transition-colors">
            Features
          </Link>
          <Link href="#demo" className="text-text-secondary hover:text-text-primary font-medium text-xl transition-colors">
            Demo
          </Link>
          <Link href="#integrations" className="text-text-secondary hover:text-text-primary font-medium text-xl transition-colors">
            Integrations
          </Link>
          <Link href="#pricing" className="text-text-secondary hover:text-text-primary font-medium text-xl transition-colors">
            Pricing
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Link href="/download" className="btn-primary text-xl px-8 py-3">
            Download
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background/80 backdrop-blur-sm border-t border-neutral-200 py-5">
          <div className="container flex flex-col space-y-5">
            <Link 
              href="#features" 
              className="text-text-secondary hover:text-text-primary font-medium py-3 text-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#demo" 
              className="text-text-secondary hover:text-text-primary font-medium py-3 text-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Demo
            </Link>
            <Link 
              href="#integrations" 
              className="text-text-secondary hover:text-text-primary font-medium py-3 text-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Integrations
            </Link>
            <Link 
              href="#pricing" 
              className="text-text-secondary hover:text-text-primary font-medium py-3 text-xl"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="/download" 
              className="btn-primary w-full flex justify-center text-xl py-3"
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