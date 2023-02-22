import {Navbar,Nav,Container, NavDropdown}  from 'react-bootstrap';
import {Link} from  'react-router-dom';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import NavbarOffcanvas from 'react-bootstrap/esm/NavbarOffcanvas';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import Media from 'react-media';

function Header(){
  const navigate = useNavigate();
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
  <Navbar.Brand href="#">Welcome</Navbar.Brand>
  </>
  : 
  <>
  
  
  <Navbar.Brand href="#">Home</Navbar.Brand>
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
      <Media query="(min-width:600px)">
      {matches =>{
        return matches ?
      <>
        <Link to="/GestionUtilisateur" style={{textDecoration: "none", color: "white", margin: "30px"}}>GestionUtilisateur</Link>
        <Link to="/Evenement" style={{textDecoration: "none", color: "white", margin: "30px"}}>Evenement</Link>
        <Link to="/Historique" style={{textDecoration: "none", color: "white", margin: "30px"}}>Historique</Link>
        <Link to="/telechargmentpdf" style={{textDecoration: "none", color: "white", margin: "30px"}}>telechargmentpdf</Link>
        <Link to="/conventions" style={{textDecoration: "none", color: "white", margin: "30px"}}>conventions</Link>
      </>
      :
      <>
      <Link to="/GestionUtilisateur" style={{textDecoration: "none", color: "white", marginBottom: "15px",marginTop:"6px"}}>GestionUtilisateur</Link>
      <Link to="/Evenement" style={{textDecoration: "none", color: "white", marginBottom: "15px"}}>Evenement</Link>
      <Link to="/Historique" style={{textDecoration: "none", color: "white", marginBottom: "15px"}}>Historique</Link>
      <Link to="/telechargmentpdf" style={{textDecoration: "none", color: "white", marginBottom: "15px"}}>telechargmentpdf</Link>
      <Link to="/conventions" style={{textDecoration: "none", color: "white", marginBottom: "15px"}}>conventions</Link>
    </>;}}
    </Media>
    ) : user.options === 'User' ? (
      <Media query="(min-width:600px)">
      {matches =>{
        return matches ?
      <>
        <Link to="/AffichageEvent" style={{textDecoration: "none", color: "white", margin: "30px"}}>AffichageEvent</Link>
        <Link to="/AffichageConvention" style={{textDecoration: "none", color: "white", margin: "30px"}}>AffichageConventions</Link>
      </>
      :
      <>
        <Link to="/AffichageEvent" style={{textDecoration: "none", color: "white", marginBottom: "15px",marginTop:"6px"}}>AffichageEvent</Link>
        <Link to="/AffichageConvention" style={{textDecoration: "none", color: "white", marginBottom: "15px",}}>AffichageConventions</Link>
      </>;
    }}
    </Media>
    ) : null
  )
  : (
  <Media query="(min-width:600px)">
    {matches =>{
      return matches ?
    
         <>
         <Link to="/AboutUs" style={{textDecoration: "none", color: "white", padding: "15px" ,marginRight:"10px"}}>
          AboutUs
          </Link>
          <Link to="/ContactUs" style={{textDecoration: "none", color: "white", padding: "15px", marginRight:"10px"}}>
           ContactUs
          </Link>
        
          <Link to="/Login" style={{textDecoration: "none", color: "white", padding: "8px" , marginRight:"15px"}}>
            <Button style={{border: "1 solid black", backgroundColor: "#03045e"}}>Login</Button>
          </Link>
          <Link to="/Register" style={{textDecoration: "none", color: "white", padding: "8px", marginRight:"15px"}}>
            <Button style={{border: "1 solid black", backgroundColor: "#03045e"}}>SignUp</Button>
          </Link>
          </>
      :
      <>
      <Link to="/AboutUs" style={{textDecoration: "none", color: "white", padding: "3px" ,marginBottom:"10px",marginTop:"2px"}}>
      AboutUs
      </Link>
      <Link to="/ContactUs" style={{textDecoration: "none", color: "white", padding: "3px", marginBottom:"10px"}}>
       ContactUs
      </Link>
    
      <Link to="/Login" style={{textDecoration: "none", color: "white", padding: "3px" , marginBottom:"10px"}}>
        Login
      </Link>
      <Link to="/Register" style={{textDecoration: "none", color: "white", padding: "3px", marginBottom:"10px"}}>
       SignUp
      </Link>
      </>;}}
</Media>

    )
    
}
  



         
          </Nav>
          
   
 
          <Nav>
  {localStorage.getItem('user-info') &&
    <NavDropdown title={user && user.username}>
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