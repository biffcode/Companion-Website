"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const CtaSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="download" className="section bg-neutral-100 text-text-primary">
      <div className="container max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-title mb-4">Still Have Questions? Let's Get You Started!</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Over 10,000 professionals have already made the switch. Join them and start automating your workflow today.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-medium max-w-2xl mx-auto mb-8">
            <h3 className="text-lg font-bold text-title mb-4">What you get with your free account:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary">Free credits to test all features</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary">Works with 2,700+ applications</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary">Setup in under 5 minutes</span>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-3 mt-0.5 text-brand flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-text-secondary">No credit card required</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <Link 
              href="/download" 
              className="btn-primary px-10 py-4 text-lg font-bold"
            >
              Get Started Free Now
            </Link>
            
            <a 
              href="https://www.youtube.com/@companionbyaios" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary px-8 py-4 text-lg"
            >
              Watch More Demos
            </a>
          </div>

          <div className="text-sm text-text-secondary">
            <p className="mb-2">🔒 Secure download • 🚀 Instant setup • 💬 Community support included</p>
            <p>Still unsure? Check out our <Link href="#faq" className="text-brand hover:underline">FAQ section</Link> or contact us at <a href="mailto:support@aioscompanion.com" className="text-brand hover:underline">support@aioscompanion.com</a></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection; 