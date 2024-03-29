
import React, { useState,useEffect } from "react";
import "./styles.css";
import {Table,Button, Row} from 'react-bootstrap';
function AddUser(){



  async function fetchData(){
    let result = await fetch ("http://localhost:8000/api/list");
   result = await result.json();
  setData(result);

} 

 
  const [data , setData] = useState([]);
  useEffect ( ()=> {

fetchData();

},[])

const handleButtonClick = id => {
  async function edit(){
    let item = {id}
    let result1 = await fetch ("http://localhost:8000/api/options" ,{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept" : 'application/json'
      }
  });

  result1 = await result1.json();
  fetchData();
  }
  edit();
 
};


const handleButtonClick1 = id => {
  async function edit(){
    let item ={id}
    let result1 = await fetch ("http://localhost:8000/api/optionsUser" ,{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept" : 'application/json'
      }
  });

  result1 = await result1.json();
  fetchData();
  }
  edit();
};



function handleButtonClick2 (data) {
  
  async function deleteItem() {

    let result = await fetch("http://localhost:8000/api/del", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    });
    fetchData(); 
  }
  

  async function uploadUser() {
    let items = {id:data.id,firstname:data.firstname,lastname:data.lastname,username:data.username,gender:data.gender,email:data.email,options:data.options};
    let result = await fetch("http://localhost:8000/api/uploadUser", {
      method: 'POST',
      body: JSON.stringify(items),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    });
    result = await result.json();
    fetchData(); 
  }
  deleteItem(); 
  uploadUser();

 
  let user = JSON.parse(localStorage.getItem('user-info'));
  if (user.username == data.username){
    localStorage.clear();
  }

};


    return (
    
 
      
      <div className="container1" >
          <Table striped bordered hover  responsive >
            <thead>
              <tr>
                <th>id</th>
                <th>Users</th>
                <th>option</th>
                <th>role</th>
              </tr>
            </thead>
            <tbody>
              {
              data.map((item)=>
              <tr>
                <td>{item.id }</td>
                <td>{item.username}</td>
                <div style={{display:"flex" , flexDirection:Row,justifyContent:"space-between"}}>
                <Button onClick={() => handleButtonClick(item.id)} variant="primary" style={{margin:5,fontFamily:"poppins"}}>Admin</Button>
                <Button onClick={() => handleButtonClick1(item.id)} variant="secondary" style={{margin:5,fontFamily:"poppins"}}>Utilisateur</Button>
                <Button variant="danger" onClick={()=> handleButtonClick2(item) }  style={{margin:5,fontFamily:"poppins"}}> delete</Button>
              </div>
              <td style={{fontFamily:"poppins"}}>{item.options}</td>
              </tr>

              )
              }
            </tbody>
          </Table>
          </div>
        );
      
            }   
    
        
        
      

    

    


export default AddUser  