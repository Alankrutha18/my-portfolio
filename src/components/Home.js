import React from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import profilePhoto from '../assets/your-photo.jpg'; 
import projectImage1 from '../assets/Project1.webp'; 
import projectImage2 from '../assets/project2.png'; 
import projectImage3 from '../assets/project3.jpg'; 
import projectImage4 from '../assets/project4.png';
import projectImage5 from '../assets/project5.webp';

import styled from 'styled-components';
import '@fontsource/poppins'; // Import the font

const Home = ({ projectsRef }) => {
  return (
    <>
      <HomeSection
        as={motion.div}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
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
        <motion.h3
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h3>
        <div className="projects-overview">
          {[ // Project cards
            {
              title: 'Cardiovascular Disease Prediction',
              description: 'Using machine learning to predict cardiovascular risk.',
              image: projectImage1,
              link: 'https://github.com/Alankrutha18/cardivascular_disease_risk_predictionn'
            },
            {
              title: 'Transfer Learning for Image Classification',
              description: 'Model to classify images with 90% accuracy.',
              image: projectImage2,
              link: 'https://github.com/Alankrutha18/Transfer_learning-for_Image_Clasification'
            },
            {
              title: 'Financial Risk Modelling',
              description: 'Predictive modeling for assessing financial risks.',
              image: projectImage3,
              link: 'https://github.com/Alankrutha18/financial-risk-modelling'
            },
            {
              title: 'Sentiment Analysis',
              description: 'Using NLP to analyze customer sentiments.',
              image: projectImage4, // Replace with your actual image path
              link: 'https://github.com/Alankrutha18/sentiment-analysis',
            },
            {
              title: 'E-Commerce Dashboard',
              description: 'Interactive dashboard for sales insights.',
              image: projectImage5, // Replace with your actual image path
              link: 'https://github.com/Alankrutha18/ecommerce-dashboard',
            }
          ].map((project, index) => (
            <motion.a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <ProjectCard>
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
              </ProjectCard>
            </motion.a>
          ))}
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

const AnimatedHeading = styled.h1`
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  color: #6A0DAD;
`;

const AnimatedParagraph = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #333;
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
