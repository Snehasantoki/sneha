import React from 'react'
import c from "./img/selle/Rectangle 14.jpg"
import d from "./img/selle/Rectangle 14 (1).png"
import e from "./img/selle/Rectangle 14.png"
import {

    Container,
    Row,
    Col,
    Card

} from "react-bootstrap"

export default function Destinations() {
  return (
    <>
    
     <Container>


        <div className='text-center CATEGORY my-5'>
           
           <h4>Top Selling</h4>
           <h2>Top Destinations</h2>

        </div>


        <Row className='gridrow-1'>

            <Col className='d-flex justify-content-center align-items-center bg-white shadow sell' data-aos="fade-up"
     data-aos-duration="1000">
              

              <Card className='selling-card my-2'>
                
                <Card.Img src={d} />
                <Card.Title>Rome, Italty&nbsp; &nbsp; &nbsp; &nbsp;$5,42k</Card.Title>
                <br/><br/>
                <Card.Text>
                    
                <i class="bi bi-tags-fill"></i>10 Days Trip
                </Card.Text>
                
             </Card>    
              
            
            </Col>


            <Col className='d-flex justify-content-center align-items-center bg-white shadow sell' data-aos="fade-up"
     data-aos-duration="1000">
              

              <Card className='selling-card my-2'>
                
                <Card.Img src={c} />
                <Card.Title>London, UK&nbsp; &nbsp; &nbsp; &nbsp;$4,2k</Card.Title>
                <br/><br/>
                <Card.Text>
                <i class="bi bi-tags-fill"></i>12 Days Trip
                </Card.Text>
                
             </Card>    
              
            
            </Col>



            <Col className='d-flex justify-content-center align-items-center bg-white shadow sell' data-aos="fade-up"
     data-aos-duration="1000">
              

              <Card className='selling-card my-2'>
                
                <Card.Img src={e} />
                
                <Card.Title>Full Europe&nbsp; &nbsp; &nbsp; &nbsp;$15k</Card.Title>
                <br/><br/>
                <Card.Text>
                <i class="bi bi-tags-fill"></i>28 Days Trip
                </Card.Text>
                
             </Card>    
              
            
            </Col>


        </Row>

     </Container>
    
    
    
    
    </>
  )
}
