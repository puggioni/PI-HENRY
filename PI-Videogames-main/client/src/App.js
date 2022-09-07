import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Landing from "./components/Landing/Landing";
import CreateVideogame from "./components/CreateVideogame/CreateVideogame";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-videogame" element={<CreateVideogame />} />
      </Routes>
    </Router>
  );
}

export default App;
