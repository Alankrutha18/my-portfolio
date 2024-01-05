import React from 'react';

const Resume = () => {
  return (
    <section id="resume">
      <h2>Resume</h2>
      <p>You can download my resume by clicking the link below:</p>
      <a href="/path-to-your-resume.pdf" download="Alankrutha_Purumandla_Resume.pdf">
        Download Resume
      </a>

      <h3>Summary</h3>
      <p>
        I am a Data Analyst with over 2 years of experience in SQL, Python, and data visualization tools such as PowerBI and Tableau.
      </p>

      <h3>Key Experience</h3>
      <ul>
        <li>Senior Data Science Consultant at Hoosier Community Network</li>
        <li>Data Analyst at Residential Security Office, Northeastern University</li>
        <li>Data Scientist at Srikrupa Institute of Pharmaceutical Sciences</li>
      </ul>

      <h3>Skills</h3>
      <ul>
        <li>Programming: SQL, Python, JavaScript</li>
        <li>Data Visualization: PowerBI, Tableau</li>
        <li>Machine Learning: Scikit-Learn, TensorFlow</li>
        <li>Database Management: MySQL, PostgreSQL</li>
      </ul>
    </section>
  );
};

export default Resume;
