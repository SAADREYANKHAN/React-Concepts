import React , {useState}from 'react'



export default function TextForm(props) {

  // CONVERT TO UPPERCASE
  const handleupperCase =()=>{
    // console.log("upperCase was clicked" + text)
    let newText = text.toUpperCase()
    settext(newText);
  }

  // CONVERT TO LOWERCASE
  const handlelowerCase =()=>{
    // console.log("lowerCase was clicked" + text)
    let newText = text.toLowerCase()
    settext(newText);
  }

  // CLEAR TEXT
    const handleclearText =()=>{
    let newText = '';
    settext(newText);
  }

    // COPY TEXT
  const handlecopyText =()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  // Change background color of text area
  const handlebgColor =()=>{
    let text = document.getElementById("myBox");
    text.style.backgroundColor = "lightblue";
  }

  // back to white color
  
  const handlebgColorWhite =()=>{
    let text = document.getElementById("myBox");
    text.style.backgroundColor = "white";
  }
  // HANDLE ON CHANGE

  const handleonChange =(event) =>{
    // console.log("On Change")
    settext(event.target.value)
  }
  const [text, settext] = useState("Enter text here");
  // settext("new text useing setText");
  return (
    <>
    <div className="container">
        <h1>{props.heading}</h1>
         <div className="col-12 mb-3">
    
    <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8" style = {{backgroundColor: props.mode === 'dark' ? 'grey' : 'white', color: props.mode === 'dark' ? 'white' : '#060953'}}></textarea>
  </div>


    <button className="btn btn-primary mx-2" onClick={handleupperCase}>Convert to upperCase</button>
    <button className="btn btn-primary mx-2" onClick={handlelowerCase}>Convert to lowerCase</button>
    <button className="btn btn-primary mx-2" onClick={handleclearText}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handlecopyText}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handlebgColor}>Change Background Color</button>
    <button className="btn btn-primary mx-2" onClick={handlebgColorWhite}>Back to White</button>
</div>

    <div className="container2 my-3">
            <h1>Your text summary</h1>
            <p><strong>{text.split(" ").length} words</strong> and <strong>{text.length} characters</strong></p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length < 0 ? text : "Enter text in the textbox above to preview it here."}</p>
    </div>
    </>
      
  )
}
