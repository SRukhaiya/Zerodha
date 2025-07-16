import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Orders from './Orders.js';
import Holdings from './Holdings.js';
import Funds from './Funds.js';
import Apps from './Apps.js';
import Positions from './Positions.js';
import Summary from './Summary.js';
import Watchlist from './Watchlist.js';
import { GeneralContextProvider } from './GeneralContext.js';
function Dashboard() {
    return ( 
        <div className="dashboard-container">
          <GeneralContextProvider>
      <Watchlist/>
     </GeneralContextProvider>
        <div className="content">
        <Routes>
            <Route exact path="/" element={<Summary/>}/>
             <Route path="/Orders" element={<Orders/>}/>
              <Route path="/holdings" element={<Holdings/>}/>
               <Route path="/Positions" element={<Positions/>}/>
                <Route path="/funds" element={<Funds/>}/>
                <Route path="/apps" element={<Apps/>}/>
        </Routes>
        </div>
           </div>
     );
}

export default Dashboard;