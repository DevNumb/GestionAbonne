import logo from './logo.svg';
import './App.css';
import {Button} from 'react-bootstrap';
import Header  from './Header';
import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import Login from './login';
import Register from './Register';
import AddUser from './AddUser';
import Events from './Events';
import Protected from './Protected';
import Historique from './Historique';
import telechargmentpdf from './telechargmentpdf';
import Conventions from './conventions';
function App() {
  return (
    <BrowserRouter>
    <>
    <Header />
      
    <Routes>
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/GestionUtilisateur" element={
            <>
          <Protected Cmp={AddUser}/>
          {/*<AddUser/>*/}
          </>
          } />
          <Route path="/Evenement" element={
             <>
             <Protected Cmp ={Events}/>
             {/*<Events/>*/}
             </>
          
         } />
           <Route path="/Historique" element={
             <>
             <Protected Cmp ={Historique}/>
             {/*<Historique/>*/}
             </>
           } />
             
          
             <Route path="/telechargmentpdf" element={
                <>
                <Protected Cmp ={telechargmentpdf}/>
                {/*<telechargmentpdf/>*/}
                </>
             }/>
                 <Route path="/conventions" element={
                <>
                <Protected Cmp ={Conventions}/>
                {/*<Conventions/>*/}
                </>
             }/>
      
      </Routes>
     
    
    </>
    </BrowserRouter>
  );
}

export default App;
