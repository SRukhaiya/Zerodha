import React from 'react';

function Pricing() {
    return ( 
      <div className="container" style={{paddingTop:"5rem"}}> 
        <div className="row">
            <div className="col-5">
              <h2>Unbeatable pricing</h2>
              <p>We pioneered the concept of discount broking and price transparency in India.Flat fees and no hidden charges.</p>
                 <a href='see pricing' style={{textDecoration:"none",marginTop:"1rem"}}>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className="col-2">

            </div>
            <div className="col-5">
                <div className="row">
                    <div className="col text-center border p-3">
                         <h1 className="fs-3">&#8377;0</h1>
                         <p className="pt-3" >Free equity delivery
and direct mutual funds</p>
                    </div>
                    <div className="col text-center border p-3">
                         <h1 className="fs-3">&#8377;20</h1>
                         <p className="pt-3">Intraday and
F&O</p>
                    </div>
                </div>
             </div>
           </div>
      </div>
     );
}

export default Pricing;