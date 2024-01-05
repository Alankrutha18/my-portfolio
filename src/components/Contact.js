import React from 'react';
import styled from 'styled-components';

const Contact = () => {
  return (
    <ContactSection>
      <ContactInfo>
        <h3>Contact Information</h3>
        <p>Email: purumandla.alankrutha@gmail.com</p>
        <p>Phone: 617-637-5135</p>
      </ContactInfo>

      <SchedulingSection>
        <h2>Schedule a Call with Me</h2>
        <p>If you're interested in connecting, feel free to book a time below!</p>
        
        {/* Embedded Calendly iframe */}
        <CalendlyEmbed>
          <iframe 
            src="https://calendly.com/alankruthareddypurumandla" 
            width="100%" 
            height="600px" 
            frameBorder="0"
            title="Schedule a Call">
          </iframe>
        </CalendlyEmbed>
      </SchedulingSection>

      <SocialMedia>
        <h3>Connect with me:</h3>
        <a href="https://www.linkedin.com/in/alankruthap/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/Alankrutha18" target="_blank" rel="noopener noreferrer">GitHub</a>
      </SocialMedia>
    </ContactSection>
  );
};

// Styled Components

const ContactSection = styled.section`
  padding: 50px 20px;
  text-align: center;
  margin-top: 80px; /* Add margin to push the section down */
  background-color: #f9f9f9; /* Light background color */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const SchedulingSection = styled.div`
  margin-top: 45px; /* Pull down the heading */
`;

const ContactInfo = styled.div`
  margin-bottom: 30px; /* Space below contact info */
`;

const CalendlyEmbed = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const SocialMedia = styled.div`
  margin-top: 30px;

  a {
    margin: 0 15px;
    text-decoration: none;
    color: #6A0DAD; /* Change to your desired color */
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default Contact;
