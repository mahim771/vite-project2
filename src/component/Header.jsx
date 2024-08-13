import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  useRef, useState } from 'react';
import TextForm from './component/TextForm';
import About from './component/About';
import Navbar from './component/Navbar';

 const App = () => {

  const [mode,setMode] = useState("light");

  const toggleMode = () =>
  {
    if(mode === "light")
    {
      setMode("dark");
      document.body.style.background = "#042743";

    }
    else
    {
      setMode("light");
      document.body.style.background = "white";
    }
  }
  return (
    <div>
      <Navbar title = "Textutuils" mode = {mode} toggleMode = {toggleMode}/>
      
<TextForm heading = "Enter The text to analyze Below:" mode = {mode}/>*/
     <About/>
     
      
    </div>
  );
 };
 
 export default App;

  