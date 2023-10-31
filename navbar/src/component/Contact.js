import * as react from "react";
import {BiSolidMap} from'react-icons/bi';
import {IoCallSharp} from 'react-icons/io5';
import {MdEmail} from 'react-icons/md';
import {BiLogoLinkedin} from 'react-icons/bi';

function Contact() {
  return (
    <>
      <section class="ftco-section mt-5">
        <div class="container" style={{marginBottom:'10%', color:'#255f51'}}>
          <div class="row justify-content-center">
            <div class="col-md-6 text-center mb-5">
              <h2 class="heading-section">Contact Us</h2>
            </div>
          </div>
          <div class="row07 justify-content-center">
            <div class="col-lg-12 col-md-12">
              <div class="wrapper">
                <div class="row no-gutters">
                  <div class="col-md-7 d-flex align-items-stretch">
                    <div class="contact-wrap w-100 p-md-5 p-4">
                      <h3 class="mb-4">Get in touch</h3>
                      <div id="form-message-warning" class="mb-4"></div>
                      <div class="row">
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="fw-bold">Name:</label>
                            <input type="text" class="form-control" name="fullName" placeholder="Name" required=""/>
                          </div>
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="fw-bold">Email:</label>
                            <input type="email" class="form-control" name="email" id="email" placeholder="Email" required=""/>
                        
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group mt-4">
                            <label class="fw-bold">Subject:</label>
                            <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required=""/>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group mt-4">
                            <label class="fw-bold">Message:</label>
                            <textarea name="textarea" class="form-control" cols="30" rows="7" placeholder="Message" required=""></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group mt-4">
                            <button type="submit" class="btn bg-gradiant">
                              Send Message
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5 d-flex align-items-stretch">
                    <div class="info-wrap bg-primary  height-400 w-200 p-lg-5 p-4" >
                      <h3 class="mb-4 mt-md-4" style={{fontWeight:'400'}}>Contact us</h3>
                      <div class="dbox w-100 d-flex align-items-start">
                        <div class="iconn d-flex align-items-center justify-content-center">
                          {/* <span class="fa fa-map-marker"></span> */} <BiSolidMap/>
                        </div>
                        <div class="text-07 pl-3 mt-4">
                          <p class="contain mt-2 ">
                            <span>Address:</span>
                          
                           <a class="text-white" target="_blank" href="https://www.google.com/maps/place/Omega+Infoway/@22.2730401,70.7569436,15z/data=!4m6!3m5!1s0x2e262138989deaeb:0x611091efcd9eff4c!8m2!3d22.2730401!4d70.7569436!16s%2Fg%2F11khkh88v4" 
                            style={{cursor: 'pointer', margin:'15px', paddingTop:'5%'}}>
                              901, Rivera wave, kalawad road, Nr.Jadoos, Rajkot,
                              Gujarat, India
                            </a> 
                          </p>
                        </div>
                      </div>
                      <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                         {/* <span class="fa fa-phone"></span>*/} <IoCallSharp/>
                        </div>
                        <div class="text-07 pl-3 mt-4">
                          <p class="contain mt-3 p-2" >
                            <span >Phone:</span>
                            <a class="text-white p-3" href="tel://9909009304">
                              +91 9909009304
                            </a>
                          </p>
                        </div>
                      </div>
                      <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                          {/*<span class="fa fa-paper-plane"></span>*/}  <MdEmail/>
                        </div>
                        <div class="text-07 pl-3 mt-4">
                          <p class="contain mt-3 p-2">
                            <span>Email:</span>
                            <a class="text-white mt-5 p-3" href="mailto:hr@omegainfoway.com">hr@omegainfoway.com  
                            </a>
                          </p>
                        </div>
                      </div>
                      <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                          {/*<span class="fa fa-linkedin-in"></span>*/} <BiLogoLinkedin/>
                        </div>
                        <div class="text-07 pl-3 mt-4">
                          <p class="contain mt-3 p-2">
                            <span>Linkedin:</span>{" "}
                            <a class="text-white p-3" target="_blank"
                              href="https://in.linkedin.com/company/omega-infoway">
                              {" "}
                              Omega infoway
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>               
          </div>
        </div>
      </section>
    </>
  );
}
export default Contact;



