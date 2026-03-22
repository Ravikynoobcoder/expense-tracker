import React from 'react';
import "./App.css";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from './Pages/Auth/Login';
import Register from './Pages/Auth/Register';
// App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import SetAvatar from './Pages/Avatar/setAvatar';
import Prism from './Prism';




const App = () => {
  return (
    
<div style={{ position: "relative", minHeight: "100vh" ,}}>

  {/* 🔥 Background */}
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      zIndex: -1,
    }}
  >
     <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100vh",
      background: "rgb(0, 0, 0)", // 👈 adjust this
      zIndex: -1,
    }}
  />
    <Prism
      animationType="rotate"
      timeScale={0.5}
      height={3.5}
      baseWidth={5.5}
      scale={3.6}
      hueShift={0}
      colorFrequency={1}
      
      noise={0}
      glow={1}
    />
  </div>
 

  {/* 🌐 App */}
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/setAvatar" element={<SetAvatar />} />
    </Routes>
  </BrowserRouter>

</div>
  )
}

export default App