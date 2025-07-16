import React from 'react';
function hero () {
    return ( 
       <div className="container">
        <div className="row text-center">
           <img src="media/homeHero.png" alt='hero'/>
           <h1 className='mt-5 pt-5' >Invest in everything</h1>
           <p>Online Platform to invest in stocks, derivatives, Mutual funds, ETFs, bonds and more</p>
           <button className="p-2 btn btn-primary fs-5" style={{width:"15%", margin:"1rem auto"}}>Sign up for free</button>
        </div>
       </div>
     );
}

export default hero;