import React from 'react'

import '../components/styles.css'

   const LightBox = ({ clickedImg, setClickedImg, handleNext, handlePrev }) => { 

    const handleClick = e => {
        if (e.target.classList.contains('dismiss')) {
            setClickedImg(null)
        }
    } 

  return (
    <>
      <div className='dismiss fixed flex top-0 left-0 w-full h-full backdrop-blur-[2px] bg-[rgba(0,0,0,.8)] z-[1]' 
        onClick={handleClick}>
            <img src={clickedImg}
                alt={clickedImg}
                className='max-w-[90%] lg:max-w-[60%] m-auto'
            />
        <span className='dismiss absolute top-10 right-10 lg:right-20 text-white text-5xl lg:text-7xl cursor-pointer' 
              onClick={handleClick}>&times;</span>
              
        <div className='flex absolute top-1/2 right-10 lg:right-20 cursor-pointer '
            onClick={handleNext}>
          <svg className='-rotate-90 btn-svg-right ' width="55.84619px" height="55.846146px" viewBox="0 0 55.84619 55.846146" version="1.1" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
            <g id="Group-99">
              <g id="Group_99" transform="matrix(0.70710677 0.7071059 -0.7071059 0.70710677 28.047241 0)">
                <g id="arrow_preferido_2" transform="translate(12.228523 12.582649)">
                  <g id="Group_70">
                    <path  d="M9.53675e-07 22.288L0 27.0822L27.085 27.0822L27.0822 0L22.288 9.53675e-07L22.2908 22.288L9.53675e-07 22.288Z" id="Path_63" fill="#F5F5F5" fillRule="evenodd" stroke="black" />
                  </g>
                </g>
                <path className='z-10' d="M0 3.96334L3.96334 0L37.1556 33.1923L33.1923 37.1556L0 3.96334Z" id="Rectangle_83" fill="#F5F5F5" fillRule="evenodd" stroke="black" />
              </g>
            </g>
          </svg>
        </div>

        <div className='flex absolute top-1/2 left-10 lg:left-20  cursor-pointer text-white'
            onClick={handlePrev}>
          <svg className='rotate-90 btn-svg-left ' width="55.84619px" height="55.846146px" viewBox="0 0 55.84619 55.846146" version="1.1" xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
            <g id="Group-99">
              <g id="Group_99" transform="matrix(0.70710677 0.7071059 -0.7071059 0.70710677 28.047241 0)">
                <g id="arrow_preferido_2" transform="translate(12.228523 12.582649)">
                  <g id="Group_70">
                    <path d="M9.53675e-07 22.288L0 27.0822L27.085 27.0822L27.0822 0L22.288 9.53675e-07L22.2908 22.288L9.53675e-07 22.288Z" id="Path_63" fill="#F5F5F5" fillRule="evenodd" stroke="black" />
                  </g>
                </g>
                <path d="M0 3.96334L3.96334 0L37.1556 33.1923L33.1923 37.1556L0 3.96334Z" id="Rectangle_83" fill="#F5F5F5" fillRule="evenodd" stroke="black" />
              </g>
            </g>
          </svg>
        </div>
      </div> 
    </>
  )
}



export default LightBox