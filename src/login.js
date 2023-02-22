import React , {useState,useLayoutEffect} from 'react';
import {useNavigate} from 'react-router-dom';

function Login(){
  const [email , setEmail]  = useState();
  const [password , setPassword]  = useState();
  const navigate = useNavigate();
  useLayoutEffect(() => {
    const userInfo = localStorage.getItem('user-info');
    if (userInfo) {
      navigate('/');
    }
  }, [navigate]);
    async function login(){
      let item ={email,password};
      let result = await fetch ("http://localhost:8000/api/login" ,{
    method:'POST',
    body:JSON.stringify(item),
    headers:{
      "Content-Type":'application/json',
      "Accept" : 'application/json'
    }
    });
    console.warn(result);
    result = await result.json();
localStorage.setItem('user-info', JSON.stringify(result));
if (result.options == "Admin"){
  navigate("/GestionUtilisateur");
  } else if (result.options =="User"){
    navigate ("/AffichageEvent");
  }else {
    alert ("attent le energisterment");
    localStorage.clear();
  }
    }

   
    return (

      <div style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#F0F8FF",
        padding: "2rem",
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white", boxShadow: "2px 2px 10px lightgray", padding: 30 }}>
        <h1>Login Page</h1><br></br>
          <input
            style={{
              height: 40,
              width: 200,
              borderRadius: 10,
              border: "1px solid lightgray",
              padding: 10,
              marginBottom: 10,
            }}
            placeholder="email"
            onChange ={(e) =>setEmail(e.target.value)}
          />
          <input
            style={{
              height: 40,
              width: 200,
              borderRadius: 10,
              border: "1px solid lightgray",
              padding: 10,
              marginBottom: 10,
            }}
            placeholder="Password"
            type="password"
            onChange= {(e) => setPassword(e.target.value)}
          />
          <button
            style={{
              height: 40,
              width: 100,
              borderRadius: 20,
              backgroundColor: "blue",
              color: "white",
              border: "none",
              marginTop: 10,
            }}
            onClick={login} 
          >
            Login
          </button>
          
        </div>
      </div>
 
    )
}

export default Login 