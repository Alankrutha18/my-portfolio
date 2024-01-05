import React from 'react';
import styled from 'styled-components';
import myPhoto from '../assets/my-photo.jpg'; // Your profile photo
import foodImage1 from '../assets/food1.jpg'; // Food images
import foodImage2 from '../assets/food2.jpg';
import foodImage3 from '../assets/food3.jpg';
import foodImage4 from '../assets/food4.jpg';
import foodImage5 from '../assets/food5.jpg';

const About = () => {
  return (
    <AboutSection>
      <div className="content">
        <div className="info">
          <AnimatedHeading>About Me</AnimatedHeading>
          <AnimatedParagraph>
            👋🏽 Hi, I’m Alankrutha Reddy Purumandla, a Data Analyst originally from India. I moved to the U.S. two years ago to pursue my Master’s at Northeastern University in Boston.
          </AnimatedParagraph>
          <AnimatedParagraph>
            📊 I’m passionate about using data to drive meaningful insights and improve decision-making. Through internships and personal projects, I’ve been honing my skills and tackling real-world challenges.
          </AnimatedParagraph>
          <AnimatedParagraph>
            💃🏽 When I’m not analyzing data, you can find me dancing classical styles or playing volleyball.
          </AnimatedParagraph>
          <AnimatedParagraph>
            ✨ I love blending my creative side with analytics and always enjoy a good challenge—whether on the court or in front of my computer!
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
        <AnimatedHeading>Fun Fact: My Cooking Skills Are Almost as Sharp as My Data Analysis!</AnimatedHeading>
      </FunFactSection>

      {/* Cooking Photos Section */}
      <CookingPhotos>
        <FoodImage src={foodImage1} alt="Food 1" />
        <FoodImage src={foodImage2} alt="Food 2" />
        <FoodImage src={foodImage3} alt="Food 3" />
        <FoodImage src={foodImage4} alt="Food 4" />
        <FoodImage src={foodImage5} alt="Food 5" />
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
    }
  }
`;

const AnimatedHeading = styled.h2`
  font-family: 'Poppins', sans-serif;
  color: #6A0DAD;
  font-size: 2.5rem;
  opacity: 0;
  animation: fadeIn 1.5s ease forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const AnimatedParagraph = styled.p`
  font-family: 'Poppins', sans-serif;
  color: #333;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
  animation-delay: 0.5s;
  margin-bottom: 10px;

  @keyframes fadeInUp {
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
    font-size: 1rem;
  }
`;

const ProfileImage = styled.img`
  max-width: 80%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
`;

const FunFactSection = styled.div`
  text-align: center;
  margin-top: 40px;

  h2 {
    color: #6A0DAD;
  }
`;

const CookingPhotos = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 15px;
  margin-top: 20px;
`;

const FoodImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
  }
`;

export default About;
