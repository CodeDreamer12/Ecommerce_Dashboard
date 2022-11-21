import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const[name,setName] = useState('');
  const navg=useNavigate()

  const updateLogin=(e)=>{
    console.log("update login called...")
    e.preventDefault();
    navg('/')

  }
  
  const updateName=(e)=>{
  setName(    
    name=e.target.userName
  )
  }

    return (
    <>
      <div className='logindiv'>
        <form>
          <label style={{marginTop:60, marginLeft:10, fontWeight:"bold"}}>Username</label>
          <input id='userName' type="text" data-test="username" style={{marginLeft:10}} onChange={updateName}/> 
          <label style={{marginTop:30, marginLeft:10, fontWeight:"bold"}}>Email</label>
          <input type="email" data-test="email" style={{marginLeft:45}}/> 
          <label style={{marginTop:30,marginLeft:10, fontWeight:"bold"}}>Password</label>
          <input type="password" data-test="password" style={{marginLeft:15}}/> <br/><br/>
          <input onClick={updateLogin} type="submit" value="Submit" data-test="submit" style={{marginTop:20, marginLeft:70, width:150, fontSize:20}} />
        </form>
      </div>
    </>
  )
}

export default LoginForm;