import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import Navbar from './components/Navbar'
import { useState } from 'react'


function App() {

  const [ifSignIn, setSignIn]= useState(false);
  return (

    <div className='app' style={{backgroundColor:"#FFF0F5", width:"100%" , height:"100vh"}}>

      <Routes>
        <Route path={"/"} element= {<Home ifSignIn={ifSignIn} setSignIn={setSignIn} />} />
        <Route path={"/login"} element= {<Login ifSignIn={ifSignIn} setSignIn={setSignIn} />} />
        <Route path={"/dashboard"} element= {<Dashboard title='Dashboard' />} />
        <Route path={"/dashboard/Insights"} element= {<Dashboard title='Insigts' />} />
        <Route path={"/dashboard/Contacts"} element= {<Dashboard title='Contacts' />} />
        <Route path={"/dashboard/PriorityReport"} element= {<Dashboard title='Priority Reports' />} />
        <Route path={"/dashboard/Channels"} element= {<Dashboard title='Channels' />} />
        <Route path={"/dashboard/BuildFlow"} element= {<Dashboard title='Build Flow' />} />
        <Route path={"/dashboard/DesignAudit"} element= {<Dashboard title='Design Audit' />} />
        <Route path={"/dashboard/Integrations"} element= {<Dashboard title='Integrations' />} />
        <Route path={"/dashboard/KnowledgeBase"} element= {<Dashboard title='Knowledge Base' />} />
        
        

      </Routes>



 
    
      
    </div>

  )
}

export default App
