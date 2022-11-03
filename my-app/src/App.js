import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./Components/Home";
import Work from "./Components/Work";
import Navbar from "./Components/Navbar";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import Clubs from "./Components/Clubs";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/clubs" element={<Clubs />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
