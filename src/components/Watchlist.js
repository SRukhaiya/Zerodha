import React, {useContext} from 'react';
import {Tooltip,Grow} from '@mui/material'
import {watchlist} from '../data/data.js'
import { useState } from 'react';
import GeneralContext from "./GeneralContext.js";
import BuyActionWindow from "./BuyActionWindow.js";

import {
 
    BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,

} from "@mui/icons-material";
function Watchlist() {
    return ( 
        <div className="Watchlist-container">
            <div className="input-container">
                <input type="text " placeholder='Search eg:infy, bse,nifty fut weekly,gold mcx' id='search' name="search" className="search"></input>
                <span className="inputs"> {watchlist.length}/ 50</span>
            </div>
            <ul className="list">
                {watchlist.map((stock,index)=>{
                    return(
                  <WatchListItem stock={stock} key={index}/>)
                    
                })}
            </ul>
            
        </div>
     );
}

export default Watchlist;

const WatchListItem=({stock})=>{
    const[showwatchlistactions,setshowwatchlistactions]=useState(false);

    const handlemouseenter=(e)=>{
        setshowwatchlistactions(true);
    }

const handlemouseexit=(e)=>{
    setshowwatchlistactions(false);
};
return(

    <li onMouseEnter={handlemouseenter} onMouseLeave={handlemouseexit} >
    <div className="item">
     <p className={stock.isDown?"down":"up"}>{stock.name}</p>
     <div className="itemInfo">
     <span className="percent">{stock.percent}</span>
   {stock.isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
      
     <span className="price">{stock.price}</span>
     </div>
     {showwatchlistactions && <WatchlistActions  uid={stock.name}/>}
    </div>
    
    </li>
);
}

const WatchlistActions=({uid})=>{
     const generalContext = useContext(GeneralContext);

  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };
    return (
        <span className="actions">
            <span >
                <Tooltip title="buy B" placement='top' arrow  onClick={handleBuyClick}>
                    <button className="buy">Buy</button>
                </Tooltip>
            </span>
             <span >
                <Tooltip title="Sell s" placement='top' arrow TransitionComponent={Grow}>
                    <button className="sell">Sell</button>
                </Tooltip>
            </span>
             <span >
                <Tooltip title="Analytics A" placement='top' arrow TransitionComponent={Grow}>
                   <button className="action">
                    <BarChartOutlined className="icon"/>
                   </button>
                </Tooltip>
            </span>
             <span >
                <Tooltip title="More " placement='top' arrow TransitionComponent={Grow}>
                    <button className="action" >
                    <MoreHoriz className='icon'></MoreHoriz>
                    </button>
                </Tooltip>
            </span>
        </span>
    )
}