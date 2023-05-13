import React from "react";
import {useState,useEffect} from 'react';
import {Button,Table}from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
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
  const [datee,setDatee] = useState();
  const [idCon,setIdCon] = useState();
  const handleShow = (id_con) => {
    setIdCon(id_con); // set the id_con state with the parameter value
    setShow(true);
  };
  


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  async function UpdateConv(id){
    try {
      const data = {
        Nom_con: nom_con,
        description: description,
        date: datee
      };
      const result = await fetch(`http://localhost:8000/api/updateCon/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      console.log(result);
      fetchData(); // Refetch data to update view
    } catch (error) {
      console.error(error);
    }
  
  }
    
  async function addConv(){
const formData = new FormData();
formData.append('Nom_con',nom_con);
formData.append('description' , description);
formData.append ('date',datee);
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
    
      <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Conventions</Modal.Title>
        </Modal.Header>
        <Modal.Body>   <div style={{ display: "flex", flexDirection: "column" }}>
          <h2 style={{
            marginBottom: 20
          }}>Add Conventions</h2>
          <input type="text" placeholder="Nom" style={{
            height: 40,
            borderRadius: 10,
            border: "1px solid lightgray",
            padding: 10,
            marginBottom: 20,
          }} onChange={(e) => setNom_con(e.target.value)}></input>

          <input type="text" placeholder="description" style={{
            height: 40,
            borderRadius: 10,
            border: "1px solid lightgray",
            padding: 10,
            marginBottom: 20,
          }} onChange={(e) => setDescription(e.target.value)}></input>
          <input type="date" style={{
            height: 40,
            borderRadius: 10,
            border: "1px solid lightgray",
            padding: 10,
            marginBottom: 20,
          }} onChange={(e) => setDatee(e.target.value)}></input>
        </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
         UpdateConv(idCon); handleClose();
          } }>
            Save Changes
          </Button>
        </Modal.Footer>

      </Modal>
      <div style={{ display: "flex", flexDirection: "column", backgroundColor: "white", boxShadow: "2px 2px 10px lightgray", padding: 50, margin: 50, borderRadius: "6px" }}>

          <h1 style={{
            marginBottom: 20
          }}>Add Conventions</h1>
          <input type="text" placeholder="Nom" style={{
            height: 40,
            borderRadius: 10,
            border: "1px solid lightgray",
            padding: 10,
            marginBottom: 20,
          }} onChange={(e) => setNom_con(e.target.value)}></input>

          <input type="text" placeholder="description" style={{
            height: 40,
            borderRadius: 10,
            border: "1px solid lightgray",
            padding: 10,
            marginBottom: 20,
          }} onChange={(e) => setDescription(e.target.value)}></input>
          <input type="date" style={{
            height: 40,
            borderRadius: 10,
            border: "1px solid lightgray",
            padding: 10,
            marginBottom: 20,
          }} onChange={(e) => setDatee(e.target.value)}></input>

          <Button variant="primary" type="submit" style={{
            flex: 0, width: "80px",
            marginBottom: 10
          }} onClick={addConv}>
            Submit
          </Button>

          </div>
          <div style={{ display: "flex", flexDirection: "column", backgroundColor: "white", boxShadow: "2px 2px 10px lightgray", padding: 50, margin: 50, borderRadius: "6px" }}>
          <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>id</th>
                <th>name</th>

                <th colSpan={2}>description</th>
                <th> options</th>
                <th>date</th>
              </tr>
            </thead>
            <tbody>
              {data1.map((item) => (
                <tr key={item.id_con}>

                  <td>{item.id_con}</td>
                  <td>{item.Nom_con}</td>
                  <td colSpan={2}>{item.description}</td>
                  <td style={{ width: "150px" }}>
                    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                      <Button variant="danger" onClick={() => delCons(item.id_con)}>delete</Button>


                      
        <Button variant="success" onClick={() => {
          handleShow(item.id_con);
        }}>
          edit
        </Button>


                    </div>
                  </td>
                  <td style={{ width: "100px" }}>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div></>
    );
}

export default Conventions;