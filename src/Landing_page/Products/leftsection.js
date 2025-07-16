import React from 'react';
function Leftsection({Imageurl,Productname,Productdescription,Trydemo,Learnmore,Googleplay,Appstore}) {
    return (  
       <div className="container ">
        <div className="row">
            <div className="col-7 ">
                <img style={{marginLeft:"3rem"}} src={Imageurl} alt='Product' />
                
            </div>
             <div className="col-1"></div>
            <div className="col-4 ">
                <h2 className="mt-5 " style={{color:"#424242"}}>{Productname}</h2>
                <p className="mt-4 pr-4 text-muted" style={{color:"#424242",fontSize:"1.1rem"}}>{Productdescription}</p>
                <a style={{textDecoration:"none"}} href={Trydemo}>Try demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <a className="ps-5" style={{textDecoration:"none"}}href={Learnmore}>Learn more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a><br></br>
                <div className="pt-3">
                <a href={Googleplay}>
                    <img src='../media/googlePlayBadge.svg' alt='Google Play' />
                </a>
                  <a className="ps-3" href={Appstore}>
                    <img src='../media/appstoreBadge.svg' alt='Google Play' />
                </a>
                </div>
            </div>
            <div classname="col-6"></div>
        </div>
       </div>
    );
}

export default Leftsection;