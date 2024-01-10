import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = ({ onScrollToProjects }) => {
  const location = useLocation(); // Get the current URL path
  const navigate = useNavigate();  // To navigate programmatically

  const handleProjectsClick = () => {
    if (location.pathname === '/') {
      // If on the home page, scroll to projects
      onScrollToProjects();
    } else {
      // If on a different page, navigate to home and then scroll
      navigate('/');
      setTimeout(() => {
        onScrollToProjects(); // Delay to ensure navigation completes
      }, 100); // Adjust delay as necessary
    }
  };

  return (
    <Nav>
      <Logo>Alankrutha Purumandla</Logo>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        {/* Use handleProjectsClick to navigate and scroll */}
        <li><a onClick={handleProjectsClick} style={{ cursor: 'pointer', color: '#6A0DAD' }}>Projects</a></li>
        <li><a href="/RESUME_ALANKRUTHAPURUMANDLA.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </Nav>
  );
};

// Styled components remain the same

const Nav = styled.nav`
  position: fixed;           
  top: 0;
  width: 100%;
  background-color: #ffffff; 
  color: #333;               
  padding: 20px;             
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); 
  z-index: 1000;            

  display: flex;             
  justify-content: space-between; 
  align-items: center;       

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;
  }

  li {
    margin: 0 15px;         
    position: relative;      
  }

  li a {
    color: #6A0DAD;         
    text-decoration: none;
    padding: 10px 15px;     
    transition: color 0.3s ease; 
  }

  li a:hover {
    color: #007bff;         
  }

  li:hover::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: -5px;           
    height: 2px;            
    background-color: #007bff; 
    transition: all 0.3s ease;
  }
`;

const Logo = styled.h1`
  font-size: 1.8rem;       
  margin: 0;               
  color: #007bff;          
`;

export default Header;
