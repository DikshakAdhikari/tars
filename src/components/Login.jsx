import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{display:'flex', height:"100vh", flexDirection:"column", justifyContent:"center", alignItems:'center'}}>
      <div style={{fontWeight:"bold", fontSize:"4rem", padding:"2rem"}}>Log in to your account</div>
      <div style={{display:"flex", flexDirection:"column", borderRadius:"5px", gap:"2rem", border:"solid darkGray 1px", padding:"3rem", width:"30vw"}}>
        <div style={{fontSize:"2rem", fontWeight:"bold"}}>Welcome back</div>

        <div style={{display:'flex', flexDirection:"column", gap:"0.7rem"}}>
        <div style={{fontWeight:"bold"}}>Work email</div>
        <input style={{width:"22rem", padding:"7px"}} placeholder='Your work email' type="text" />
        </div>

        <div style={{display:'flex', flexDirection:"column", gap:"0.7rem"}}>
        <div style={{fontWeight:"bold"}}>Password</div>
        <input style={{width:"22rem", padding:"7px"}} placeholder='Your password'/>
        </div>

        <div style={{display:"flex", justifyContent:"space-between"}}>
            <div style={{display:"flex", gap:"0.5rem"}}>
                <input type="checkbox" />
                <div>Remember me</div>
            </div>
            <div style={{color:"#0000FF", fontWeight:"bold"}}>I forgot my password</div>
        </div>

        <div style={{display:"flex", justifyContent:"space-between"}}>
            <button style={{padding:"0.6rem",borderRadius:"5px", border:"1px solid #007FFF "}}>Back</button>
            <button style={{padding:"0.6rem",borderRadius:"5px", border:"1px solid #007FFF "}}>Login</button>
        </div>
        
      </div>

      <div style={{backgroundColor:"#DCDCDC", width:"34vw", padding:"1rem", textAlign:"center",marginTop:"4rem"}}>
        Looking for Inbox? <Link style={{textDecoration:"none"}}>Log in here.</Link>
      </div>

    </div>
  )
}

export default Login
