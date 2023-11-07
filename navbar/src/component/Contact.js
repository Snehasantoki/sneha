import * as React from 'react'
import { BiMap } from 'react-icons/bi';
import { LuPhoneCall } from 'react-icons/lu'
import { IoPaperPlane } from 'react-icons/io5'
import { BiLogoLinkedin } from 'react-icons/bi';
import { useState } from 'react';

function Content() {
  const [Full_Name, setFullName] = useState();
  const [Full_NameError, setFullNameError] =useState(null)
  const [E_Mail, setEmail] = useState();
  const [E_MailError, setEmailError] =useState(null)
  const [Subject, setSubject] = useState();
  const [SubjectError, setSubjectError] =useState(null)
  const [Message, setMessage] = useState();
  const [messageError, setMassageError] =useState(null)
  const [Remove_Data,setRemoveData] = useState(false)
  const [Remove_DataError,setRemoveDataError] = useState(null)
  const handle = () => {
    
    if(validation()){
      setRemoveData(true)
    localStorage.setItem('Full_Name', Full_Name);
    localStorage.setItem('E_Mail',E_Mail);
    localStorage.setItem('Subject',Subject);
    localStorage.setItem('Message',Message);
    }
  }
  const handleremove = () => {
    setRemoveData(false)
    localStorage.removeItem('Full_Name');
    localStorage.removeItem('E_Mail');
    localStorage.removeItem('Subject');
    localStorage.removeItem('Message');
  }
    const validation = () =>{
      let Full_NameError = '';
      let E_MailError ='';
      let SubjectError ='';
      let messageError ='';
      if(!Full_Name){
        Full_NameError = "Please enter first name"
      }
      if(!E_Mail){
        E_MailError = "Please enter first name"
      }
     if(!Subject){
      SubjectError = "Please enter first name"
     }
     if(!Message === undefined){
      messageError = "Please enter first name"
     }
    if(Full_NameError ||E_MailError ||SubjectError ||messageError ){
      setFullNameError (Full_NameError)
      setEmailError  (E_MailError)
      setSubjectError(SubjectError)
      setMassageError (messageError)
      return false;
    }
    return true;
 }
     
 
 return (
    <>
      <section class="ftco-section">
        <div class="container" style={{ marginBottom: '60%', color: '#255F51' }}>
          <div class="row justify-content-center">
            <div class="col-md-6 text-center mb-5">
              <h2 class="heading-section">Contact Us</h2>
            </div>
          </div>
          <div class="row07 justify-content-center">
            <div class="col-lg-12 col-md-12 ">
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
                            <input type="text" class="form-control" name="Full_Name " placeholder="Name" value={Full_Name} onChange={(e) => setFullName (e.target.value)}/>
                          </div>
                          {!!Full_NameError &&(
                                       <text style={{color:'red'}}>
                                           {Full_NameError}
                                       </text>
                                   )
                                   }
                        </div>
                        <div class="col-md-6">
                          <div class="form-group">
                            <label class="fw-bold">Email:</label>
                            <input type="email" class="form-control" name="E_Mail" id="email" placeholder="Email" value={E_Mail} onChange={(e) => setEmail (e.target.value)}/>
                          </div>
                          {!!E_MailError &&(
                                       <text style={{color:'red'}}>
                                           {E_MailError}
                                       </text>
                                   )
                                   }
                        </div>
                        <div class="col-md-12">
                          <div class="form-group mt-4 ">
                            <label class="fw-bold">Subject:</label>
                            <input type="text" class="form-control" name=" Subject" id="subject" placeholder="Subject" value={Subject} onChange={(e) => setSubject (e.target.value)} />
                          </div>
                          {!!SubjectError &&(
                                       <text style={{color:'red'}}>
                                           {SubjectError}
                                       </text>
                                   )
                                   }
                        </div>
                        <div class="col-md-12">
                          <div class="form-group mt-4">
                            <label class="fw-bold">Message:</label>
                            <textarea name="Message" class="form-control" cols="30" rows="7" placeholder="Message" value={Message}  onChange={(e) =>  setMessage (e.target.value)}></textarea>
                          </div>
                          {!!messageError &&(
                                       <text style={{color:'red'}}>
                                           {messageError}
                                       </text>
                                   )
                                   }
                        </div>
                        <div class="col-md-12">
                          <div class="form-group mt-4">
                        {
                          //Remove_Data === true? <button type="submit" onClick={handleremove} class="btn bg-gradiant">Remove data</button>:
                            <button type="submit" onClick={handle} class="btn bg-gradiant">Send Message</button>
                        }
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-5 d-flex align-items-stretch">
                    <div class="info-wrap bg-primary w-200 height-400 p-lg-5 p-4">
                      <h3 class="mb-4 mt-md-4" style={{ fontWeight: '400' }}>Contact us</h3>
                      <div class="dbox w-100 d-flex align-items-start">
                        <div class="iconn d-flex align-items-center justify-content-center">
                          <BiMap />
                        </div>
                           <div class="text-07 pl-3 fw-600" style={{ color: '#255F51' }}>
                           <p class=' contain mt-3'> </p>
                           <p class='detail text-white p-3 ' style={{ cursor: 'pointer' }}> <span>Address:</span> 901, Rivera wave, kalawad road, Nr.Jadoos, Rajkot, Gujarat, India</p>
                           </div>
                       </div>
                      <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                          <LuPhoneCall />
                        </div>
                        <div class="text-07 pl-3 fw-600">
                        <p class=' contain mt-3'> </p>
                          <p class='detail text-white'><span>Phone:</span>+91 9909009304</p>
                        </div>
                      </div>
                      <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                          <IoPaperPlane />
                        </div>
                        <div class="text-07 pl-3">
                          <p class='contain mt-3'> </p>
                          <p class='detail text-white'><span>Email:</span>hr@omegainfoway.com</p>
                        </div>
                      </div>
                      <div class="dbox w-100 d-flex align-items-center">
                        <div class="icon d-flex align-items-center justify-content-center">
                          <BiLogoLinkedin />
                        </div>
                        <div class="text-07 pl-3">
                          <p class='contain mt-5'>  </p>
                          <p class='detail text-white'> <span>Linkedin:</span> Omega infoway</p>
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
export default Content;