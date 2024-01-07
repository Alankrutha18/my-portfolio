import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <ProjectsSection>
      <h2>Projects</h2>
      <div className="projects-list">
        <ProjectCard>
          <h3>Cardiovascular Disease Prediction</h3>
          <p>Using machine learning to predict cardiovascular risk based on patient data.</p>
          <a 
            href="https://github.com/Alankrutha18/cardio-prediction" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            View on GitHub
          </a>
        </ProjectCard>
        <ProjectCard>
          <h3>Transfer Learning for Image Classification</h3>
          <p>Developed a model using transfer learning to classify images with 90% accuracy.</p>
          <a 
            href="https://github.com/Alankrutha18/Transfer_learning-for_Image_Clasification" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-primary"
          >
            View on GitHub
          </a>
        </ProjectCard>
      </div>
    </ProjectsSection>
  );
};

// Styled Components

const ProjectsSection = styled.div`
  padding: 50px;
  text-align: center;
`;

const ProjectCard = styled.div`
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: left;

  h3 {
    margin-bottom: 10px;
    color: #6A0DAD;
  }

  p {
    margin-bottom: 15px;
  }

  a {
    color: #007bff;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.3s;

    &:hover {
      color: #0056b3;
    }
  }
`;

export default Projects;
