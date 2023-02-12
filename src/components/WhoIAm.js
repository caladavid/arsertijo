import React from 'react'
import { ReactComponent as Logo } from '../icons/Logo.svg'

import Transition from '../animation/Transition';

const WhoIAm = () => {

  return (
    <section>
      <Transition />
        <div className='flex w-full flex-row-reverse p-10 md:p-20 lg:pt-36' id='about'>
            <div className='hidden md:block w-1/2 align-middle'>
              <Logo className='w-1/2 lg:w-2/5 xl:w-1/3 h-full m-auto '/>
            </div>
            <div className='w-full md:w-1/2 text-left'>
                <h1 className='text-center md:text-left text-6xl md:text-7xl xl:text-title font-bold leading-none pb-8'>
                        <span>Who Am I?</span>
                </h1>
                <p className='text-2xl xl:text-[33px] leading-relaxe md:leading-loose lg:leading-[2.2]'>
                  I'm a passionate and highly creative graphic designer with a keen eye for detail and a mind always on the lookout for new ways to solve visual problems.
                  My goal is to help my clients achieve their goals and get their message across effectively through compelling and timeless designs.
                </p>
            </div>
        </div>
    </section>
  )
}

export default WhoIAm