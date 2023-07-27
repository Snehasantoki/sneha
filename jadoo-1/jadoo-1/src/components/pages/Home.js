import React from 'react'
import HeaderApp from '../HeaderApp'
import Category from '../Category';
import Destinations from '../Top Destinations';
import Easy from '../Easy and Fast';
import About from '../About';
import Logo from '../Logo';
import Email from '../Email';
import Footer from '../Footer';

import { Navbar } from 'react-bootstrap';

const Home = () => {
  return (
    <>
  
    <HeaderApp />
    <Category />
    <Destinations />
    <Easy />
    <About />
    <Logo />
    <Email />
    <Footer />
    </>
  )
}

export default Home ;