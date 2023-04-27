import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import Experiences from "./components/experiences/Experiences";
import NavBar from "./components/navBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experience" element={<Experiences />} />
      </Routes>
    </>
  );
}

export default App;
