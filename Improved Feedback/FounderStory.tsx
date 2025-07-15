'use client';

import { motion } from 'framer-motion';

const FounderStory = () => {
  return (
    <section id="founder-story" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="mb-6 text-secondary-500">Why We Built Companion</h2>
          <p className="text-xl text-secondary-400 max-w-3xl mx-auto">
            A prosthetic for AI to enter the real world.
          </p>
        </motion.div>
        
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-medium text-secondary-500 mb-6">From Frustration to Innovation</h3>
              
              <div className="space-y-6 text-secondary-400">
                <p>
                  "I was tired of AI that could only talk about doing things, but couldn't actually do them. 
                  While everyone was copying and pasting from LLM, I wanted an AI that could operate my 
                  computer directly—a true AI companion that works <em>for</em> you, not just <em>with</em> you.
                </p>
                
                <p>
                  We built Companion to be the bridge between AI's potential and real-world action. 
                  It's not just another chatbot—it's a prosthetic that allows AI to reach into your digital 
                  world and actually accomplish tasks while you focus on what matters.
                </p>
                
                <p>
                  Our mission is simple: give people back their time by creating an AI that doesn't just 
                  suggest solutions but implements them. While you're enjoying life, Companion is handling the 
                  digital busywork that used to consume your day."
                </p>
                
                <div className="pt-4">
                  <p className="font-medium text-secondary-500">— Andrea David Edelman, Founder & CEO</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory; 