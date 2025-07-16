import React from 'react';
function Rightsection({Productname,Productdescription,Kiteconnect,Imageurl,Differenturl}) {
  return (  
       <div className="container  ">
        <div className="row">
            <div className="col-4 p-5 mt-5">
                
                <h2 className="mt-5 pt-4 " style={{color:"#424242"}}>{Productname}</h2>
                <p className="mt-4 pr-4 text-muted" style={{color:"#424242",fontSize:"1.1rem"}}>{Productdescription}</p>
                <a style={{textDecoration:"none"}} href={Kiteconnect}><span>{Differenturl}</span> <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
             <div className="col-1"></div>
            <div className="col-4 ">
                <img style={{marginLeft:"3rem"}} src={Imageurl} alt='Product' />
                
            </div>
            <div classname="col-6"></div>
        </div>
       </div>
    );
}

export default Rightsection;