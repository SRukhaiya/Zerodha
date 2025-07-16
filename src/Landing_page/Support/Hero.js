import React from 'react';

function Hero() {
    return (
        <div className="container-fluid" style={{backgroundColor:"#387ED1"}}>
          <div className="pt-5" id="Supportwrapper">
            <div className="col-8">
              <a href="" style={{textDecoration:"none"}}><h5 style={{color:"white"}}>Support Portal</h5></a>
            
              </div>
            <div className="col-4">
                <a href="" style={{color:"white"}}><h5 style={{color:"white",textAlign:"right"}}>Train tickets</h5></a>
            </div>
          </div>
           <div className="pt-4" id="Secondwrapper">
             <div className="col-8">
              <h4 className="mb-4" style={{color:"white"}}>Search for an answer or browse help topics to create <br></br>a ticket</h4>
              <input  class="inputbox" type="text" placeholder="Eg. How do I activate my F&O, Why is my order getting rejected?" ></input><br></br>
              <div className="pt-3 fs-5">
              <a class="supportlinks" href="" >Track account opening </a>
               <a  class="supportlinks" href="" >Track segment activation </a>
               <a  class="supportlinks"  href="" > Intraday margins </a> <br></br>
               <div className="pt-2 fs-5 mb-5 pb-5">
               <a  class="supportlinks" href="" >Kite user manual</a>
               </div>
               </div>
             </div>
             <div classname="col-4">
              <h4 style={{color:"white"}}>Featured</h4>
              <ol type='1'>
                <a href="" style={{color:"white",textAlign:"left"}}><li className="mb-4 mt-4">Exclusion of F&O contracts on 8 securities from August 29, 2025</li></a>
                <a href="" style={{color:"white",textAlign:"left"}}><li>Revision in expiry day of Index and Stock derivatives contracts</li></a>
              </ol>
             </div>
           </div>
        </div>
      );
}

export default Hero;