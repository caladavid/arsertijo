import React from 'react'
import { Link} from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
import { motion as m } from 'framer-motion';

import {navHamburguerItem} from '../animation/Animation';

const MobileNav = ({ setClicked }) => {
    
    const handleClose = () => {
        setClicked(false);
        document.body.style.overflow = 'scroll';
    }

  return (
    <m.ul 
        className='fixed w-full h-full top-0 left-0 flex flex-col justify-center text-center bg-black 
        text-white z-[2] gap-10 text-3xl overflow-hidden'
        variants={navHamburguerItem}
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: "100%", opacity: 1 }}
        transition={{ duration: 0.4 }}
        exit="exit"
    >
        <li>
            <Link to="/" onClick={handleClose}  className="hover:text-blue">Home</Link>
        </li>
        <li>
            <Link to="/works" onClick={handleClose}  className="hover:text-blue">My Works</Link>
        </li>
        <li>
            <HashLink to='/#about' onClick={handleClose} smooth={true} className="hover:text-blue">About</HashLink>
        </li>
        <li>
            <Link to='/contact' onClick={handleClose}  className="hover:text-blue">Contact</Link>
        </li>
    </m.ul>
  )
}

export default MobileNav