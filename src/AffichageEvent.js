import {Button,Table}from 'react-bootstrap';
import {useState,useEffect} from 'react';


function AffichageEvent(){



  const [data1 , setData1] = useState([]);
  useEffect ( ()=> {
  async function fetchData1(){
    let result = await fetch ("http://localhost:8000/api/listEvent");
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
          <th>Descirption</th>
          <th style={{width:100}}>Formlaire</th>
        </tr>
      </thead>
      <tbody>
      {data1.map((item) => (
  <tr key={item.id_event}>
    <td>{item.id_event}</td>
    <td>{item.nom_event}</td>
    <td><a href ={"http://localhost:8000/" + item.Img}  download={item.Img}><Button class="primary">Telechargement</Button> </a></td>
  </tr>
))}
      </tbody>
    </Table>
    
    </div>  

  );
}

export default AffichageEvent;