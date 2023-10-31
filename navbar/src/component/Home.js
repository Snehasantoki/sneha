import * as React from "react";
import logo from "../image/logo1.png";
import img1 from "../image/1.png";
import img2 from "../image/2.png";
import img3 from "../image/3.png";
import user from "../image/user.jpg";
import project from "../image/project.png";
import world from "../image/world.png";
import country from "../image/country.png";
import award from "../image/award.png";
import { Height } from "@mui/icons-material";
import { height } from "@mui/system";

function Home() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 mt-5">
            <div class="home1" style={{ color: "#255f51" }}>
              <div class="text">
                <h1>We Provide many IT &amp; Technology Services</h1>
                <p>
                  Omega Infoway foundation is built-up on imparting a complete
                  IT solution to the companies and individuals in need. The core
                  aim of our customer’s satisfaction, is the key that keeps us
                  encouraged and going, to proffer the beneficial result to our
                  clients. Our area of our excellence ranges from web
                  development to hiring a web designer, mobile app development,
                  e-commerce development, iOS development and word press
                  development.
                </p>
                <div class="home-links">
                  <a class="btn bg-gradiant" href="/Services">
                    Our Services
                  </a>
                  <a class="btn bg-gradiant" href="/contact">
                    Contact Us{" "}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-6">
            <div class="image1">
              <img
                class="img-fluid imgowg"
                src={logo}
                alt="home-image"
                style={{ marginTop: "185px" }}/>
            </div>
          </div>
        </div>
      </div>
      <section class="ftco-section">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-12 text-center mb-5">
              <h2 class="heading-section" style={{ marginTop: "70px", color: "#255f51" }}>
                Our services
              </h2>
            </div>
          </div>
          <h1 class="text-center fw-bold" style={{ color: "#255f51" }}>
            We provide a wide range of <br />
            creative services
          </h1>
          <div class="row justify-content-center mt-5">
            <div class="col-lg-4 col-md-4 wow fadeInUp mt-2">
              <div class="service-item position-relative h-100">
                <div class="service-text rounded p-5 h-100 shadow">
                  <div class="mx-auto mb-4">
                    <img class="aboutimg" src={img1} style={{ width: "100px" }}alt=""/>
                  </div>
                  <h4 class="mb-3" style={{ color: "#255f51" }}>
                    Web development
                  </h4>
                  <p class="mb-0"style={{textAlign: "justify",fontSize: "15.75px",color: "#255f51",}}>
                    {" "}
                    We Work To Increase Business ROI’s With Excellent Solutions.
                    Our experts leave no stone unturned to help your enterprise
                    to find out a solution that best suits the needs of business{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 wow fadeInUp mt-2">
              <div class="service-item position-relative h-100">
                <div class="service-text rounded p-5 h-100 shadow">
                  <div class="mx-auto mb-4">
                    <img
                      class="aboutimg"
                      src={img2}
                      style={{ width: "100px" }}
                      alt=""
                    />
                  </div>
                  <h4 class="mb-3" style={{ color: "#255f51" }}>
                    Interface Design
                  </h4>
                  <p
                    class="mb-0"
                    style={{
                      textalign: "justify",
                      fontsize: "15.75px",
                      color: "#255f51",
                    }}
                  >
                    {" "}
                    User Interface (UI) Design focuses on anticipating what
                    users might need to do and ensuring that the interface has
                    elements that are easy to access, understand, and use to
                    facilitate those actions.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 wow fadeInUp mt-2">
              <div class="service-item position-relative h-100">
                <div class="service-text rounded p-5 h-100 shadow">
                  <div class="mx-auto mb-4">
                    <img
                      class="aboutimg"
                      src={img3}
                      style={{ width: "100px" }}
                      alt=""
                    />
                  </div>
                  <h4 class="mb-3" style={{ color: "#255f51" }}>
                    E-commerce websites
                  </h4>
                  <p
                    class="mb-0"
                    style={{
                      textalign: "justify",
                      fontsize: "15.75px",
                      color: "#255f51",
                    }}
                  >
                    {" "}
                    We Work To Increase Business ROI’s With Excellent Solutions.
                    Our experts leave no stone unturned to help your enterprise
                    to find out a solution that best suits the needs of
                    business.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container display">
        <div class="row">
          <div class="col-md-12">
            <section class="section bg-light testimonial" id="testimonial">
              <div class="container" style={{ color: "#255f51" }}>
                <div class="row align-items-center">
                  <div class="col-lg-3">
                    <div class="title">
                      <p style={{ margin: "10%" }}>
                        Client Testimonial{" "}
                        <i class="mdi mdi-cellphone-iphone"></i>
                      </p>
                      <h3>What they think of us!</h3>
                      <p class="text-muted para-width f-15 mt-3  mb-0"></p>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div
                      class="media mohit d-flex"
                      style={{ width: "80%", height: "65px", margin: "20%" }}
                    >
                      <img src={user} class="mr-3" alt="" />
                      <div class="media-body">
                        <div class="testimonial">
                          <h3>BEN</h3>
                          <p style={{ textAlign: "justify" }}>
                            Great work by omega He has good knowledge of laravel
                            Also gaurav's nature is very friendly will work with
                            him again in future Highly recommend
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class="ptb40 mt-5 mb-5 paddingcounter" id="countup">
              <div class="container">
                <div class="row">
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <div>
                      <img src={project} style={{height: "100px"}}/>
                    </div>
                    <span class="counter" data-from="0" data-to="743">
                      <span>1730</span>
                    </span>
                    <h4>Project Done</h4>
                  </div>
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <div>
                      <img src={world} style={{height: "105px"}}/>
                    </div>
                    <span class="counter" data-from="0" data-to="579">
                      <span>125</span>M
                    </span>
                    <h4>User Worldwide</h4>
                  </div>
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <div>
                      <img src={country} style={{height: "100px"}}/>
                    </div>
                    <span class="counter" data-from="0" data-to="251">
                      <span>39</span>
                    </span>
                    <h4>Available Country</h4>
                  </div>
                  <div class="col-md-3 col-sm-3 col-xs-12">
                    <div>
                      <img src={award}style={{height: "100px"}}/>
                    </div>
                    <span class="counter" data-from="0" data-to="330">
                      <span>14</span>
                    </span>
                    <h4>Award Winner</h4>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
