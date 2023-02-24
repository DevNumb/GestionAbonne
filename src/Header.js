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
  const [showComponent, setShowComponent] = useState(false);

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
    setShowComponent(!showComponent)
  
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
      <Media query="(min-width:990px)">
      {matches =>{
        return matches ?
      <>
        <Link to="/GestionUtilisateur" style={{textDecoration: "none", color: "white", margin: "20px"}}>GestionUtilisateur</Link>
        <Link to="/Evenement" style={{textDecoration: "none", color: "white", margin: "20px"}}>Evenement</Link>
        <Link to="/Historique" style={{textDecoration: "none", color: "white", margin: "20px"}}>Historique</Link>
        <Link to="/telechargmentpdf" style={{textDecoration: "none", color: "white", margin: "20px"}}>telechargmentpdf</Link>
        <Link to="/conventions" style={{textDecoration: "none", color: "white", margin: "20px"}}>conventions</Link>
        <div style={{ position: 'relative',marginTop:"20px"}}  >
        <button style={{ border: 'none', background: 'none' }} onClick={handleClick}>
      <GrStatusGoodSmall style ={{color:"red",position: 'absolute',
          top: '3px',
          right: '-1px',fontSize:"0.5rem"
 }}> </GrStatusGoodSmall>
      <IoNotifications  style={{color:'white'}}></IoNotifications>
      </button>
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
      <GrStatusGoodSmall style ={{color:"red",position: 'absolute',
          top: '3px',
          right: '670px',fontSize:"0.5rem"
 }}> </GrStatusGoodSmall>
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
      <GrStatusGoodSmall style ={{color:"red",position: 'absolute',
          top: '3px',
          right: '-1px',fontSize:"0.5rem"
 }}> </GrStatusGoodSmall>
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
      <GrStatusGoodSmall style ={{color:"red",position: 'absolute',
          top: '3px',
          right: '670px',fontSize:"0.5rem"
 }}> </GrStatusGoodSmall>
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
          <Link to="/AboutUs" style={{textDecoration: "none", color: "white",marginLeft:30, marginRight: 30,marginTop:7 }}>
      AboutUs
      </Link>
      <Link to="/ContactUs" style={{textDecoration: "none", color: "white", marginRight: 30,marginTop:7}}>
       ContactUs
      </Link>
     <BsFacebook style ={{paddingLeft:2,paddingRight:2,fontSize:"2rem",marginTop:4}}></BsFacebook>
      
      <Link to="/Login" style={{textDecoration: "none", color: "white" ,marginLeft:"30px", marginRight:"15px",marginTop:3}}>
            <Button style={{border: "1 solid black", backgroundColor: "#03045e"}}>Login</Button>
          </Link>
          <Link to="/Register" style={{textDecoration: "none", color: "white", marginLeft:"30px",marginTop:3}}>
            <Button style={{border: "1 solid black", backgroundColor: "#03045e"}}>SignUp</Button>
           
          </Link>
      </>
      :
      <>
       <Link to="/AboutUs" style={{textDecoration: "none", color: "white", paddingButtom: "10px" }}>
      AboutUs
      </Link>
      <Link to="/ContactUs" style={{textDecoration: "none", color: "white",paddingButtom:"10px"}}>
       ContactUs
      </Link>
     
      <BsFacebook style ={{fontSize:"1.5rem"}}></BsFacebook>
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