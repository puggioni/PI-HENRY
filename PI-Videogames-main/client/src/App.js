import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import VideogameDetail from "./components/VideogameDetail/VideogameDetail";
import CreateVideogame from "./components/CreateVideogame/CreateVideogame";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/videogames" element={<Home />} />
        <Route path="/videogame/:id" element={<VideogameDetail />} />
        <Route path="/videogame" element={<CreateVideogame />} />
      </Routes>
    </Router>
  );
}

export default App;
