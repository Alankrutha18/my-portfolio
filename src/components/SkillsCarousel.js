import React from 'react';
import Slider from 'react-slick'; // Carousel component
import styled from 'styled-components';
import { FaPython, FaReact, FaNodeJs, FaDatabase, FaTable } from 'react-icons/fa'; // Icons
import { SiTableau, SiPowerbi, SiPostgresql } from 'react-icons/si';

const SkillsCarousel = () => {
  // Carousel settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768, // For tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // For mobile devices
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Tech stack data
  const skills = [
    { icon: <FaPython />, name: 'Python' },
    { icon: <FaReact />, name: 'React' },
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <FaDatabase />, name: 'SQL' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiPowerbi />, name: 'Power BI' },
    { icon: <SiTableau />, name: 'Tableau' },
    { icon: <FaTable />, name: 'Data Analysis' },
  ];

  return (
    <CarouselContainer>
      <h2>My Tech Stack</h2>
      <Slider {...settings}>
        {skills.map((skill, index) => (
          <SkillCard key={index}>
            <SkillIcon>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </Slider>
    </CarouselContainer>
  );
};

// Styled components for styling
const CarouselContainer = styled.div`
  margin: 50px 0;
  text-align: center;

  h2 {
    color: #6A0DAD;
    margin-bottom: 20px;
  }
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const SkillIcon = styled.div`
  font-size: 3rem;
  color: #6A0DAD;
`;

const SkillName = styled.p`
  margin-top: 10px;
  font-size: 1rem;
  color: #333;
`;

export default SkillsCarousel;
