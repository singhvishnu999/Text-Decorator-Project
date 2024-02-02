import { useState } from 'react';
import './App.css';
import Navbar from './component/Navbar.js'
import Textform from './component/Textform.js'

function App() {
  const [mode, setmode] = useState('dark');
  let toggleDarkMode = () => {
    if(mode==="light"){
        setmode('dark');
        document.body.style.backgroundColor = "rgb(50 61 72)";
      }
  
      else{
        setmode('light');
        document.body.style.backgroundColor = "white";
      }
  }

  return (
    <>
    <Navbar mode = {mode} enbDarkMode = {toggleDarkMode} />
    <div className='container' my = '4'>
    <Textform heading = "This is your text dcorater website" mode = {mode}/>
    </div>
 
    </>
  );
}

export default App;
