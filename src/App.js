import React from 'react';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import Header from './MyComponents/Header';
import './style.css';
import Employees from './pages/Employees';
import Lines from './pages/Lines';
import LoginForm from './pages/LoginForm';
import Comment from './pages/Comment';
import Cart from './pages/Cart';
import Notification from './pages/Notification';
import Home from './MyComponents/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Ecommerce from './pages/Ecommerce';



function App() { 
  return (
    <> 
    <BrowserRouter>
    <Header />
    <Routes>
   <Route  path="/"  element={<Home />} />
   <Route path="/ecommerce" element={<Ecommerce/>}/>
   <Route path="/employees" element={<Employees/>}/>
   <Route path="/lines" element={<Lines/>}/>
   <Route path="/login" element={<LoginForm />}/>
   <Route path="/comment" element={<Comment/>}/>
   <Route path="/cart" element={<Cart/>}/>
   <Route path="/notification" element={<Notification/>}/>
    </Routes>
    </BrowserRouter>
    
    </>
  );
}

export default App;
