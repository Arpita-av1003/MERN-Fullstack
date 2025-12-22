import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx'; 
import "./App.css"; 
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';     
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx'; 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;