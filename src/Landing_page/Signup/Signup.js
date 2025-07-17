import React from 'react';

function Signup() {
    return ( 
        <div className="signup-container text-center m-5 p-5"  style={{marginTop:"10px",backgroundColor:"rgb(56,126,209)",borderRadius:"10px",color:"white"}}>
        <h3 className="p-2">Signup</h3>
        <form>
            <div className="Username">
                <label for="username" >Enter Username :</label>
                <input type='text' id ="username" placeholder="enter username" required style={{width:"30",height:"40px",borderRadius:"5px",border:"1px solid #ccc",marginLeft:"10px",marginTop:"10px"}}/><br></br>
                 <label for="password" style={{padding:"5px"}}>Enter Password :</label>
                 <input type="password" id="password" placeholder='Enter Password' required style={{width:"30%",height:"40px",borderRadius:"5px",border:"1px solid #ccc",marginLeft:"10px",margin:"8px",marginTop:"10px"}}/><br></br>
                 <button className="btn btn-primary">Sign Up</button>
            </div>
        </form>
        </div>
     );
}

export default Signup;
