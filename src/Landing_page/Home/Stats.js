import React from 'react';

function Stats() {
    return(
   <div className="container p-2">
    <div className="row p-2">
        <div className="col-6">
         <h1 className="fs-2">Trust with confidence</h1>
         <h3 className="fs-4 mb-2 mt-4">Customer first always</h3>
         <p className="text-muted">That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>
         <h3 className="fs-4 mb-2 mt-4">No spam or gimmicks</h3>
         <p className="text-muted">No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
         <h3 className="fs-4 mb-2 mt-4">The Zerodha universe</h3>
         <p className="text-muted">Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
         <h3 className="fs-4 mt-4 ">Do better with money</h3>
         <p className="text-muted">With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
        </div>
        <div className="col-6 p-3">
        <img src='../media/ecosystem.png' alt='ecosystem' style={{width:"100%"}}/>
        <div>
            <a href='Explore our products' style={{paddingLeft:"5rem",textDecoration:"none"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            <a href='Try kite demo' style={{paddingLeft:"3rem" ,textDecoration:"none"}}>Try kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
    
        </div>
    </div>
   </div>
    )
}

export default Stats;