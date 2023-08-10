import React from 'react'
import j from "./img/Image.png"
import {
    Container,
    Row,
    Col
} from 'react-bootstrap'

export default function About () {
  return (
    <>
     
     <Container>
  
       <Row>
        
        <Col lg={6}>
            <div className='test'>
           <h6>Testimonials</h6>
           <h1>What people say about Us.</h1>
           </div>


        </Col>
        <Col lg={6}>
           <div className='painted'>
           <img src={j} className='image'/>
            <div className='on shadow'>
                <p>
                    
                “On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”
                <br/>
                <br/>
                <h5>Mike taylor</h5>

                U.S
                
                </p>

                <div className='chris shadow'>
                <p>
                    <h5>Chris Thomas</h5>

                    CEO of Red Button
                </p>
            </div>
            </div>
            

            </div>
        
        </Col>
        
        
     </Row>  

     </Container>
    
    
    
    </>
  )
}
