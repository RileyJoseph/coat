import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Listen from "./Listen";
import Live from "./Live";
import Footer from "./Footer";
import Home from "./Home"; 
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/listen" element={<Listen />} />
        <Route path="/live" element={<Live />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
