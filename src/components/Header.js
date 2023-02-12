import React, { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'
import { motion as m } from 'framer-motion'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'

import '../components/styles.css'
import MobileNav from './MobileNav';
import AnimatedNav from './AnimatedNav'

const Header = () => {
    const { pathname } = useLocation();
    const [hoveringItem, setHoveringItem] = useState(null);
    const [clicked, setClicked] = useState(false)

    const handleMouseEnter = item => {
      setHoveringItem(item);
    };
  
    const handleMouseLeave = () => {
      setHoveringItem(null);
    };

    const handleHamburger = () => {
        setClicked(!clicked);
    };


  return (
    <m.header style={{ color: pathname === "/" ? "white" : "#376EB0" }}>
        <div 
            className='flex justify-between py-12 white-space uppercase w-full z-[1] text-xl md:text-2xl mr-10'
            style={{ position: pathname === "/" ? "absolute" : "" }}>
        <Link className='font-bold' to='/'>Arsertijo</Link>

            <nav>
                <div
                    className={`md:hidden overflow-hidden text-right text-xl
                    ${ clicked ? 'fixed right-10 z-10 text-white' : 'z-0 #376EB0' }`}
                    onClick={handleHamburger}>
                    <FontAwesomeIcon 
                        className='text-3xl'
                        icon={clicked ? faTimes : faBars}/>
                </div>

                {clicked && ( <MobileNav setClicked={setClicked}/> )}

                <ul className='hidden md:flex mx-auto menu-item'> 
                    <m.li className='mr-7 relative'
                        onMouseEnter={() => handleMouseEnter("works")}
                        onMouseLeave={handleMouseLeave}
                        style={{ color: hoveringItem === "works" && (pathname === "/" ? "#376EB0" : "black") }}
                    >
                        <AnimatedNav to="/works">My Works</AnimatedNav>
                    </m.li>
                    <m.li className='mr-7 relative'
                        onMouseEnter={() => handleMouseEnter("about")}
                        onMouseLeave={handleMouseLeave}
                        style={{ color: hoveringItem === "about" && (pathname === "/" ? "#376EB0" : "black") }}
                    >
                        <AnimatedNav to='/#about'>About</AnimatedNav>
                    </m.li>
                    <m.li className='mr-7 relative'
                        onMouseEnter={() => handleMouseEnter("contact")}
                        onMouseLeave={handleMouseLeave}
                        style={{ color: hoveringItem === "contact" && (pathname === "/" ? "#376EB0" : "black") }}
                    >
                        <AnimatedNav to='/contact'>Contact</AnimatedNav>
                    </m.li>
                </ul>
            </nav>
        </div>

    </m.header>
  )
}

export default Header
