import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Header = ({ onScrollToProjects }) => {
  const [menuOpen, setMenuOpen] = useState(false); // State to toggle menu
  const location = useLocation(); // Get the current URL path
  const navigate = useNavigate(); // To navigate programmatically

  const handleProjectsClick = () => {
    if (location.pathname === '/') {
      onScrollToProjects();
    } else {
      navigate('/');
      setTimeout(() => {
        onScrollToProjects();
      }, 100);
    }
    setMenuOpen(false); // Close menu on mobile after clicking
  };

  return (
    <Nav>
      <Logo>Alankrutha Purumandla</Logo>
      <MenuIcon onClick={() => setMenuOpen(!menuOpen)}>☰</MenuIcon>
      <Menu isOpen={menuOpen}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li>
          <a
            onClick={handleProjectsClick}
            style={{ cursor: 'pointer', color: '#6A0DAD' }}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="/RESUME_ALANKRUTHAPURUMANDLA.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
          >
            Resume
          </a>
        </li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
      </Menu>
    </Nav>
  );
};

// Styled Components
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
`;

const Logo = styled.h1`
  font-size: 1.8rem;
  margin: 0;
  color: #007bff;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const MenuIcon = styled.div`
  font-size: 2rem;
  cursor: pointer;
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;

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

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #ffffff;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    width: 100%;
    padding: 20px;
    display: ${(props) => (props.isOpen ? 'block' : 'none')};

    li {
      margin: 10px 0;
    }
  }
`;

export default Header;
