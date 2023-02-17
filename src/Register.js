import React , {useState,useEffect } from 'react';
import {useNavigate} from 'react-router-dom';

function Register(){
const [firstname , setFirstname] = useState ("");
const [lastname,setLastname] =useState("");
const [gender,setGender] =useState("");
const [username,setUsername] =useState("");
const [email,setEmail] =useState("");
const [password,setPassword] =useState("");
const [options,setOptions] =useState("");
const navigate = useNavigate();
useEffect(()=>{
if (localStorage.getItem('user-info'))
{
  navigate("/GestionUtilisateur");
}
},[])
async function signUp() {
  setOptions("");
  

  const item = {
   firstname,lastname,gender,username,email,password,options
  };
  const result = await fetch("http://localhost:8000/api/register", {
    method: "POST",
    body: JSON.stringify(item),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  const response = await result.json(); 
  localStorage.setItem("user-info", JSON.stringify(response));
  navigate("/GestionUtilisateur");
}

    return (

        <div style={{ display: "flex", height: "100vh", alignItems: "center", justifyContent: "center", backgroundColor: "#F0F8FF" }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", backgroundColor: "white", boxShadow: "2px 2px 10px lightgray", padding: 50 }}>
        <h1>Register Page</h1><br></br>
          <input
            style={{
              height: 40,
              width: 200,
              borderRadius: 10,
              border: "1px solid lightgray",
              padding: 10,
              marginBottom: 10,
            }}
            placeholder="First Name"
            value ={firstname}
            onChange={(e)=>setFirstname(e.target.value)}
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
            placeholder="Last Name"
            value ={lastname}
            onChange={(e)=>setLastname(e.target.value)}
          />
          <div style={{ display: "flex", justifyContent: "space-between", width: 200 }}>
    <input type="radio" checked={gender === 'Male'} value="Male" onClick={() => setGender('Male')} />
     Male
    <input type="radio" checked={gender === 'Female'} value="Female" onClick={() => setGender('Female')} />
   Female


          </div>
          <input
            style={{
              height: 40,
              width: 200,
              borderRadius: 10,
              border: "1px solid lightgray",
              padding: 10,
              marginBottom: 10,
            }}
            placeholder="Username"
            value ={username}
            onChange={(e)=>setUsername(e.target.value)}
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
            placeholder="Email"
            value ={email}
            onChange={(e)=>setEmail(e.target.value)}
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
            value ={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <button
            style={{
              height: 40,
              width: 200,
              borderRadius: 20,
              backgroundColor: "blue",
              color: "white",
              marginTop: 10,
              cursor: "pointer",
              border: "none",
            }}
            onClick= {signUp}
            >
            SignUp
          </button>
          </div>
          </div>
 
    )
}

export default Register