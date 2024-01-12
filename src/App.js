// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode,setMode]=useState("light");
 const [alert, setAlert] = useState(null);
 const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
       setAlert(null)
    }, 1500);
 }



  const controlMode = () =>{
    if(mode==="dark"){
      setMode("light")
      document.body.style.backgroundColor = 'white'
     showAlert("Light Mode has been Enabled","success");
     document.title = "Textutil -Light Mode"
    }
    else{
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode has been Enabled","success");  
      document.title = "TextUtil -Dark Mode"
    }
  }
  
  return (
    <>
    <Router>
        <Navbar title="TextUtil" mode={mode} controlMode={controlMode} aboutText="About Us"/>
        {/* <Navbar /> */}
<Alert alert={alert}/>
<div className="container my-3">
    
    <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Analyzing Text" /> } />
    
        </Routes>
        </div>
    </Router>
</>
  );
}

export default App;
