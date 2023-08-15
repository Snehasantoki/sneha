import React, { Component } from "react";
import { Container, Row } from "react-bootstrap";
import Slider from "react-slick";
import img from "../../../assets/image/project-1.jpg"
import img1 from "../../../assets/image/project-2.jpg"
import img2 from "../../../assets/image/project-3.jpg"
import img3 from "../../../assets/image/project-4.jpg"
import img4 from "../../../assets/image/project-5.jpg"
import img5 from "../../../assets/image/project-6.jpg"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import Footer from "../Footer";


export default class Project extends Component {
  render() {
    const settings = {
      className: "center",
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1000,
      cssEase: "linear",
   
      responsive: [
        {

          breakpoint: 1024,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
     
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
          <>
             <div  className="page-header py-5">
      <Container className="py-5" data-aos="fade-left" data-aos-duration="1000">
      <h1 class="display-3 text-white fw-bold slideInRight" >Project </h1>
      <ul className="breadcrumb">
        <li>
         <Link className=" text-decoration-none text-white" to="/Home"> Home / </Link>
         <Link className=" text-decoration-none text-white" to="/project"> Pages / </Link>
         <Link className=" text-decoration-none text-white" to="/About"> About Us  </Link>
        </li>
      </ul>
      </Container>
   </div>

     <Container fluid className=" m-0 p-0 py-2">
     <Row>
      <div  className=" pt-5 ">
     
        <p className=" text-uppercase text-Primary fw-bold text-center "> Our Projects</p>
        <h1 className="best-industrial fw-bold text-blue text-center pb-5">
        See What We Have <br />
        Completed Recently
        </h1>
        </div>
        <Slider {...settings} > 
          <div className="mb-0 pb-0">
            <img src={img} className=" img-fluid w-100  " alt="project-img" />
          </div>
          <div>
            <img src={img1} className=" img-fluid w-100 " alt="project-img" />
          </div>
          <div>
            <img src={img2} className=" img-fluid w-100 " alt="project-img" />
          </div>
          <div>
            <img src={img3} className=" img-fluid w-100" alt="project-img" />
          </div>
          <div>
            <img src={img4} className=" img-fluid w-100" alt="project-img" />
          </div>
          <div>
            <img src={img5} className=" img-fluid w-100" alt="project-img" />
          </div>
     
        </Slider>
   
    </Row>
    </Container>
    <Footer />
    </>
    );
  }
}