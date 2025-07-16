import React from 'react';

function People() {
    return ( 
        <div classname="container ">
            <h2 className="text-center">People</h2>
            <div className="row">
                <div className="col text-center ">
                    <img src='media/nithinkamath.jpg' alt='Nithin Kamath' className="rounded-circle" style={{width:"50%",marginLeft:"15rem",marginTop:"5rem",marginRight:"2rem"}}/>
                    <h4 style={{marginLeft:"13rem",marginTop:"2rem",color:"#424242"}}>Nithin kamath</h4>
                    <p  style={{marginLeft:"13rem",color:"#424242"}}>Founder CEO</p>
                </div>
                <div className="col" style={{marginTop:"5rem",marginRight:"6rem",fontSize:"17px"}}>
                    <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome <br></br>the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>

                    <p style={{marginTop:"2rem"}}>He is a member of the SEBI Secondary Market Advisory Committee <br></br>(SMAC) and the Market Data Advisory Committee (MDAC).</p>

                    <p style={{marginTop:"2rem"}}>Playing basketball is his zen.</p>

                    <p style={{marginTop:"2rem"}}>Connect on<a href="" style={{textDecoration:"none",marginLeft:"1rem"}}>Homepage</a>/<a href="" style={{textDecoration:"none",marginLeft:"1rem"}}>TradingQnA </a>/<a href="" style={{textDecoration:"none",marginLeft:"1rem"}}>Twitter</a></p>
                </div>
                </div>
        </div>
     );
}

export default People;