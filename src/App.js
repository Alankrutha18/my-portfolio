import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Project1 from './components/Project1'; // Import Project1
import Project2 from './components/Project2'; // Import Project2
import Project3 from './components/Project3'; // Import Project3
import Header from './components/Header';

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
        <Route path="/project1" element={<Project1 />} /> {/* Route for Project1 */}
        <Route path="/project2" element={<Project2 />} /> {/* Route for Project2 */}
        <Route path="/project3" element={<Project3 />} /> {/* Route for Project3 */}
      </Routes>
    </Router>
  );
};

export default App;
