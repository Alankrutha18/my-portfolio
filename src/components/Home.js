import React from 'react';
import profilePhoto from '../assets/your-photo.jpg';
import projectImage1 from '../assets/Project1.webp';
import projectImage2 from '../assets/project2.png';
import projectImage3 from '../assets/project3.jpg';
import projectImage4 from '../assets/project4.png';
import projectImage5 from '../assets/project5.webp';
import '@fontsource/poppins'; // Import custom font
import './Home.css'; // Add custom styles here if needed

const Home = ({ projectsRef }) => {
  return (
    <>
      {/* Hero Section */}
      <div className="container py-5 mt-5">
        <div className="row align-items-center">
          {/* Profile Photo */}
          <div className="col-md-6 text-center mb-4 mb-md-0">
            <img
              src={profilePhoto}
              alt="Your Profile"
              className="img-fluid rounded-circle shadow"
              style={{ maxWidth: '300px' }}
            />
          </div>
          {/* Text Section */}
          <div className="col-md-6">
            <h1 className="mb-3 text-primary">Hey, this is Alankrutha Purumandla!</h1>
            <p>
              A professional passionate about crafting robust software solutions
              and leveraging data to drive impactful decisions.
            </p>
            <p>
              Previously worked with technologies like Python, SQL, Power BI,
              and Tableau, as well as software tools like React and Node.js.
            </p>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div ref={projectsRef} className="container py-5">
        <h3 className="text-center text-primary mb-4">My Projects</h3>
        <div className="row">
          {[
            {
              title: 'Cardiovascular Disease Prediction',
              description: 'Using machine learning to predict cardiovascular risk.',
              image: projectImage1,
              link: 'https://github.com/Alankrutha18/cardivascular_disease_risk_predictionn',
            },
            {
              title: 'Transfer Learning for Image Classification',
              description: 'Model to classify images with 90% accuracy.',
              image: projectImage2,
              link: 'https://github.com/Alankrutha18/Transfer_learning-for_Image_Clasification',
            },
            {
              title: 'Financial Risk Modelling',
              description: 'Predictive modeling for assessing financial risks.',
              image: projectImage3,
              link: 'https://github.com/Alankrutha18/financial-risk-modelling',
            },
            {
              title: 'Sentiment Analysis',
              description: 'Using NLP to analyze customer sentiments.',
              image: projectImage4,
              link: 'https://github.com/Alankrutha18/sentiment-analysis',
            },
            {
              title: 'E-Commerce Dashboard',
              description: 'Interactive dashboard for sales insights.',
              image: projectImage5,
              link: 'https://github.com/Alankrutha18/ecommerce-dashboard',
            },
          ].map((project, index) => (
            <div key={index} className="col-12 col-sm-6 col-lg-4 mb-4 d-flex align-items-stretch">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="card shadow h-100">
                  <img src={project.image} alt={project.title} className="card-img-top" />
                  <div className="card-body">
                    <h5 className="card-title text-primary">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
