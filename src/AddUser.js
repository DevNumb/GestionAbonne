
import React, { useState,useEffect } from "react";
import "./styles.css";
import {Table,Button, Row} from 'react-bootstrap';
function AddUser(){



 
    const handleRefresh = () => {
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
  console.warn (result1);
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
  console.warn (result1);
  }
  edit();
};


const handleButtonClick2 = id => {
  async function edit(){
    let item ={id}
    let result1 = await fetch ("http://localhost:8000/api/del" ,{
      method:'POST',
      body:JSON.stringify(item),
      headers:{
        "Content-Type":'application/json',
        "Accept" : 'application/json'
      }
  });

  }
  edit();

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
                <Button variant="danger" onClick={() => handleButtonClick2(item.id)} onMouseLeave={() => handleRefresh()} style={{margin:5}}> Supprimer</Button>
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