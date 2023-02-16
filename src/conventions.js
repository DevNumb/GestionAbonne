import React from "react";
import {useState,useEffect} from 'react';
import {Button,Table}from 'react-bootstrap';
function Conventions(){
   
    const [data1 , setData1] = useState([]);
    useEffect ( ()=> {
    async function fetchData1(){
      let result = await fetch ("http://localhost:8000/api/listConvention");
     result = await result.json();
    setData1(result);
  } 
  fetchData1();
  
  },[])
  console.warn("result",data1);
    return (
        <div style={{ display: "flex", flexDirection: "column",  backgroundColor: "white", boxShadow: "2px 2px 10px lightgray", padding: 50,margin:50,borderRadius:"6px"}}>
        <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>id</th>
            <th>nom</th>
            <th>description</th>
          </tr>
        </thead>
        <tbody>
        {data1.map((item) => (
    <tr key={item.id_con}>
        <td>{item.id_con}</td>
      <td>{item.Nom_con}</td>
      <td>{item.description}</td>
    </tr>
  ))}
        </tbody>
      </Table>
      </div>

    );
}

export default Conventions;