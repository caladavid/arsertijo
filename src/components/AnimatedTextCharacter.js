import React from "react";
import { motion } from "framer-motion";

const AnimatedTextCharacter = ({ text }) => {
  const letters = Array.from(text);


  const item = {
    hidden: {
      y: "200%",
      transition: { 
        ease: [0.455, 0.03, 0.515, 0.955], 
        duration: 0.80,
        type: "spring",
        damping: 12,
        stiffness: 50 
      }
    },
    visible: {
      y: 0,
      transition: { 
        ease: [0.455, 0.03, 0.515, 0.955], 
        duration: 0.40,
        type: "spring",
        damping: 12,
        stiffness: 50 
      }
    }
  };

  return (
    <div className="overflow-hidden flex justify-center lg:justify-start">
      {letters.map((letter, index) => (
        <motion.span variants={item} className='inline-block' key={index}>
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </div>
  );
};

export default AnimatedTextCharacter;