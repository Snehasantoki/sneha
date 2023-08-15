import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../../assets/image/service-1.jpg";
import img1 from "../../../assets/image/service-2.jpg";
import img2 from "../../../assets/image/service-3.jpg";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import TestiMonials from "../TestiMonials";

const Service = () => {
  return (
    <>
     <div  className="page-header py-5" >
      <Container className="py-5" data-aos="fade-left" data-aos-duration="1000">
      <h1 class="display-3 text-white fw-bold slideInRight">Services</h1>
      <ul className="breadcrumb">
        <li>
         <Link className=" text-decoration-none text-white" to="/Home"> Home / </Link>
         <Link className=" text-decoration-none text-white" to="/project"> Pages / </Link>
         <Link className=" text-decoration-none text-white" to="/About"> About Us  </Link>
        </li>
      </ul>
      </Container>
   </div>
    <Container className="py-5">
      <Row className="">
        <p className=" text-uppercase text-Primary fw-bold text-center">
          Our Services
        </p>
        <h1 className="best-industrial fw-bold text-blue text-center">
          We Provide Best <br />
          Industrial Services{" "}
        </h1>
        <Col
          lg={4}
          className="position-relative  d-flex justify-content-center align-items-center g-5"
        >
          <div className="service-item">
            <img className="img-fluid" src={img} alt="service-img" />
            <div className="service-img">
              <img className="img-fluid" src={img} alt="" />
            </div>
            <div class="service-detail">
              <div className="service-title">
                <hr class="w-25" />
                <h3 class="mb-0 text-blue fw-bold">Civil & Gas Engineering</h3>
                <hr class="w-25" />
              </div>
              <div className="service-text">
                <p class="text-white mb-0 ">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet.
                </p>
              </div>
            </div>
            <a class="btn btn-light" href="">
              Read More
            </a>
          </div>
        </Col>
        <Col
          lg={4}
          className="position-relative  d-flex justify-content-center align-items-center g-5"
        >
          <div className="service-item">
            <img className="img-fluid" src={img1} alt="service-img" />
            <div className="service-img">
              <img className="img-fluid" src={img1} alt="" />
            </div>
            <div class="service-detail">
              <div className="service-title">
                <hr class="w-25" />
                <h3 class="mb-0  text-blue fw-bold">Power & Energy Engineering</h3>
                <hr class="w-25" />
              </div>
              <div className="service-text">
                <p class="text-white mb-0">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet.
                </p>
              </div>
            </div>
            <a class="btn btn-light" href="">
              Read More
            </a>
          </div>
        </Col>
        <Col
          lg={4}
          className="position-relative  d-flex justify-content-center align-items-center g-5"
        >
          <div className="service-item">
            <img className="img-fluid" src={img2} alt="service-img" />
            <div className="service-img">
              <img className="img-fluid" src={img2} alt="service-img" />
            </div>
            <div class="service-detail">
              <div className="service-title">
                <hr class="w-25" />
                <h3 class="mb-0 text-blue fw-bold">Plumbing & Water Treatment</h3>
                <hr class="w-25" />
              </div>
              <div className="service-text">
                <p class="text-white mb-0">
                  Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                  lorem sed diam stet diam sed stet.
                </p>
              </div>
            </div>
            <a class="btn btn-light" href="">
              Read More
            </a>
          </div>
        </Col>
      </Row>
    </Container>
    <TestiMonials />
    <Footer />
    
    </>
  );
};

export default Service;