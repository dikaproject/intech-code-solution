// MatrixBackground.tsx
'use client';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const MatrixBackground = () => {
  const [isMounted, setIsMounted] = useState(false);
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789<>[]{}=+-*/";
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null; // Return null on server-side
  }

  const getRandomChar = () => characters[Math.floor(Math.random() * characters.length)];
  
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 select-none pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: -20 }}
          animate={{ 
            y: ["0%", "100%"],
            transition: {
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }
          }}
          className="absolute text-green-500 text-xs whitespace-pre"
          style={{
            left: `${Math.random() * 100}%`,
            transform: `translateX(-50%)`
          }}
        >
          {[...Array(20)].map((_, j) => (
            <motion.div
              key={j}
              animate={{
                opacity: [0.2, 1, 0.2],
                transition: {
                  duration: 2,
                  repeat: Infinity,
                  delay: Math.random() * 2
                }
              }}
            >
              {getRandomChar()}
            </motion.div>
          ))}
        </motion.div>
      ))}
    </div>
  );
};

export default MatrixBackground;