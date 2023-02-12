import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import worksList from '../helpers/WorksList';
import MagneticButton from '../components/MagneticButton';
import LightBox from '../components/LightBox';
import Transition from '../animation/Transition';


const WorksDisplay = () => { 
    const { name } = useParams()

    const [clickedImg, setClickedImg] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(null);

     const handleClick = (list, index) => {
      setCurrentIndex(index)
      setClickedImg(list.image)
    } 

    // next btn
    const handleNext = () => {

      const filteredList = worksList.filter((list) => list.name === name);

      const totalLength = filteredList.length;
      if (currentIndex +1 >= totalLength) {
        setCurrentIndex(0);

        const newUrl = filteredList[0].image;
        setClickedImg(newUrl)
        return;
      }
      const newIndex = currentIndex + 1;
      const newUrl = filteredList.filter(( item ) => {
        return filteredList.indexOf(item) === newIndex;
      });
      const newItem = newUrl[0].image;
      setClickedImg(newItem);
      setCurrentIndex(newIndex);
    };

    // Prev btn
    const handlePrev = () => {

      const filteredList = worksList.filter((list) => list.name === name);

      const totalLength = filteredList.length;
      if (currentIndex === 0) {
        setCurrentIndex(totalLength-1);

        const newUrl = filteredList[totalLength -1].image;
        setClickedImg(newUrl)
        return;
      }
      const newIndex = currentIndex - 1;
      const newUrl = filteredList.filter(( item ) => {
        return filteredList.indexOf(item) === newIndex;
      });
      const newItem = newUrl[0].image;
      setClickedImg(newItem);
      setCurrentIndex(newIndex);
    };


    // Prevent people download the images
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
        <div className='text-center white-space pt-10 lg:pt-20'>
          <Transition />
          <h1 className='text-5xl sm:text-6xl md:text-7xl lg:text-title font-bold text-blue'>{name}</h1>
          <MagneticButton
            text='Back to works'
            to={"/works"}
          />
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 w-[90%] mx-auto my-8 gap-4'>
          {
            worksList
            .filter((list) => list.name === name)
            .map((list, index) => {
              return list.name === "Websites" ? (
                <div key={index}>
                  <Link to={`/works/Websites/${list.desc}`}>
                    <motion.img
                      whileHover={{
                        scale: 0.95,
                        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                        transition: "all 0.2s ease",
                        opacity: 0.8,
                      }}
                      className="w-full"
                      src={list.image}
                      key={index}
                      alt={list.desc}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </Link>
                </div>
              ) : (
                <div key={index}>
                  <motion.img
                    whileHover={{
                      scale: 0.95,
                      boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
                      transition: "all 0.2s ease",
                      opacity: 0.8,
                    }}
                    className="w-full cursor-pointer"
                    src={list.image}
                    key={index}
                    alt={list.desc}
                    onContextMenu={(e) => e.preventDefault()}
                    onClick={() => handleClick(list, index)}
                  />
                </div>
                
                );
              })
            } 
          
            {clickedImg && (
            <LightBox 
              clickedImg={clickedImg}
              setClickedImg={setClickedImg}
              handleNext={handleNext}
              handlePrev={handlePrev}
            />)}
      </div>
    </div>
  )
}

export default WorksDisplay

