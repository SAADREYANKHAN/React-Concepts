import React , {useState}from 'react'


export default function TextForm(props) {

  const handleupperCase =()=>{
    // console.log("upperCase was clicked" + text)
    let newText = text.toUpperCase()
    settext(newText);
  }

  const handleonChange =(event) =>{
    // console.log("On Change")
    settext(event.target.value)
  }
  const [text, settext] = useState("Enter text here");
  // settext("new text useing setText");
  return (
      <div>
        <h1>{props.heading}</h1>
         <div className="col-12 mb-3">
    
    <textarea className="form-control" value={text} onChange={handleonChange} id="myBox" rows="8"></textarea>
  </div>

    <button className="btn btn-primary" onClick={handleupperCase}>Convert to upperCase</button>

</div>
      
  )
}
