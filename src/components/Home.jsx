import React from 'react'
import main from "../assets/homepage-min.png";
import Navbar from './Navbar';

const Home = ({ifSignIn, setSignIn}) => { 
    setSignIn(true);

  return (
    <div>
      <Navbar ifSignIn={ifSignIn} setSignIn={setSignIn} />
            <img src={main} style={{ width: '100%', height: 'auto'}} alt="" />
    </div>
  )
}

export default Home
