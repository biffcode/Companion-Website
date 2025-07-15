'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiMessageSquare, FiBookOpen, FiHelpCircle, FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

type CategoryType = 'all' | 'general' | 'installation' | 'features' | 'billing' | 'troubleshooting';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

// FAQ data from main page
const faqs = [
  {
    question: "How is this different from other LLMs",
    answer: "Other LLMs requires you to copy/paste and manually execute tasks. Companion actually performs computer actions for you - clicking buttons, filing documents, managing applications."
  },
  {
    question: "Is my data secure?",
    answer: "Absolutely. Companion runs entirely on your local machine — nothing is sent to the cloud unless you choose to. All data is processed locally and protected with encryption, ensuring your information stays private and secure."
  },
  {
    question: "What if I use Mac or Linux?",
    answer: "Companion is currently Windows-only, but Mac support is just a few weeks away. Linux is on our roadmap and coming as soon as possible."
  },
  {
    question: "How easy is it to set up MCP integration?",
    answer: "Incredibly simple. Our solution lets you set up MCP servers in just a few clicks - the easiest integration on the market. No complex configuration or technical expertise required."
  },
  {
    question: "Do I need technical skills?",
    answer: "No programming required. If you can describe a task in plain English, Companion can likely automate it."
  },
  {
    question: "What happens if AI makes a mistake?",
    answer: "Companion asks for confirmation on potentially risky actions and maintains a full audit log of all activities."
  }
];

const FaqItem = ({ faq, index, isOpen, toggleOpen }: { 
  faq: typeof faqs[0], 
  index: number, 
  isOpen: boolean, 
  toggleOpen: () => void 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="border-b border-neutral-200 last:border-b-0"
    >
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
        onClick={toggleOpen}
      >
        <h3 className="text-lg font-medium text-secondary-500 group-hover:text-primary-500 transition-colors">{faq.question}</h3>
        <svg
          className={`w-5 h-5 text-secondary-400 transform transition-transform ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <p className="text-secondary-400">{faq.answer}</p>
      </div>
    </motion.div>
  );
};

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleFormChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would normally send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
    // Show success message for 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
    }, 3000);
  };

  // Filter FAQs based on search query
  const filteredFaqs = faqs.filter(faq => {
    return searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <>
      <Header />
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-secondary-500 mb-6">
            How Can We Help You?
          </h1>
          <p className="text-xl text-secondary-400 max-w-3xl mx-auto">
            Find answers to common questions or contact our support team for personalized assistance.
          </p>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="relative">
            <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-secondary-400" size={20} />
            <input
              type="text"
              placeholder="Search for answers..."
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full pl-12 pr-4 py-4 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </motion.div>

        {/* Support Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="bg-white rounded-apple-lg shadow-apple p-8 text-center hover:shadow-apple-md transition-all duration-300 hover:-translate-y-1">
            <div className="bg-primary-50 p-4 rounded-full inline-block mb-4">
              <FiMessageSquare className="text-primary-500" size={24} />
            </div>
            <h3 className="text-xl font-bold text-secondary-500 mb-2">Contact Support</h3>
            <p className="text-secondary-400 mb-4">
              Get personalized help from our dedicated support team.
            </p>
            <a href="#contact-form" className="text-primary-500 font-medium hover:underline">
              Contact Us →
            </a>
          </div>

          <div className="bg-white rounded-apple-lg shadow-apple p-8 text-center hover:shadow-apple-md transition-all duration-300 hover:-translate-y-1">
            <div className="bg-primary-50 p-4 rounded-full inline-block mb-4">
              <FiBookOpen className="text-primary-500" size={24} />
            </div>
            <h3 className="text-xl font-bold text-secondary-500 mb-2">Documentation</h3>
            <p className="text-secondary-400 mb-4">
              Explore our comprehensive guides and tutorials.
            </p>
            <Link href="/documentation" className="text-primary-500 font-medium hover:underline">
              View Docs →
            </Link>
          </div>

          <div className="bg-white rounded-apple-lg shadow-apple p-8 text-center hover:shadow-apple-md transition-all duration-300 hover:-translate-y-1">
            <div className="bg-primary-50 p-4 rounded-full inline-block mb-4">
              <FiHelpCircle className="text-primary-500" size={24} />
            </div>
            <h3 className="text-xl font-bold text-secondary-500 mb-2">Community</h3>
            <p className="text-secondary-400 mb-4">
              Join our community forum to connect with other users.
            </p>
            <a href="#" className="text-primary-500 font-medium hover:underline">
              Join Community →
            </a>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <section id="faq" className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-500 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-secondary-400 max-w-3xl mx-auto">
                Everything you need to know about Companion AI
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            {filteredFaqs.length > 0 ? (
                <div className="bg-white rounded-lg shadow-medium p-6">
                {filteredFaqs.map((faq, index) => (
                    <FaqItem
                    key={index}
                      faq={faq}
                      index={index}
                      isOpen={openIndex === index}
                      toggleOpen={() => toggleFaq(index)}
                    />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-secondary-400 text-lg">
                  No results found for "{searchQuery}". Try a different search term.
                </p>
              </div>
            )}
          </motion.div>
        </section>

        {/* Contact Form */}
        <section id="contact-form">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-500 mb-6">
              Contact Support
            </h2>
              <p className="text-xl text-secondary-400 max-w-3xl mx-auto mb-8">
              Need personalized help? Our support team is ready to assist you.
            </p>
              
              <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-secondary-500 mb-2">General Inquiries</h3>
                  <a href="mailto:contact@aioscompanion.com" className="text-primary-500 hover:underline">
                    contact@aioscompanion.com
                  </a>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-secondary-500 mb-2">Sales</h3>
                  <a href="mailto:sales@aioscompanion.com" className="text-primary-500 hover:underline">
                    sales@aioscompanion.com
                  </a>
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-secondary-500 mb-2">Technical Support</h3>
                  <a href="mailto:support@aioscompanion.com" className="text-primary-500 hover:underline">
                    support@aioscompanion.com
                  </a>
                </div>
              </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-apple-lg shadow-apple p-8">
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                    <FiCheckCircle className="text-green-500" size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary-500 mb-2">Message Sent!</h3>
                  <p className="text-secondary-400">
                    Thank you for contacting us. We'll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-secondary-500 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Your name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-secondary-500 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleFormChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                        placeholder="you@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="subject" className="block text-sm font-medium text-secondary-500 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="What is your question about?"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-secondary-500 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleFormChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Please describe your issue in detail"
                      required
                    />
                  </div>
                  
                    <div className="mt-8">
                  <button
                    type="submit"
                        className="w-full bg-brand hover:bg-brand-dark text-white font-bold py-5 px-8 rounded-lg transition-colors duration-300 text-lg flex items-center justify-center"
                  >
                        <span>Send Message</span>
                        <svg 
                          className="ml-2 w-5 h-5" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M14 5l7 7m0 0l-7 7m7-7H3" 
                          />
                        </svg>
                  </button>
                    </div>
                </form>
              )}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
      <Footer />
    </>
  );
};

export default SupportPage; 