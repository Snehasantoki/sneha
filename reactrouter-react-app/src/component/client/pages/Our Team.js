import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import img from "../../../assets/image/team-1.jpg";
import img1 from "../../../assets/image/team-2.jpg";
import img2 from "../../../assets/image/team-3.jpg";
import { Link } from "react-router-dom";
import Footer from "../Footer";

const Our = () => {
  return (
    <div>
      <div className="page-header py-5" >
        <Container className="py-5" data-aos="fade-left" data-aos-duration="1000">
          <h1
            class="display-3 text-white fw-bold slideInRight"
            
          >
            Our Team 
          </h1>
          <ul className="breadcrumb">
            <li>
              <Link className=" text-decoration-none text-white" to="/Home">
                {" "}
                Home /{" "}
              </Link>
              <Link className=" text-decoration-none text-white" to="/project">
                {" "}
                Pages /{" "}
              </Link>
              <Link className=" text-decoration-none text-white" to="/About">
                {" "}
                About Us{" "}
              </Link>
            </li>
          </ul>
        </Container>
      </div>
      <section className="py-5">
        <Container>
          <Row className="g-4">
            <div className="team-heding py-4 ">
              <p className=" text-uppercase text-Primary fw-bold text-center">
              Our Team
              </p>
              <h1 className="best-industrial fw-bold text-blue text-center">
              Dedicated Team  <br />
                Members
              </h1>
            </div>
            <Col lg={4} md={4}>
              <div className="team-items shadow">
                <img src={img} className="img-fluid w-100" alt="team-img" />
                <div className=" d-flex ">
                  <div className=" d-flex justify-content-center  p-2 bg-Primary" style={{ width: "90px", height: "auto" }} >
                    <i class="bi bi-arrow-90deg-right text-white  fs-1 "></i>
                  </div>
                   <div className=" d-flex flex-column justify-content-center bg-light w-100">
                      <h5 className=" fw-bold text-blue ms-3"> Rob Miller</h5>
                      <span className=" text-Primary ms-3"> CEO & Founder</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4}>
            <div className="team-items shadow">
                <img src={img1} className="img-fluid w-100" alt="team-img" />
                <div className=" d-flex ">
                  <div className=" d-flex justify-content-center  p-2 bg-Primary" style={{ width: "90px", height: "auto" }} >
                    <i class="bi bi-arrow-90deg-right text-white  fs-1 "></i>
                  </div>
                   <div className=" d-flex flex-column justify-content-center bg-light w-100">
                      <h5 className=" fw-bold text-blue ms-3">Adam Crew</h5>
                      <span className=" text-Primary ms-3">Project Manager</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={4}>
            <div className="team-items shadow">
                <img src={img2} className="img-fluid w-100" alt="team-img" />
                <div className=" d-flex ">
                  <div className=" d-flex justify-content-center  p-2 bg-Primary" style={{ width: "90px", height: "auto" }} >
                    <i class="bi bi-arrow-90deg-right text-white  fs-1 "></i>
                  </div>
                   <div className=" d-flex flex-column justify-content-center bg-light w-100">
                      <h5 className=" fw-bold text-blue ms-3"> Patel Farel</h5>
                      <span className=" text-Primary ms-3">Engineer</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Footer />
    </div>
  );
};

export default Our;