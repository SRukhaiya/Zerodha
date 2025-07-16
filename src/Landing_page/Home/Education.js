import React from 'react';

function Education () {
    return ( 
       <div className="container" style={{marginTop:"2rem"}}>
        <div className="row">
            <div className="col-6">
                <img src='../media/education.svg' alt='education'></img>
            </div>
            <div className='col-6'>
                <h1 className="fs-3" style={{marginTop:"5rem"}}>Free and open market education</h1>
                <p style={{color:"#424242"}}>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href='Varsity' style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                <p style={{marginTop:"2rem",color:"#424242"}} >TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href='Trading Q&A' style={{textDecoration:"none"}}>Trading Q&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
        </div>
       </div>
     );
}

export default Education;