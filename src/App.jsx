

import { Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'




function App() {

 

  return (
    <div style={{backgroundColor:"#FFF0F5", width:"100%" , height:"100vh"}}>


      <Routes>

        <Route path={"/"} element= {<Login />} />
        

      </Routes>

 
    
      
    </div>
  )
}

export default App
