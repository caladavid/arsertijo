import React from 'react'

import { motion as m } from 'framer-motion'
import { TransAnimation } from './Animation'
import { textContainer } from './Animation'

const Transition = () => {

  return (
    <m.div className=' w-screen h-screen inset-0 fixed bg-black overflow-hidden z-[2]'
      variants={TransAnimation}
      initial="initial"
      animate="animate">
        <m.span className='absolute z-50 flex top-1/2 left-1/2 text-white font-bold text-2xl translate-y-[-50%] translate-x-[-50%]' 
           variants={textContainer}>
            <m.span>Arsertijo</m.span>  
        </m.span> 
    </m.div>
  )
}



export default Transition