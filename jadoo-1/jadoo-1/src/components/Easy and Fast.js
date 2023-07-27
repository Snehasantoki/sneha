import React from 'react'
import o from "./img/Rectangle 17.jpg"
import {
    Container,
    Row,
    Col,
    Card
} from 'react-bootstrap'

export default function Easy() {
  return (
    <>
    
    <Container  className='my-5'>


   <Row>

 

          
        
        <Col lg={6}  className='easy my-5'>
        <div>
            <h4>Easy and Fast</h4>
            <br/>
            <h2>Book your next trip 
            in 3 easy steps</h2>
            <br/>
         </div>
         
         <div className='easy-2'>

         

            <h6><span className='p-5'><i class="bi bi-ui-checks-grid"></i></span>Choose Destination</h6>
            <p className='ms-5'>Lorem ipsum dolor sit amet, consectetur<br/> 
               adipiscing elit. Urna, tortor tempus. </p>
         </div>
        
         
         <div className='easy-2'>

            <h6> <span className='p-5'><i class="bi bi bi-water"></i></span>Choose Destination</h6>
            <p className='ms-5'>Lorem ipsum dolor sit amet, consectetur<br/>
               adipiscing elit. Urna, tortor tempus. </p>
         </div>
         
          <div className='easy-2'>

            <h6> <span className='p-5'><i class="bi bi-car-front"></i></span>Choose Destination</h6>
            <p className='ms-5'>Lorem ipsum dolor sit amet, consectetur<br/>
               adipiscing elit. Urna, tortor tempus. </p>
         </div>

        </Col>
           

        <Col lg={6}>
            <br/>
            <br/>
        <div className='my-5'>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={o}/>
      <Card.Body>
        
        <Card.Title>Trip To Greece</Card.Title>
        <Card.Text>
        14-29 June &nbsp;|&nbsp; by Robbin joseph
        <br/>
        <br/>
        <span><i class="bi bi-snow"></i></span>&nbsp; &nbsp; &nbsp;<span><i class="bi bi-map"></i></span>&nbsp; &nbsp; &nbsp;<span><i class="bi bi-send-fill"></i></span>
        <br/>
        <br/> 
        <span><i class="bi bi-buildings"></i></span>&nbsp;24 people going &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <span><i class="bi bi-suit-heart"></i></span>
        </Card.Text>
        
      </Card.Body>
    </Card>
         </div>
        </Col>

    
    





   </Row>



    </Container>
    
    
    </>
  )
}
