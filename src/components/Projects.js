import React from 'react';
import styled from 'styled-components';

const Projects = () => {
  return (
    <ProjectsSection>
      <h2>Projects</h2>
      <ProjectList>
        <ProjectCard>
          <h3>Cardiovascular Disease Prediction</h3>
          <p>Using machine learning to predict cardiovascular risk based on patient data.</p>
          <a 
            href="https://github.com/Alankrutha18/cardivascular_disease_risk_predictionn" 
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
            // className="btn btn-primary"
          >
            View on GitHub
          </a>
          
        </ProjectCard>
      </ProjectList>
    </ProjectsSection>
  );
};

// Styled Components

const ProjectsSection = styled.div`
  padding: 50px;
  text-align: center;
`;

const ProjectList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ProjectCard = styled.div`
  width: 300px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;

  h3 {
    margin-bottom: 10px;
    color: #6A0DAD;
  }

  p {
    margin-bottom: 15px;
  }

  a {
    display: inline-block;
    padding: 10px 15px;
    color: #fff;
    background-color: #6A0DAD;
    border-radius: 5px;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: #5a0b9c;
    }
  }
`;

export default Projects;
