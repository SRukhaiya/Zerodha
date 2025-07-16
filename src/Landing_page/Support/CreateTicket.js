import React from 'react';

function CreateTicket() {
    return (  
        <div className="container px-5 pt-4">
            <h4 className="text-left" style={{color:"#424242"}}>To create a ticket, select a relevant topic</h4>
            <div className="row">
                <div className= "col-4 px-5 mt-2 mb-2">
                    <h5 className="mt-5 mb-4" style={{color:"#222222"}}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Account Opening</h5>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Resident individual</p></a> 
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Minor</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Non Resident Indian (NRI)</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Company, Partnership, HUF and LLP</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Glossary</p></a>
                </div>
                 <div className="col-4 px-5 mt-2 mb-2">
                    <h5 className="mt-5 mb-4" style={{color:"#222222"}}><i class="fa fa-user" aria-hidden="true"></i> &nbsp; Your Zerodha Account</h5>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Your Profile</p></a> 
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Account modification</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Client Master Report (CMR) and Depository Participant (DP)</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Nomination</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Transfer and conversion of securities</p></a>
                 </div>
                  <div className="col-4 px-5 mt-2 mb-2">
                     <h5 className="mt-5 mb-4" style={{color:"#222222"}}><i class="fa fa-signal" aria-hidden="true"></i> &nbsp;  Kite</h5>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>IPO</p></a> 
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Trading FAQs</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Margin Trading Facility (MTF) and Margins</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Charts and orders</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Alerts and NudgesT</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>General</p></a>
                  </div>
            </div>

            <div className="row">
                <div className="col-4 px-5 mb-2">
                    <h5 className="mt-2 mb-4" style={{color:"#222222"}}> <i class="fa fa-plus-circle" aria-hidden="true"></i> Funds</h5>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Add money</p></a> 
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Withdraw money</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Add bank accounts</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>eMandates</p></a>
                   
                </div>
                 <div className="col-4 px-5 mb-2">
                    <h5 className="mt-2 mb-4" style={{color:"#222222"}}><i class="fa fa-user" aria-hidden="true"></i> &nbsp;  Console</h5>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Portfolio</p></a> 
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Corporate actions</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Funds statement</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Reports</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Profile</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Segments</p></a>
                 </div>
                  <div className="col-4 px-5 mb-2">
                     <h5 className="mt-2 mb-4" style={{color:"#222222"}}><i class="fa fa-signal" aria-hidden="true"></i> &nbsp; Coin</h5>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Mutual funds</p></a> 
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>National Pension Scheme (NPS)</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Features on Coin</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>Payments and Orders</p></a>
                    <a href="" style={{textDecoration:"none",fontSize:"14px",color:"#387ED1"}}><p>General</p></a>
                    
                  </div>
            </div>
        </div>

        

        
        

    );
}

export default CreateTicket;