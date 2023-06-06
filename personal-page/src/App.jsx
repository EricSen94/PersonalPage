import "./App.css";
import React, { useState, useEffect } from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Experiences from "./components/experiences/Experiences";
import NavBar from "./components/navBar/NavBar";
import Presentation from "./components/presentation/Presentation";

function App() {

  const [showFirst, setShowFirst] = useState(true);
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowFirst(!showFirst);
    }, 3000);
    return () => clearTimeout(timeoutId);
  }, []);
  return (
    <div className="app">
      <div className={`presentation ${showFirst ? 'fade-in' : 'fade-out'}`}>
        {showFirst && <Presentation />}
      </div>
      <div className={`main ${showFirst ? 'fade-out' : 'fade-in'}`}>
        {!showFirst && (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />}/>
              <Route path="/experience" element={<Experiences />} />
            </Routes>
          </>
        )}
      </div>
    </div>
    /*
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/experience" element={<Experiences />} />
      </Routes>
    </>
    */
  );

}

export default App;
