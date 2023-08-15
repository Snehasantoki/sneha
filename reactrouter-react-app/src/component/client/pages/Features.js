import React from "react";
import Choosing1 from "../../../assets/image/feature.jpg";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer";


const Features = () => {
    return (
        <>
         <div  className="page-header py-5">
      <Container className="py-5" data-aos="fade-left" data-aos-duration="1000">
      <h1 class="display-3 text-white fw-bold slideInRight" >Features</h1>
      <ul className="breadcrumb">
        <li>
         <Link className=" text-decoration-none text-white" to="/Home"> Home / </Link>
         <Link className=" text-decoration-none text-white" to="/project"> Pages / </Link>
         <Link className=" text-decoration-none text-white" to="/About"> About Us  </Link>
        </li>
      </ul>
      </Container>
   </div>
        <Container className="py-5 ">
          <Row className="g-5">
            <Col lg={6}>
              <div className="mb-lg-4 position-relative">
                <img
                  src={Choosing1}
                  className=" img-fluid w-100 "
                  alt="Choosing-img"
                />
              
              </div>
            </Col>
            <Col lg={6}>
              <div className="choosing-capital">
                <p className=" text-uppercase text-Primary fw-bold">why choosing us!</p>
                <h2 className=" fw-bold text-blue fs-1">
                  We Are Leader In <br />
                  Industrial Market
                </h2>
                <p className="text-secondary mt-3">
                  Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                  diam <br />
                  amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem
                  sit clita <br />
                  duo justo magna dolore erat amet
                </p>
              </div>
    
              <Row>
                <div className="col-12">
                  <div className="d-flex align-items-center mt-5">
                  <div className="btn-lg-choosing rounded-circle bg-Primary d-flex justify-content-center  align-items-center">
                  <i class="bi bi-check-lg text-white fs-2  "></i>
                      </div>
                    <div className="ms-4">
                      <h4 className="fw-bold">Experienced Workers</h4>
                      <span>
                        Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                        duo justo magna dolore erat amet
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-4">
                  <div className="btn-lg-choosing rounded-circle bg-Primary d-flex justify-content-center  align-items-center">
                  <i class="bi bi-check-lg text-white fs-2 "></i>
                      </div>
                    <div className="ms-4">
                      <h4 className="fw-bold">Reliable Industrial Services</h4>
                      <span>
                        Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                        duo justo magna dolore erat amet
                      </span>
                    </div>
                  </div>
                  <div className="d-flex align-items-center mt-4">
                  <div className="btn-lg-choosing rounded-circle bg-Primary d-flex justify-content-center  align-items-center ">
                  <i class="bi bi-check-lg text-white fs-2    "></i>
                  </div>
                    <div className="ms-4">
                      <h4 className="fw-bold">24/7 Customer Support</h4>
                      <span>
                        Clita erat ipsum et lorem et sit, sed stet lorem sit clita
                        duo justo magna dolore erat amet
                      </span>
                    </div>
                  </div>
                </div>
              </Row>
            </Col>
          </Row>
        </Container>
        <Footer />
        </>
      );
    };

export default Features