import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion';

import WebRedesignList from '../helpers/WebRedesignList';
import MagneticButton from '../components/MagneticButton';


const WebRedesignDisplay = () => {
    const { name } = useParams()

    useEffect(() => {
      const images = document.querySelectorAll('img');
      images.forEach((image) => {
        image.addEventListener('contextmenu', (event) => {
          event.preventDefault();
        });
      });
    }, []);

  return (
    <div>
        <div className='text-center white-space pt-20'>
          <h1 className=' text-4xl sm:text-5xl md:text-6xl lg:text-title font-bold text-blue flex-wrap'>{name}</h1>
          <MagneticButton
            text='Back to websites'
            to={"/works/Websites"}
          />
        </div>

        <div className='grid grid-cols-1 w-[90%] mx-auto my-8'>
       {
        WebRedesignList
        .filter((list) => list.name === name)
        .map((list, index) => (
          <div key={ index }>
            <motion.img 
            className='w-full' src={list.img} key={index} alt={list.desc}
            onContextMenu={(e) => e.preventDefault()}/>
          </div>
        ))
      } 
      </div>
    </div>
  )
}



export default WebRedesignDisplay
