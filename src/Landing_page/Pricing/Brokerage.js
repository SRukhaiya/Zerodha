import React from 'react';

function Brokerage() {
    return ( 
       <div className="conatiner mt-5 pt-5">
        <div className="row mt-4 pt-4">
            <div className="col-8 ms-5 ps-5 text-center">
                <a style={{textDecoration:"none"}} href=""><h4 style={{color:"#387ED1"}}>Brokerage Calculator</h4></a>
                <ul
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "12px" }}
            // className="text-mut"
          >
            <li>
              Call & Trade and RMS auto-squareoff:Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or ₹100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or ₹200 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </li>
          </ul>
            </div>
            <div className="col-3 text-left">
                <a style={{textDecoration:"none"}}  href=""><h4 style={{color:"#387ED1"}}>List of Charges</h4></a>
            </div>
        </div>
       </div>
     );
}

export default Brokerage;