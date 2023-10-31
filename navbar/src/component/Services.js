import * as React from 'react';
import img1 from '../image/1.png';
import img2 from '../image/2.png';
import img3 from '../image/3.png';
import project from "../image/project.png";
import world from "../image/world.png";
import country from "../image/country.png";
import award from "../image/award.png";

function Services() {
  return (
    <>
    
      
      <section class="ftco-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 text-center mb-5">
          <h2 class="heading-section">Our services</h2>
        </div>
      </div>
      <h1 class="text-center fw-bold" style={{color:'#255f51'}}>We provide a wide range of <br/>creative services</h1>
        <div class="row justify-content-center mt-5">
          <div class="col-lg-4 col-md-4 wow fadeInUp mt-2">
            <div class="service-item position-relative h-100">
              <div class="service-text rounded p-5 h-100 shadow">
                <div class="mx-auto mb-4">
                  <img class="aboutimg" src={img1} style={{width:'100px'}} alt=""/>
                </div>
                  <h4 class="mb-3" style={{color:'#255f51'}}>Web development</h4>
                  <p class="mb-0" style={{textAlign:'justify', fontSize: '15.75px', color:'#255f51'}}>  We Work To Increase Business ROI’s With Excellent Solutions. Our experts leave no stone unturned to help your enterprise to find out a solution that best suits the needs of business </p>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-4 wow fadeInUp mt-2">
            <div class="service-item position-relative h-100">
              <div class="service-text rounded p-5 h-100 shadow">
                <div class="mx-auto mb-4">
                  <img class="aboutimg" src={img2} style={{width:'100px'}} alt=""/>
                </div>
                <h4 class="mb-3" style={{color:"#255f51"}}>Interface Design</h4>
                <p class="mb-0" style={{textalign: 'justify', fontsize:'15.75px', color:'#255f51'}}>  User Interface (UI) Design focuses on anticipating what users might need to do and ensuring that the interface has elements that are easy to access, understand, and use to facilitate those actions. </p>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 wow fadeInUp mt-2">
              <div class="service-item position-relative h-100">
                <div class="service-text rounded p-5 h-100 shadow">
                  <div class="mx-auto mb-4"><img class="aboutimg" src={img3} style={{width:'100px'}} alt=""/>
                  </div>
                  <h4 class="mb-3" style={{color:"#255f51"}}>E-commerce websites</h4>
                  <p class="mb-0" style={{textalign: 'justify', fontsize:'15.75px', color:'#255f51'}}>  We Work To Increase Business ROI’s With Excellent Solutions. Our experts leave no stone unturned to help your enterprise to find out a solution that best suits the needs of business. </p>
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


  

  
    </>
  );
}
export default Services;