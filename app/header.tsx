'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Framer Motion variants for menu
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  // Framer Motion variants for list items
  const itemVariants = {
    hover: { scale: 1.05, color: '#f87171' }, // text-red-400
  };

  return (
    <div className="relative">
      {/* Button at top right */}
      <button
        className="fixed top-4 right-4 flex items-center bg-black text-white p-2 rounded-lg shadow-lg cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <img
          src="/logo.svg" // replace with your PNG
          alt="Logo"
          className="w-16 h-16 mr-2"
        />
      </button>

      {/* Animated Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed top-24 right-4 w-64 bg-black text-white rounded-lg shadow-lg z-50"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div className="p-4 border-b flex items-center border-gray-700 font-bold text-2xl">
               <img src="logo.png" className='h-12 w-12' alt="" /> Open Quantum
            </div>
            <ul className="p-4 space-y-2">
              {['Encyclopedia', 'Atlas', 'Timeline', 'Digest'].map((option, index) => (
                <motion.li
                  key={index}
                  className="p-2 rounded cursor-pointer"
                  variants={itemVariants}
                  whileHover="hover"
                >
                  {option}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
