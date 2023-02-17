
import React, { useState,useEffect } from "react";
import "./styles.css";
import {Table,Button, Row} from 'react-bootstrap';
function Historique(){

/*
      const [data , setData] = useState([]);
      useEffect ( ()=> {
      async function fetchData(){
        let result = await fetch ("http://localhost:8000/api/listHistorique/");
       result = await result.json();
      setData(result);
    
    } 
    fetchData();
    
    },[])
*/
    const [data , setData] = useState([]);
    async function search  (key) {
      let result =  await fetch ("http://localhost:8000/api/search/"+key);
      result = await result.json();
      console.warn(result);
      setData(result);
    };
   
return (




      <>
       <div style={{ display: "flex", flexDirection: "column",  backgroundColor: "white", boxShadow: "2px 2px 10px lightgray", padding: 50,margin:50,borderRadius:"6px"}}>
      <h1>Search Users</h1>
      <br/>
      <br/>
      <input type="text" onChange={(e)=>search(e.target.value)} className="form-control" placeholder="Rechercher ici" style={{marginBottom:"50px"}}></input>
      <Table striped bordered hover responsive >
    <thead>
      <tr>
        <th>id</th>
        <th>Users</th>
        <th>option</th>
      </tr>
    </thead>
    <tbody>
      {data.map((item) => <tr>
        <td>{item.id}</td>
        <td>{item.username}</td>
        <td> {item.options}</td>
      </tr>

      )}
    </tbody>
  </Table>
  </div>
  </>
);
}
      export default Historique