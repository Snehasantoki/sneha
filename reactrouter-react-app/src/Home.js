import React from 'react'

import SliderApp from './components/client/SliderApp'
import OurAbout from './components/client/OurAbout'
import Choosing from './components/client/Choosing'
import OurServices from './components/client/OurServices'
import OurProject from './components/client/OurProject'
import OurTeam from './components/client/OurTeam'
import TestiMonials from './components/client/TestiMonials'
import Footer from './components/client/Footer'

function Home() {
  return (
    <>
    <SliderApp />
     <OurAbout />
     <Choosing />
     <OurServices />
     <OurProject />
     <OurTeam />
     <TestiMonials />
     <Footer />
    </>
  )
}

export default Home;