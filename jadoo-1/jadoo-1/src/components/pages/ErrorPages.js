 import React from 'react'
 import error from "./../img/c/404.gif"
 import {

    Container

 } from 'react-bootstrap'
 
 export default function ErrorPages() {
   return (
     <>
        <Container>
        <div>
             <img className='img-fluid' src={error} alt='error' />
        </div>
        </Container>
     
     </>
   )
 }
 