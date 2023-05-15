import {Button,Table}from 'react-bootstrap';
import {useState,useEffect} from 'react';
import {AiOutlineSearch} from 'react-icons/ai';
import Modal from 'react-bootstrap/Modal';

function Events(){
  
  const [nom_event,setNom_event] = useState();
  const [file,setFile] = useState();
  const [type,setType] = useState();
  const [dat,setDat] = useState();
  const [datf,setDatf] = useState();
  const [eventid , setEventid] = useState();
  const handleShow = (id_event) => {
    setEventid(id_event);
  setShow(true);
  };
  const handleClose = () => setShow(false);
  const [show, setShow] = useState(false);
  async function fetchData1(){
    let result = await fetch ("http://localhost:8000/api/listEvent");
   result = await result.json();
  setData1(result);
  } 
  async function fetchData2(){
    let result = await fetch ("http://localhost:8000/api/listEvent");
   result = await result.json();
  setData1(result);
  } 
  const [data1 , setData1] = useState([]);
  const [data , setData] = useState([]);

  async function UpdateEvent(id){
    try {
      const data2 = {
        nom_event: nom_event,
        file: file,
        date_db: dat,
        date_df: datf,
        Type:type,
      };
      
      let jsonData = JSON.stringify(data2);
      
      const result = await fetch(`http://localhost:8000/api/UpdateEvent/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: jsonData
      });
      console.log(result);
      fetchData1(); // Refetch data to update view
    } catch (error) {
      console.error(error);
    }
  }
  



  useEffect ( ()=> {
 
fetchData1();

},[])


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
formData.append ('date_db',dat);
formData.append ('date_df',datf);
formData.append ('Type',type);
let result = await fetch("http://localhost:8000/api/addEvent",{
method: 'post',
body: formData
});
alert("Enregistrer");
fetchData1();
let result2 = await fetch ("http://localhost:8000/api/sends");
}

 




    return (
        
      

      <>
      
  

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Event</Modal.Title>
        </Modal.Header>
        <Modal.Body><div style={{display: "flex", flexDirection: "column"}}>
            <input type="text" style={{
              height: 40,
              borderRadius: 10,
              border: "1px solid lightgray",
              padding: 10,
              marginBottom: 20,
            }} onChange={(e) => setNom_event(e.target.value)} placeholder="Description"></input>
            <input type="file" name="file" className="form-control" placeholder="file"onChange={(e) => setFile(e.target.files[0])}></input>
          <br></br>
            from :
            <input type="date" style={{
             height: 40,
             borderRadius: 10,
             border: "1px solid lightgray",
             padding: 10,
             marginTop:10,
             marginBottom: 20,
            }} placeholder="date" onChange={(e) => setDat(e.target.value)}></input>
            to:
            <input type="date" style={{
             height: 40,
             borderRadius: 10,
             border: "1px solid lightgray",
             padding: 10,
             marginBottom: 20,
            }} placeholder="date" onChange={(e) => setDatf(e.target.value)}></input>
              <input type="text" style={{
              height: 40,
              borderRadius: 10,
              border: "1px solid lightgray",
              padding: 10,
              marginBottom: 20,
              marginTop:20
            }} placeholder="TypeEvent" onChange={(e) => setType(e.target.value)}></input>
          </div></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=> {UpdateEvent(eventid); handleClose();}}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

   
     

      
      

   <div style={{ display: "flex", flexDirection: "column", backgroundColor: "white", boxShadow: "2px 2px 10px lightgray", padding: 50, margin: 50, borderRadius: "6px", position: "relative" }}>
          <h1 style={{
            marginBottom: 20
          }}>Add Event</h1>
          <input type="text" style={{
            height: 40,
            borderRadius: 10,
            border: "1px solid lightgray",
            padding: 10,
            marginBottom: 20,
          }} onChange={(e) => setNom_event(e.target.value)} placeholder="Description"></input>
          <input type="file" name="file" className="form-control" placeholder="file" style={{ marginBottom: 20 }} onChange={(e) => setFile(e.target.files[0])}></input>
          <input type="text" style={{
            height: 40,
            borderRadius: 10,
            border: "1px solid lightgray",
            padding: 10,
            marginBottom: 20,
          }} placeholder="TypeEvent" onChange={(e) => setType(e.target.value)}></input>
          from :
          <input type="date" style={{
            height: 40,
            borderRadius: 10,
            border: "1px solid lightgray",
            padding: 10,
            marginBottom: 20,
          }} placeholder="date" onChange={(e) => setDat(e.target.value)}></input>
          to:
          <input type="date" style={{
            height: 40,
            borderRadius: 10,
            border: "1px solid lightgray",
            padding: 10,
            marginBottom: 20,
          }} placeholder="date" onChange={(e) => setDatf(e.target.value)}></input>
          <Button variant="primary" type="submit" style={{
            flex: 0, width: "80px",
            marginBottom: 10
          }} onClick={addEvents}>
            Submit
          </Button>

        </div><div style={{ display: "flex", flexDirection: "column", padding: 50, margin: 50, backgroundColor: "white", boxShadow: "2px 2px 10px lightgray", borderRadius: "6px", position: "relative" }}>
          <AiOutlineSearch style={{
            marginLeft: "1230px",
            marginTop: "10px",
            position: 'absolute',
            zIndex: 1
          }} /><input type="text" style={{
            height: 40,
            borderRadius: 20,
            border: "1px solid lightgray",
            padding: 10,
            marginBottom: 20,
            position: "relative"
          }} onChange={(e) => search(e.target.value)}></input><Table striped bordered hover responsive>
            <thead>
              <tr>

              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.id_event}>
                  <td>{item.id_event}</td>
                  <td>{item.nom_event}</td>
                  <td style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <a href={"http://localhost:8000/" + item.Img} download={item.Img}>
                      <Button class="primary" style={{ marginRight: "5px" }}>Download</Button> </a>

                  </td>
                  <td>
                  <div style={{ display: "flex", flexDirection: "row" }}>
                    <Button variant="danger" onClick={() => delEvents(item.id_event)} style={{marginRight:10}}>Delete</Button>
                    <Button variant="success"  onClick={() => handleShow(item.id_event)}>Edit</Button>
</div>
                  </td>
                  <td style={{ width: 300 }}>{item.date_db}</td>
                  <td>{item.Type}</td>
                </tr>
              ))}
            </tbody>
          </Table><Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>id</th>
                <th>Descirption</th>
                <th>File</th>
                <th style={{ width: 100 }}>options</th>
                <th>date</th>
                <th>type</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((item) => (
                <tr key={item.id_event}>
                  <td>{item.id_event}</td>
                  <td>{item.nom_event}</td>
                  <td style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                    <a href={"http://localhost:8000/" + item.Img} download={item.Img}>
                      <Button class="primary" style={{ marginRight: "5px" }}>Download</Button> </a>

                  </td>
                  <td>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                      <Button variant="danger" onClick={() => delEvents(item.id_event)} style={{ marginRight: 10 }}>Delete</Button>
                      <Button variant="success" onClick={() => handleShow(item.id_event)}>Edit</Button>
                    </div>
                  </td>
                  <td>{item.date_db}</td>
                  <td>{item.Type}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div></>





    
      

  );
}




export default Events