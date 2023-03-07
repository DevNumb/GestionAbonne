import {Button,Table}from 'react-bootstrap';
import {useState,useEffect} from 'react';

function Promotion(){
    async function fetchData1(){
        let result = await fetch ("http://localhost:8000/api/listPromo");
       result = await result.json();
      setData1(result);
      } 
    
      const [data1 , setData1] = useState([]);
      useEffect ( ()=> {
     
    fetchData1();
    
    },[])
    const [nom_promo,setNom_promo] = useState();
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
    formData.append('nom_promo',nom_promo);
    formData.append('file',file);
    let result = await fetch("http://localhost:8000/api/addPromo",{
    method: 'post',
    body: formData
    });
    alert("Enregistrer");
    
    
    fetchData1();
    }
    
     
    
    
    
    
        return (
            
        <div style={{ display: "flex", flexDirection: "column",  backgroundColor: "white", boxShadow: "2px 2px 10px lightgray", padding: 50,margin:50,borderRadius:"6px"}}>
            <h1  style={{  marginBottom: 20
                }}>Ajouter Offers</h1>
         <input type="text"   style={{
                  height: 40,
                  borderRadius: 10,
                  border: "1px solid lightgray",
                  padding: 10,
                  marginBottom: 20,
                }} onChange={(e)=>setNom_promo(e.target.value)}></input>
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
              <th >Pdf</th>
              <th style={{width:100}}>options</th>
            </tr>
          </thead>
          <tbody>
          {data1.map((item) => (
      <tr key={item.id_Promo}>
        <td>{item.id_Promo}</td>
        <td>{item.nom_Promo}</td>
        <td style={{display:"flex" , flexDirection:"row",justifyContent:"space-between"}}>
          <a href ={"http://localhost:8000/" + item.Promo_img}  download={item.Promo_img} >
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


export default Promotion;