import {Navbar,Nav,Container, NavDropdown}  from 'react-bootstrap';
import {Link} from  'react-router-dom';
import {Button} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';


function Header(){
  const navigate = useNavigate();
  function logOut (){

    localStorage.clear();
    navigate('/register');
    
    }
let user = JSON.parse(localStorage.getItem('user-info'));
    return (
        <Navbar bg="primary" variant="dark">
        <Container>
      {
        localStorage.getItem('user-info') ?
        <>
          <Navbar.Brand href="#home">Admin Dashboard</Navbar.Brand>
          </>
          :
          <>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          </>
      }
          
          <Nav className="me-auto" >
            {
              localStorage.getItem('user-info') ?
              <>
                     <Link to ="/GestionUtilisateur" style ={{textDecoration:"none" , color :"white" ,margin : "30px"}} >GestionUtilisateur</Link>
                     <Link to ="/Evenement"  style ={{textDecoration:"none" , color :"white" , margin :"30px"}} >Evenement</Link>
                     <Link to ="/Historique"  style ={{textDecoration:"none" , color :"white" , margin :"30px"}} >Historique</Link>
                     <Link to ="/telechargmentpdf"  style ={{textDecoration:"none" , color :"white" , margin :"30px"}} >telechargmentpdf</Link>
                     <Link to ="/conventions"  style ={{textDecoration:"none" , color :"white" , margin :"30px"}} >conventions</Link>
              </>
              :
              <>
               <Link to ="/Login"   style ={{textDecoration:"none" , color :"white" , padding :"8px"}}> <Button style ={{border:"1 solid black" , backgroundColor:"#03045e"}}>Login</Button> </Link>
            <Link to ="/Register"  style ={{textDecoration:"none" , color :"white" , padding :"8px"}}> <Button style ={{border:"1 solid black" , backgroundColor:"#03045e"}}>SignUp</Button> </Link>
              </>
            }
         
          </Nav>
          
   
 
          <Nav>
          { localStorage.getItem('user-info') ?
<NavDropdown title ={user && user.username} >
<NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
</NavDropdown>
:null
}
          </Nav>
          </Container>  
          </Navbar> 
    )
}

export default Header  