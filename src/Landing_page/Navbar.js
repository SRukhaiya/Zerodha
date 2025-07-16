import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return ( 
        
            <nav class="navbar navbar-expand-lg bg-body-tertiary border-bottom" style={{backgroundColor:"#FFF"}}>
  <div class="container-fluid">
    <a href="/" style={{textDecoration:"none"}}><img  src='../media/logo.svg' alt='logo' style={{width:"60%" , marginLeft:"4rem"}} ></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
   
 <div class="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:"30rem"}}>
          <form class="d-flex" role="search">
            <ul class="navbar-nav mb-lg-0">
              <li class="nav-item px-3">
                <Link class="nav-link active"  to="/Signup">
                  Signup
                </Link>
              </li>
              <li class="nav-item px-3">
                 <Link class="nav-link active"  to="/About">
                  About
                </Link>
              </li>
              <li class="nav-item px-3">
               <Link class="nav-link active"  to="/Products">
                  Product
               </Link>
              </li>
              <li class="nav-item px-3">
                <Link class="nav-link active"  to="/Pricing">
                  Pricing
                </Link>
              </li>
              <li class="nav-item px-3">
                <Link class="nav-link active"  to="/Support">
                  Support
                </Link>
              </li>
              <li class="nav-item" style={{padding:"0.5rem", color:"#666666"}}>
                  <i class="fa fa-bars" aria-hidden="true"></i>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}
       
        
        
   

export default Navbar;