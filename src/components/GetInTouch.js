import React from 'react'
import { Link } from 'react-router-dom'

const GetInTouch = () => {
  return (
    <section>
        <div className='text-center white-space py-40 overflow-hidden'>
            <h2 className='text-2x1 md:text-3xl'>Let's work together</h2>
            <h1 className='text-5xl sm:text-6xl md:text-7xl 2xl:text-8xl font-bold touchBtn'>
              <Link to='/contact'
                    className='hover-line '>GET IN TOUCH</Link>
            </h1>
        </div>
    </section>
  )
}

export default GetInTouch