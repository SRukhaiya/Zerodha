import React from 'react';

function Hero() {
    return ( 
        <div className="container p-5 m-5 text-center" >
            <h1 style={{fontSize:"2rem"}}>We pioneered the discount broking model in India.<br></br> Now, we are breaking ground with our technology.</h1>
            <div className="row">
                <div className="col m-4">
                    <p style={{paddingTop:"0.2rem",textAlign:"left",marginLeft:"2.8rem",marginRight:"2rem",marginTop:"10rem",fontSize:"17px",color:"#424242"}}>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word <br></br>for barrier.</p>

                    <p  style={{paddingTop:"0.2rem",textAlign:"left",marginLeft:"2.8rem",marginRight:"2rem",fontSize:"17px",color:"#424242"}}>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker <br></br> in India.</p>   
                        
                    <p style={{paddingTop:"0.2rem",textAlign:"left",marginLeft:"2.8rem",marginRight:"2rem",fontSize:"17px",color:"#424242"}}>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem <br></br> of investment platforms, contributing over 15% of all   Indian retail trading volumes.</p>
                </div>
                 <div className="col m-4">
                    <p style={{paddingTop:"0.2rem",textAlign:"left",marginLeft:"2.8rem",marginRight:"2rem",fontSize:"17px",marginTop:"10rem",color:"#424242"}}>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
                        
                    <p style={{paddingTop:"0.2rem",textAlign:"left",marginLeft:"2.8rem",marginRight:"2rem",fontSize:"17px",color:"#424242"}}><a href="" style={{textDecoration:"none"}}>Rainmatter </a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
                    
                    <p style={{paddingTop:"0.2rem",textAlign:"left",marginLeft:"2.8rem",marginRight:"2rem",fontSize:"17px",color:"#424242"}}>And yet, we are always up to something new every day. Catch up on the latest updates on our <a href="" style={{textDecoration:"none"}}> blog</a> or see what the media is <a href="" style={{textDecoration:"none"}}>saying about us </a> or learn more about our business and product <a href="" style={{textDecoration:"none"}}>philosophies.</a></p>
                 </div>
            </div>
            
        </div>
     );
}

export default Hero;