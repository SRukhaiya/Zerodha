import React from 'react';

function Hero() {
    return ( 
     <div className="container mt-5">
        <div className="row text-center mt-5 pt-5 ps-3">
            <h1 style={{color:"#424242"}}>Charges</h1>
            <p className="fs-5" style={{color:"#9B9B9B"}}>List of all charges and taxes</p>
        </div>
        <div className="row mt-5 px-2 pt-5 text-center">
            <div className="col mt-3 pt-3">
                <img src="media/pricingEquity.svg" alt="0pricing" style={{width:"70%"}}/>
                <h3 style={{color:"#424242"}}>Free equity delivery</h3>
                <p className="text-muted pt-4">All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col px-2 mt-3 pt-3">
                    <img src="media/intradayTrades.svg" alt="0pricing" style={{width:"70%"}}/>
                    <h3 style={{color:"#424242"}}>Intraday and F&O trades</h3>
                    <p className="text-muted pt-4"> Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col px-2 mt-3 pt-3">
                    <img src="media/pricingEquity.svg" alt="0pricing" style={{width:"70%"}}/>
                    <h3 style={{color:"#424242"}}>Free direct MF</h3>
                    <p className="text-muted pt-4">All direct mutual fund investments are <br></br>absolutely free — ₹ 0 commissions & <br></br>DP charges.</p>
            </div>
        </div>
        <div className="conatiner text-center mt-5 pt-5">
            <h1>Open a Zerodha account</h1>
            <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
             <button className="p-2 btn btn-primary fs-5" style={{width:"15%", margin:"1rem auto"}}>Sign up for free</button>
        </div>
     </div>
     );
}

export default Hero;