import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Routes from "./constants/Routes";

function App() {
  return (
    <div>
      <Navbar />
      <Routes />
    </div>
  );
}

export default App;
