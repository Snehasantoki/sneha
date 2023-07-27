import React from 'react'
import {Link} from 'react-router-dom';
import {Container,Row,Form} from 'react-bootstrap';
export default function AdminDashboard() {
  return (
    <div className='text-dark  admin-dashboard'>
    <div className='bg-white m-0 p-0'>  
    <h3 className='ms-5 fs-6 p-2'>Dashboard</h3>
    <hr className='border border-1 bg-white w-25 mx-auto' />
    </div>
    <Row>
    
    <div className='col-md-3 p-3 ms-5 bg-white mt-5'>
    <button type="button" className="btn btn-primary">
      Total Customers <i className='bi bi-person-add f-3'></i> <span className="badge bg-danger ms-2">4</span>
    </button>
    
    </div>
    
    <div className='col-md-3 p-3 ms-5 bg-white mt-5'>
    <button type="button" className="btn btn-dark">
    Total Products <i className='bi bi-cart f-3'></i><span className="badge bg-danger ms-2">4</span>
  </button>
  </div>
    
    <div className='col-md-3 p-3 ms-5 bg-white mt-5'>
    <button type="button" className="btn btn-info">
    Total Orders <i className='bi bi-truck f-3'></i><span className="badge bg-danger ms-2">4</span>
  </button>
  </div>
    
    
    <div className='col-md-3 p-3 ms-5 bg-white mt-5'>

    <button type="button" className="btn btn-success">
    Manage Feedback <i className='bi bi-book f-3'></i><span className="badge bg-danger ms-2">4</span>
    </button>
    </div>
    
    <div className='col-md-3 p-3 ms-5 bg-white mt-5'>
    <button type="button" className="btn btn-warning">
    Manage Reviews <i className='bi bi-comment f-3'></i><span className="badge bg-danger ms-2">4</span>
    </button></div>
    
    <div className='col-md-3 p-3 ms-5 bg-white mt-5'>
    <button type="button" className="btn btn-danger">
    Manage Notifications <i className='bi bi-bell f-3'></i><span className="badge bg-danger ms-2">4</span>
    </button>
    </div>
    
    
    </Row>
    </div>
  )
}
