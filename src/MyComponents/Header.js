import React, { useState } from 'react'
import{
  FaCommentDots,
  FaCartPlus,
  FaRegBell
} from "react-icons/fa";
import Sidebar from './Sidebar';
import {NavLink} from "react-router-dom";


const Header = () => {
  const[isSubmitted,setForm] = useState(false)
  const updateForm=()=>{
    setForm(true)
  }
 
  return (
    <>
    <div className='nav'>
   <div className='navHeader'>
    <div className='topRight'>
    <div className='rightIcons'>
    <NavLink to="/comment" className='icons'> <FaCommentDots/></NavLink>
    <NavLink to="/cart" className='icons'><FaCartPlus /> </NavLink>
    <NavLink to="/notification" className='icons'><FaRegBell/></NavLink>
    <NavLink to="/login" className='icons' style={{width:100, height:30, backgroundColor:"lightgray"}}><button>Login</button></NavLink> 
  
   
    
    
    

    </div>
    </div>

   </div>
    </div>
    <Sidebar/>
    </>
  )
}

export default Header;