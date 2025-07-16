import React from 'react';

function trust() {
    return ( 
        <div className='container p-5 mb-5 ' style={{marginTop:"3rem"}}>
            <dic className='row'>
                <div className='col-6 mt-5' >
                  <img src='media/largestBroker.svg' alt='largest broker' style={{width:"80%"}}/>
                </div>
                <div className='col-6 mt-2'>
                    <h1 className="fs-3">Largest stock Broker in India</h1>
                    <p>2+ million zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in</p>
                    <div className="row pt-3">
                        <div className="col-6"><li>Futures and Options</li></div>
                        <div className='col-6'><li>Stocks and IPOs</li></div>'
                    </div>
                    <div className="row">
                        <div className="col-6"><li>Commodity derivatives</li></div>
                        <div className='col-6'><li>Direct mutual funds</li></div>'
                    </div>
                    <div className="row">
                        <div className="col-6"><li>Currency derivatives</li></div>
                        <div className='col-6'><li>Bonds and government securities</li></div>'
                    </div>
                    <div className='row'>
                        <img src='media/presslogos.png' alt='presslogo' style={{width:"90%"}}/>
                    </div>
                </div>
            </dic>
        </div>
     );
}

export default trust;