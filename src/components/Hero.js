import React, { useRef } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { motion as m } from 'framer-motion';
import { containerText } from '../animation/Animation';

import WebsiteImage from '../assets/works/RediseñoWeb/CityManga/Rediseño pagina.jpg';
import AnimatedTextCharacter from './AnimatedTextCharacter';
import Transition from '../animation/Transition';

import '../components/styles.css'

const Hero = () => {

  const buttonRef = useRef()

  const handleMagnetic = (e) => {
    const position = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;
    buttonRef.current.style.transition = "transform 0.2s ease-out";
    buttonRef.current.style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
  }

  const handleMagneticExit = () => {
    buttonRef.current.style.transition = "transform 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    buttonRef.current.style.transform = "translate(0px, 0px)";
  }

  return (
    <m.div  >
        <div className='bg-gradient-to-b from-black w-full relative h-[50vh] xl:h-[65vh] 2xl:h-[70vh]'>
            <img src={WebsiteImage} alt="Website" className='w-full h-full object-cover absolute mix-blend-multiply rounded-b-[120px] lg:rounded-b-[180px]' />
        </div>
      <Transition />
        <div className=' flex items-center pt-12 xl:pt-10 2xl:py-20 pb-7 md:py-24 white-space overflow-hidden '>
          <div className='w-full lg:w-11/12 overflow-hidden'>
            <m.h1 variants={containerText} initial='hidden' animate='visible' 
                  className='w-full hidden lg:block lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-none text-center uppercase m-auto '>
                    <AnimatedTextCharacter text='express your thoughts '/>
                    <AnimatedTextCharacter text='through designs'/>
            </m.h1>
            <h3 className='text-3xl sm:text-4xl md:text-5xl text-center font-bold leading-none uppercase lg:hidden'>express your thoughts <br/>through designs </h3>
          </div>
            <div className='hidden lg:flex justify-center m-auto md:w-fit btn-magnetic'>
              <Link
                   to="/#projects"
                   smooth
                   ref={buttonRef}
                   onMouseMove={handleMagnetic}
                  onMouseLeave={handleMagneticExit}>
                  <span className='relative inline-block rounded-full p-12 xl:p-16 border-2 bg-black bg-[url("/src/assets/images/nav-bg-fill-blue2.png")]
                              bg-repeat-x bg-[left_calc(0%)_top_calc(-150%)] duration-[0.9s] ease-[cubic-bezier(0.25, 0.1, 0.25, 1.0] hover:bg-center'>
                    <svg className='' width="55.84619px" height="55.846146px" viewBox="0 0 55.84619 55.846146" version="1.1" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                      <g id="Group-99">
                        <g id="Group_99" transform="matrix(0.70710677 0.7071059 -0.7071059 0.70710677 28.047241 0)">
                          <g id="arrow_preferido_2" transform="translate(12.228523 12.582649)">
                            <g id="Group_70">
                              <path d="M9.53675e-07 22.288L0 27.0822L27.085 27.0822L27.0822 0L22.288 9.53675e-07L22.2908 22.288L9.53675e-07 22.288Z" id="Path_63" fill="#F5F5F5" fillRule="evenodd" stroke="none" />
                            </g>
                          </g>
                          <path d="M0 3.96334L3.96334 0L37.1556 33.1923L33.1923 37.1556L0 3.96334Z" id="Rectangle_83" fill="#F5F5F5" fillRule="evenodd" stroke="none" />
                        </g>
                      </g>
                    </svg>
                  </span>               
              </Link>
            </div>
        </div>
    </m.div>
    
  )
}

export default Hero