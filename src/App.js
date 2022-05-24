import { Routes, Route } from "react-router-dom";
import Designs from "./components/Designs";
import Setouts from "./components/Setouts";
import Home from "./components/Home";
import React from "react";

function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/designs" element={<Designs />} />
        <Route path="/setouts" element={<Setouts />} />
      </Routes>
    </>
  );
}

export default App;
