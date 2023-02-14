import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const ProjectsList = ({ name, src, to }) => {

    const imgRef = useRef()
    const Links = useRef()
    const worksLists = useRef()

    const handleMouse = (e) => {
        const rect = Links.current.getBoundingClientRect();
        imgRef.current.style.left = `${e.clientX - rect.left}px`; 
        imgRef.current.style.top = `${e.clientY - rect.top}px`; 
    }

  return (
    <div className='mx-10 md:mx-20 worksList w-full'
         onMouseMove={handleMouse}
         ref={worksLists}>
        <Link className='relative hover:text-gray-500' 
            to={`${to}`}
            ref={Links}>
            <span className='text-[36px] lg:text-[70px] font-normal py-4'> {name} </span> 
            <img 
                src={require(`../assets/works/General/${src}.jpg`)} 
                alt={name}
                className='w-72 md:w-96 lg:w-[600px] '
                ref={imgRef}/>
        </Link>
    </div>
  )
}

export default ProjectsList