import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterContainer>
      <p>
        © {new Date().getFullYear()} Alankrutha Purumandla. All rights reserved.
      </p>
      <SocialLinks>
        <a href="https://github.com/Alankrutha18" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/alankruthap/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href="mailto:purumandla.alankrutha@gmail.com">Email</a>
      </SocialLinks>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #f0f4f8;
  color: #333;
  border-top: 1px solid #ddd;

  p {
    margin: 0;
    font-size: 0.9rem;
  }
`;

const SocialLinks = styled.div`
  margin-top: 10px;

  a {
    margin: 0 10px;
    text-decoration: none;
    color: #6A0DAD;
    font-size: 0.9rem;

    &:hover {
      color: #007bff;
    }
  }
`;

export default Footer;
