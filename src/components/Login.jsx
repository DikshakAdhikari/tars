import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from './Navbar';


const Login = ({ifSignIn, setSignIn}) => {

  const navigate= useNavigate();
  setSignIn(false);
  return (
    <>
    <Navbar ifSignIn={ifSignIn} setSignIn={setSignIn} />
    <div style={{display:'flex', height:"90vh", flexDirection:"column", justifyContent:"center", alignItems:'center'}}>
      <div style={{fontWeight:"bold", fontSize:"4rem", padding:"2rem"}}>Log in to your account</div>
      <div style={{display:"flex", flexDirection:"column", borderRadius:"5px", gap:"2rem", border:"solid darkGray 1px", padding:"3rem", width:"25vw"}}>
        <div style={{fontSize:"2rem", fontWeight:"bold"}}>Welcome back</div>

        <div style={{display:'flex', flexDirection:"column", gap:"0.7rem"}}>
        <div style={{fontWeight:"bold"}}>Work email</div>
        <input style={{width:"27rem", padding:"7px"}} placeholder='Your work email' type="text" />
        </div>

        <div style={{display:'flex', flexDirection:"column", gap:"0.7rem"}}>
        <div style={{fontWeight:"bold"}}>Password</div>
        <input style={{width:"27rem", padding:"7px"}} placeholder='Your password'/>
        </div>

        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div style={{display:"flex", gap:"0.5rem"}}>
                <input type="checkbox" />
                <div>Remember me</div>
            </div>
            <Link style={{color:"#0000FF", fontWeight:"bold", textDecoration:"none"}}>I forgot my password</Link>
        </div>

        <div style={{display:"flex", justifyContent:"space-between"}}>
            <button style={{padding:"0.6rem",borderRadius:"5px", backgroundColor:"white", cursor:"pointer", border:"1px solid #007FFF "}}>Back</button>
            <button onClick={()=> navigate('/dashboard')} style={{padding:"0.6rem",borderRadius:"5px", backgroundColor:"white", cursor:"pointer", border:"1px solid #007FFF "}}>Login</button>
        </div>
        
      </div>

      <div style={{backgroundColor:"#DCDCDC", width:"29vw", padding:"1rem", textAlign:"center",marginTop:"4rem"}}>
        Looking for Inbox? <Link style={{textDecoration:"none"}}>Log in here.</Link>
      </div>

    </div>
    </>
  )
}

export default Login
