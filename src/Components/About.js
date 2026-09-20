import React , {useState}from 'react'

export default function About() {

  const[MyStyle,setMyStyle] = useState( {
    color : 'white',
    backgroundColor : 'black'
  })    
 
const[btntext,setBtnText] = useState("Enable Light Mood")
  // toggleStyle
  const toggleStyle =()=>{
    if(MyStyle.color === 'black'){
      setMyStyle({
        color : 'white',
        backgroundColor : 'black',
      border : '1px solid white'
      })
      setBtnText("Enable Light Mood")
    }else{
      setMyStyle({
        color : 'black',
        backgroundColor : 'white'
     
      })
      setBtnText("Enable Dark Mood")
    }
  }
  return (
    <>
    <div className='container my-4' style={MyStyle}>
      <h1 >About Us</h1>
        <div className="accordion" id="accordionExample" style={MyStyle}> 
  <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header" style={MyStyle}>
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={MyStyle}>
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={MyStyle}>
      <div className="accordion-body" style={MyStyle}>
        <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header" style={MyStyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapMywo" aria-expanded="false" aria-controls="collapMywo" style={MyStyle}>
        Accordion Item #2
      </button>
    </h2>
    <div id="collapMywo" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={MyStyle}>
      <div className="accordion-body" style={MyStyle}>
        <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div className="accordion-item" style={MyStyle}>
    <h2 className="accordion-header" style={MyStyle}>
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapMyhree" aria-expanded="false" aria-controls="collapMyhree" style={MyStyle}>
        Accordion Item #3
      </button>
    </h2>
    <div id="collapMyhree" className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={MyStyle}>
      <div className="accordion-body" style={MyStyle}>
        <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
    <div className="container my-3">
      <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
    </div>
    </div>
</>
  )
}
