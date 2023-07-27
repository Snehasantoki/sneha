import React from 'react'
import g from "./img/Jadoo.png"
import {
    Container,
    Row,
    Col

} from 'react-bootstrap'


export default function Footer() {
  return (
    <>
      <br/>
            <br/>
            <br/>
            <br/>
     <Container className='my-5'>
        <Row>
           
         <Col lg={3}>
           <img src={g} />
           <br/>
           <br/>
           <b>
           Book your trip in minute, get full
           Control for much longer.

           </b>
            
         
         </Col>
         <Col lg={2}>
         <b>
           Company

        </b>
           
           <br/>
           <br/>
           <p>
           About
           <br/>
           <br/>
           Careers
           <br/>
           <br/>
           Mobile
           </p>
           
            
         
         </Col>
         <Col lg={2}>
         <b>
         Contact

        </b>
           
           <br/>
           <br/>
           <p>
           Help/FAQ
           <br/>
           <br/>
           Press
           <br/>
           <br/>
           Affilates
           </p>
           
            
         
         </Col>

         <Col lg={2}>
         <b>
         More

        </b>
           
           <br/>
           <br/>
           <p>
           Airlinefees
           <br/>
           <br/>
           Airline
           <br/>
           <br/>
           Low fare tips
           </p>
           
            
         
         </Col>

         <Col lg={3}>
            <br/>
            <br/>
             <div className='icon1'>
            <span ><i  class="bi bi-instagram">Instagram</i>&nbsp;&nbsp;&nbsp;&nbsp;<i class="bi bi-whatsapp">Whatsapp</i></span>
            
            
            </div>
         

         
         </Col>

        </Row>


     </Container>
    
    
    </>
  )
}
