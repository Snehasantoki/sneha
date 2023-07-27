import React from 'react'
import q from "./img/c/image 27.png"
import w from "./img/c/image 28.png"
import e from "./img/c/image 29.png"

import t from "./img/c/image 30.png"
import y from "./img/c/image 31.png"
import {
    Container,
    Row,
    Col

} from 'react-bootstrap'

export default function Logo() {
  return (
    <>
           <br/>
           <br/>
           <br/>
      <Container  className='my-5 ms-auto'>

        <Row>
        <Col lg={2} className='my-1 p-1 log text-center'>
         
             <div>

                  <img src={q} />

             </div>
        
        </Col >

        
        <Col lg={3} className='my-2 p-1 log text-center'>
         
             <div>

                  <img src={w} />

             </div>
        
        </Col>

        
        <Col lg={2} className='my-2 p-2 log p2 text-center'>
         
             <div>

                  <img  src={e} />

             </div>
             &nbsp;
        
        </Col>

        
        <Col lg={2} className='my-4 p-2 log p1 text-center' >
         
             <div>

                  <img src={t} />

             </div>
        
        </Col>

        
        <Col lg={2} className='my-4 p-1 log p  text-center'>
         
             <div>

                  <img src={y} />

             </div>
        
        </Col>
        </Row>


      </Container>
    
    
    
    </>
  )
}
