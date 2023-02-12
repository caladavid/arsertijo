import React from 'react'
import MagneticButton from './MagneticButton'
import ProjectsList from './ProjectsList'
import { motion as m } from "framer-motion";

import '../components/styles.css'

const Projects = () => {
  
  return (
    <div>
        <div className='w-full flex-col lg:flex-row flex items-center white-space pt-10' id='projects'>
          <m.h1 className='pb-5 text-6xl md:text-7xl lg:text-title font-bold lg:pr-20'>
            Projects
          </m.h1>
          <h2 className=' text-center text-2xl md:text-3xl lg:text-4xl lg:text-left'>Works that I did through these years</h2>
        </div>

        <div className='overflow-hidden lg:pt-20 py-10'> 
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

          <MagneticButton
            className='px-44'
            text='More Works'
            to={"/works"}/>
            
        </div>  

        <div class="max-w-full overflow-hidden">
          <div className="marquee">
            <p className='uppercase font-bold text-blue text-6xl xl:text-7xl 2xl:text-8xl'>
              &nbsp;process&nbsp;●&nbsp;process&nbsp;●&nbsp;process&nbsp;●&nbsp;process&nbsp;●&nbsp;process&nbsp;●&nbsp;process&nbsp;●
            </p>
            <p className='uppercase font-bold text-blue text-6xl xl:text-7xl 2xl:text-8xl'>
              &nbsp;process&nbsp;●&nbsp;process&nbsp;●&nbsp;process&nbsp;●&nbsp;process&nbsp;●&nbsp;process&nbsp;●&nbsp;process&nbsp;●
            </p>
          </div>
        </div>
    </div>
  )
}

export default Projects
