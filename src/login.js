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
function redirect (){
  navigate("/register");
}
   
    return (

      <div style={{
        display: "flex",
        alignItems: "center",
        marginTop:"100px",
        justifyContent: "center",
        backgroundColor: "white",
        padding: "2rem",
        boxSizing: "border-box"
      }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white", boxShadow: "2px 2px 10px lightgray", padding: 30 }}>
        <h2 style ={{fontFamily:"poppins" ,fontWeight:"bold"}}>Login Page</h2><br></br>
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
              fontFamily:"poppins" ,
              fontWeight:"bold"
            }}
            onClick={login} 
          >
            Login
          </button>
          <button onClick={redirect} style={{textUnderlinePosition:"under", textDecoration:"underline gray",color:"gray",fontFamily:"poppins",border:"none" ,marginTop: 20}}>Nouvelle compte ?</button>
        </div>
      </div>
 
    )
}

export default Login 