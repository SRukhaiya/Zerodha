import React ,{useState} from 'react';
import {Link} from 'react-router-dom';

const Menu=()=> {
    const[selectedMenu,setSelectedMenu]=useState(0);
    const[isProfileDropDownOpen,setIsProfileDropDownOpen]=useState(false);

    const handleMenuClick=(index)=>{
        setSelectedMenu(index);
    }
    const handleprofileClick=(index)=>{
        setIsProfileDropDownOpen(!isProfileDropDownOpen);
    }

    const menuclass="menu";
    const activemenuclass="menuselected";
    return ( 
        <div className="menu-container">
            
                <img className="img" src="logo.png"  alt="logo" style={{width:"4%",height:"4%",marginTop:"12px",marginRight:"250px"}}></img>
            
            <div className="menus">
                <ul>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/" onClick={()=>handleMenuClick(0)}>
                        <p className={selectedMenu===0?activemenuclass:menuclass}>Dashboard</p>
                        </Link>
                    </li>
                    <li>
                        <Link   style={{ textDecoration: "none" }} to="/Orders" onClick={()=>handleMenuClick(1)}>
                        <p className={selectedMenu===1?activemenuclass:menuclass}>Orders</p>
                        </Link>
                    </li>
                    <li>
                         <Link   style={{ textDecoration: "none" }} to="/holdings" onClick={()=>handleMenuClick(2)}>
                        <p className={selectedMenu===2?activemenuclass:menuclass}>Holdings</p>
                        </Link>
                    </li>
                    <li>
                         <Link   style={{ textDecoration: "none" }} to="/positions" onClick={()=>handleMenuClick(3)}>
                        <p className={selectedMenu===3?activemenuclass:menuclass}>Positions</p>
                        </Link>
                    </li>
                    <li>
                        <Link   style={{ textDecoration: "none" }} to="/funds" onClick={()=>handleMenuClick(4)}>
                        <p className={selectedMenu===4?activemenuclass:menuclass}>Funds</p>
                        </Link>
                    </li>
                    <li>
                        <Link style={{ textDecoration: "none" }} to="/apps" onClick={()=>handleMenuClick(5)}>
                        <p className={selectedMenu===5?activemenuclass:menuclass}>Apps</p>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="userid-container" onClick={handleprofileClick} >
                <div className="user-logo" >
                    SR
                </div>
                <p className="username">USERID</p>
            </div>
        </div>
     );
}

export default Menu;