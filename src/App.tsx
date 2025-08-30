import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Listen from "./Listen";
import Live from "./Live";
import Footer from "./Footer";
import Home from "./Home"; 
import Bio from "./Bio";
import Contact from "./Contact";
import "./App.css";
import ScrollTop from "./ScrollTop"; 

const App: React.FC = () => {
  return (
    <Router>
      <ScrollTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listen" element={<Listen />} />
        <Route path="/live" element={<Live />} />
        <Route path="/bio" element={<Bio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
