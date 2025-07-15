'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const FounderStory = () => {
  return (
    <section id="founder-story" className="py-24 bg-neutral-50">
      <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col lg:flex-row gap-12 items-center"
          >
            {/* Text content */}
            <div className="w-full lg:w-6/12 order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl font-bold text-title mb-3">Why We Built Companion</h2>
                <p className="text-xl text-text-secondary mb-10">
                  A prosthetic for AI to enter the real world.
                </p>
                
                <h3 className="text-2xl font-medium text-title mb-6">From Frustration to Innovation</h3>
                
                <div className="space-y-6 text-text-secondary">
                  <p className="text-lg">
                    "We were tired of AI that could only talk about doing things, but couldn't actually do them. 
                    While everyone was copying and pasting from LLMs, we wanted to create an AI that could operate computers 
                    directly—a true AI companion that works <em>for</em> you, not just <em>with</em> you.
                  </p>
                  
                  <p className="text-lg">
                    We built Companion to be the bridge between AI's potential and real-world action. 
                    It's not just another chatbot—it's a prosthetic that allows AI to reach into your digital 
                    world and actually accomplish tasks while you focus on what matters.
                  </p>
                  
                  <p className="text-lg">
                    Our mission is simple: give people back their time by creating an AI that doesn't just 
                    suggest solutions but implements them. While you're enjoying life, Companion is handling the 
                    digital busywork that used to consume your day."
                  </p>
                  
                  <div className="pt-4">
                    <p className="font-medium text-text-primary">— The Companion Team</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Image container with original aspect ratio */}
            <div className="w-full lg:w-6/12 order-1 lg:order-2">
              <div className="relative w-full" style={{ paddingBottom: '73.45%' }}> {/* 1469/2000 = 0.7345 = 73.45% */}
                <div className="absolute inset-0 rounded-lg overflow-hidden">
                  <Image
                    src="/images/illustration.png"
                    alt="AI Companion Illustration"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
      </div>
    </section>
  );
};

export default FounderStory; 