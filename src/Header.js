import {Navbar,Nav,Container, NavDropdown,Toast}  from 'react-bootstrap';
import {Link} from  'react-router-dom';
import {Button,Row,Col} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import Media from 'react-media';
import {IoNotifications} from 'react-icons/io5';
import {GrStatusGoodSmall} from 'react-icons/gr';
import {useState,useEffect} from 'react';
import "@fontsource/poppins";
import people from './people.png';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
function Header(){
  const navigate = useNavigate();
  const [showComponent, setShowComponent] = useState(true);
const [data,setData] = useState();
const [showB, setShowB] = useState(true);
const [showA, setShowA] = useState(true);
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
  <Navbar.Brand href="#" style ={{fontFamily:"Poppins"}}><img src={people} alt="error" width="40" height="40" style={{marginRight:30}}></img>Welcome</Navbar.Brand>
  </>
  : 
  <>
  <Navbar.Brand href="#"style ={{fontFamily:"Poppins"}} ><img src={people} alt="error" width="40" height="40" style={{marginRight:30}}></img> </Navbar.Brand>
 
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
        <Link to="/GestionUtilisateur" style={{textDecoration: "none", color: "white", margin: "20px",fontFamily:"poppins"}}>GestionUtilisateur</Link>
        <Link to="/Evenement" style={{textDecoration: "none", color: "white", margin: "20px",fontFamily:"poppins"}}>Evenement</Link>
        <Link to="/Historique" style={{textDecoration: "none", color: "white", margin: "20px",fontFamily:"poppins"}}>Historique</Link>
        <Link to="/telechargmentpdf" style={{textDecoration: "none", color: "white", margin: "20px",fontFamily:"poppins"}}>telechargmentpdf</Link>
        <Link to="/conventions" style={{textDecoration: "none", color: "white", margin: "20px",fontFamily:"poppins"}}>conventions</Link>
        <Link to="/Promotion" style={{textDecoration: "none", color: "white", margin: "20px",fontFamily:"poppins"}}>Promotion</Link>
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
      <Link to="/GestionUtilisateur" style={{textDecoration: "none", color: "white",padding:10,fontFamily:"poppins"}}>GestionUtilisateur</Link>
      <Link to="/Evenement" style={{textDecoration: "none", color: "white",padding:10,fontFamily:"poppins"}}>Evenement</Link>
      <Link to="/Historique" style={{textDecoration: "none", color: "white", padding:10,fontFamily:"poppins"}}>Historique</Link>
      <Link to="/telechargmentpdf" style={{textDecoration: "none", color: "white", padding:10,fontFamily:"poppins"}}>telechargmentpdf</Link>
      <Link to="/conventions" style={{textDecoration: "none", color: "white", padding:10,fontFamily:"poppins"}}>conventions</Link>
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
    
        <Link to="/AffichageEvent" style={{textDecoration: "none", color: "white" , marginLeft: "30px",marginTop:"3px",fontFamily:"poppins"}}>AffichageEvent</Link>
        <Link to="/AffichageConvention" style={{textDecoration: "none", color: "white", marginLeft: "30px",marginTop:"3px",fontFamily:"poppins"}}>AffichageConventions</Link>
        <div style={{ position: 'relative',marginLeft:"30px",marginTop:"0px"}}  >
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
        <Link to="/AffichageEvent" style={{textDecoration: "none", color: "white", marginTop: "15px",fontFamily:"poppins"}}>AffichageEvent</Link>
        <Link to="/AffichageConvention" style={{textDecoration: "none", color: "white", marginTop: "15px",fontFamily:"poppins"}}>AffichageConventions</Link>
        <div style={{ position: 'relative',marginTop:"10px"}}  >
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
      <Link to="/ContactUs" style={{textDecoration: "none", color: "white",fontSize:'1rem',marginRight:30,marginTop:1,fontFamily:"Poppins"}}>
       Home
      </Link>
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
      <Breadcrumb style={{display:'flex',flexDirection:"column"}}>
    
    
       <Breadcrumb.Item><Link to="/AboutUs" style={{textDecoration: "none", color: "white", paddingButtom: "10px",fontFamily:"poppins" }}>
      About
      
      </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item><Link to="/ContactUs" style={{textDecoration: "none", color: "white",paddingButtom:"10px",fontFamily:"poppins"}}>
       Contact
      </Link>
      </Breadcrumb.Item>
     
     <Breadcrumb.Item><Link to="/Login" style={{textDecoration: "none", color: "white", paddingButtom:10,fontFamily:"poppins"}}>
            Login
          </Link>
          </Breadcrumb.Item>
          <Breadcrumb.Item> <Link to="/Register" style={{textDecoration: "none", color: "white", marginButtom:10,fontFamily:"poppins"}}>
   SignUp
           
          </Link>
          </Breadcrumb.Item>
          </Breadcrumb>
      
      </>
      
      ;}}
</Media>

    )
    
}
  



         
          </Nav>
          
   
 
          <Nav>
  {localStorage.getItem('user-info') &&
    <NavDropdown  style={{fontFamily:"poppins"}}title={user && user.username}>
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