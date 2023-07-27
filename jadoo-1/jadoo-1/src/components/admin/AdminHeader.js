import React from 'react';
import {Link} from 'react-router-dom';
import {Container,Row,Form} from 'react-bootstrap';
import photo from '../../images/man.png';
export default function AdminHeader() {
  return (
    <div>
      
    <Container fluid className="p-1 mt-0 bg-primary border-bottom-2 text-white">
        <Row>
          <div className="col-md-3 p-2 ms-5">
          <img src={photo} alt="photo" className="img-fluid rounded-circle" style={{width:"65px",height:"65px"}} />
          <b>&nbsp;&nbsp;Dashboard</b>
          <p className='fs-6 ms-2 text-success'>Online</p>
          </div>
          <div className="col-md-5 p-3">
            <Form>
              <input
                type="text"
                name="search"
                placeholder="Search anything here!"
                className="form-control"
              />
            </Form>
          </div>
          <div className="col-md-3 p-3">
          
     <ul className="navbar-link ms-5">

     <li className="nav-link dropdown"><Link to="#" data-bs-toggle="dropdown" className="dropdown-toggle"><i className='bi bi-person-add p-1 bg-warning text-white rounded-pill'></i> Welcome To:Admin</Link>

     <ul className='dropdown-menu p-3 bg-white text-dark' style={{minWidth:"250px"}}>
     <li className="nav-link"><Link to="/admin-login/addcategory"><i className='bi bi-cart text-dark rounded-pill'></i>Change Password ?</Link></li>

     <li className="nav-link"><Link to="/admin-login/managecategory"><i className='bi bi-power p-0  text-red rounded-pill'></i> Logout here</Link></li>
     </ul>
     </li>
     </ul>

          </div>
        </Row>
      </Container>

    </div>
  )
}
