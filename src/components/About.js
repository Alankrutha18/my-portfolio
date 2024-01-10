import React from 'react';
import styled from 'styled-components';
import myPhoto from '../assets/my-photo.jpg'; // Your profile photo
import foodImage1 from '../assets/food1.jpg'; // Food images
import foodImage2 from '../assets/food2.jpg';
import foodImage3 from '../assets/food3.jpg';
import foodImage4 from '../assets/food4.jpg';

const About = () => {
  return (
    <AboutSection>
      <div className="content">
        <div className="info">
          <AnimatedHeading>About Me</AnimatedHeading>
          <AnimatedParagraph>
            👋🏽 Hi, I’m Alankrutha Reddy Purumandla, a professional with expertise in both Data Analytics and Software Engineering. Originally from India, I moved to the U.S. to pursue my Master’s at Northeastern University in Boston.
          </AnimatedParagraph>
          <AnimatedParagraph>
            📊 I’m passionate about leveraging data and technology to solve complex problems and create impactful solutions. From analyzing datasets to uncover actionable insights to building robust applications, I enjoy tackling challenges that blend creativity and technical skills.
          </AnimatedParagraph>
          <AnimatedParagraph>
            💃🏽 When I’m not immersed in code or data, you can find me dancing classical styles or playing volleyball.
          </AnimatedParagraph>
          <AnimatedParagraph>
            ✨ I thrive on combining innovation and precision, whether I’m designing scalable applications, analyzing intricate datasets, or taking on a friendly competition on the court.
          </AnimatedParagraph>
          <AnimatedParagraph>
            🍳 Cooking is one of my greatest passions! I love experimenting with flavors and exploring different cuisines, whether it’s whipping up a comforting Indian curry or trying out new recipes from around the world.
          </AnimatedParagraph>
        </div>
        <div className="image">
          <ProfileImage src={myPhoto} alt="Alankrutha Reddy Purumandla" />
        </div>
      </div>

      {/* Fun Fact Section Below the Image */}
      <FunFactSection>
        <AnimatedHeading>
          Fun Fact: My Cooking Skills Are as thoughtfully crafted as the Code I Write!
        </AnimatedHeading>
      </FunFactSection>

      {/* Cooking Photos Section */}
      <CookingPhotos>
        <FoodImage src={foodImage1} alt="Food 1" />
        <FoodImage src={foodImage2} alt="Food 2" />
        <FoodImage src={foodImage3} alt="Food 3" />
        <FoodImage src={foodImage4} alt="Food 4" />
      </CookingPhotos>
    </AboutSection>
  );
};

// Styled Components
const AboutSection = styled.section`
  padding: 50px 20px;

  .content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .info {
    flex: 2;
    padding-right: 20px;
    text-align: left;
    font-family: 'Poppins', sans-serif;
  }

  .image {
    flex: 1;
    text-align: center;
    max-width: 300px;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .content {
      flex-direction: column;
    }

    .info {
      text-align: center;
      padding-right: 0;
    }

    .image {
      margin-top: 20px;
      max-width: 80%;
    }
  }
`;

const AnimatedHeading = styled.h2`
  font-family: 'Poppins', sans-serif;
  color: #6a0dad;
  font-size: 2.5rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AnimatedParagraph = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 300px;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 768px) {
    max-width: 80%;
  }
`;

const FunFactSection = styled.div`
  text-align: center;
  margin-top: 40px;

  h2 {
    color: #6a0dad;
    font-size: 1.8rem;
  }
`;

const CookingPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); /* Adjusted for larger images */
  gap: 25px; /* Increased spacing between images */
  margin-top: 20px;
`;

const FoodImage = styled.img`
  width: 100%;
  height: 350px; /* Ensures larger images */
  border-radius: 10px;
  object-fit: cover; /* Ensures images maintain aspect ratio while filling the container */
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export default About;
