import React from 'react'

const Process = () => {
  return (
    <section>
        <div className='overflow-hidden p-10 md:p-20 m-auto gap-10 grid auto-cols-auto md:grid-cols-2 lg:grid-cols-3 '>
            <div className='process'>
                <span className='absolute top-[-1.8rem] right-[-0.5px] lg:right-0 text-2xl lg:text-[3rem] w-16 text-center leading-[3.5rem] border-4 border-blue rounded-[50%] bg-white text-blue'>1</span>
                <h1 className='font-bold text-3xl mb-4'>Brief</h1>
                <p className='text-lg lg:text-2xl'>Clients briefs us of what they want 
                and need. Project timelines are being 
                as well.</p>
            </div>
            <div className='process'>
                <span className='absolute top-[-1.8rem] right-[-0.5px] lg:right-0 text-2xl lg:text-[3rem] w-16 text-center leading-[3.5rem] border-4 border-blue rounded-[50%] bg-white text-blue'>2</span>
                <h1 className='font-bold text-3xl mb-4'>Research</h1>
                <p className='text-lg lg:text-2xl'>Research and project investigation, 
                business goals, areas of opportunities 
                and improvements, mood boards, 
                visual references.</p>
            </div>
            <div className='process'>
                <span className='absolute top-[-1.8rem] right-[-0.5px] lg:right-0 text-2xl lg:text-[3rem] w-16 text-center leading-[3.5rem] border-4 border-blue rounded-[50%] bg-white text-blue'>3</span>
                <h1 className='font-bold text-3xl mb-4'>Client Review</h1>
                <p className='text-lg lg:text-2xl'>I present sketches to client. The Client
                may wish to change elements.</p>
            </div>
            <div className='process'>
                <span className='absolute top-[-1.8rem] right-[-0.5px] lg:right-0 text-2xl lg:text-[3rem] w-16 text-center leading-[3.5rem] border-4 border-blue rounded-[50%] bg-white text-blue'>4</span>
                <h1 className='font-bold text-3xl mb-4'>Visual Style</h1>
                <p className='text-lg lg:text-2xl'>A few concepts of general style, 
                after visual style is confirmed I apply 
                it to the rest of the project.</p>
            </div>
            <div className='process'>
                <span className='absolute top-[-1.8rem] right-[-0.5px] lg:right-0 text-2xl lg:text-[3rem] w-16 text-center leading-[3.5rem] border-4 border-blue rounded-[50%] bg-white text-blue'>5</span>
                <h1 className='font-bold text-3xl mb-4'>Production</h1>
                <p className='text-lg lg:text-2xl'>Final execution of the approved idea.</p>
            </div>
            <div className='process'>
                <span className='absolute top-[-1.8rem] right-[-0.5px] lg:right-0 text-2xl lg:text-[3rem] w-16 text-center leading-[3.5rem] border-4 border-blue rounded-[50%] bg-white text-blue'>6</span>
                <h1 className='font-bold text-3xl mb-4'>Delivery</h1>
                <p className='text-lg lg:text-2xl'>That's it! now it's time party and celebrate.</p>
            </div>
        </div>
    </section>
  )
}

export default Process