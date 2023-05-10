
import React from "react";
import {useState,useEffect} from 'react';
import {Button,Table}from 'react-bootstrap';

function AffichageConvention(){


    async function fetchData(){
        let result = await fetch ("http://localhost:8000/api/listConvention");
       result = await result.json();
      setData1(result);
    
    } 
    
     
      const [data1 , setData1] = useState([]);
      useEffect ( ()=> {
    
    fetchData();
    
    },[])
 return (
    <div style={{ display: "flex", flexDirection: "column",  backgroundColor: "white", boxShadow: "2px 2px 10px lightgray", padding: 50,margin:50,borderRadius:"6px"}}>
      <h1>Conventions</h1>
    <Table striped bordered hover responsive >
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>

            <th colSpan={2}>description</th>
          </tr>
        </thead>
        <tbody>
        {data1.map((item) => (
    <tr key={item.id_con}>
        <td>{item.id_con}</td>
      <td>{item.Nom_con}</td>
      <td colSpan={2}>{item.description}</td>
    </tr>
  ))}
        </tbody>
      </Table>
      </div>
 );
}


export  default AffichageConvention;