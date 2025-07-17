'use client';


import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const CtaSocialProof = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section bg-gradient-to-br from-neutral-50 to-white py-20">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
                    <div className="text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-title mb-4 sm:mb-6">
              Ready to Save Hours Every Day?
            </h2>
            <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-8 sm:mb-12">
              Join thousands of professionals automating their workflows
            </p>
            
            {/* Simple Stats */}
            <div className="flex justify-center items-center gap-4 sm:gap-8 lg:gap-12 mb-8 sm:mb-12">
              <div className="text-center flex-1 max-w-[100px] sm:max-w-none sm:flex-initial">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand">10,000+</div>
                <div className="text-text-secondary text-xs sm:text-sm lg:text-base">Users</div>
              </div>
              <div className="text-center flex-1 max-w-[100px] sm:max-w-none sm:flex-initial">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand">50,000+</div>
                <div className="text-text-secondary text-xs sm:text-sm lg:text-base">Tasks Daily</div>
              </div>
              <div className="text-center flex-1 max-w-[100px] sm:max-w-none sm:flex-initial">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-brand">2M+</div>
                <div className="text-text-secondary text-xs sm:text-sm lg:text-base">Hours Saved</div>
              </div>
            </div>

            {/* CTA */}
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="mb-4 sm:mb-6"
            >
              <Link 
                href="/download" 
                className="inline-block bg-brand text-white font-bold text-2xl sm:text-3xl lg:text-5xl px-8 py-4 sm:px-12 sm:py-6 lg:px-20 lg:py-8 rounded-xl shadow-xl hover:bg-brand/90 transition-all duration-300 transform hover:shadow-2xl w-full max-w-sm sm:max-w-none sm:w-auto text-center"
              >
                Download Free
              </Link>
            </motion.div>
            <p className="text-base sm:text-lg text-text-secondary">
              Free to start • No credit card required
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSocialProof; 