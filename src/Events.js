import {Button,Table}from 'react-bootstrap';
import {useState,useEffect} from 'react';


function Events(){
const [nom_event,setNom_event] = useState();
const [file,setFile] = useState();
async function addEvents(){
console.warn(nom_event,file);
const formData = new FormData();
formData.append('nom_event',nom_event);
formData.append('file',file);
let result = await fetch("http://localhost:8000/api/addEvent",{
method: 'post',
body: formData
});
alert("Enregistrer");
}

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
        <h1  style={{  marginBottom: 20
            }}>Ajouter evenement</h1>
     <input type="text"   style={{
              height: 40,
              borderRadius: 10,
              border: "1px solid lightgray",
              padding: 10,
              marginBottom: 20,
            }} onChange={(e)=>setNom_event(e.target.value)}></input>
            <input type="file" className="form-control" placeholder="file" style={{marginBottom: 20}} onChange={(e)=>setFile(e.target.files[0])}></input> 
     <Button variant="primary" type="submit" style={{  flex: 0,width:"80px",
              marginBottom: 10}} onClick={addEvents}>
        Submit
      </Button>


      <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>id</th>
          <th>Descirption</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
      {data1.map((item) => (
  <tr key={item.id_event}>
    <td>{item.id_event}</td>
    <td>{item.nom_event}</td>
    <td><img src={"http://localhost:8000/" + item.Img} style={{width:100}}alt="#"></img></td>
  </tr>
))}
      </tbody>
    </Table>
    </div>
      

  );
}




export default Events