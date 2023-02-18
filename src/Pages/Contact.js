import React from 'react'

import { ReactComponent as Hand } from '../icons/Hand.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { motion } from 'framer-motion';
import {faBehance, faInstagram} from '@fortawesome/free-brands-svg-icons'

import ContactForm from '../components/ContactForm';
import Transition from '../animation/Transition';

const Contact = () => {
  return (
    <motion.div className='flex flex-col lg:flex-row white-space py-10 md:py-20 lg:py-40 overflow-hidden'>
      <Transition />
      <div className=' w-full lg:w-1/2 relative font-bold text-center lg:text-left pb-20'>
        <h2 className='text-3xl sm:text-4xl text-[#87A8D0] mb-4'>Contact Me</h2>
        <h3 className='text-4xl py-2 md:pt-0 sm:text-5xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-none'>Let's talk <br/> About You</h3>
        <div
        className='flex text-3xl text-black justify-center lg:justify-start '>
          <a href='https://www.behance.net/arsertijo' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBehance} className='m-3 hover:text-blue'/></a>
          <a href='https://www.instagram.com/arsertijo_artz/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='m-3 hover:text-blue'/></a>
        </div>
        <motion.div 
          className='absolute top-[15%] xl:top-[25%] left-[70%] lg:left-[55%] '
          animate={{translateY: [10, -10, 10]}} 
          transition={{ repeat: Infinity, duration: 1.5}}
        >
          <Hand className='hidden lg:flex w-10/12 xl:w-full'/>
        </motion.div>
      </div>

      <div className='w-full lg:w-1/2 '>
        <ContactForm />
      </div>
    </motion.div>
  )
}

export default Contact