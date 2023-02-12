import React from 'react'
import { motion as m } from 'framer-motion';

import ProjectsList from '../components/ProjectsList';
import Transition from '../animation/Transition';


const Works = () => {
  return (
    <m.section>
      <Transition />
      <div>
        <div className='text-center py-20 lg:py-40 white-space'>
          <h1 className='text-6xl md:text-7xl lg:text-title font-bold text-blue '>WORKS</h1>
          <h2 className='text-center text-2xl md:text-3xl lg:text-4xl'>Works that I did through these years</h2>
        </div>

        <div  className='overflow-hidden py-10 lg:pt-20 '>
          <hr className='line-projects'/>
          <ProjectsList 
            name='Thumbnails'
            src='Thumbnails'
            to={"/works/Thumbnails"}/>
          <hr className='line-projects'/>
          <ProjectsList
            name='Stream Overlays'
            src='Stream overlays'
            to={"/works/Stream Overlays"}/>
          <hr className='line-projects'/>
          <ProjectsList
            name='Album Covers'
            src='Cover music'
            to={"/works/Album Covers"}/>
          <hr className='line-projects'/>
          <ProjectsList
            name='Websites'
            src='Rediseño pagina'
            to={"/works/Websites"}/>
          <hr className='line-projects'/>
        </div>
      </div>
    </m.section>
  )
}

export default Works