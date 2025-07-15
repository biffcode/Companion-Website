"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const plans = [
  {
    name: 'Preview Pass',
    price: '$5',
    period: 'one-time',
    features: [
      '$5 credits (expire in 7 days)',
      'Access to Google Gemini only',
      'All features included',
      'Community Support',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Basic',
    price: '$29',
    period: '/month',
    features: [
      '$29 monthly credits',
      'Access to Gemini + Premium Models (GPT-4.1, Claude 4)',
      'All features included',
      'Standard Email Support',
    ],
    cta: 'Subscribe Now',
    popular: false,
  },
  {
    name: 'Advanced',
    price: '$49',
    period: '/month',
    features: [
      '$55 monthly credits (12% bonus)',
      'Access to Gemini + Premium Models',
      'All features included',
      'Priority Email Support',
    ],
    cta: 'Subscribe Now',
    popular: true,
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    features: [
      '$125 monthly credits (26% bonus)',
      'Access to Gemini + Premium Models',
      'All features + Team Features (Coming Soon)',
      'Dedicated Support Channel',
    ],
    cta: 'Subscribe Now',
    popular: false,
  },
];

const PricingSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="section bg-background">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-title mb-4">Choose Your Plan</h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Transparent pricing with built-in token optimization
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-lg overflow-hidden transform transition-transform duration-300 ${
                plan.popular
                  ? 'border-2 border-brand shadow-medium scale-105'
                  : 'border border-neutral-200 shadow-soft'
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className="p-6 bg-white">
                <h3 className="text-xl font-bold text-title mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-3xl font-bold text-text-primary">{plan.price}</span>
                  <span className="text-text-secondary ml-1">{plan.period}</span>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-brand mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  href="/download"
                  className={`w-full block text-center py-3 px-4 rounded-md transition-colors font-medium ${
                    plan.popular
                      ? 'btn-primary'
                      : 'bg-neutral-100 text-text-primary hover:bg-neutral-200'
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 