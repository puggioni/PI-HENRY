import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/Landing";
import VideogameForm from "./components/VideogameForm";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create-videogame" element={<VideogameForm />} />
      </Routes>
    </Router>
  );
}

export default App;
