import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h2>Projects</h2>
      <div className="projects-list">
        <div className="project-card">
          <h3>Cardiovascular Disease Prediction</h3>
          <p>Using machine learning to predict cardiovascular risk based on patient data.</p>
          <Link to="/projects/cardio" className="btn btn-primary">View Project</Link>
        </div>
        <div className="project-card">
          <h3>Transfer Learning for Image Classification</h3>
          <p>Developed a model using transfer learning to classify images with 90% accuracy.</p>
          <Link to="/projects/image-classification" className="btn btn-primary">View Project</Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;
