import React from 'react';
import {Link} from 'react-router-dom';
import {Container,Row,Form} from 'react-bootstrap';
export default function AdminSidebar() {
  return (
    
    <div>
      
     <div className='bg-primary sidebar text-white'>
     <h3 className='ms-0 fs-4 text-center'>Admin Sidebar</h3>
     <hr className='border border-1 bg-white w-25 mx-auto' />

     <ul className="navbar-link ms-5">

     <li className="nav-link"><Link to="/admin-login/manage-customer"><i className='bi bi-person-add p-1 bg-danger text-white rounded-pill'></i> Manage customer</Link></li>

     <li className="nav-link dropdown"><Link to="#" data-bs-toggle="dropdown" className="dropdown-toggle"><i className='bi bi-cart p-1 bg-warning text-white rounded-pill'></i> Add Category</Link>

     <ul className='dropdown-menu p-3 bg-white'>
     <li className="nav-link"><Link to="/admin-login/addcategory"><i className='bi bi-cart p-1 bg-warning text-white rounded-pill'></i> Add Category</Link></li>

     <li className="nav-link"><Link to="/admin-login/managecategory"><i className='bi bi-cart p-1 bg-warning text-white rounded-pill'></i> Manage Category</Link></li>
     </ul>
     </li>

     <li className="nav-link dropdown"><Link to="#" data-bs-toggle="dropdown" className="dropdown-toggle"><i className='bi bi-cart p-1 bg-warning text-white rounded-pill'></i> Add SubCategory</Link>

     <ul className='dropdown-menu p-3 bg-white'>
     <li className="nav-link"><Link to="/admin-login/addsubcategory"><i className='bi bi-cart p-1 bg-warning text-white rounded-pill'></i> Add SubCategory</Link></li>

     <li className="nav-link"><Link to="/admin-login/managesubcategory"><i className='bi bi-cart p-1 bg-warning text-white rounded-pill'></i> Manage SubCategory</Link></li>
     </ul>
     </li>
     <li className="nav-link dropdown"><Link to="#" data-bs-toggle="dropdown" className="dropdown-toggle"><i className='bi bi-cart p-1 bg-warning text-white rounded-pill'></i> Add Products</Link>

     <ul className='dropdown-menu p-3 bg-white'>
     <li className="nav-link"><Link to="/admin-login/addproducts"><i className='bi bi-cart p-1 bg-warning text-white rounded-pill'></i> Add Products</Link></li>

     <li className="nav-link"><Link to="/admin-login/manageproducts"><i className='bi bi-cart p-1 bg-warning text-white rounded-pill'></i> Manage Products</Link></li>
     </ul>
     </li>
     <li className="nav-link"><Link to="/admin-login/manageorder"><i className='bi bi-truck p-1 bg-warning text-white rounded-pill'></i> Manage orders</Link></li>

     <li className="nav-link"><Link to="/admin-login/managecontact"><i className='bi bi-phone p-1 bg-primary text-white rounded-pill'></i> Manage Contacts</Link></li>

     
     <li className="nav-link"><Link to="/admin-login/managefeedback"><i className='bi bi-command p-1 bg-secondary text-white rounded-pill'></i> Manage Feedback</Link></li>

     <li className="nav-link"><Link to="/mens-products" className='btn btn-danger text-white'>Logout Admin <i className='bi bi-power ms-1 p-1 bg-danger text-white rounded-pill'></i></Link></li>     
   </ul>

   </div>

    </div>
  )
}
