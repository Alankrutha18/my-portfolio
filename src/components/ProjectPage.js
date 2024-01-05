import React from 'react';
import { useParams } from 'react-router-dom';

const ProjectPage = () => {
  const { projectId } = useParams();  // Get the project ID from the URL

  // You can define your projects here or pass them from Projects.js
  const projectData = {
    'cardio': {
      title: 'Cardiovascular Disease Prediction',
      description: 'Using machine learning to predict cardiovascular risk based on patient data.',
    },
    'image-classification': {
      title: 'Transfer Learning for Image Classification',
      description: 'Developed a model using transfer learning to classify images with 90% accuracy.',
    }
  };

  const project = projectData[projectId];  // Get the project data based on the URL

  if (!project) {
    return <h2>Project not found</h2>;  // Fallback if the project ID is not valid
  }

  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectPage;
