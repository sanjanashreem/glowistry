import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GirlFinds from "./pages/GirlFinds";
import Beauty from "./pages/Beauty";
import Skincare from "./pages/Skincare";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/girly_finds" element={<GirlFinds />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/skincare" element={<Skincare />} />
      </Routes>
    </Router>
  );
}

export default App;