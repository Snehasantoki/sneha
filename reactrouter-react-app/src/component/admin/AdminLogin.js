import React from 'react';
import {Link} from 'react-router-dom';
import {Container,Row,Form} from 'react-bootstrap';
import account from '../../assets/image/account.gif';
export default function AdminLogin() {
  return (
    <div>

    <Container className="p-3 mt-5  w-75  bg-light shadow">
    <h2 className="text-center">Login with Admin</h2>
    <hr className="border border-2 border-dark w-25 mx-auto" />
    <Row>
      <div className="col-md-4">
        <img
          src={account}
          alt="account"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="col-md-8">
        <Form method="post">
          <div className="form-input mt-2">
            <input
              type="text"
              className="form-control w-75"
              placeholder="Enter Email *"
              required
            />
          </div>

          <div className="form-input mt-2">
            <input
              type="password"
              className="form-control w-75"
              placeholder="Enter Password *"
              required
            />
          </div>

          <div className="form-input mt-5">
            <input
              type="submit"
              className="btn btn-lg btn-dark text-white"
              value="Login"
            />

            <b>
              &nbsp;&nbsp;<Link to="#">Forget password ?</Link>
            </b>
          </div>

      
        </Form>
      </div>
    </Row>
  </Container>

      
    </div>
  )
}