import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {  useRef, useState } from 'react';
import TextForm from './component/TextForm';
import About from './component/About';
import Navbar from './component/Navbar';


 const App = () => {

  const [mode,setMode] = useState("dark");

  
 const removeBodyClass = () =>
 {
  document.body.classList.remove('bg-danger');
  document.body.classList.remove('bg-warning');
  document.body.classList.remove('bg-success');
  document.body.classList.remove('bg-primary');
 }
 

  const toggleMode = (cls) =>
    
  {
    removeBodyClass();
    document.body.classList.add("bg-"+cls)
   
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
      
      
    <Navbar title = "Mahim" mode = {mode} toggleMode = {toggleMode}/>
<TextForm  className = "mb-4 my-4" heading = " Try Textutils  - word counter character counter remove extra spaces :" mode = {mode}/>
<About mode = {mode}/>

   
     
      
    </div>
  );
 };
 
 export default App;

  