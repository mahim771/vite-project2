import React,{useState} from 'react'


const TextForm = (props) => {
  const handleUpClick = () =>
  {
    let newText = text.toUpperCase();
    setText(newText);
   
    
  }
  const handleOnChange = (event) =>
  {
    
    setText(event.target.value);
  }
   const handleLoClick = () =>
  {
     let newText = text.toLowerCase();
    setText(newText);
  }
  function handleClear()
  {
    let newText = "";
    setText(newText);
  }
const handleCopy = () =>
{
  
  navigator.clipboard.writeText(text);
 
 
}

const handleExtraSpace = () =>
{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
}
  const [text,setText] = useState("Enter Text Here: ");
    return (
       
   <>

<div className="container " style = {{color: props.mode === "light"? "black":"white"}} >
  <h1>{props.heading} </h1>
  <textarea className="form-control " value = {text} onChange={handleOnChange} style = {{backgroundColor : props.mode === "dark"? "#042743":"white", color: props.mode === "light"? "black":"white"}} id="myBox" rows="8"></textarea>

<button   disabled = {text.length === 0} className="btn btn-primary  mx-1 my-1" onClick={handleUpClick}>Convert to uppercase</button>
<button  disabled = {text.length === 0} className="btn btn-success  mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button   disabled = {text.length === 0} className="btn btn-danger  mx-1 my-1" onClick={handleClear}> ClearText</button>
<button   disabled = {text.length === 0} className="btn btn-warning  mx-1 my-1" onClick={handleCopy}> CopyText</button>
<button    disabled = {text.length === 0} className="btn btn-dark  mx-1 my-1" onClick={handleExtraSpace}>Convert to Extraspace</button>
 </div>
 <div className="container my-5" style = {{color: props.mode === "light"? "black":"white"}} >
  <h2>Your Text Summary</h2>
  <p>{text.split(/\s/).filter((element) => {return element.length !== 0}).length} words and {text.length} characters</p>
  <p>{0.08 * text.split(' ').filter((element) => {return element.length !== 0}).length}Minutes  read</p>
  <h2>Preview</h2>
  <p>{text.length >0? text: "Nothing to Preview:"}</p>
 </div>
 
 </>
 

    );
};

export default TextForm;