import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import { Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog/Blog";
import GirlFinds from "./pages/Girlfinds/GirlFinds";
import Beauty from "./pages/Beauty/Beauty";
import Skincare from "./pages/Skincare/Skincare";
import Crochet from "./pages/Crochet/Crochet";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/girly_finds" element={<GirlFinds />} />
        <Route path="/blog" element={<Blog />}/>
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/crochet" element={<Crochet />} />
        <Route path="/skincare" element={<Skincare />} />
      </Routes>
    </Router>
  );
}

export default App;