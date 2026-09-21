// import logo from './logo.svg';
import './App.css';
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";
import React , {useState}from 'react'


function App() {
 const [mode,setMode] = useState('light');

 const toggleMood =()=>{
  if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = '#060953';
    document.body.style.color = 'white';
  }else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    document.body.style.color = '#060953';
  }
 }
  return (
    <>
    <Navbar title = "SRK" About = "About US" mode = {mode} toggleMode={toggleMood}/>
    <div className="container">
    <TextForm heading="Enter the text to analyze" mode={mode}/>
    {/* <About /> */}
    </div>
    
    </>
  );
}

export default App;
