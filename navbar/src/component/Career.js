import * as react from "react";
import logo from "../image/logo1.png";



function Career() {
  return (
    <>
  
<div>
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
                            <input type="text" class="form-control form-control2 " placeholder="Enter First Name" required=""/>
                        </div>
                        </div>
                        <div class="col-md-4">
                        <div class="form-group text-start ">
                            <label class="fw-bold"style={{color:'#255F51'}}>Last Name:</label>
                            <input type="text" class="form-control form-control2" placeholder="Enter Last Name" required=""/>
                        </div>
                        </div>
                    </div>
                        <div class="row justify-content-around text-center mt-xl-3 mt-0">
                        <div class="col-md-4">
                            <div class="form-group text-start mt-4">
                            <label class="fw-bold"style={{color:'#255F51'}}>E-mail:</label>
                            <input type="email" class="form-control form-control2"  placeholder="Enter Email" required=""/>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group text-start mt-4">
                            <label class="fw-bold"style={{color:'#255F51'}}>Phone Number:</label>
                            <input type="text" autocomplete="on" placeholder="Enter Phone Number" id="phone" minlength="10" maxlength="10" class="form-control form-control2 " required="" value=""/>
                            </div>
                        </div>
                        </div>
                        <div class="row justify-content-around text-center mt-xl-3 mt-0">
                        <div class="col-md-4">
                            <div class="form-group text-start  mt-4">
                                <label class="fw-bold"style={{color:'#255F51'}}>Applied Position:</label>
                                <div class="mt-1">
                                    <select class="form-select-lg form-control form-control2 " required="">
                                        <option style={{fontSize:'-3rem'}}> Select Position</option>
                                        <option value="3"> React</option>
                                        <option value="4"> React Native</option>
                                        <option value="5"> Full Stack Developer</option>
                                        <option value="6"> HR Manager</option>
                                        <option value="7"> PHP Developer</option>
                                        <option value="8"> Manager</option>
                                    </select>
                                </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                            <div class="form-group text-start  mt-4 ">
                                <label class="fw-bold "style={{color:'#255F51'}} >Upload Resume!</label>
                                <div class="text-start">
                                <input type="file" id="resume" name="resume" accept=".xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf" required=""/>
                                </div>
                            </div>
                            </div>
                        </div>
                        <div class="row justify-content-around text-center mt-xl-3 mt-0">
                        <div class="col-md-4">
                            <div class="form-group text-start  mt-4">
                            <label class="fw-bold"style={{color:'#255F51'}}>Reference:</label>
                            <input type="text" class="form-control form-control2 " placeholder="Enter Reference" required="" style={{fontSize:'-3rem'}}/>
                            </div>
                        </div>
                        <div class="col-md-4"> </div>
                        </div>
                        <div class="mt-5 pb-4 justify-content-around text-center mt-xl-3">
                        <button type="submit" class="btn bg-gradiant">Submit Application</button>
                        </div>
               </div>
           </div>
        </div>
    </div>
  </section>
  </div>
    </>
  );
}
export default Career;