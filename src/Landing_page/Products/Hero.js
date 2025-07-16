import React from 'react';
function Hero() {
    return ( 
       <div className="container border-bottom text-center p-5 m-5 ">
        <h1 style={{color:"#424242",marginTop:"1rem"}}>Zerodha Products</h1>
        <h4 className="text-muted"  style={{color:"#424242",marginTop:"1rem",fontWeight:"normal",marginLeft:"1rem"}}>Sleek, modern, and intuitive trading platforms</h4>
        <p  style={{color:"#424242",marginTop:"0.5rem",fontSize:"0.9rem"}}>Check out our <a href="" style={{textDecoration:"none"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true" style={{marginTop:"1rem"}}></i></a></p>
       </div>

     );
}

export default Hero;