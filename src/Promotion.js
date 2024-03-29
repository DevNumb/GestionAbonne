import {Button,Table}from 'react-bootstrap';
import {useState,useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';

function Promotion(){
  const [data1 , setData1] = useState([]);
  const [idpromo,setIdpromo] = useState();
    async function fetchData1(){
        let result = await fetch ("http://localhost:8000/api/listPromo");
       result = await result.json();
      setData1(result);
      } 
      const handleShow = (id_promo) => {
        setIdpromo(id_promo); // set the id_con state with the parameter value
        setShow(true);
      };
    
      const [show, setShow] = useState(false);
      const handleClose = () => setShow(false);
      async function UpdatePromo(id){
        try {
          const data = {
            nom_promo: nom_promo,
            file: file,
            date_deb: dated,
            date_fin: datef
          };
          
          let jsonData = JSON.stringify(data);
          
          const result = await fetch(`http://localhost:8000/api/UpdatePromo/${id}`, {
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
    
    const [nom_promo,setNom_promo] = useState();
    const [file,setFile] = useState();
    const [dated,setDated] = useState();
    const [datef,setDatf] = useState();
    
    async function addEvents(){
    const formData = new FormData();
    formData.append('nom_promo',nom_promo);
    formData.append('file',file);
    formData.append ('date_deb',dated);
    formData.append ('date_fin',datef);
    let result = await fetch("http://localhost:8000/api/addPromo",{
    method: 'post',
    body: formData
    });
    alert("Enregistrer");
    fetchData1();
    let result2 = await fetch ("http://localhost:8000/api/sendOffer");
   
    }
    async function delPromo(id){

      let result = await fetch ("http://localhost:8000/api/delPromo/" + id , {
         method:"DELETE"
      
      });
      
      
      result = await result.json();
      fetchData1();
      }
    
    
    
        return (
          
            
        <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Conventions</Modal.Title>
        </Modal.Header>
        <Modal.Body>     
          
        <div style ={{display:"flex" , flexDirection:"column"}}>
           <input type="text" style={{
              height: 40,
              borderRadius: 10,
              border: "1px solid lightgray",
              padding: 10,
              marginBottom: 20,
            }} onChange={(e) => setNom_promo(e.target.value)} placeholder='Descirption'></input>
            <input type="file" name="file" className="form-control" placeholder="file" style={{ marginBottom: 20 }} onChange={(e) => setFile(e.target.files[0])}></input>
            From:
            <input type="date" style={{
              height: 40,
              borderRadius: 10,
              border: "1px solid lightgray",
              padding: 10,
              marginBottom: 20,
            }} onChange={(e) => setDated(e.target.value)}></input>
            to:
            <input type="date" style={{
              height: 40,
              borderRadius: 10,
              border: "1px solid lightgray",
              padding: 10,
              marginBottom: 20,
            }} onChange={(e) => setDatf(e.target.value)}></input>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
         UpdatePromo(idpromo); handleClose();
          } }>
            Save Changes
          </Button>
        </Modal.Footer>

      </Modal>
        
        
        <div style={{ display: "flex", flexDirection: "column", backgroundColor: "white", boxShadow: "2px 2px 10px lightgray", padding: 50, margin: 50, borderRadius: "6px" }}>
            <h1 style={{
              marginBottom: 20
            }}>Add Offers</h1>
            <input type="text" style={{
              height: 40,
              borderRadius: 10,
              border: "1px solid lightgray",
              padding: 10,
              marginBottom: 20,
            }} onChange={(e) => setNom_promo(e.target.value)} placeholder='Descirption'></input>
            <input type="file" name="file" className="form-control" placeholder="file" style={{ marginBottom: 20 }} onChange={(e) => setFile(e.target.files[0])}></input>
            From:
            <input type="date" style={{
              height: 40,
              borderRadius: 10,
              border: "1px solid lightgray",
              padding: 10,
              marginBottom: 20,
            }} onChange={(e) => setDated(e.target.value)}></input>
            to:
            <input type="date" style={{
              height: 40,
              borderRadius: 10,
              border: "1px solid lightgray",
              padding: 10,
              marginBottom: 20,
            }} onChange={(e) => setDatf(e.target.value)}></input>
            <Button variant="primary" type="submit" style={{
              flex: 0, width: "80px",
              marginBottom: 10
            }} onClick={addEvents}>
              Submit
            </Button>

          </div><div style={{ display: "flex", flexDirection: "column", backgroundColor: "white", boxShadow: "2px 2px 10px lightgray", padding: 50, margin: 50, borderRadius: "6px" }}>
            
              <Table striped bordered hover responsive>
                <thead>
                  <tr>
                    <th>id</th>
                    <th>Descirption</th>
                    <th>Pdf</th>
                    <th style={{ width: 100 }}>options</th>
                    <th>StartingDate</th>
                    <th>EndingDate</th>
                  </tr>
                </thead>
                <tbody>
                  {data1.map((item) => (
                    <tr key={item.id_promo}>
                      <td>{item.id_promo}</td>
                      <td>{item.nom_promo}</td>
                      <td style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <a href={"http://localhost:8000/" + item.promo_img} download={item.Promo_img}>
                          <Button class="primary" style={{ marginRight: "5px" }}>Download</Button> </a>
                      </td>

                      <td>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                        <Button variant="danger" onClick={() => delPromo(item.id_promo)} style ={{marginRight:10}}>delete</Button>
                        <Button variant="success" onClick={()=> handleShow(item.id_promo)} >edit</Button>
                        </div>
                      </td>
                      <td>{item.date_deb}</td>
                      <td>{item.date_fin}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div></>
          
    
      );
             

          }
export default Promotion;