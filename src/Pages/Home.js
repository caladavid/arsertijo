import React from 'react';

import GetInTouch from '../components/GetInTouch';
import Hero from '../components/Hero';
import Process from '../components/Process';
import Projects from '../components/Projects';
import WhoIAm from '../components/WhoIAm';

import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.main>
      <Hero />   
      <Projects />
      <Process />
      <WhoIAm />
      <GetInTouch />
    </motion.main>
  )
}

export default Home