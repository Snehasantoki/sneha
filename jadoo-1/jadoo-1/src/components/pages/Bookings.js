import React from 'react'
import Footer from '../Footer'
import {
    Container,
    Row,
    Col,
    InputGroup,
    Form,
    Control,
    Button

} from 'react-bootstrap'

export default function Bookings() {
  return (
    <>
       
       <Container>
         <Row>
           <Col>
           
              <div className='main-eamil'>
                <span><i class="bi bi-send-fill"></i></span>

                <div className='eamil text-center'>

                    <h1> 
                    Subscribe to get information, latest news and other interesting offers about Jadoo.

                    </h1>
                    <div  className='d-flex'>
                    <Form >
      <Form.Group className="eamil-2 bg-white" controlId="formBasicEmail">
      
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted "></Form.Text>
        

      </Form.Group>
     
      </Form>

      <Button className='btn1 ms-2'  type="submit">
      Subscribe
      </Button>
      </div>
                </div>


              </div>
           
           </Col>        
  
        </Row>

       </Container>
    
     <Footer />
    </>
  )
}
