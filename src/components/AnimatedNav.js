import React from 'react'

import { Link } from 'react-router-dom';
import { motion, useMotionValue, useTransform } from "framer-motion";
import { HashLink } from 'react-router-hash-link';

const AnimatedNav = ({ to, children }) => {
    const words = children.split("");
  
    const x = useMotionValue(0);
    const y = useTransform(x, [0, 100], [0, -100]);
  
    return to === '/#about' ? (
        <HashLink to={to} className="menu-item">
          <motion.div style={{ x, y }}>
            {words.map((word, index) => (
              <span key={index} style={{ "--index": `${index}` }}>
                {word === " " ? "\u00A0" : word}
              </span>
            ))}
          </motion.div>
          <motion.div
            style={{
              x,
              y: y - 100,
              position: "absolute",
              left: 0,
              top: 0,
            }}
          >
            {words.map((word, index) => (
              <span key={index} style={{ "--index": `${index}` }}>
                {word === " " ? "\u00A0" : word}
              </span>
            ))}
          </motion.div>
        </HashLink>
      ) : (
        <Link to={to} className="menu-item">
          <motion.div style={{ x, y }}>
            {words.map((word, index) => (
              <span key={index} style={{ "--index": `${index}` }}>
                {word === " " ? "\u00A0" : word}
              </span>
            ))}
          </motion.div>
          <motion.div
            style={{
              x,
              y: y - 100,
              position: "absolute",
              left: 0,
              top: 0,
            }}
          >
            {words.map((word, index) => (
              <span key={index} style={{ "--index": `${index}` }}>
                {word === " " ? "\u00A0" : word}
              </span>
            ))}
          </motion.div>
        </Link>
      );
    };

export default AnimatedNav