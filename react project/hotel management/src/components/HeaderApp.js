import React from 'react'


import {
    Container,
    Headr,
    Button,
    Row,
    Col
   

} from 'react-bootstrap'


export default function HeaderApp() {
  return (
    <>
      

     <div className='headr' id='home'>
        
        <Container>
            <Row>

            <Col className='col-lg-12'>
        
         <div className='font col-lg-6'>
           <h1>Best Destinations around the world</h1>
           <br/>

           <h2>Travel, enjoy
             and <br/>live a new
             and full life</h2>

             <br/>

             <p>Built Wicket longer admire do barton vanity itself do in it. <br/>Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
           </div>

        

                       
             <div className='btn my-2'>
            
             <Button variant='warning' className='px-5 p-2'>Find out more</Button>
             
               
           <i class="bi bi-caret-right-fill pal1"></i>
             
            
           </div>

           
            

          

            </Col>
            </Row>
            



        </Container>
        


     </div>
    
    
    </>
  )
}
