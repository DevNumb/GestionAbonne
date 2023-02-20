import React from "react";
import {useState,useEffect} from 'react';
import {Button,Table}from 'react-bootstrap';
function Conventions(){
  async function fetchData(){
    let result = await fetch ("http://localhost:8000/api/listConvention");
   result = await result.json();
  setData1(result);

} 

 
  const [data1 , setData1] = useState([]);
  useEffect ( ()=> {

fetchData();

},[])
  const [nom_con,setNom_con] = useState();
  const [description,setDescription] = useState();
  async function addConv(){
    console.warn(nom_con,description);
const formData = new FormData();
formData.append('Nom_con',nom_con);
formData.append('description' , description);
let result = await fetch("http://localhost:8000/api/addCon",{
method: 'post',
body: formData
});
alert("Enregistrer");
fetchData();
}

  async function delCons(id){

    let result = await fetch ("http://localhost:8000/api/DelConvention/" + id , {
       method:"DELETE"
    
    });
    
    
    result = await result.json();
    fetchData();
    }
    return (

      <div style={{ display: "flex", flexDirection: "column",  backgroundColor: "white", boxShadow: "2px 2px 10px lightgray", padding: 50,margin:50,borderRadius:"6px"}}>
      <h1  style={{  marginBottom: 20
          }}>Ajouter Conventions</h1>
   <input type="text" placeholder="Nom"  style={{
            height: 40,
            borderRadius: 10,
            border: "1px solid lightgray",
            padding: 10,
            marginBottom: 20,
          }} onChange = {(e)=>setNom_con(e.target.value)}></input>

<input type="text"  placeholder="description" style={{
            height: 40,
            borderRadius: 10,
            border: "1px solid lightgray",
            padding: 10,
            marginBottom: 20,
          }}  onChange = {(e)=>setDescription(e.target.value)}></input>

   <Button variant="primary" type="submit" style={{  flex: 0,width:"80px",
            marginBottom: 10}} onClick={addConv}>
      Submit
    </Button>
        <Table striped bordered hover responsive >
        <thead>
          <tr>
            <th>id</th>
            <th>nom</th>

            <th colSpan={2}>description</th>
            <th> options</th>
          </tr>
        </thead>
        <tbody>
        {data1.map((item) => (
    <tr key={item.id_con}>
        <td>{item.id_con}</td>
      <td>{item.Nom_con}</td>
      <td colSpan={2}>{item.description}</td>
      <td > <Button variant="danger" onClick={()=> delCons(item.id_con)}>Supprimer</Button></td>
    </tr>
  ))}
        </tbody>
      </Table>
      </div>

    );
}

export default Conventions;