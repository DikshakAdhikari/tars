import React from 'react'
import {BiChevronDown} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import websiteLogo from '../assets/logo-min.png'

const Navbar = ({ifSignIn, setSignIn}) => {

  const navigate= useNavigate();
  
  return (
    <div style={{display:'flex',alignItems:"center", justifyContent:"space-between",padding:"1rem"}}>
      <img style={{height:"5vh", width:"3vw"}} src={websiteLogo} alt="" />
      <div style={{display:"flex",gap:"1rem"}}>
        <div style={{display:"flex", gap:"0.2rem"}}>
          <div className='text'>Products</div>
          <BiChevronDown style={{cursor:"pointer"}} />
        </div>
        <div style={{display:"flex", gap:"0.2rem"}}>
          <div className='text'>Solutions</div>
          <BiChevronDown style={{cursor:"pointer"}} />
        </div>
        <div className='text'>Developers</div>
        <div style={{display:"flex", gap:"0.2rem"}}>
          <div className='text'>Resources</div>
          <BiChevronDown style={{cursor:"pointer"}} />
        </div>
        <div className='text'>Pricing</div>
        
      </div>
      <div style={{display:"flex",  gap:"1rem"}}>
        {ifSignIn &&
        <button style={{padding:"0.6rem", cursor:"pointer", color:"white", backgroundColor:"#1E90FF", borderRadius:'5px', fontWeight:'bold', border:'1px solid darkGray'}} onClick={()=> {
          setSignIn(false);
          navigate('/login')
          
        }}>Sign In</button>
}
      <button style={{padding:"0.6rem", cursor:"pointer", backgroundColor:"white", borderRadius:'5px', fontWeight:'bold', border:'1px solid darkGray'}}>Contact sales</button>
      </div>
    </div>
  )
}

export default Navbar
