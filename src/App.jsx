
import { useState } from 'react'
import './App.css'
import { Search } from './components/Search'
import { ImageList } from './components/ImageList';


function App() {

  const [result, setResult] = useState([]);
  // if(result.length < 1){

  // }

  return (
    <div style={{backgroundColor:"#FFF0F5", width:"100vw" , height:"100vh"}}>
      <Search setResult={setResult} />
      <ImageList result={result} />
    </div>
  )
}

export default App
