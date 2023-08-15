import React from "react";
import { Col, Container, Row, fiuld } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../Footer";

export default function Contact() {
  return (
    <div>
      <div className="page-header py-5">
        <Container
          className="py-5"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <h1 class="display-3 text-white fw-bold slideInRight">Contact</h1>
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

      <Container className="">
        <Row className=" py-5 g-5">
          <Col lg={4}>
            <div className=" bg-light text-center h-100 p-5 ">
              <div
                className="btn-square  bg-white rounded-circle mx-auto mb-4"
                style={{ width: "90px", height: "90px" }}
              >
                <i class="bi bi-telephone-fill  text-center text-Primary  fs-1 "></i>
              </div>
              <h4 className="fw-bold text-blue">Phone Number</h4>
              <p className=" text-secondary m-1">+91 9099525868</p>
              <p className=" text-secondary">+91 7096223098</p>
              <a
                href=""
                class="btn text-white bg-Primary px-3 ms-5 me-5 d-none d-lg-block mt-4 "
              >
                Call Now <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" bg-light text-center h-100 p-5 ">
              <div
                className="btn-square  bg-white rounded-circle mx-auto mb-4"
                style={{ width: "90px", height: "90px" }}
              >
                <i class="bi bi-envelope-open-fill  text-center text-Primary  fs-1 "></i>
              </div>
              <h4 className="fw-bold text-blue">Email Address</h4>
              <p className=" text-secondary m-1">pritpatel@gmail.com</p>
              <p className=" text-secondary">support@example.com</p>
              <a
                href=""
                class="btn text-white bg-Primary px-3 ms-5 me-5 d-none d-lg-block mt-4 "
              >
                Email Now <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </Col>
          <Col lg={4}>
            <div className=" bg-light text-center h-100 p-5 ">
              <div
                className="btn-square  bg-white rounded-circle mx-auto mb-4"
                style={{ width: "90px", height: "90px" }}
              >
                <i class="bi bi-geo-alt  text-center text-Primary  fs-1 "></i>
              </div>
              <h4 className="fw-bold text-blue">Office Address</h4>
              <p className=" text-secondary m-1"> GIDC Lodhika, Metoda,   </p>
              <p className=" text-secondary">  Rajkot,360021</p>
              <a
                href=""
                class="btn text-white bg-Primary px-3 ms-5 me-5 d-none d-lg-block mt-4 "
              >
                Direction <i class="bi bi-arrow-right"></i>
              </a>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <iframe
            className="mb-5"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118177.31236186693!2d70.53409304335938!3d22.23852270000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ccf9a7c64ccf%3A0xcda931c84cd94841!2sButterfly%20Metal%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1687000669799!5m2!1sen!2sin"
            style={{ width: "100%", height: "400px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col lg={6}>
            <p className="text-uppercase fw-bold text-Primary">contact us</p>
            <h1 className="best-industrial fw-bold text-blue pb-3 ">
              {" "}
              If You Have Any Queries, Please Feel Free To Contact Us{" "}
            </h1>
            <p className="text-secondary">
              The contact form is currently inactive. Get a functional and
              working contact form with Ajax & PHP in a few minutes. Just copy
              and paste the files, add a little code and you're done.{" "}
              <span className=" text-Primary"> Download Now </span>.{" "}
            </p>
            <Row>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="btn-lg-square rounded-circle bg-Primary d-flex align-items-center ">
                    <i class="bi bi-telephone-fill text-white ms-3"></i>
                  </div>
                  <div className="ms-3">
                    <p className="mb-2">Call us</p>
                    <h5 className="mb-0 fw-bold text-blue ">+91 9099525868</h5>
                  </div>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="d-flex align-items-center">
                  <div className="btn-lg-square rounded-circle bg-Primary d-flex align-items-center ">
                    <i class="bi bi-envelope-open-fill text-white ms-3"></i>
                  </div>
                  <div className="ms-3">
                    <p className="mb-2">Email us</p>
                    <h5 className="mb-0 fw-bold text-blue">Prit07@gmail.com</h5>
                  </div>
                </div>
              </div>
            </Row>
          </Col>
          <Col lg={6} className="mb-5">
            <Row>
              <div class="col-md-6">
                <div class="form-floating mb-3">
                  <input
                    type="name"
                    class="form-control"
                    id="floatingName"
                    placeholder="name"
                  />
                  <label for="floatingInput">Your Name</label>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-floating mb-3">
                  <input
                    type="email"
                    class="form-control"
                    id="floatingInput"
                    placeholder="name@example.com"
                  />
                  <label for="floatingPassword">Your Email</label>
                </div>
              </div>
              <div class="col-12">
                <div class="form-floating mb-3">
                  <input
                    type="text"
                    class="form-control"
                    id="subject"
                    placeholder="Subject"
                  />
                  <label for="subject">Subject</label>
                </div>
              </div>
              <div class="col-12">
              <div class="form-floating mb-3">
                <textarea class="form-control" placeholder="Leave a message here" id="message" style={{height:"150px"}}></textarea>
                <label for="message">Message</label>
                </div>
              </div>
              <div class="col-12">
                <button class="btn bg-Primary py-3 px-5 mt-3 text-white" type="submit">Send Message</button>
             </div>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}