import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  return (
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/projects" element={<Projects />}></Route>
    </Routes>
  </BrowserRouter>
    )
}

export default App;
