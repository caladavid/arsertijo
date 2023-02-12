import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';

import Contact from "../Pages/Contact";
import Error from "../Pages/Error";
import Home from "../Pages/Home";
import Works from "../Pages/Works";
import WorksDisplay from "../Pages/WorksDisplay";
import WebRedesignDisplay from "../Pages/WebRedesignDisplay";

const AnimatedRoutes = () => {
    const location = useLocation();

  return (
    <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
            <Route exact path='/' element={<Home />} ></Route>
            <Route exact path='/works' element={<Works />} ></Route>
            <Route path='/works/:name' element={<WorksDisplay />} ></Route>
            <Route path='/works/Websites/:name' element={<WebRedesignDisplay />} ></Route>
            <Route path='/contact' element={<Contact />} ></Route>
            <Route path='*' element={<Error />} ></Route>
        </Routes> 
    </AnimatePresence>
  )
}

export default AnimatedRoutes