import React ,  { useState } from 'react';

function Signup() {
    
        const [username, setUsername] = useState('');
        const [password, setPassword] = useState('');

        const handleLogin = () => {
    // Your login logic
    console.log('Logging in with', username, password);
     
  };
  const isFormValid = username.trim() !== '' && password.trim() !== '';
        return ( 
            <div style={{width:"50%", textAlign: 'center', marginTop: '100px',marginLeft:"300px",backgroundColor:'#007bff', padding: '20px', borderRadius: '10px', color: 'white' }}>
      <h2>LOGIN</h2>

      <div>
        <label>Enter Username: </label>
        <input
          type="text"
          placeholder="enter username"
          value={username} style={{ marginLeft: '10px' }}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div style={{ marginTop: '10px' }}>
        <label>Enter Password: </label>
        <input
          type="password"
          placeholder="Enter Password"
          value={password} style={{ marginLeft: '10px' }}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div style={{ marginTop: '15px' }}>
        <button
          onClick={handleLogin}
          disabled={!isFormValid}
          style={{ backgroundColor: isFormValid ? 'white' : 'gray', color: 'black',border:"2px solid black" }} >
         <button onClick={()=>window.location.href="http://localhost:3001"}  style={{ color:"black",backgroundColor: isFormValid ? 'white' : 'gray',border:"none"}}>Login</button>
        </button>
      </div>
    </div>
  );
}

export default Signup;
        
    
