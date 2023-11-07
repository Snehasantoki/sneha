import * as React from'react'
import { useState } from'react';



function Career() {
    const [first_name, setfirstname] = useState();
    const [first_nameError,setFirstNameError] = useState(null)

    const [last_name, setLastName] = useState();
    const [last_nameError,setLastNameError] = useState(null)

    const [E_Mail, setEmail] = useState();
    const [E_MailError,setEmailError] = useState(null)

    const [Phone_Number, setPhoneNumber] = useState();
    const [Phone_NumberError,setphoneNumberError] = useState(null)

    const [Applied_Position, setAppliedPosition] = useState();
    const [Applied_PositionError,setAppliedPositionError] = useState(null)

    const [Upload_Resume,  setUploadResume] = useState();
    const [Upload_ResumeError,setUploadResumeError] = useState(null)

    const [ Reference,  setReference] = useState();
    const [ReferenceError,setReferenceError] = useState(null)

    const [Remove_Data,setRemoveData] = useState(false)
    const [Remove_DataError,setRemoveDataError] = useState(null)
    const handle = () => {
      
        if(validation()){
            setRemoveData(true)
            localStorage.setItem('first_name', first_name);
            localStorage.setItem('last_name',last_name);
            localStorage.setItem('E_Mail',E_Mail,);
            localStorage.setItem('Phone_Number',Phone_Number);
            localStorage.setItem('Applied_Position',Applied_Position );
            localStorage.setItem('Upload_Resume',Upload_Resume );
            localStorage.setItem('Reference',Reference );
       }
    };
    const handleremove = () => {
        setRemoveData(false)
        localStorage.removeItem('first_name');
        localStorage.removeItem('last_name');
        localStorage.removeItem('E_Mail');
        localStorage.removeItem('Phone_Number');
        localStorage.removeItem('Applied_Position');
        localStorage.removeItem('Upload_Resume');
        localStorage.removeItem('Reference');
    }
    const validation = () =>{
        let first_nameError = '';
        let last_nameError = '';
        let E_MailError = '';
        let Phone_NumberError = '';
        let Applied_PositionError = '';
        let Upload_ResumeError = '';
        let ReferenceError = '';
        if(!first_name){
            first_nameError = "Please enter first name"
        }
        if(!last_name){
            last_nameError = "Please enter last name"
        }
        if(!E_Mail){
            E_MailError = "Please enter E-mail"
        }
        if(!Phone_Number){
            Phone_NumberError = "Please enter Phone"
        }
        if(!Applied_Position === undefined){
            Applied_PositionError = "Please enter applied position"
        }
        if(!Upload_Resume === undefined){
            Upload_ResumeError = "Please  upload resume"
        }
        if(!Reference){
            ReferenceError = "Please enter reference"
        }
        if(first_nameError || last_nameError || E_MailError ||Phone_NumberError ||Applied_PositionError ||Upload_ResumeError || ReferenceError){
            setFirstNameError(first_nameError)
            setLastNameError(last_nameError)
            setEmailError(E_MailError)
            setphoneNumberError(Phone_NumberError)
            setAppliedPositionError(Applied_PositionError)
            setUploadResumeError(Upload_ResumeError)
            setReferenceError(ReferenceError)
            return false;
        }
        return true;
      }

      return(
        <>
       <section class="ftco-section" style={{marginBottom:'120px'}}>
           <div class="container">
                <div class="row justify-content-center">
                   <div class="col-md-6 text-center mb-5">
                      <h2 class="heading-section mt-5" style={{color:'#255F51'}} >Career With Us</h2>
                   </div>
                </div>
               <div class="card card-career info-wrap w-100 p-lg-5 p-4">
                  <div class="row justify-content-center">
                      <div class="col-md-10">
                           <div class="row justify-content-around text-center mt-4">
                               <div class="col-md-4">
                               <div class="form-group text-start ">
                                   <label class="fw-bold" style={{color:'#255F51'}}>First Name:</label>
                                   <input type="text" name="first_name" class="form-control form-control2 "
                                   placeholder="Enter First Name" value={first_name} onChange={(e) => setfirstname (e.target.value)}/>
                               </div>
                                   {!!first_nameError &&(
                                       <text style={{color:'red'}}>
                                           {first_nameError}    
                                       </text>
                                   )
                                   }
                               </div>
                               <div class="col-md-4">
                               <div class="form-group text-start ">
                                   <label class="fw-bold" style={{color:'#255F51'}}>Last Name:</label>
                                   <input type="text" name="Last_name" class="form-control form-control2 "
                                   placeholder="Enter Last Name" value={last_name} onChange={(e) => setLastName (e.target.value)}/>
                               </div>
                               {!!last_nameError &&(
                                       <text style={{color:'red'}}>
                                           {last_nameError}
                                       </text>
                                   )
                                   }
                               </div>
                           </div>
                               <div class="row justify-content-around text-center mt-xl-3 mt-0">
                               <div class="col-md-4">
                                   <div class="form-group text-start mt-4">
                                   <label class="fw-bold"style={{color:'#255F51'}}>E-mail:</label>
                                   <input type="email" class="form-control form-control2"  id="ValidationDefault01"
                                   placeholder="Enter Email"  value={E_Mail} onChange={(e) => setEmail (e.target.value)}/>
                                   </div>
                                   {!!E_MailError &&(
                                       <text style={{color:'red'}}>
                                           {E_MailError}
                                       </text>
                                   )
                                   }
                               </div>
                               <div class="col-md-4">
                                   <div class="form-group text-start mt-4">
                                   <label class="fw-bold"style={{color:'#255F51'}}>Phone Number:</label>
                                   <input type="text" autocomplete="on" placeholder="Enter Phone Number" id="phone" minlength="10" maxlength="10" class="form-control form-control2 "
                                    value={Phone_Number} onChange={(e) => setPhoneNumber (e.target.value)}/>
                                   </div>
                                   {!!Phone_NumberError &&(
                                       <text style={{color:'red'}}>
                                           {Phone_NumberError}
                                       </text>
                                   )
                                   }
                               </div>
                               </div>
                               <div class="row justify-content-around text-center mt-xl-3 mt-0">
                               <div class="col-md-4">
                                   <div class="form-group text-start  mt-4">
                                       <label class="fw-bold"style={{color:'#255F51'}}>Applied Position:</label>
                                       <div class="mt-1">
                                           <select name='Applied_Position' value={Applied_Position} onChange={(e) => setAppliedPosition (e.target.value)} class="form-select-lg form-control form-control2 " style={{fontSize:'17px'}}>
                                               <option value="2"> select option</option>
                                               <option value="3"> React</option>
                                               <option value="4"> React Native</option>
                                               <option value="5"> Full Stack Developer</option>
                                               <option value="6"> HR Manager</option>
                                               <option value="7"> PHP Developer</option>
                                               <option value="8"> Manager</option>
                                           </select>
                                       </div>
                                       {!!Applied_PositionError &&(
                                       <text style={{color:'red'}}>
                                           {Applied_PositionError}
                                       </text>
                                   )
                                   }
                                       </div>
                                   </div>
                                   <div class="col-md-4">
                                   <div class="form-group text-start  mt-4 ">
                                       <label class="fw-bold "style={{color:'#255F51'}} >Upload Resume!</label>
                                       <div class="text-start">
                                       <input type="file" id="resume" name="resume" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf"
                                       value={Upload_Resume} onChange={(e) => setUploadResume (e.target.value)} class="form-select-lg form-control form-control2 " />
                                       </div>
                                       {!!Upload_ResumeError &&(
                                       <text style={{color:'red'}}>
                                           {Upload_ResumeError}
                                       </text>
                                   )
                                   }
                                   </div>
                                   </div>
                               </div>
                               <div class="row justify-content-around text-center mt-xl-3 mt-0">
                               <div class="col-md-4">
                                   <div class="form-group text-start  mt-4">
                                   <label class="fw-bold"style={{color:'#255F51'}}>Reference:</label>
                                   <input type="text" class="form-control form-control2 " placeholder="Enter Reference"
                                   value={Reference} onChange={(e) => setReference (e.target.value)}  style={{fontSize:'-3rem'}}/>
                                   </div>
                                   {!!ReferenceError &&(
                                       <text style={{color:'red'}}>
                                           {ReferenceError}
                                       </text>
                                   )
                                   }
                               </div>
                               <div class="col-md-4"> </div>
                               </div>
                               <div class="mt-5 pb-4 justify-content-around text-center mt-xl-3">
                                   {
                                       Remove_Data === true? <button type="submit" onClick={handleremove} class="btn bg-gradiant">Remove data</button>:
                                       <button type="submit" onClick={handle} class="btn bg-gradiant">Submit Application</button>
                                   }
                               </div>
                      </div>
                  </div>
               </div>
           </div>
         </section>
       </>
           );
       }
       export default Career;

