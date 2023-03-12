
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
import AffichageEvent from './AffichageEvent';
import AffichageConvention from './AffichageConvention';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import {Helmet} from "react-helmet";
import Promotion from './Promotion';
import Footer from './Footer';
function App() {
  return (
  
    <BrowserRouter>
    <Helmet>
                <meta charSet="utf-8" />
                <title>GestionAbonne</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="Gestion" content="test" />
            </Helmet>
    <>
    
    <Header />  
    
      
    <Routes>
   
          <Route path="/Login" element={<Login/>} />
          <Route path="/Register" element={<Register/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/AboutUs" element={<ContactUs/>} />
          
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
   <Route path="/Promotion" element={
                <>
                <Protected Cmp ={Promotion}/>
                {/*<Promotion/>*/}
                </>
             }/>





<Route path="/AffichageEvent" element={
                <>
                <Protected Cmp ={AffichageEvent}/>
                {/*<AffichageEvent/>*/}
                </>
             }/>

             
<Route path="/AffichageConvention" element={
                <>
                <Protected Cmp ={AffichageConvention}/>
                {/*<AffichageConvention/>*/}
                </>
             }/>



      
      </Routes>
 
   <div style={{position:'relative',minHeight: '100vh'}}>
    <Footer/>
</div>
</>
    </BrowserRouter>
  );
}

export default App;
