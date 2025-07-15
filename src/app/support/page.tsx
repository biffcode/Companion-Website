'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { FiSearch, FiMessageSquare, FiBookOpen, FiHelpCircle, FiCheckCircle } from 'react-icons/fi';
import Link from 'next/link';

type CategoryType = 'all' | 'general' | 'installation' | 'features' | 'billing' | 'troubleshooting';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const SupportPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryType>('all');
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

  const handleCategoryChange = (category: CategoryType) => {
    setSelectedCategory(category);
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

  // Filter FAQs based on search query and category
  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = 
      searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory = 
      selectedCategory === 'all' || 
      faq.category === selectedCategory;
    
    return matchesSearch && matchesCategory;
  });

  return (
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
              Find answers to the most common questions about Companion.
            </p>
          </motion.div>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.value}
                onClick={() => handleCategoryChange(category.value)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category.value
                    ? 'bg-primary-500 text-white'
                    : 'bg-gray-100 text-secondary-400 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* FAQ Items */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            {filteredFaqs.length > 0 ? (
              <div className="space-y-6">
                {filteredFaqs.map((faq, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white rounded-apple-lg shadow-apple p-6"
                  >
                    <h3 className="text-xl font-semibold text-secondary-500 mb-2">{faq.question}</h3>
                    <p className="text-secondary-400">{faq.answer}</p>
                  </motion.div>
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
            <p className="text-xl text-secondary-400 max-w-3xl mx-auto">
              Need personalized help? Our support team is ready to assist you.
            </p>
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
                  
                  <button
                    type="submit"
                    className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

// FAQ categories
const categories = [
  { value: 'all' as CategoryType, label: 'All Categories' },
  { value: 'general' as CategoryType, label: 'General' },
  { value: 'installation' as CategoryType, label: 'Installation' },
  { value: 'features' as CategoryType, label: 'Features' },
  { value: 'billing' as CategoryType, label: 'Billing & Account' },
  { value: 'troubleshooting' as CategoryType, label: 'Troubleshooting' }
];

// FAQ data
const faqs = [
  {
    question: "How do I install Companion?",
    answer: "Companion is currently in beta. Once you're approved for the beta program, you'll receive an email with download instructions and an activation code. Follow the step-by-step guide in the email to complete installation.",
    category: "installation"
  },
  {
    question: "Is Companion compatible with my operating system?",
    answer: "Companion works on Windows 10/11, macOS 11.0 or later, and select Linux distributions (Ubuntu 20.04+, Debian 11+, and Fedora 34+). We're continuously expanding our OS support.",
    category: "installation"
  },
  {
    question: "Does Companion require an internet connection?",
    answer: "While Companion processes data locally on your machine, an internet connection is required for initial setup, updates, and certain integrations. Most core functionality works offline, but some advanced features may require connectivity.",
    category: "general"
  },
  {
    question: "How secure is my data with Companion?",
    answer: "Companion processes all data locally on your machine. Your files and information never leave your computer unless you explicitly configure integrations that require data sharing. We use industry-standard encryption for all communications and never store your personal data on our servers.",
    category: "general"
  },
  {
    question: "Can I customize automations in Companion?",
    answer: "Yes! Companion allows you to create custom automations using a simple, no-code interface. You can define triggers, conditions, and actions to suit your specific needs. Our advanced users can also use our API to create more complex automations with code.",
    category: "features"
  },
  {
    question: "What applications does Companion integrate with?",
    answer: "Companion integrates with over 2,700 applications including Google Workspace, Microsoft Office, Slack, Zoom, Notion, and many more. You can find the full list of integrations in our documentation.",
    category: "features"
  },
  {
    question: "How much does Companion cost after the beta period?",
    answer: "We offer several pricing plans to meet different needs. Our basic plan starts at $29/month, with advanced plans offering more credits and features. Visit our pricing page for detailed information on all plans.",
    category: "billing"
  },
  {
    question: "Can I upgrade or downgrade my plan at any time?",
    answer: "Yes, you can change your plan at any time. When upgrading, you'll get immediate access to the new plan's benefits. When downgrading, the change will take effect at the end of your current billing cycle.",
    category: "billing"
  },
  {
    question: "My automation isn't working as expected. What should I do?",
    answer: "First, check our troubleshooting guide in the documentation. If that doesn't solve your issue, you can enable debug mode (Settings > Advanced > Enable Debug Mode) and send us the logs through the Help menu. Our support team will assist you as soon as possible.",
    category: "troubleshooting"
  },
  {
    question: "How do I update Companion to the latest version?",
    answer: "Companion automatically checks for updates when you launch the application. You can also manually check for updates by going to Settings > About > Check for Updates. We recommend keeping your application updated to access the latest features and security improvements.",
    category: "troubleshooting"
  }
];

export default SupportPage; 