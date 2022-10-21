import "./App.css";
import "./Style/Header.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";
import Creations from "./Pages/Creations";
import Parcours from "./Pages/Parcours";

function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/creations" element={<Creations />} />
          <Route path="parcours" element={<Parcours />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
