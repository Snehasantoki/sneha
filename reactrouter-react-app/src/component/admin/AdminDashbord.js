import React from 'react';
import {Container} from 'react-bootstrap';
export const AdminDashbord = () => {
  return (
    <div>
    <section id="admin-content">
    <Container>
        
            <div className="col-md-12 mt-2">
            <h3 className=' d-flex  justify-content-center'>Welcome to Dashboard</h3>
            <div className="row">
           <div className='col-md-3 m-2 bg-danger p-4'>
           <h5 className='text-white'>Total Customer <i className='bi bi-person-add'></i></h5>
           <h2 className='text-center'><span className='badge badge-sm rounded-pill bg-white text-dark'>10</span></h2>
           </div>     

           <div className='col-md-3  m-2 bg-white p-4 shadow'>
           <h5 className='text-dark'>Total Products <i className='bi bi-person-add'></i></h5>
           <h2 className='text-center'><span className='badge badge-sm rounded-pill bg-danger text-dark'>10</span></h2>
           </div>     



           <div className='col-md-3  m-2 bg-info p-4 shadow'>
           <h5 className='text-dark'>Total Orders <i className='bi bi-truck'></i></h5>
           <h2 className='text-center'><span className='badge badge-sm rounded-pill bg-danger text-dark'>10</span></h2>
           </div>     



           <div className='col-md-3 m-2 bg-primary p-4'>
           <h5 className='text-white'>Total Contacts <i className='bi bi-person-add'></i></h5>
           <h2 className='text-center'><span className='badge badge-sm rounded-pill bg-white text-dark'>10</span></h2>
           </div>     

           <div className='col-md-3  m-2 bg-success p-4 shadow'>
           <h5 className='text-dark'>Total Reviews <i className='bi bi-person-add'></i></h5>
           <h2 className='text-center'><span className='badge badge-sm rounded-pill bg-danger text-dark'>10</span></h2>
           </div>     



           <div className='col-md-3  m-2 bg-info p-4 shadow'>
           <h5 className='text-dark'>Total Orders <i className='bi bi-truck'></i></h5>
           <h2 className='text-center'><span className='badge badge-sm rounded-pill bg-danger text-dark'>10</span></h2>
           </div>     


            </div>
    </div>
   
  </Container>
    </section>
    
    </div>
  )
}