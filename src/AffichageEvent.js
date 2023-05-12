import {Button,Table}from 'react-bootstrap';
import {useState,useEffect} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

function AffichageEvent(){



  const [data1 , setData1] = useState([]);

  const [data ,setData] = useState([]);

  async function search  (key) {
    if (key){
    let result =  await fetch ("http://localhost:8000/api/searchEvent/"+key);
    result = await result.json();
    console.warn(result);
    setData(result);
    }else {
      window.location.reload();
    }
  };
  useEffect ( ()=> {
  async function fetchData1(){
    let result = await fetch ("http://localhost:8000/api/listEvent");
   result = await result.json();
  setData1(result);
} 
fetchData1();

},[])

    return (
        
  

<div style={{ display: "flex", flexDirection: "column",  backgroundColor: "white", boxShadow: "2px 2px 10px lightgray", padding: 50,margin:50,borderRadius:"6px"}}>
  <h1>Event</h1>
  <AiOutlineSearch style={{
        marginLeft:"1230px",
        marginTop:"70px",
        position:'absolute',
        zIndex:'1'
            }}/>
<input type ="text" style={{
              height: 40,
              borderRadius: 20,
              border: "1px solid lightgray",
              padding: 10,
              marginBottom: 20,
              position:"relative"
            }} onChange={(e)=>search(e.target.value)}></input>
             <Table striped bordered hover responsive>
      <thead>
        <tr>
       
        </tr>
      </thead>
      <tbody>
      {data.map((item) => (
  <tr key={item.id_event}>
    <td>{item.id_event}</td>
    <td>{item.nom_event}</td>
    <td style={{display:"flex" , flexDirection:"row",justifyContent:"space-between"}}>
      <a href ={"http://localhost:8000/" + item.Img}  download={item.Img} >
        <Button class="primary" style={{marginRight:"5px" , width:100}}  >Download </Button> </a> 
       
        </td>
     
        <td style={{width:300}} >{item.date_db}</td>
  </tr>
))}
      </tbody>
    </Table>
           

      <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>id</th>
          <th>Descirption</th>
          <th >File</th>
          <th>date</th>
        </tr>
      </thead>
      <tbody>
      {data1.map((item) => (
  <tr key={item.id_event}>
    <td>{item.id_event}</td>
    <td>{item.nom_event}</td>
    <td style={{display:"flex" , flexDirection:"row",justifyContent:"space-between"}}>
      <a href ={"http://localhost:8000/" + item.Img}  download={item.Img} >
        <Button class="primary" style={{marginRight:"5px"}}  >Download</Button> </a> 
       
        </td>
     
        <td>{item.date_db}</td>
        <td>{item.Type}</td>
  </tr>
))}
      </tbody>
    </Table>
    
    </div>  

  );
}

export default AffichageEvent;