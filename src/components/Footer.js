import React from 'react'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBehance, faInstagram} from '@fortawesome/free-brands-svg-icons'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'

const today = new Date();
const backToTop = () => {
  window.scrollTo({
    top:0,
    behavior: 'smooth',
  });
};

const Footer = () => {
  return (
    <footer className='grid grid-cols-3 white-space py-12 px-5 sm:px-20'>
        <div className='text-base sm:text-lg md:text-xl text-center md:text-left'>
            <p>© {today.getFullYear()}</p>
            <h1>Arsertijo</h1>
        </div>

        <div
        className='flex justify-center text-center text-3xl text-black'>
          <a href='https://www.behance.net/arsertijo' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faBehance} className='m-3 hover:text-blue'/></a>
          <a href='https://www.instagram.com/arsertijo_artz/' target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className='m-3 hover:text-blue'/></a>
        </div>
      
        <div className='flex justify-end cursor-pointer hover:text-blue text-lg md:text-xl' onClick={backToTop}>
            <p className='mx-auto md:m-3 hidden md:block'>Back to top</p>
            <FontAwesomeIcon icon={faArrowRight}
             className='mx-auto md:mx-3 my-4 rotate-[270deg]'
            />
        </div>
    </footer>
  )
}

export default Footer