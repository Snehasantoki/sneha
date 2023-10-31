import * as React from 'react';

import logo from '../image/logo.png';




function Navbar1 (){
return (
    <>



<nav class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-light bg-light" id="navbar"><div class="container">
    <a class="navbar-brand logo text-uppercase" href="/">
        <img src={logo} class="logo-dark" alt="" height="60" width="245"/></a> 
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="true" aria-label="Toggle navigation" id="btm123">
            <span class="close"></span>
            </button>
            <div class="navbar-collapse collapse show" id="navbarCollapse">
                <ul class="navbar-nav ms-auto" id="navbar-navlist">
                    <li class="nav-item"> 
                    <a class="nav-link" href="/">Home</a>  
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/services">Services</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/about">About</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/career">Career</a>
                    </li>
                    </ul>
                    <div class="contact-btn">
                        <a class="btn bg-gradiant" href="/contact" style={{marginRight:'0'}}>Contact</a>
                    </div>
                    </div>
                    </div>
                    <div>
                        <div class="App">
                            
                        </div>
                    </div>
                    </nav>
    
    
    </>
    );
}

export default Navbar1;


