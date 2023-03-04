import {Button,Table}from 'react-bootstrap';
import {useState,useEffect} from 'react';
export const added = false;


function Events(){

  async function fetchData1(){
    let result = await fetch ("http://localhost:8000/api/listEvent");
   result = await result.json();
  setData1(result);
  } 

  const [data1 , setData1] = useState([]);
  useEffect ( ()=> {
 
fetchData1();

},[])
const [nom_event,setNom_event] = useState();
const [file,setFile] = useState();

async function delEvents(id){

let result = await fetch ("http://localhost:8000/api/delEvent/" + id , {
   method:"DELETE"

});


result = await result.json();
fetchData1();
}
async function addEvents(){
const formData = new FormData();
formData.append('nom_event',nom_event);
formData.append('file',file);
let result = await fetch("http://localhost:8000/api/addEvent",{
method: 'post',
body: formData
});
alert("Enregistrerr");
fetchData1();
 added = true;
}

 




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
            <input type="file" name ="file" className="form-control" placeholder="file" style={{marginBottom: 20}} onChange={(e)=>setFile(e.target.files[0])}></input> 
     <Button variant="primary" type="submit" style={{  flex: 0,width:"80px",
              marginBottom: 10}} onClick={addEvents}>
        Submit
      </Button>


      <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>id</th>
          <th>Descirption</th>
          <th >Formlaire</th>
          <th style={{width:100}}>options</th>
        </tr>
      </thead>
      <tbody>
      {data1.map((item) => (
  <tr key={item.id_event}>
    <td>{item.id_event}</td>
    <td>{item.nom_event}</td>
    <td style={{display:"flex" , flexDirection:"row",justifyContent:"space-between"}}>
      <a href ={"http://localhost:8000/" + item.Img}  download={item.Img} >
        <Button class="primary" style={{marginRight:"5px"}}  >Telechargement</Button> </a> 
       
        </td>
        <td>
        <Button variant="danger"   onClick={() => delEvents(item.id_event)}>Supprimer</Button>   

        </td>
  </tr>
))}
      </tbody>
    </Table>
    </div>
      

  );
}




export default Events