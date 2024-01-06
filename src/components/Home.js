import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import profilePhoto from '../assets/your-photo.jpg'; 
import projectImage1 from '../assets/Project1.webp'; 
import projectImage2 from '../assets/project2.png'; 
import projectImage3 from '../assets/project3.jpg'; 
import styled from 'styled-components';
import '@fontsource/poppins'; // Import the font

const Home = ({ projectsRef }) => {
    return (
      <>
        <HomeSection>
          <div className="left">
            <img src={profilePhoto} alt="Your Profile" className="profile-photo" />
          </div>
          <div className="right">
            <AnimatedHeading>Hey, this is Alankrutha Purumandla!</AnimatedHeading>
            <AnimatedParagraph>A professional passionate about crafting robust software solutions and leveraging data to drive impactful decisions.</AnimatedParagraph>
            <AnimatedParagraph>Previously worked with technologies like Python, SQL, Power BI, and Tableau, as well as software tools like React and Node.js.</AnimatedParagraph>
          </div>
        </HomeSection>
  
        <ProjectsSection ref={projectsRef}>
          <h3>My Projects</h3>
          <div className="projects-overview">
            <Link to="/project1">
              <ProjectCard>
                <img src={projectImage1} alt="Cardiovascular Disease Prediction" />
                <div className="project-info">
                  <h4>Cardiovascular Disease Prediction</h4>
                  <p>Using machine learning to predict cardiovascular risk.</p>
                </div>
              </ProjectCard>
            </Link>
            <Link to="/project2">
              <ProjectCard>
                <img src={projectImage2} alt="Image Classification" />
                <div className="project-info">
                  <h4>Transfer Learning for Image Classification</h4>
                  <p>Model to classify images with 90% accuracy.</p>
                </div>
              </ProjectCard>
            </Link>
            <Link to="/project3">
              <ProjectCard>
                <img src={projectImage3} alt="Financial Risk Modelling" />
                <div className="project-info">
                  <h4>Financial Risk Modelling</h4>
                  <p>Predictive modeling for assessing financial risks.</p>
                </div>
              </ProjectCard>
            </Link>
          </div>
        </ProjectsSection>
      </>
    );
};

// Styled Components

const HomeSection = styled.section`
  display: flex;
  padding: 100px 20px;
  min-height: 100vh;
  align-items: center;
  background-color: #f0f4f8;
  border-radius: 10px;

  .left {
    flex: 1;
    text-align: center;
  }

  .right {
    flex: 1;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .profile-photo {
    width: 90%;
    max-width: 400px;
    border-radius: 50%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    .right {
      padding-left: 0;
      text-align: center;
    }
    .profile-photo {
      width: 60%;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 480px) {
    padding: 50px 10px;
    .profile-photo {
      max-width: 150px;
    }
    .right {
      padding: 10px;
    }
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 1rem;
    }
  }
`;

// Add font-family and animations to Heading
const AnimatedHeading = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  color: #6A0DAD;
  margin-top: 0;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1.5s ease-out forwards;

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

// Animate paragraphs for smooth appearance
const AnimatedParagraph = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #333;
  opacity: 0;
  transform: translateY(10px);
  animation: fadeIn 1s ease-out forwards;
  animation-delay: 0.5s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const ProjectsSection = styled.section`
  padding: 50px 20px;
  text-align: center;

  h3 {
    margin-top: 20px;
    color: #6A0DAD;
  }

  .projects-overview {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    .projects-overview {
      flex-direction: column;
    }
  }
`;

const ProjectCard = styled.div`
  position: relative;
  width: 350px;
  height: 220px;
  overflow: hidden;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }

  .project-info {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    color: white;
    background-color: rgba(0, 0, 0, 0.8);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 10px;
    text-align: center;
  }

  h4 {
    margin: 0;
  }

  p {
    margin: 5px 0;
  }
`;

export default Home;
