import {Navbar,Nav,Container, NavDropdown,Toast}  from 'react-bootstrap';
import {Link} from  'react-router-dom';
import {Button,Row,Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {BsFacebook} from 'react-icons/bs';
import Media from 'react-media';
import {IoNotifications} from 'react-icons/io5';
import {GrStatusGoodSmall} from 'react-icons/gr';
import {useState,useEffect} from 'react';
import "@fontsource/poppins";
import people from './people.png';
function Header(){
  const navigate = useNavigate();
  const [showComponent, setShowComponent] = useState(true);
const [data,setData] = useState();
const [showA, setShowA] = useState(true);
const [showB, setShowB] = useState(true);

const toggleShowA = () => setShowA(!showA);
const toggleShowB = () => setShowB(!showB);

  const handleClick = () => {               
    setShowComponent(false);
  
  
  };
  function logOut (){

    localStorage.clear();
    navigate('/register');
    
    }
 
  
let user = JSON.parse(localStorage.getItem('user-info'));
    return (
      
        <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
        
        {
  localStorage.getItem('user-info') ?
  (user.options === 'Admin' || user.options === 'User') &&
 

  <>
  <Navbar.Brand href="#" style ={{fontFamily:"Poppins"}}><img src ="868320_people_512x512.png" alt="error" width="300" height="200"></img>Welcome</Navbar.Brand>
  </>
  : 
  <>
  <Navbar.Brand href="#"style ={{fontFamily:"Poppins"}} ><img src={people} alt="error" width="40" height="40" style={{marginRight:30}}></img>Home</Navbar.Brand>
 
  </>
  
}
          
            <Navbar.Toggle aria-controls="Basic-navbar-nav"/>
            <Navbar.Collapse id ="basic-navbar-nav">
              <>
          <Nav className="me-auto" >
          {
  localStorage.getItem('user-info') ?
  (
    user.options === 'Admin' ? (
      <Media query="(min-width:990px)">
      {matches =>{
        return matches ?
      <>
        <Link to="/GestionUtilisateur" style={{textDecoration: "none", color: "white", margin: "20px"}}>GestionUtilisateur</Link>
        <Link to="/Evenement" style={{textDecoration: "none", color: "white", margin: "20px"}}>Evenement</Link>
        <Link to="/Historique" style={{textDecoration: "none", color: "white", margin: "20px"}}>Historique</Link>
        <Link to="/telechargmentpdf" style={{textDecoration: "none", color: "white", margin: "20px"}}>telechargmentpdf</Link>
        <Link to="/conventions" style={{textDecoration: "none", color: "white", margin: "20px"}}>conventions</Link>
        <Link to="/Promotion" style={{textDecoration: "none", color: "white", margin: "20px"}}>Promotion</Link>
        <div style={{ position: 'relative',marginTop:"11px"}}  >
        <Row>
    
    <Col md={6} className="mb-2">
    <button style={{ border: 'none', background: 'none' }} onClick={handleClick}>
    <Button onClick={toggleShowB} className="mb-2">
      {showComponent &&  <GrStatusGoodSmall style ={{color:"red",position: 'absolute',
          top: '8px',
          right: '150px',fontSize:"0.5rem"
 }}> </GrStatusGoodSmall>}
      <IoNotifications  style={{color:'white'}}></IoNotifications>
      </Button>
  </button>
    <div style={{width:200}}>
      <Toast onClose={toggleShowB} show={showB} animation={false}  style={{ position: 'absolute' }}>
        <Toast.Header>
          <img
            src="holder.js/20x20?text=%20"
            className="rounded me-2"
            alt=""
          />
          <strong className="me-auto">Evenement</strong>
        </Toast.Header>
        <Toast.Body>Nouvelle evenement</Toast.Body>
      </Toast>
      </div>
    </Col>
  </Row>
   
      </div>
  
      </>
      :
      <>
      <Link to="/GestionUtilisateur" style={{textDecoration: "none", color: "white",padding:10}}>GestionUtilisateur</Link>
      <Link to="/Evenement" style={{textDecoration: "none", color: "white",padding:10}}>Evenement</Link>
      <Link to="/Historique" style={{textDecoration: "none", color: "white", padding:10}}>Historique</Link>
      <Link to="/telechargmentpdf" style={{textDecoration: "none", color: "white", padding:10}}>telechargmentpdf</Link>
      <Link to="/conventions" style={{textDecoration: "none", color: "white", padding:10}}>conventions</Link>
      <div style={{ position: 'relative',marginTop:"20px"}}  >
        <button style={{ border: 'none', background: 'none' }} onClick={handleClick}>
    {showComponent &&  <GrStatusGoodSmall style ={{color:"red",position: 'absolute',
          top: '3px',
          right: '670px',fontSize:"0.5rem"
 }}> </GrStatusGoodSmall>}
      <IoNotifications  style={{color:'white'}}></IoNotifications>
      </button>
     
      </div>

    </>;}}
    </Media>
    ) : user.options === 'User' ? (
      <Media query="(min-width: 990px) ">
      {matches =>{
        return matches ?
      <>
    
        <Link to="/AffichageEvent" style={{textDecoration: "none", color: "white" , margin: "30px"}}>AffichageEvent</Link>
        <Link to="/AffichageConvention" style={{textDecoration: "none", color: "white", margin: "30px"}}>AffichageConventions</Link>
        <div style={{ position: 'relative',marginTop:"30px"}}  >
        <button style={{ border: 'none', background: 'none' }} onClick={handleClick}>
     {showComponent && <GrStatusGoodSmall style ={{color:"red",position: 'absolute',
          top: '3px',
          right: '-1px',fontSize:"0.5rem"
 }}> </GrStatusGoodSmall>}
      <IoNotifications  style={{color:'white'}}></IoNotifications>
      </button>
      </div>
      </>
      :
      <>
        <Link to="/AffichageEvent" style={{textDecoration: "none", color: "white", marginRight: "15px"}}>AffichageEvent</Link>
        <Link to="/AffichageConvention" style={{textDecoration: "none", color: "white", marginRight: "15px"}}>AffichageConventions</Link>
        <div style={{ position: 'relative',marginTop:"20px"}}  >
        <button style={{ border: 'none', background: 'none' }} onClick={handleClick}>
     {showComponent && <GrStatusGoodSmall style ={{color:"red",position: 'absolute',
          top: '3px',
          right: '670px',fontSize:"0.5rem"
 }}> </GrStatusGoodSmall> }
      <IoNotifications  style={{color:'white'}}></IoNotifications>
      </button>
      </div>
      </>;
    }}
    </Media>
    ) : null
  )
  : (
  <Media query="(min-width:990px)">
    {matches =>{
      return matches ?
  
      
      <>
      <div style ={{marginLeft: "60vw"}}>
          <Link to="/AboutUs" style={{textDecoration: "none", color: "white",fontSize:'1rem' ,marginTop:1,fontFamily:"Poppins" }}>
      About
      </Link>
      <Link to="/ContactUs" style={{textDecoration: "none", color: "white",fontSize:'1rem',paddingLeft:30,position:'absolute',marginTop:1,fontFamily:"Poppins"}}>
       Contact
      </Link>
      </div>
    
      </>
      :
      <>
       <Link to="/AboutUs" style={{textDecoration: "none", color: "white", paddingButtom: "10px" }}>
      About
      </Link>
      <Link to="/ContactUs" style={{textDecoration: "none", color: "white",paddingButtom:"10px"}}>
       Contact
      </Link>
     
      <Link to="/Login" style={{textDecoration: "none", color: "white", paddingButtom:10}}>
            Login
          </Link>
          <Link to="/Register" style={{textDecoration: "none", color: "white", marginButtom:10}}>
   SignUp
           
          </Link>
      
      </>
      
      ;}}
</Media>

    )
    
}
  



         
          </Nav>
          
   
 
          <Nav>
  {localStorage.getItem('user-info') &&
    <NavDropdown  style={{marginTop:"5px"}}title={user && user.username}>
      <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
    </NavDropdown>
  }
</Nav>
</>

</Navbar.Collapse>
          </Container> 
          </Navbar>
          
   
    )
}

export default Header  