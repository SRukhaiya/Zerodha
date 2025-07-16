import React from 'react';
function Universe() {
    return ( 
        <div className="container text-center">
            <div className="row ">
                <p className="p-5 fs-5">Want to know more about our technology stack? Check out the <a style={{textDecoration:"none"}}href="#">Zerodha.tech </a>blog.</p>
                <h2 className="p-3">The Zerodha Universe</h2>
                <p className="fs-6 mb-5">Extend your trading and investment experience even further with our partner platforms</p>
            </div>
            <div className="row p-5">
                <div className="col ">
                    <a href="#" ><img src="media/zerodhaFundhouse.png" alt="Zerodha Fundhouse" style={{width:"50%"}}/></a>
                    <a href="" style={{textDecoration:"none",fontWeight:"bold"}}><p className="p-3 mb-5" style={{fontSize:"0.8rem",color:"#9B9B9B"}}>Our asset management venture that is creating simple and transparent index
                      funds to help you save for your goals.</p></a>
                      <a href="#"><img src="media/streaklogo.png" alt="Streak" style={{width:"45%"}}/></a>
                      <a href="" style={{textDecoration:"none",fontWeight:"bold"}}><p className="p-3 mb-4" style={{fontSize:"0.8rem",color:"#9B9B9B"}}>Systematic trading platform that allows you to create and backtest
                        strategies without coding.</p></a>
                    </div>
                <div className="col  pt-2">
                    <a href="#" ><img src="media/sensibulllogo.svg" alt="Zerodha Fundhouse" style={{width:"70%"}}/></a>
                    <a href="" style={{textDecoration:"none",fontWeight:"bold"}}><p className="p-3 mb-5" style={{fontSize:"0.8rem",color:"#9B9B9B"}}>Options trading platform that lets you create strategies, analyze positions, and examine
                      data points like open interest, FII/DII, and more.</p></a>
                      <a href="#" className="pd-2"><img src="media/smallcaseLogo.png" alt="Streak" style={{width:"65%"}}/></a>
                      <a href="" style={{textDecoration:"none",fontWeight:"bold"}}><p className="pt-2 mb-4" style={{fontSize:"0.8rem",color:"#9B9B9B"}}>Thematic investing platform that helps you invest in diversified
                      baskets of stocks on ETFs.</p> </a>
                </div>
                <div className="col ">
                    <a href="#" ><img src="media/tijori.svg" alt="Zerodha Fundhouse" style={{width:"50%"}}/></a>
                    <a href="" style={{textDecoration:"none",fontWeight:"bold"}}><p className="p-3 mb-4" style={{fontSize:"0.8rem",color:"#9B9B9B"}}>Investment research platform that offers detailed insights on stocks,
                     sectors, supply chains, and more.</p></a>
                      <a href="#" style={{marginBottom:"3rem"}} ><img src="media/dittoLogo.png" alt="Streak" style={{width:"45%"}}/></a>
                     <a href="" style={{textDecoration:"none",fontWeight:"bold"}}> <p className="p-3 mb-4" style={{fontSize:"0.8rem",color:"#9B9B9B"}}>Systematic trading platform that allows you to create and backtest
                        strategies without coding.</p></a>
                </div>
            </div>
              <button className="p-2 btn btn-primary fs-5" style={{width:"18%", margin:"1rem auto",fontWeight:"bold"}}>Sign up for free</button>
        </div>
     );
}

export default Universe;