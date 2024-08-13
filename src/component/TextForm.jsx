import React,{useState} from 'react'


const TextForm = (props) => {
  const handleUpClick = () =>
  {
    console.log("UpperCase"+ text)
    let newText = text.toUpperCase();
    setText(newText);
   
    
  }
  const handleOnChange = (event) =>
  {
    console.log("onchange");
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
  let text = document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
}

const handleExtraSpace = () =>
{
   let newText = text.split(/[ ]+/);
   setText(newText.join(" "));
}
  const [text,setText] = useState("Enter Text Here: ");
    return (
       
   <>

<div className="container" style = {{color: props.mode === "light"? "black":"white"}} >
  <h1>{props.heading} </h1>
  <textarea className="form-control" value = {text} onChange={handleOnChange} style = {{backgroundColor : props.mode === "dark"? "#042743":"white", color: props.mode === "light"? "black":"white"}} id="myBox" rows="8"></textarea>

<button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to uppercase</button>
<button className="btn btn-success my-7" onClick={handleLoClick}>Convert to Lowercase</button>
<button className="btn btn-primary my-11" onClick={handleClear}>Convert to ClearText</button>
<button className="btn btn-success my-15" onClick={handleCopy}>Convert to CopyText</button>
<button className="btn btn-primary my-18" onClick={handleExtraSpace}>Convert to Extraspace</button>
 </div>
 <div className="container my-5" style = {{color: props.mode === "light"? "black":"white"}} >
  <h2>Your Text Summary</h2>
  <p>{text.split(' ').length} words and {text.length} characters</p>
  <p>{0.08*text.split(' ').length}Minutes  read</p>
  <h2>Preview</h2>
  <p>{text.length >0? text: "Enter something in the textbook to preview it here:"}</p>
 </div>
 
 </>
 

    );
};

export default TextForm;