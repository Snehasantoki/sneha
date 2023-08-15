import React from 'react'
import { Link } from 'react-router-dom'


export const AdminSidebar = () => {
  return (
   
    <div>   
    <div className='bg-blue sidebar text-white pt-4'>
    <h3 className='ms-0 fs-4 text-center'>Admin Sidebar</h3>
    <hr className='border border-1 bg-white w-25 mx-auto' />
    <ul className="navbar-link ms-5">
    <li className="nav-link"><Link to="/admin-login/manage-customer"><i className='bi bi-person-add p-1 bg-danger text-white rounded-pill'></i> Manage customer</Link></li>
    <li className="nav-link"><Link to="/admin-login/addcategory"><i className='bi bi-cart p-1 bg-warning text-white rounded-pill'></i> Add Category</Link></li>
    <li className="nav-link"><Link to="/admin-login/addsubcategory"><i className='bi bi-cart p-1 bg-success text-white rounded-pill'></i> Add SubCategory</Link></li>
    <li className="nav-link"><Link to="/admin-login/addproducts"><i className='bi bi-cart p-1 bg-dark text-white rounded-pill'></i> Add Products</Link></li> 
    <li className="nav-link"><Link to="/kids-products"><i className='bi bi-truck p-1 bg-warning text-white rounded-pill'></i> Manage orders</Link></li>
    <li className="nav-link"><Link to="/kids-products"><i className='bi bi-command p-1 bg-secondary text-white rounded-pill'></i> Manage Feedback</Link></li>
    <li className="nav-link"><Link to="/mens-products" className='btn btn-danger text-white'>Logout Admin <i className='bi bi-power ms-1 p-1 bg-danger text-white rounded-pill'></i></Link></li>     
  </ul>

  </div>

   </div>
  
  )
}