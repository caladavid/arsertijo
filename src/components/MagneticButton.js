import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

import '../components/styles.css'

const MagneticButton = ({ text, to }) => {
  const buttonRef = useRef();

  const handleMagnetic = (e) => {
    const position = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - position.left - position.width / 2;
    const y = e.clientY - position.top - position.height / 2;
    buttonRef.current.style.transition = "transform 0.2s ease-out";
    buttonRef.current.style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)";
  }

  const handleMagneticExit = () => {
    buttonRef.current.style.transition = "transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
    buttonRef.current.style.transform = "translate(0px, 0px)";
  }

  return (
    <div className='p-10 md:p-20'>
        <Link 
            className='inline-block relative btn-magnetic text-xl lg:text-2xl'
            to={to}
            ref={buttonRef}
            onMouseMove={handleMagnetic}
            onMouseLeave={handleMagneticExit}>
            <span className='relative inline-block text-center w-48 lg:w-60 p-2 lg:p-3 rounded-2xl text-blue border-[3px] border-solid border-blue bg-transparent bg-[url("/src/assets/images/liquid.png")]
                       bg-repeat-x bg-[left_calc(0%)_top_calc(-100%)] duration-[0.9s] ease-[cubic-bezier(0.25, 0.1, 0.25, 1.0] hover:bg-center hover:text-white /'>
                { text }
            </span>        
        </Link>
    </div>
  )
}

export default MagneticButton