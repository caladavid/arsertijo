import React from 'react'
import '../components/styles.css'

const Hamburger = ({ isOpen }) => {
  return (
    <div className='w-8 h-8 flex justify-between flex-col flex-nowrap z-10'>
        <div className='w-8 h-[0.25rem] border rounded-[10px] bg-black burger'
          style={{ transform:  isOpen ? 'rotate(45deg)' : 'rotate(0)'}}/>

        <div className='w-8 h-[0.25rem] border rounded-[10px] bg-black burger'
          style={{ transform:  isOpen ? 'translateX(100%)' : 'translateX(0)', opacity: isOpen ? 0 : 1}}/>
        
        <div className='w-8 h-[0.25rem] border rounded-[10px] bg-black burger'
         style={{ transform:  isOpen ? 'rotate(-45deg)' : 'rotate(0)'}}/>
    </div>
  )
}

export default Hamburger