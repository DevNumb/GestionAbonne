
import React, { useState,useEffect } from "react";
import "./styles.css";
import {Table,Button, Row} from 'react-bootstrap';
function AddUser(){



  const handleClick = () => {
    window.location.reload();
  };
  


 
  const [data , setData] = useState([]);
  useEffect ( ()=> {
  async function fetchData(){
    let result = await fetch ("http://localhost:8000/api/list");
   result = await result.json();
  setData(result);

} 
fetchData();

},[])
console.warn(data);
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
  }
  edit();
};


const handleButtonClick2 = data => {
  
  async function deleteItem() {
    let item = {id: data.id};
    let result = await fetch("http://localhost:8000/api/del", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    });
    console.log ("delete finished");
  }
  

  async function uploadUser() {
    let items = {id:data.id,firstname:data.firstname,lastname:data.lastname,username:data.username,gender:data.gender,email:data.email,options:data.options};
    console.warn(items);
    let result = await fetch("http://localhost:8000/api/uploadUser", {
      method: 'POST',
      body: JSON.stringify(items),
      headers: {
        "Content-Type": 'application/json',
        "Accept": 'application/json'
      }
    });
    result = await result.json();
    console.warn (result);
  }
 deleteItem();
  console.log ("call deleted");
  uploadUser();
  console.warn ("finish uploaded");
  
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
              </tr>
            </thead>
            <tbody>
              {
              data.map((item)=>
              <tr>
                <td>{item.id }</td>
                <td>{item.username}</td>
                <div style={{display:"flex" , flexDirection:Row,justifyContent:"space-between"}}>
                <Button onClick={() => handleButtonClick(item.id)} variant="primary" style={{margin:5}}>Admin</Button>
                <Button onClick={() => handleButtonClick1(item.id)} variant="secondary" style={{margin:5}}>Utilisateur</Button>
                <Button variant="danger" onClick={()=> handleButtonClick2(item) }  onMouseLeave={handleClick}style={{margin:5}}> Supprimer </Button>
              </div>
              </tr>

              )
              }
            </tbody>
          </Table>
          </div>
        );
      
            }   
    
        
        
      

    

    


export default AddUser  