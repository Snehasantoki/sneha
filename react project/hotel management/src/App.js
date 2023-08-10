import React, { Fragment , useEffect } from 'react';
import NavbarApp from './components/NavbarApp';
import "aos/dist/aos.css"
import AOS from 'aos'
import icon from 'bootstrap-icons/font/bootstrap-icons.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home';
import Hotels from './components/pages/Hotel';
import ErrorPages from './components/pages/ErrorPages';
import Bookings from './components/pages/Bookings';

export default function App() {
    useEffect(() => {
        AOS.init();
      }, []
      )
  return (
    < Fragment>

    <BrowserRouter>
      <Routes> 
         <Route path='/' element={<NavbarApp/>}> 
         <Route index element={<Home/>}/> 
         <Route path='/home' element={<Home/>} /> 
         <Route path='/hotel' element={<Hotels/>}/>   
         <Route path='/Bookings' element={<Bookings/>}/>   

         <Route path='*' element={<ErrorPages />}/>
         </Route>
     </Routes>
    </BrowserRouter>
        
    </Fragment>
  )
}
