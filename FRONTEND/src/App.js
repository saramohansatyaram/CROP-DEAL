import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services';
//import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';

//import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/Products';
import CustomerLogin from './components/CustomerLogin';
import CreateCustomer from './components/CreateFarmer';
import DealerLogin from './components/DealerLogin';
import CreateDealer from './components/CreateDealer';
import FetchCrop from './components/FetchCrop';
document.body.style.zoom = "75%";
function App() {
  return (
    
    <>
    
      <Router>
      
        <Navbar />
        <Routes>
        
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />
          <Route path="/farmerLogin" element={<CustomerLogin/>}/>
          <Route path="/dealerLogin" element={<DealerLogin/>}/>
          <Route path="/register" element={<CreateCustomer/>}/>
          <Route path="/createDealer" element={<CreateDealer/>}/>
          <Route path="/crops/get/:id" element= {<FetchCrop/>} />
          <Route path='/welcome' element={<Home/>} />
        </Routes>
      </Router>

      
    </>
  );
}

export default App;
