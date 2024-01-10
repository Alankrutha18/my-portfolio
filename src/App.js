import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Footer from './components/Footer'; // Import the Footer component
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const projectsRef = useRef(null); // Create a ref for the projects section

  const scrollToProjects = () => {
    if (projectsRef.current) {
      projectsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <Header onScrollToProjects={scrollToProjects} />
      <Routes>
        <Route path="/" element={<Home projectsRef={projectsRef} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer /> {/* Add the Footer here */}
    </Router>
  );
};

export default App;
