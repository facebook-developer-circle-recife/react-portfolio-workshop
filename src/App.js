import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import SobreMim from "./components/SobreMim/SobreMim";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar></Navbar>
        <SobreMim></SobreMim>
      </header>
    </div>
  );
}

export default App;
