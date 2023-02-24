import {Navbar,Nav,Container, NavDropdown}  from 'react-bootstrap';
import {Link} from  'react-router-dom';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
import {BsFacebook} from 'react-icons/bs';
import Media from 'react-media';
import {IoNotifications} from 'react-icons/io5';
import {GrStatusGoodSmall} from 'react-icons/gr';
import {useState,useEffect} from 'react';

function Header(){
  const navigate = useNavigate();
  const [showComponent, setShowComponent] = useState(true);

  const [data, setData] = useState([]);
/*
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:8000/api/check');
      const newData = await response.json();
      setData(newData);
    };

    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  function checkAddedData (){
    if (data.length){
       setShowComponent(true);
       setData(null);
    }


  }
*/

  const handleClick = () => {               
    setShowComponent(false)
  
  };
  function logOut (){

    localStorage.clear();
    navigate('/register');
    
    }
 
    console.warn ("result",data);
let user = JSON.parse(localStorage.getItem('user-info'));
    return (
        <Navbar bg="primary" variant="dark" expand="lg">
        <Container>
        
        {
  localStorage.getItem('user-info') ?
  (user.options === 'Admin' || user.options === 'User') &&
  <>
  <Media query="(min-width:1300px)">
      {matches =>{
        return matches ?
      <>
  <Navbar.Brand href="#">Welcome</Navbar.Brand>
  </>
  :
  <>
   <Navbar.Brand href="#">Welcome</Navbar.Brand>
   
   <div style={{ position: 'relative' }}>
      {showComponent && (
        <button
          onClick={handleClick}
          style={{
            position: 'absolute',
            top: '3px',
            right: '-1px',
            border: 'none',
            background: 'transparent',
            fontSize: '0.5rem',
          }}
        >
          <GrStatusGoodSmall style={{ color: 'red' , position: 'absolute',
            top: '3px',
            right: '-1px' }} />
        </button>
      )}
        <IoNotifications onClick={handleClick} style={{ color: 'white', marginTop: '1px' }} />
    </div>

  </>;}}
  </Media>
  </>
  : 
  <Media query="(min-width:600px)">
  {matches =>{
    return matches ?
  <>
  <Navbar.Brand href="#">Home</Navbar.Brand>
 
  </>
  :
  <>
    <Navbar.Brand href="#">Home</Navbar.Brand>
   <BsFacebook  style={{  marginLeft:"200px",marginRight:"60px",fontSize:"1.4rem"}}></BsFacebook>
  </>
  ;}}
  </Media>
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
        <Link to="/GestionUtilisateur" style={{textDecoration: "none", color: "white", margin: "20px"}}>GestionUtilisateur</Link>
        <Link to="/Evenement" style={{textDecoration: "none", color: "white", margin: "20px"}}>Evenement</Link>
        <Link to="/Historique" style={{textDecoration: "none", color: "white", margin: "20px"}}>Historique</Link>
        <Link to="/telechargmentpdf" style={{textDecoration: "none", color: "white", margin: "20px"}}>telechargmentpdf</Link>
        <Link to="/conventions" style={{textDecoration: "none", color: "white", margin: "20px"}}>conventions</Link>
      <div style={{ position: 'relative',marginLeft:"270px",marginTop:"20px"}}>

      <GrStatusGoodSmall style ={{color:"red",position: 'absolute',
          top: '3px',
          right: '-1px',fontSize:"0.5rem"
 }}> </GrStatusGoodSmall>
      <IoNotifications style={{color:'white',marginTop:"2px"}}></IoNotifications>
      
      </div>
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
        <div style={{ position: 'relative',marginLeft:"600px",marginTop:"30px"}}>
      <GrStatusGoodSmall style ={{color:"red",position: 'absolute',
          top: '3px',
          right: '-1px',fontSize:"0.5rem"
 }}> </GrStatusGoodSmall>
      <IoNotifications style={{color:'white'}}></IoNotifications>
      
      </div>
      </>
      :
      <>
        <Link to="/AffichageEvent" style={{textDecoration: "none", color: "white", marginBottom: "15px",marginTop:"6px"}}>AffichageEvent</Link>
        <Link to="/AffichageConvention" style={{textDecoration: "none", color: "white", marginBottom: "15px"}}>AffichageConventions</Link>
   
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
          <BsFacebook  style={{  marginTop:"15px",marginLeft:"60px",marginRight:"60px",fontSize:"1.6rem"}}></BsFacebook>
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