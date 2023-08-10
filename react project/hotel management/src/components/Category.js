import React from 'react'
import d from "./img/icon/Group 48.png"
import p from "./img/icon/Group 51.png"
import m from "./img/icon/Group 50.png"
import s from "./img/icon/Group 49.png"

import {

    Container,
    Row,
    Col,
    Card,
    Button

} from 'react-bootstrap'



export default function Category() {

    



    return (
        <> 
      
            <Container  className='py-5' >
                        <div className='text-center my-3 py-3 CATEGORY'>
                            <h4>CATEGORY</h4>
                            <h2>We Offer Best Services</h2>
                        </div>

                        
                <Row className='gridrow'> 
                            <Col className='d-flex justify-content-center align-items-center bg-white shadow cad' data-aos="fade-up"
     data-aos-duration="1000">
                                
                                <Card className='card1 my-5' >
                                    <Card.Img src={d} />

                                    <Card.Title>Calculated Weather</Card.Title>
                                    <br />

                                    <Card.Text>
                                        Built Wicket longer
                                        admire do barton
                                        vanity itself do in it.
                                    </Card.Text>

                                </Card>
                               
                            </Col>
                            <Col  className='d-flex justify-content-center align-items-center bg-white shadow cad' data-aos="fade-up"
     data-aos-duration="1000">
                                <Card className='card2 my-5'>
                                    <Card.Img src={p} />

                                    <Card.Title>Best Flights</Card.Title>
                                    <br />
                                    <Card.Text>
                                        Engrossed listening.
                                        Park gate sell they
                                        west hard for the.
                                    </Card.Text>
                                </Card>
                            </Col>

                            <Col className='d-flex justify-content-center align-items-center bg-white shadow cad' data-aos="fade-up"
     data-aos-duration="1000">
                                <Card className='card1 my-5'>
                                    <Card.Img src={m} />

                                    <Card.Title>Local Events</Card.Title>
                                    <br />
                                    <Card.Text>
                                        Barton vanity itself
                                        do in it. Preferd to
                                        men it engrossed listening.
                                    </Card.Text>


                                </Card>
                            </Col>

                            <Col className='d-flex justify-content-center align-items-center bg-white shadow cad' data-aos="fade-up"
     data-aos-duration="1000">
                                <Card className='card1 my-5'>
                                    <Card.Img src={s} />

                                    <Card.Title>Customization</Card.Title>
                                    <br />
                                    <Card.Text>
                                        We deliver outsourced
                                        aviation services for
                                        military customers
                                    </Card.Text>


                                </Card>
                            </Col>
                            
                </Row>
            </Container>

       

        </>
    )
}
