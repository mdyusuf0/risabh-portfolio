import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 1.1, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 w-full h-screen bg-[#ff2a2a] z-[100000] flex flex-col items-center justify-center pointer-events-none"
        >
          {/* Logo Container */}
          <motion.div
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="relative flex flex-col items-center"
          >
            <div className="relative text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter">
              {/* Background text (unfilled) */}
              <div className="text-red-900/40 select-none">
                {personalInfo.brandName}<span className="text-red-900/40">.</span>
              </div>

              {/* Foreground text (water fill animation) */}
              <motion.div
                className="absolute top-0 left-0 text-white overflow-hidden whitespace-nowrap select-none"
                initial={{ clipPath: 'inset(100% 0 0 0)' }}
                animate={{ clipPath: 'inset(0% 0 0 0)' }}
                transition={{ duration: 1.4, ease: "easeInOut", delay: 0.2 }}
              >
                {personalInfo.brandName}<span className="text-black">.</span>
              </motion.div>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="mt-3 font-cursive text-2xl md:text-3xl text-red-100 font-semibold tracking-wide"
            >
              Full-Stack Developer
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
