import { useState } from "react";
import Modal from 'react-bootstrap/Modal';
import { Container,Row,Form } from "react-bootstrap";
import account from './image/account.gif';


function Modalpage() {
  const [modallogin, setModallogin] = useState(false);

  const handleclose = () => setModallogin(false);
  const handleshow = () => setModallogin(true);

  return(
    <>
      <button variant="primary" className="btn btn-dark mt-5" onClick={handleshow}>
        Modal login
      </button>
      <Modal show={modallogin} onHide={handleclose}>
        <Container className="p-3 bg-light shadow">
        <div className="">
          <h2 className="text-center fw-bold text-blue">Moal login</h2>
          <hr className="border border-2 bordar-dark w-25 mx-auto"/>
          </div>
          <Row>
            <div className="col-md-5">
              <img 
                src={account}
                alt="account"
                style={{width:"100%", height:"auto"}}
              />
              </div>


              <div className="col-md-7">
                <Form method="post">
                  <div className="from-floating mt-4">
                    <input 
                    type="text"
                    id="floatingInput"
                    className="from-cntrol w-100"
                    placeholder="Enter Email*"
                    required
                    />
                    <label for="floatinginput">Email address</label>
                    </div>

                    <div className="from-floating mt-2 pt-2">
                      <input 
                      type="password"
                      className="from-control w-100"
                      id="floatingpassword"
                      placeholder="enter password *"
                      required
                      />

                      <label for="floatingpassword">password</label>
                      </div>

                      <div className="from-input mt-4">
                        <input
                        type="submit"
                        className="btn btn-lg bg-dark fs-6 mb-3 text-white"
                        value="login"
                        />
                      <b>
                        <h5 className='text-decoration-none text-blue'> forget password ?</h5> 
                      </b>
                    </div> 
                  </Form>
                </div>
              </Row>
            </Container>
          </Modal>
        </>
    );
}
export default Modalpage;
